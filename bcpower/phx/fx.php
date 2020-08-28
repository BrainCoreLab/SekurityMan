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
if($v==3){
    $info=$fxc->bccore($v,$a,$b,$c,$d);

    if($a=='visitas'){
        $jsondata['sc'] = true;
        $jsondata['nm'] = $info['nm'];
        $jsondata['emp'] = $info['emp'];
        $jsondata['ced'] = $info['ced'];
    }

    if($a=='fotodoc'){
        $jsondata['sc'] = true;
        $jsondata['path'] = $info['path'];
    }

    if($a=='app-cmp'){
        $jsondata['sc'] = true;
        $jsondata['cmp'] = $info['cmp'];
    }

    if($a=='app-recface'){

        $jsondata['sc'] = true;
        $jsondata['nm'] = $info['nm'];
        $jsondata['emp'] = $info['emp'];
        $jsondata['ced'] = $info['ced'];
        $jsondata['wd'] = $info['wd'];
        $jsondata['qv'] = $info['qv'];

    }

    if($a=='app-cedula'){
        $jsondata['sc'] = true;
        $jsondata['emp'] = $info['emp'];
    }

    $json=$jsondata;
}
if($v==4){
    $bcdata=$fxc->bccore($v,$a,$b,$c,$d);
    $x=0;
    while($bc=$bcdata->fetch_assoc()){
        $x=$x+1;

        if($a=='visitas') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "nm" => $bc['nm'],
                "emp" => $bc['emp'],
                "ced" => $bc['ced'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "tmp" => $bc['tmp'],
                "loc" => $bc['loc']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='alertas') {

            $jsonitem = array(

                "idx" => $x,
                "qty" => $bc['q'],
                "item" => $bc['item']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='app-ubicaciones') {

            $jsonitem = array(
                "id" => $bc['id'],
                "idx" => $x,
                "loc" => $bc['nloc']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='app-visitas') {

            $jsonitem = array(
                "id" => $bc['id'],
                "idx" => $x,
                "nm" => $bc['nm'],
                "emp" => $bc['emp'],
                "ced" => $bc['ced'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "tmp" => $bc['tmp'],
                "loc" => $bc['loc'],
                "idv" => $bc['idv'],
                "path" => $bc['path']

            );
            array_push($jsondata, $jsonitem);

        }

        $json=array("lx" =>$jsondata);

    }



}
if($v==5){
    $del=$fxc->bccore($v,$a,$b,$c,$d);
    $jsondata['sc'] = $del;
    $json=$jsondata;
}
if($v==6){
    $upd=$fxc->bccore($v,$a,$b,$c,$d);
    $jsondata['sc'] = $upd;
    $json=$jsondata;
}

/**Insert Core**/

if($v==50){

    if($d=='crear-usuario') {$i = $fxc->bccore($v, $_POST['nus'], $_POST['usc'], $_POST['psb'], $d);}
    if($d=='crear-loc') {$i = $fxc->bccore($v, $_POST['n'], $_POST['ga'], $_POST['gb'], $d);}
    if($d=='app-dev') {$i = $fxc->bccore($v, $_POST['loc'], $_POST['uuid'], $_POST['cmp'], $d);}
    if($d=='app-in-visita') {$i = $fxc->bccoreiv($v, $_POST['nm'], $_POST['emp'], $_POST['ced'], $_POST['tmp'], $_POST['fbio'], $_POST['ftmp'], $_POST['fdoc'], $_POST['uuid'], $d);}

    $jsondata['sc'] = $i;
    $json=$jsondata;
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

if($v==1001){
    $shark=$fxc->bccore($v,0,0,0,0);
    if(!empty($shark)) {

        $jsondata['sc'] = true;
        $jsondata['sw'] = $shark;

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}

if($v==2000){
    $wachtdog=$fxc->bccore($v,$a,0,0,0);
    if(!empty($wachtdog)) {

        $jsondata['sc'] = true;
        $jsondata['wd'] = $wachtdog;

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}


header('Content-type: application/json; charset=utf-8');
echo json_encode($json);
exit();



