<?php

/**
 * Creator: Ing Juan Pablo Perez G
 * D:amM
 * Date: 07/23/18
 * Time: 10:33 AM
 */

require 'fxc.php';

session_start();

$v=$_POST['v'];
$t=$_POST['t'];
$a=$_POST['a'];
$b=$_POST['b'];
$c=$_POST['c'];
$d=$_POST['d'];

$jsondata = array();

$fxc = new fxc();
$fxc->cacheclear();
if($v==0){
    $kill=$fxc->bccore($v,0,0,0,0);
    if($kill==true) {
        session_destroy();
        $jsondata['kill'] = true;

    }
    $json=$jsondata;
}
if($v==1){
    $login=$fxc->bccore($v,$a,$b,0,0);
    if(!empty($login['lg'])) {
        $jsondata['sc'] = true;
        $jsondata['ids'] = $login['ids'];
        $jsondata['name'] = $login['nm'];
        $jsondata['id'] = $login['id'];
        $jsondata['lv'] = $login['lv'];

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}
if($v==2){
    $qtable=$fxc->bccore($v,$a,$b,$c,$d);
    $oCol = $_POST['order'][0]['column'];
    $nCol = $_POST['columns'][$oCol]['name'];
    $json =$fxc->data_table($qtable,$_POST['draw'],$_POST['start'],$_POST['length'],$_POST['search']['value'],$nCol,$_POST['order'][0]['dir'],$t);

}

/**Security Core**/

if($v==1000){
    $wachtdog=$fxc->bccore($v,0,0,0,0);
    if(!empty($wachtdog)) {

        $jsondata['sc'] = true;
        $jsondata['wd'] = $wachtdog;

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}


header('Content-type: application/json; charset=utf-8');
echo json_encode($json);
exit();







/*function fxbcore($link,$a,$b,$c,$d){

    if($b=='productos') {
        $ux = "SELECT * FROM productos ORDER BY id DESC";
        return $link->query($ux);
    }

    if($b=='categorias') {
        $ux = "SELECT a.*, 
                (SELECT COUNT(id) FROM scat WHERE cat=a.item) as nscat,
                (SELECT COUNT(id) FROM productos WHERE cat=a.item) as nprod
               FROM categorias a";
        return $link->query($ux);
    }

    if($b=='sbcat') {
        $ux = "SELECT a.*, 
                (SELECT COUNT(id) FROM productos WHERE scat=a.item) as nprod
               FROM scat a";
        return $link->query($ux);
    }

    if($b=='pedidos') {
        $ux = "SELECT * FROM  contacto where tp='Cotizacion'";
        return $link->query($ux);
    }

    if($b=='contacto') {
        $ux = "SELECT * FROM  contacto where tp='Contacto'";
        return $link->query($ux);
    }


}

function bcdelx($link,$a,$b,$c){

    if($a=='pd-cot') {
        $ux = "DELETE from dcot where id=" . $b;
        $link->query($ux);
    }

    if($c=='productos') {
        $ux = "DELETE from productos where id=" . $b;
        $link->query($ux);
    }

    if($c=='categorias') {
        $ux = "DELETE from categorias where id=".$b;
        $link->query($ux);
    }

    if($c=='scat') {
        $ux = "DELETE from scat where id=".$b;
        $link->query($ux);
    }

}

function mailcore($link,$em,$nm,$tp){


    if($tp=='Cotizacion') {

        $sb = 'Hemos recibido su solicittud de cotizacion | Energetica';

        $msn = '<span style="background-color: #FFF; width: 150px;"><img src="https://www.energeticapanama.com/img/logo.png"></span>
                <h1 style="font-family: helvetica;text-align: center;"> Energetica | Solicitud de Cotización</h1>
                <hr>
                <p style="font-size: 16px;">Estimado '.$nm.'</p>
                <p>Hemos recibido su solicitud para una cotización</p>
                <p>En breve uno de nuestros agentes la recibira y se contactara con usted para mas detalles sobre la misma</p>
                <hr>
                <p style="font-size: 16px;">Cordialmente</p>
                <p style="font-size: 20px;">Energetica</p>
                
                ' ;


    }

    if($tp=='cot-registro') {

        $sb = 'Ha recibido una nueva solicitud de cotizacion | Energetica';

        $msn = '<span style="background-color: #FFF; width: 150px;"><img src="https://www.energeticapanama.com/img/logo.png"></span>
                <h1 style="font-family: helvetica;text-align: center;"> Energetica | Solicitud de Cotización</h1>
                <hr>
                <p style="font-size: 16px;">Energetica:</p>
                <p>Hemos recibido una solicitud para una cotización</p>
                <p>En la consola de administracion podra ver los detalles de esta</p>
                <p>Cliente: '.$nm.'</p>
                <hr>
                <p style="font-size: 16px;">Cordialmente</p>
                <p style="font-size: 20px;">Energetica</p>
                
                ' ;


    }

    if($tp=='Contacto') {

        $sb = 'Servicio al Cliente| Energetica';

        $msn = '<span style="background-color: #FFF; width: 150px;"><img src="https://www.energeticapanama.com/img/logo.png"></span>
                <h1 style="font-family: helvetica;text-align: center;"> Energetica | Servicio al Cliente</h1>
                <hr>
                <p style="font-size: 16px;">Estimado '.$nm.'</p>
                <p>Hemos recibido su consulta</p>
                <p>En breve uno de nuestros agentes la recibira y se contactara con usted para responderle en el menor tiempo posible</p>
                <hr>
                <p style="font-size: 16px;">Cordialmente</p>
                <p style="font-size: 20px;">Energetica</p>
                
                ' ;


    }

    if($tp=='contacto-reg') {

        $sb = 'Consulta desde Contactenos | Energetica';

        $msn = '<span style="background-color: #FFF; width: 150px;"><img src="https://www.energeticapanama.com/img/logo.png"></span>
                <h1 style="font-family: helvetica;text-align: center;"> Energetica | Consulta desde Contactenos</h1>
                <hr>
                <p style="font-size: 16px;">Energetica:</p>
                <p>Hemos recibido un contacto desde el web</p>
                <p>En la consola de administracion podra ver los detalles del mismo</p>
                <p>Cliente: '.$nm.'</p>
                <hr>
                <p style="font-size: 16px;">Cordialmente</p>
                <p style="font-size: 20px;">Energetica</p>
                
                ' ;


    }


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: ENERGETICA <info@energeticapanama.com>' . "\r\n";

    mail( $em, $sb, $msn, $headers);
}

function wachtdog($link){

    $ux= "SELECT * FROM loginstatus where ids='".$_SESSION['us']."'";
    $x=$link->query($ux);
    $x->data_seek(0);
    $cw = $x->fetch_assoc();

    return $cw['ids'];

}

function bcinfo($link,$a,$b,$c){

    if($a=='productos' && $c=='0') {
        $ux = "SELECT * FROM productos WHERE cat='".$b."' ORDER BY id DESC";
        return $link->query($ux);
    }

    if($a=='productos' && $c!='0') {
        $ux = "SELECT * FROM productos WHERE cat='".$b."' and scat='".$c."' ORDER BY id DESC";
        return $link->query($ux);
    }
    if($a=='pedidos') {
        $ux = "SELECT * FROM dcot where ids='".$b."'";
        return $link->query($ux);
    }

}

function bcselect($link,$a,$b,$c){

    if($a=='cat') {
        $ux = "SELECT * from categorias ";
        return $link->query($ux);
    }

    if($a=='scat') {
        $ux = "SELECT * from scat where cat='".$b."'";
        return $link->query($ux);
    }

}

function bcedit($link,$a,$b,$c,$d){

    if($a=='productos'){

        $ux= "SELECT * FROM productos where id=".$b;
        $x=$link->query($ux);
        $x->data_seek(0);
        return $x->fetch_assoc();

    }

    if($a=='categorias'){

        $ux= "SELECT * FROM categorias where id=".$b;
        $x=$link->query($ux);
        $x->data_seek(0);
        return $x->fetch_assoc();

    }

    if($a=='scat'){

        $ux= "SELECT * FROM scat where id=".$b;
        $x=$link->query($ux);
        $x->data_seek(0);
        return $x->fetch_assoc();

    }

    if($a=='pedidos'){

        $ux= "SELECT * FROM contacto where ids='".$b."'";
        $x=$link->query($ux);
        $x->data_seek(0);
        return $x->fetch_assoc();

    }

}




if($v==10){

    $us=login($link,$_POST['u'],$_POST['p']);

    $jsondata = array();

    if($us['us']==$_POST['u']){

        $jsondata['sc']=true;
        $jsondata['us']=$_POST['u'];
        $jsondata['session']=$_SESSION['us'];
        $jsondata['name']=$us['nm'];
        $jsondata['id']=$us['id'];

    }

    if($us['us']!=$_POST['u']){

        $jsondata['sc']=false;

    }


    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);
    exit();

}
if($v==20){

    $m=fxbcore($link,$a,$b,$c,$d);

    $results=array();

    while ($c=$m->fetch_assoc()){
        $results[] = $c;
    }

    $oCol = $_POST['order'][0]['column'];
    $nCol = $_POST['columns'][$oCol]['name'];

    $response =get_requests_data_table($results,$_POST['draw'],$_POST['start'],$_POST['length'],$_POST['search']['value'],$nCol,$_POST['order'][0]['dir'],$t);

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($response);
    exit();
}
if($v==30){

    bcdelx($link,$a,$b,$c);
    $jsondata = array();
    $jsondata['delete'] = true;

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);
    exit();

}
if($v==40){

    $w=wachtdog($link);
    $jsondata = array();
    $jsondata['sc'] = true;
    $jsondata['wd'] = $w;

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);
    exit();

}
if($v==50){

    $m=bcinfo($link,$a,$b,$c);
    $jsondata = array();
    $m->data_seek(0);

    $x=0;
    while($bc=$m->fetch_assoc()){
        $x=$x+1;
        if($a=='productos') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "item" => $bc['item'],
                "ds" => $bc['ds'],
                "cat" => $bc['cat'],
                "scat" => $bc['scat'],
                "path" => $bc['path']
            );
            array_push($jsondata, $jsonitem);

        }

        if($a=='pedidos') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "cat" => $bc['cat'],
                "item" => $bc['item']
            );
            array_push($jsondata, $jsonitem);

        }




    }

    header('Content-type: application/json; charset=utf-8');
    echo json_encode(array("lx" =>$jsondata));
    exit();
}






**/

