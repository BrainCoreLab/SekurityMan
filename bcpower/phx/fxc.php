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



        if($v==1000){

            $bc=$fxc->bcsearchone("loginstatus","ids='".$_SESSION['us']."'");
            return $bc['ids'];

        }


    }

}