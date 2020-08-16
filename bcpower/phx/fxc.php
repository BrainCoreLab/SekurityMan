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

    public function bcsearchone($tabla, $condicion){
        $rs= $this->link->query("SELECT * FROM $tabla WHERE $condicion") or die($this->link->error);
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

    function bccore($v,$a,$b,$c,$d){
        $fxc = new fxc();

        if($v==0){
            return $fxc->bcdel("loginstatus","ids='".$_SESSION['us']."'");
        }

        if($v==1){

            $ip = $_SERVER["REMOTE_ADDR"];
            $b=md5($b);

            $fxc->bcdel("loginstatus","us='".$a."'");
            $bc=$fxc->bcsearchone("webuser","us='".$a."' and ps='".$b."' and status=1");
            if(!empty($bc['nm'])) {
                $_SESSION['us'] = md5($bc['nm'] . $bc['us']);
                $fxc->bcinsert("loginstatus","'" . $a . "','" . $ip . "',NOW(),'" . $_SESSION['us'] . "',1");
            }

            return $bc;

        }

        if($v==2){

            if($b=='visitas') {
                $bca=$fxc->bcsearchone("webuser","ids='" . $_SESSION['us'] . "'");
                $bc = $fxc->bcsearchtwo("visitcore a join imgcore i on a.idv = i.idv", "a.*,i.path", "a.cmp='" . $bca['cmp'] . "' order by a.fecha desc");
                return  $bc;
            }

        }

        if($v==1000){

            $bc=$fxc->bcsearchone("loginstatus","ids='".$_SESSION['us']."'");
            return $bc['ids'];

        }


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