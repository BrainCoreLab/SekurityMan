/*
=========================================
Brain Core - Creative Dev Company
Ing Juan Pablo Perez
www.braincore.live
=========================================
*/

$(function() {

    const bcx=$('#bc').data("id")
    const bcl=$('#bc-lic').data("id")

    console.log('Ready BC-R Cod #'+bcl)

    localStorage.setItem('bcx',bcx)
    localStorage.setItem('bc-lic',bcl)

    /*DEV-CODE Start*/
    const ac = new bccore();
    var lg=ac.page(bcx,bcl,'lg')
    var pn=ac.page(bcx,bcl,'panel')


    if(lg=='lg'){
        console.log('Login Panel Ready')
        ac.bctitlex('Sekurity Man - Panel de Administracion')
        ac.bchidden('#warning-field',0)
        localStorage.removeItem('loc-emp')
        ac.killlogin()
        $('input').val('')
        $( "input" ).keyup(function() {
            ac.bchidden('#warning-field',0)
        })
        ac.menuside(lg)
        ac.gettoken('page')

    }

    if(pn=='panel'){

        console.log('Panel Ready')
        ac.wachtdog('index.html')
        ac.menuside(pn)
        ac.shark()
        ac.bctimer('shark',216000000)

    }



});
