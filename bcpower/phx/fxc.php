<?php
class fxc
{

    function cacheclear(){
        setlocale(LC_MONETARY, 'en_US');
        header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    }

    public $link;
    public function __construct(){
        $this->link = new mysqli('localhost', 'eman3617_skmus', '3m1n2020#', 'eman3617_skm');
        $this->link->set_charset("utf8");
    }

    //Insert DB
    public function bcinsert($tabla, $datos){
        $rs=$this->link->query("INSERT INTO $tabla VALUES (null,$datos)") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }
    //Del DB
    public function bcdel($tabla, $condicion){
        $rs=$this->link->query("DELETE FROM $tabla WHERE $condicion") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }
    //Update DB
    public function bcupdate($tabla, $campos, $condicion){
        $rs=$this->link->query("UPDATE $tabla SET $campos WHERE $condicion") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }
    //Search DB
    public function bcsearch($tabla, $condicion){
        $rs=$this->link->query("SELECT * FROM $tabla WHERE $condicion") or die($this->link->error);
        if($rs)
            return $rs->fetch_all(MYSQLI_ASSOC);
        return false;
    }

    public function bcsearchone($tabla,$subquery, $condicion){
        $rs= $this->link->query("SELECT $subquery FROM $tabla WHERE $condicion") or die($this->link->error);
        $rs->data_seek(0);
        return $rs->fetch_assoc();

    }

    public function bcsearchtwo($tabla,$subquery ,$condicion){
        $rs=$this->link->query("SELECT $subquery FROM $tabla WHERE $condicion");
        $bc=array();
        while ($c=$rs->fetch_assoc()){
            $bc[] = $c;
        }
        return $bc;
    }

    public function bcsearchtree($tabla,$subquery ,$condicion){
        $rs=$this->link->query("SELECT $subquery FROM $tabla WHERE $condicion");
        $rs->data_seek(0);
        return $rs;
    }

    public function shark($tabla,$condicion,$cmp){
        $fxc = new fxc();
        $rs=$this->link->query("SELECT * FROM $tabla WHERE $condicion");
        $rs->data_seek(0);
        while ($c=$rs->fetch_assoc()){

            $fsa=substr($c['fsal'], 0, 10);
            $date=substr($c['fecha'], 0, 10);

            if($fsa!=$date){
                $fxc->bcinsert("alertcore","'Registro de Salida'," . $c['idv'] . ",NOW(),1,0,".$c['cmp']);
                $fxc->bcupdate("visitcore","shk=1","idv=".$c['idv']);
            }

            if($c['tmp'] >37){
                $fxc->bcinsert("alertcore","'Alerta de Temperatura'," . $c['idv'] . ",NOW(),1,0,".$c['cmp']);
                $fxc->bcupdate("visitcore","shk=1","idv=".$c['idv']);
            }

            if($c['wd'] ==2){
                $fxc->bcinsert("alertcore","'Alerta de Acceso'," . $c['idv'] . ",NOW(),1,0,".$c['cmp']);
                $fxc->bcupdate("visitcore","shk=1","idv=".$c['idv']);
            }
            $fxc->bcupdate("visitcore","shk=2","idv=".$c['idv']);


        }

        return $fxc->bcsearchone("alertcore"," count(id) as q ","cmp=". $cmp." and status=1" );



    }

    function bccore($v,$a,$b,$c,$d){
        $fxc = new fxc();

        if($v==0){
            return $fxc->bcdel("loginstatus","ids='".$_SESSION['us']."'");
        }

        if($v==1){

            $ip = $_SERVER["REMOTE_ADDR"];
            $b=md5($b);

            $fxc->bcdel("loginstatus","us='".$a."'");
            $bc=$fxc->bcsearchone("webuser","*","us='".$a."' and ps='".$b."' and status=1");
            if(!empty($bc['nm'])) {
                $_SESSION['us'] = md5($bc['nm'] . $bc['us']);
                $fxc->bcinsert("loginstatus","'" . $a . "','" . $ip . "',NOW(),'" . $_SESSION['us'] . "',1");
            }

            return $bc;

        }

        if($v==2){

            if($b=='visitas') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("visitcore a join imgcore i on a.idv = i.idv", "a.*,i.path", "a.cmp='" . $bca['cmp'] . "' order by a.fecha desc");
                return  $bc;
            }

            if($b=='visitantes') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("visituser", "*", "cmp='" . $bca['cmp'] . "'");
                return  $bc;
            }

            if($b=='alertas') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("alertcore a join visitcore i on a.idv = i.idv", "a.*,i.nm,i.emp,i.fecha as vfch", "a.cmp='" . $bca['cmp'] . "' and a.status=1");
                return  $bc;
            }

            if($b=='usuarios') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("webuser", "*", "cmp='" . $bca['cmp'] . "'");
                return  $bc;
            }

            if($b=='locations') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("ubicaciones a", "a.*,(SELECT count(id) FROM visitcore WHERE loc=a.nloc) as qloc", "a.cmp='" . $bca['cmp'] . "'");
                return  $bc;
            }

            if($b=='dvc') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("dvccore", "*", "cmp='" . $bca['cmp'] . "'");
                return  $bc;
            }

        }

        if($v==3){
            if($a=='visitas') {
                return $fxc->bcsearchone("visitcore", "*","id='" . $b . "'");
            }
            if($a=='fotodoc') {
                return $fxc->bcsearchone("imgcore", "*","idv='" . $b . "' and tp=".$c);
            }
            if($a=='app-cmp') {
                return $fxc->bcsearchone("company", "*","cmp=" . $b);
            }
        }

        if($v==4){
            if($a=='visitas') {
                return $fxc->bcsearchtree("visitcore","*", "nm='" . $b . "' and ced='".$c."' order by id desc");
            }
            if($a=='alertas') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                return $fxc->bcsearchtree("alertcore","count(id) as q, ta as item", "cmp=".$bca['cmp']." and status=1 group by ta");
            }
            if($a=='app-ubicaciones') {
                return $fxc->bcsearchtree("ubicaciones","*", "cmp=".$b);
            }
        }

        if($v==5){
            if($b=='visitantes') {
                return $fxc->bcdel("visituser", "id='" .$c."'");
            }
            if($b=='usuarios') {
                return $fxc->bcdel("webuser", "id='" .$c."'");
            }
            if($b=='locations') {
                return $fxc->bcdel("ubicaciones", "id='" .$c."'");
            }
        }

        if($v==6){

            if($a=='autorizacion') {
                return $fxc->bcupdate("visituser","wd=".$b,"id=".$c);
            }
            if($a=='alarma') {
                return $fxc->bcupdate("alertcore","status=".$b,"id=".$c);
            }
        }

        if($v==50){

            if($d=='crear-usuario') {
                $c=md5($c);
                $s= md5($a . $b);
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                return $fxc->bcinsert("webuser"," '".$b."','" . $c . "','".$a."',1,'".$s."',1,NOW(),".$bca['cmp'].",1");
            }

            if($d=='crear-loc') {
                $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
                return $fxc->bcinsert("ubicaciones"," '".$a."','" . $b . "','".$b."',1,".$bca['cmp']);
            }

            if($d=='app-dev') {
                $bc = $fxc->bcsearchone("ubicaciones", "*", "cmp=" . $c . " and nloc='" . $a . "'");
                return $fxc->bcinsert("dvccore", " '" . $b . "','" . $a . "',NOW()," . $bc['ga'] . "," . $bc['gb'] . ",1,1,1," . $c . ",1");
            }
        }

        if($v==1000){

            $bc=$fxc->bcsearchone("loginstatus","*","ids='".$_SESSION['us']."'");
            return $bc['ids'];

        }

        if($v==1001){
            $bca=$fxc->bcsearchone("webuser","*","ids='" . $_SESSION['us'] . "'");
            $bc=$fxc->shark("visitcore","cmp=".$bca['cmp']." and shk=0",$bca['cmp']);
            return $bc['q'];
        }


        if($v==2000){

            $bc=$fxc->bcsearchone("dvccore","*","idu='".$a."'");
            return $bc['idu'];

        }


    }

    function bccoreiv($v,$a,$b,$c,$d,$e,$f,$g,$h){

        $track=time();

        $fxc = new fxc();
        $bc = $fxc->bcsearchone("dvccore", "*", "idu='" . $g . "'");

        $fxc->bcimgin($_POST['nm'],$_POST['fbio'],$track);
        $fbio=str_replace(' ', '', $_POST['nm']);
        $fbio=$track.$fbio.'.jpg';
        $fxc->bcinsert("imgcore", " '" . $fbio . "',3," . $track . "," . $bc['cmp']);

        $fxc->bcimgin($_POST['nm'],$_POST['ftmp'],$track);
        $ftmp=str_replace(' ', '', $_POST['nm']);
        $ftmp=$track.$ftmp.'.jpg';
        $fxc->bcinsert("imgcore", " '" . $ftmp . "',2," . $track . "," . $bc['cmp']);

        $fxc->bcimgin($_POST['nm'],$_POST['fdoc'],$track);
        $fdoc=str_replace(' ', '', $_POST['nm']);
        $fdoc=$track.$ftmp.'.jpg';
        $fxc->bcinsert("imgcore", " '" . $fdoc . "',1," . $track . "," . $bc['cmp']);


        return $fxc->bcinsert("dvccore", " '" . $b . "','" . $a . "',NOW()," . $bc['ga'] . "," . $bc['gb'] . ",1,1,1," . $c . ",1");
    }

    function bcimgin($a,$b,$c){
        $track=$c;
        $fbio=str_replace(' ', '', $a);
        $fbio=$track.$fbio.'.jpg';
        $imageData = base64_decode($b);
        $source = imagecreatefromstring($imageData);
        $rotate = imagerotate($source, 0, 0);
        $path="/home1/eman3617/public_html/skm/ftbox/";
        $imageSave = imagejpeg($rotate,$path.$fbio,100);
        imagedestroy($source);
    }

    function data_table($arrData,$draw,$start,$lenght,$searchValue,$orderCol,$orderDir,$tt){
        $fxc = new fxc();

        $newArray = array(); $arrFiltered = array();  $arrProcessed = array(); $arrSended = array();
        $sense = null; $rows = null; $limit = null;
        $response= array();

        if(!empty($arrData)){

            if(!empty($searchValue) || $searchValue != ""){
                $arrFiltered = array_filter($arrData,function($e)use($searchValue){

                    if (
                        stripos($e['nm'], $searchValue) !== false ||
                        stripos($e['emp'], $searchValue) !== false ||
                        stripos($e['ced'], $searchValue) !== false ||
                        stripos($e['fecha'], $searchValue) !== false

                    ) {
                        return true;
                    }
                    return false;

                });
                if(!empty($arrFiltered)){
                    foreach($arrFiltered as $keyD => $valueD){
                        array_push($arrProcessed,$valueD);
                    }
                }
            } else{$arrProcessed = $arrData;}

            if(!empty($orderDir)){if($orderDir == 'desc'){$sense = SORT_DESC;}else{$sense = SORT_ASC;}}
            $newArray = $fxc->array_sort($arrProcessed,$orderCol,$sense);
            $rows = count($arrProcessed);
            $limit = ($start + ($lenght -1));

            if(!empty($newArray)){
                foreach($newArray as $keyB => $valueB){
                    if($keyB >= $start && $keyB <= $limit){
                        array_push($arrSended,$valueB);
                    }
                }
            }
            $response = array("draw" => $draw, "recordsTotal" => $rows, "recordsFiltered" => $rows, "data" => $arrSended);
        }else{

            $response = array("draw" => $draw, "recordsTotal" => 0, "recordsFiltered" => 0, "data" => array());
        }
        return $response;
    }

    function array_sort($array, $on, $order){
        $new_array = array();
        $sortable_array = array();
        if (count($array) > 0) {
            foreach ($array as $k => $v) {
                if (is_array($v)) {
                    foreach ($v as $k2 => $v2) {
                        if ($k2 == $on) {
                            $sortable_array[$k] = $v2;
                        }
                    }
                } else {
                    $sortable_array[$k] = $v;
                }
            }
            switch ($order) {
                case SORT_ASC:
                    asort($sortable_array);
                    break;
                case SORT_DESC:
                    arsort($sortable_array);
                    break;
            }
            foreach ($sortable_array as $k => $v) {
                $new_array[$k] = $array[$k];
            }
        }
        return $new_array;
    }


}