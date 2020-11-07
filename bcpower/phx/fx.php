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
$e=$_POST['e'];
$f=$_POST['f'];
$g=$_POST['g'];

$jsondata = array();

$fxc = new fxc();
$fxc->cacheclear();
if($v==0){
    $kill=$fxc->bccore($v,0,0,0,0,0,0,0);
    if($kill==true) {
        session_destroy();
        $jsondata['kill'] = true;

    }
    $json=$jsondata;
}
if($v==1){
    $login=$fxc->bccore($v,$a,$b,0,0,0,0,0);
    if(!empty($login['lg'])) {
        $jsondata['sc'] = true;
        $jsondata['ids'] = $login['ids'];
        $jsondata['name'] = $login['nm'];
        $jsondata['id'] = $login['id'];
        $jsondata['lv'] = $login['lv'];
        $jsondata['loc'] = $login['loc'];

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}
if($v==2){
    $qtable=$fxc->bccore($v,$a,$b,$c,$d,$e,$f,$g);
    $oCol = $_POST['order'][0]['column'];
    $nCol = $_POST['columns'][$oCol]['name'];
    $json =$fxc->data_table($qtable,$_POST['draw'],$_POST['start'],$_POST['length'],$_POST['search']['value'],$nCol,$_POST['order'][0]['dir'],$t);

}
if($v==3){
    $info=$fxc->bccore($v,$a,$b,$c,$d,$e,$f,$g);

    if($a=='visitas'){
        $jsondata['sc'] = true;
        $jsondata['nm'] = $info['nm'];
        $jsondata['emp'] = $info['emp'];
        $jsondata['ced'] = $info['ced'];

    }

    if($a=='autos'){
        $jsondata['sc'] = true;
        $jsondata['placa'] = $info['placa'];
        $jsondata['emp'] = $info['cnd'];
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
        $jsondata['nm'] = $info['nm'];
        $jsondata['ced'] = $info['ced'];
        $jsondata['loc'] = $info['loc'];
        $jsondata['wd'] = $info['wd'];
        $jsondata['qv'] = $info['qv'];
        $jsondata['df'] = $info['df'];
        $jsondata['vdt'] = $info['vdt'];
    }

    if($a=='app-placa'){
        $jsondata['sc'] = true;
        $jsondata['placa'] = $info['plc'];
        $jsondata['idt'] = $info['idt'];
        $jsondata['loc'] = $info['ub'];
        $jsondata['mc'] = $info['mc'];
        $jsondata['tp'] = $info['tp'];
        $jsondata['qv'] = $info['qv'];
        $jsondata['wd'] = $info['wd'];
    }

    if($a=='turnos'){
        $jsondata['sc'] = true;
        $jsondata['nm'] = $info['nm'];
        $jsondata['ids'] = $info['ids'];
        $jsondata['tn'] = $info['turno'];
    }

    if($a=='general'){

        $jsondata['sc'] = true;
        $jsondata['item'] = $info['item'];

    }

    if($a=='horas-auto'){

        $jsondata['sc'] = true;
        $jsondata['item'] = $info['fecha'];

    }

    $json=$jsondata;
}
if($v==4){
    $bcdata=$fxc->bccore($v,$a,$b,$c,$d,$e,$f,$g);
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
                "tm" => $bc['tm'],
                "loc" => $bc['loc']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='autos') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "placa" => $bc['placa'],
                "emp" => $bc['emp'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "loc" => $bc['loc'],
                "cnd" => $bc['cnd']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='autos-cond') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "placa" => $bc['placa'],
                "emp" => $bc['emp'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "loc" => $bc['loc']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='autos-cam') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "placa" => $bc['placa'],
                "emp" => $bc['emp'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "loc" => $bc['loc'],
                "cnd" => $bc['cnd']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='reporte-visita') {

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
                "tm" => $bc['tm'],
                "loc" => $bc['loc']
            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='reporte-visita-auto') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "placa" => strtoupper($bc['placa']),
                "emp" => $bc['emp'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "tmp" => $bc['tmp'],
                "tm" => $bc['tm'],
                "loc" => $bc['loc'],
                "cnd" => $bc['cnd']
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
        if($a=='app-visitas-auto') {

            $jsonitem = array(
                "id" => $bc['id'],
                "idx" => $x,
                "nm" => $bc['placa'],
                "emp" => $bc['emp'],
                "ced" => $bc['placa'],
                "fch" => $bc['fecha'],
                "fsal" => $bc['fsal'],
                "status" => $bc['status'],
                "loc" => $bc['loc'],
                "idv" => $bc['idv'],
                "path" => $bc['path'],
                "cnd" => $bc['cnd']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='app-conductor') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "item" => $bc['nm']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='turnos') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "item" => $bc['item']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='ubicacion') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "item" => $bc['nloc']

            );
            array_push($jsondata, $jsonitem);

        }
        if($a=='loc-filter') {

            $jsonitem = array(

                "id" => $bc['id'],
                "idx" => $x,
                "item" => $bc['nloc']

            );
            array_push($jsondata, $jsonitem);

        }

        $json=array("lx" =>$jsondata);

    }



}
if($v==5){
    $del=$fxc->bccore($v,$a,$b,$c,$d,$e,$f,$g);
    $jsondata['sc'] = $del;
    $json=$jsondata;
}
if($v==6){
    $upd=$fxc->bccore($v,$a,$b,$c,$d,$e,$f,$g);
    $jsondata['sc'] = $upd;
    $json=$jsondata;
}

/**Insert Core**/

if($v==50){

    if($d=='crear-usuario') {$i = $fxc->bccore($v, $_POST['nus'], $_POST['usc'], $_POST['psb'], $d,$_POST['loc'],$f,$g);}
    if($d=='crear-loc') {$i = $fxc->bccore($v, $_POST['n'], $_POST['ga'], $_POST['gb'], $d,$e,$f,$g);}
    if($d=='app-dev') {$i = $fxc->bccore($v, $_POST['loc'], $_POST['uuid'], $_POST['cmp'], $d,$e,$f,$g);}
    if($d=='app-in-visita') {
        $i = $fxc->bccoreiv($v, $_POST['nm'], $_POST['emp'], $_POST['ced'], $_POST['tmp'], $_POST['fbio'], $_POST['ftmp'], $_POST['fdoc'], $_POST['uuid'], 'Turno 1',$_POST['tm']);
        $jsondata['url'] = 'https://vimeo.com/423318742';
        $jsondata['ced'] = $_POST['ced'];
    }
    if($d=='app-in-auto') {$i = $fxc->bccoreauto($v, $_POST['placa'],$_POST['cnd'], $_POST['rego'], $_POST['fpc'], $_POST['uuid'],'Turno 1','Juan Seg');}
    if($d=='crear-personal') {$i = $fxc->bccore($v, $_POST['psn'], $_POST['id'], $_POST['tn'], $d,$_POST['loc'],$f,$g);}
    if($d=='crear-turno') {$i = $fxc->bccore($v, $_POST['tn'], $b, $c, $d,$e,$f,$g);}
    if($d=='crear-numero-rep') {$i = $fxc->bccore($v, $_POST['vs'], $_POST['auto'], $c, $d,$e,$f,$g);}



    $jsondata['sc'] = $i;
    $json=$jsondata;
}

/**Security Core**/

if($v==1000){
    $wachtdog=$fxc->bccore($v,0,0,0,0,0,0,0);
    if(!empty($wachtdog)) {

        $jsondata['sc'] = true;
        $jsondata['wd'] = $wachtdog;

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}

if($v==1001){
    $shark=$fxc->bccore($v,0,0,0,0,0,0,0);
    if(!empty($shark)) {

        $jsondata['sc'] = true;
        $jsondata['sw'] = $shark;

    } else {$jsondata['sc'] = false;$jsondata['sw'] = 0;}
    $json=$jsondata;
}

if($v==2000){
    $wachtdog=$fxc->bccore($v,$a,0,0,0,0,0,0);
    if(!empty($wachtdog)) {

        $jsondata['sc'] = true;
        $jsondata['wd'] = $wachtdog;

    } else {$jsondata['sc'] = false;}
    $json=$jsondata;
}


header('Content-type: application/json; charset=utf-8');
echo json_encode($json);
exit();


