/*
=========================================
Brain Core - Creative Dev Company
Ing Juan Pablo Perez
www.braincore.live
=========================================
*/
class bccore {

    
    page(bcx,bcl,pg){

        if(bcx==bcl+'-'+pg){

            console.log('PG:'+pg)
            return pg

        }
    }

    bcurl(){
        return 'https://skm.eman.live/'
    }

    killlogin() {
        const ac = new bccore()
        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:0});
        lx.done(function (r) {
            console.log('Kill Session:'+r.kill)
            localStorage.clear()
            const bcx=$('#bc').data("id")
            const bcl=$('#bc-lic').data("id")
            console.log('Ready BC-R Cod #'+bcl)
            localStorage.setItem('bcx',bcx)
            localStorage.setItem('bc-lic',bcl)
            ac.gettoken('page')

        })

    }

    login(us, ps,url) {

        const ac = new bccore()
        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:1,a:us,b:ps});
        lx.done(function (r) {

            if(r.sc==true){
                localStorage.setItem('ids',r.ids)
                localStorage.setItem('name',r.name)
                localStorage.setItem('id',r.id)
                localStorage.setItem('lv',r.lv)
                localStorage.setItem('loc',r.loc)
                location.href = url;

            }

            if(r.sc==false){

                $('input').val('')
                ac.bchidden('#warning-field',2)
                $('#warning-field').empty()
                $('#warning-field').append('<p class="text-danger">Valide sus datos!</p>')
                return false
            }

        })

    }

    menuside(a){

        const ac = new bccore();

        if(a=='lg') {

            $('.lg-go').click(function () {

                console.log('Login Go')

                var us = $('.us').val()
                var ps = $('.ps').val()

                if (!us || !ps) {

                    ac.bchidden('#warning-field', 2)
                    $('#warning-field').empty()
                    $('#warning-field').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }
                ac.login(us, ps, 'panel.html')
            })
        }

        if(a=='panel') {

            var lv=parseInt(localStorage.getItem('lv'))

            $('#menucore').empty()
            $('#menucore').append('<li class="menu">\n' +
                '                        <a href="#dashboard" data-active="true" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>\n' +
                '                                <span>Dashboard</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled show" id="dashboard" data-parent="#menucore">\n' +
                '                            <li class="active">\n' +
                '                                <a href="javascript:void(0)" class="d-visitas"> Registro de Visitas </a>\n' +
                '                            </li>\n' +
                '                            <li class="active">\n' +
                '                                <a href="javascript:void(0)" class="d-autos"> Registro de Autos </a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu">\n' +
                '                        <a href="#datos" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>\n' +
                '                                <span>Datos</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled" id="datos" data-parent="#menucore">\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)" class="d-vistantes"> Visitantes </a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)" class="d-conductores"> Conductores </a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)" class="d-camiones"> Camiones </a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu">\n' +
                '                        <a href="#reports" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>\n' +
                '                                <span>Reportes</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled" id="reports" data-parent="#menucore">\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="d-rep-visitas">Visitantes</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="d-rep-auto">Vehiculos</a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu w-menu-conf">\n' +
                '                        <a href="#config" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>\n' +
                '                                <span>Configuracion</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled" id="config" data-parent="#menucore">\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="cfg-users">Usuarios</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="cfg-loc">Ubicaciones</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="cfg-dvc">Dispositivos</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="cfg-pers">Personal</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!" class="cfg-gen">Generales</a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu mroot">\n' +
                '                        <a href="#configroot" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>\n' +
                '                                <span>Manager</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled" id="configroot" data-parent="#menucore">\n' +
                '                            <li>\n' +
                '                                <a href="#!">Empresas</a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>')

            console.log(lv)
            if(lv>0){ac.bchidden('.mroot',0)}

            ac.bchidden('.w-table-main',1)

            localStorage.setItem('fl-loc','Todos')

            var lc=localStorage.getItem('loc')

            ac.bchidden('.fx-filtro-page',0)
            ac.bchidden('.w-menu-conf',0)
            ac.bctext('.title-core','Registro de Visitas de la Oficina '+lc)

            if(lc=='Todos'){
                ac.bchidden('.fx-filtro-page',2)
                ac.bchidden('.w-menu-conf',2)
                ac.bctext('.title-core','Registro de Visitas de todas las Oficinas')
            }
            ac.bcworker('table', '.bc-table','t-visitas')
            ac.bctablet('.t-visitas','visitas',lc,0)

            ac.bcselect('loc-filter',0,0,'.filtro-sel', 'Oficina')
            $('.filtro-sel').change(function () {

                var s=$('.filtro-sel').val()
                console.log('Ubicacion:'+s)
                if(s !=0) {
                    localStorage.setItem('fl-loc',s)

                    ac.bctext('.title-core','Registro de Visitas de la Oficina '+s)
                    if(s=='Todos'){
                        ac.bchidden('.fx-filtro-page',2)
                        ac.bctext('.title-core','Registro de Visitas de todas las Oficinas')
                    }
                    ac.bcworker('table', '.bc-table','t-visitas')
                    ac.bctablet('.t-visitas','visitas',s,0)
                }
                if(s==0) {
                    localStorage.setItem('fl-loc','Todos')

                    ac.bctext('.title-core','Registro de Visitas de todas las Oficinas')
                    ac.bcworker('table', '.bc-table','t-visitas')
                    ac.bctablet('.t-visitas','visitas',0,0)
                }


            })

            $('.d-visitas').click(function () {

                var t='t-visitas'

                ac.bchidden('.w-table-main',1)

                ac.bctext('.title-core','Registro de Visitas')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'visitas',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-autos').click(function () {

                var t='t-visitas-autos'

                ac.bchidden('.w-table-main',1)

                ac.bctext('.title-core','Registro de Autos')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'autos',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-vistantes').click(function () {

                var t='t-visitante'

                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Visitantes Registrados')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'visitantes',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-conductores').click(function () {

                var t='t-conductores'

                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Registro de Condutores')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'conductores',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-camiones').click(function () {

                var t='t-camiones'

                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Camiones Registrados')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'camiones',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-alertas').click(function () {

                var t='t-alertas'
                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Registro de Alertas')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'alertas',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })
            
            $('.cfg-users').click(function () {

                var t='t-users'
                ac.bchidden('.w-user-main',1)
                ac.bctext('.title-core','<i class="fa fa-users  text-info"></i>  Listado de Usuarios')
                ac.bctext('.title-cr-form','<i class="fa fa-user  text-info"></i> Creacion de Usuarios')
                ac.bcselect('ubicacion',0,0,'.loc-sel', 'Ubicacion')
                $('.loc-sel').change(function () {

                    var s=$('.loc-sel').val()
                    console.log('Localizacion:'+s)
                    if(s !=0) {
                        localStorage.setItem('loc-us',s)
                    }
                    if(s==0) {
                        localStorage.removeItem('loc-us')
                    }


                })
                ac.bcworker('table', '.h-users',t)
                ac.bctablet('.'+t,'usuarios',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()


            })

            $('.cfg-loc').click(function () {

                var t='t-loc'
                ac.bchidden('.w-loc-main',1)
                ac.bctext('.title-core','Listado de Ubicaciones')
                ac.bctext('.title-cr-form','Creacion de Ubicaciones')

                ac.bcmapmark('map-add-suc','9.093561','-79.3950275')

                ac.bcworker('table', '.h-loc',t)
                ac.bctablet('.'+t,'locations',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()




            })

            $('.cfg-dvc').click(function () {

                var t='t-dvc'
                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Registro de Dispositivos')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'dvc',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-rep-visitas').click(function () {

                ac.bchidden('.w-reporte',1)
                ac.bchidden('.rep-vis-print',0)
                ac.bchidden('.fm-vis-print',2)

                flatpickr(document.getElementById('f-inicial'));
                flatpickr(document.getElementById('f-final'));

                ac.bcselect('turnos',0,0,'.turno', 'Turno')

                $('.turno').change(function () {

                    var s=$('.turno').val()
                    console.log('Turno:'+s)
                    if(s !=0) {
                        ac.bceinfo('turnos',s,0,0,0,0,0)
                    }
                    if(s==0) {
                        localStorage.removeItem('tn-t')
                        localStorage.removeItem('nm-t')
                    }


                })

                ac.bceinfo('general','n-rep-vs',0,0,0,0,0)

                $('input').val('')



            })

            $('.d-rep-auto').click(function () {

                ac.bchidden('.w-reporte-auto',1)
                ac.bchidden('.rep-vis-print-auto',0)
                ac.bchidden('.fm-vis-print-auto',2)

                flatpickr(document.getElementById('f-inicial-auto'));
                flatpickr(document.getElementById('f-final-auto'));

                ac.bcselect('turnos',0,0,'.turno-auto', 'Turno')

                $('.turno-auto').change(function () {

                    var s=$('.turno-auto').val()
                    console.log('Turno:'+s)
                    if(s !=0) {
                        ac.bceinfo('turnos',s,0,0,0,0,0)
                    }
                    if(s==0) {
                        localStorage.removeItem('tn-t')
                        localStorage.removeItem('nm-t')
                    }


                })

                ac.bceinfo('general','n-rep-auto',0,0,0,0,0)

                $('input').val('')



            })

            $('.cfg-pers').click(function () {

                var t='t-wman'
                ac.bchidden('.w-personal-main',1)
                ac.bctext('.title-core-ps','Listado de Personal de Seguridad')
                ac.bctext('.title-cr-form','Personal de Seguridad')

                ac.bcselect('turnos',0,0,'.turno-sg', 'Turno')
                $('.turno-sg').change(function () {

                    var s=$('.turno-sg').val()
                    console.log('Turno:'+s)
                    if(s !=0) {
                       localStorage.setItem('tn-ps',s)
                    }
                    if(s==0) {
                        localStorage.removeItem('tn-ps')
                    }


                })

                ac.bcselect('ubicacion',0,0,'.loc-sel-ps', 'Ubicacion')
                $('.loc-sel-ps').change(function () {

                    var s=$('.loc-sel-ps').val()
                    console.log('Localizacion:'+s)
                    if(s !=0) {
                        localStorage.setItem('loc-us',s)
                    }
                    if(s==0) {
                        localStorage.removeItem('loc-us')
                    }


                })

                ac.bcworker('table', '.h-pers',t)
                ac.bctablet('.'+t,'w-man',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()


            })

            $('.cfg-tn').click(function () {

                var t='t-turno'
                ac.bchidden('.w-turno-main',1)
                ac.bctext('.title-tn-form','Crear Turnos de Seguridad')
                ac.bctext('.title-core-tn','Listado de Turnos de Seguridad')
                ac.bcworker('table', '.h-turno',t)
                ac.bctablet('.'+t,'w-turno',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()


            })

            $('.cfg-gen').click(function () {

                ac.bchidden('.w-general-main',1)
                ac.bctext('.title-gen-form','Opciones Generales')

                ac.bceinfo('general','n-rep-vs',0,0,0,0,0)
                ac.bceinfo('general','n-rep-auto',0,0,0,0,0)

            })

            /*Guardar*/

            $('.save-go-c-us').click(function () {

                console.log('Crear Usuario')

                var d = new FormData();

                var nus = $('.nm-us-c').val()
                var usc = $('.us-c').val()
                var psa = $('.ps-a-c').val()
                var psb = $('.ps-b-c').val()
                var loc = localStorage.getItem('loc-us')

                if (!usc || !psb || !nus) {

                    ac.bchidden('#warning-field-c', 2)
                    $('#warning-field-c').empty()
                    $('#warning-field-c').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }

                if (psa != psb) {

                    ac.bchidden('#warning-field-c', 2)
                    $('#warning-field-c').empty()
                    $('#warning-field-c').append('<p class="text-danger">Passwords no son Iguales!</p>')
                    return false
                }

                d.append('nus',nus)
                d.append('usc',usc)
                d.append('psb',psb)
                d.append('loc',loc)
                d.append('d','crear-usuario')
                d.append('v',50)

                ac.bcsavedata(d,'.t-users','table')
                $('input').val('')

            })

            $('.save-go-c-loc').click(function () {

                console.log('Crear Location')

                var d = new FormData();

                var n = $('.nm-loc-c').val()
                var ga = localStorage.getItem('lat')
                var gb = localStorage.getItem('lg')


                if (!n) {

                    ac.bchidden('#warning-field-l', 2)
                    $('#warning-field-l').empty()
                    $('#warning-field-l').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }


                d.append('n',n)
                d.append('ga',ga)
                d.append('gb',gb)
                d.append('d','crear-loc')
                d.append('v',50)

                ac.bcsavedata(d,'.t-loc','table')
                $('input').val('')

            })

            $('.reporte-go').click(function () {

                var fa = $('#f-inicial').val()
                var fb = $('#f-final').val()
                var vp = $('#verif-ps').val()

                var sg=localStorage.getItem('nm-t')
                var tn=localStorage.getItem('tn-t')

                var nrep=localStorage.getItem('n-rep-vs')

                $('.date-rep').empty()
                $('.date-rep').append('Fecha de '+fa+' a '+fb)

                $('.turno-rep').empty()
                $('.turno-rep').append('Turno: '+tn)

                $('.sg-rep').empty()
                $('.sg-rep').append('Nombre del Seguridad: '+sg)

                $('.ver-rep').empty()
                $('.ver-rep').append('Verificado por : '+vp)

                $('.n-rep').empty()
                $('.n-rep').append('M # '+nrep)


                ac.bchidden('.fm-vis-print',0)
                ac.bchidden('.rep-vis-print',2)

                ac.bcdata('reporte-visita',fa,fb,'.rep-list')

                $('.print-bt').click(function(){
                    window.print();
                    return false;
                });

            })

            $('.reporte-go-auto').click(function () {

                var fa = $('#f-inicial-auto').val()
                var fb = $('#f-final-auto').val()
                var vp = $('#verif-ps-auto').val()

                var sg=localStorage.getItem('nm-t')
                var tn=localStorage.getItem('tn-t')

                var nrep=localStorage.getItem('n-rep-auto')

                $('.date-rep').empty()
                $('.date-rep').append('Fecha de '+fa+' a '+fb)

                $('.turno-rep').empty()
                $('.turno-rep').append('Turno: '+tn)

                $('.sg-rep').empty()
                $('.sg-rep').append('Nombre del Seguridad: '+sg)

                $('.ver-rep').empty()
                $('.ver-rep').append('Verificado por : '+vp)

                $('.n-rep').empty()
                $('.n-rep').append('M # '+nrep)


                ac.bchidden('.rep-vis-print-auto',2)
                ac.bchidden('.fm-vis-print-auto',0)

                ac.bcdata('reporte-visita-auto',fa,fb,'.rep-list-auto')

                $('.print-bt-auto').click(function(){
                    window.print();
                    return false;
                });

            })

            $('.save-go-c-ps').click(function () {

                console.log('Crear Usuario')

                var d = new FormData();

                var psn = $('.ps-us-c').val()
                var id = $('.id-us-c').val()
                var tn = localStorage.getItem('tn-ps')
                var loc = localStorage.getItem('loc-us')


                if (!psn|| !id || tn==0 || loc==0) {
                    ac.bchidden('#warning-ps', 2)
                    $('#warning-ps').empty()
                    $('#warning-ps').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }


                d.append('psn',psn)
                d.append('id',id)
                d.append('tn',tn)
                d.append('loc',loc)
                d.append('d','crear-personal')
                d.append('v',50)

                ac.bcsavedata(d,'.t-wman','table')
                $('input').val('')

            })

            /*$('.save-go-c-tn').click(function () {

                console.log('Crear Usuario')

                var d = new FormData();
                var tn = $('.ps-tn-c').val()

                if (!tn) {
                    ac.bchidden('#warning-tn', 2)
                    $('#warning-tn').empty()
                    $('#warning-tn').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }

                d.append('tn',tn)
                d.append('d','crear-turno')
                d.append('v',50)

                ac.bcsavedata(d,'.t-turno','table')
                $('input').val('')

            })*/

            $('.save-go-c-gen').click(function () {

                console.log('Crear Usuario')

                var d = new FormData();
                var vs = $('.n-rep-vs').val()
                var auto = $('.n-rep-auto').val()

                if (!vs || !auto) {
                    ac.bchidden('#warning-gen', 2)
                    $('#warning-gen').empty()
                    $('#warning-gen').append('<p class="text-danger">Valide sus datos!</p>')
                    return false
                }

                d.append('vs',vs)
                d.append('auto',auto)
                d.append('d','crear-numero-rep')
                d.append('v',50)

                ac.bcsavedata(d,'reporte','data')

            })




            var lemp=localStorage.getItem('loc-emp')
            if(lemp=='acetioxigeno'){
                console.log('key: acetioxigeno panel')
                $('.navbar-logo').prop('src','assets/img/logo-lg-emp.png')
                $('.exit').prop('href','https://skm.eman.live/index.html#page=acetioxigeno')
            }

        }

    }

    vuecore(data,el){

            var app = new Vue({
                el: el,
                data: {
                    bc: data
                }

            })

    }

    bcdata(a,b,c,d){

        const ac = new bccore()

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:4,a:a,b:b,c:c});

        lx.done(function (r) {

            $(d).empty()

            $.each(r.lx, function (key, bc) {

                if(a=='visitas'){

                    console.log(bc.fch)

                    if(bc.status==1){var status=' <i class="fa fa-user text-success"></i>Visita'}
                    if(bc.status==2){var status=' <i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-user text-danger"></i>&nbsp;&nbsp;Salio de la empresa'}
                    if(bc.tm==0){var tmp='No Registrada'}
                    if(bc.tm!=0){var tmp=bc.tm}

                    $(d).append(' <div class="item-timeline">\n' +
                        '                                        <div class="t-meta-date">\n' +
                        '                                            <p class="text-success">E: '+bc.fch+'</p>\n' +
                        '                                            <hr>' +
                        '                                            <p class="text-danger">S: '+bc.fsal+'</p>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-dot">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-text">\n' +
                        '                                            <p><b>Temperatura: </b> '+tmp+' |<b> Ubicacion: </b> '+bc.loc+' | <b>Estado: </b> '+status+'</p>\n' +
                        '                                        </div>\n' +
                        '                                    </div><hr>')
                }

                if(a=='alertas'){

                    $(d).append('<div class="dropdown-item">\n' +
                        '                                <div class="media">\n' +
                        '                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon text-danger"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>\n' +
                        '                                    <div class="media-body">\n' +
                        '                                        <div class="notification-para">' +
                        '                                           <a href="#!" class="alert-go'+bc.idx+'"><span class="user-name text-danger">'+bc.qty+'</span> '+bc.item+'</a></div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>')

                    $('.alert-go'+bc.idx).click(function () {
                        console.log('Click: '+bc.item)
                        $('.title-core').empty()
                        $('.title-core').append('Registro de alertas de '+bc.item)
                        ac.bcworker('table', '.bc-table','t-alertas')
                        ac.bctablet('.t-alertas','alertas',bc.item,0)
                    })


                }

                if(a=='autos'){

                    console.log(bc.fch)

                    if(bc.status==1){var status=' <i class="fa fa-arrow-right text-success"></i> <i class="fa fa-truck text-success"></i>&nbsp;&nbsp;Registro de Entrada';var ex='E: ';}
                    if(bc.status==2){var status=' <i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-truck text-danger"></i>&nbsp;&nbsp;Registro de Salida';var ex='S: '}

                    var cnd=bc.cnd
                    var ln = cnd.split(",")[0]
                    var fn = cnd.split(",")[1]

                    $(d).append(' <div class="item-timeline">\n' +
                        '                                        <div class="t-meta-date">\n' +
                        '                                            <p class="sft'+bc.id+'">'+ex+bc.fch+'</p>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-dot">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-text">\n' +
                        '                                            <p><b> Conductor: </b> '+ac.fcapital(fn)+' '+ac.fcapital(ln)+' | <b> Ubicacion: </b> '+bc.loc+' | <b>Estado: </b> '+status+'</p>\n' +
                        '                                        </div>\n' +
                        '                                    </div><hr>')

                    if(bc.status==1){$('.sft'+bc.id).addClass('text-success')}
                    if(bc.status==2){$('.sft'+bc.id).addClass('text-danger')}
                }

                if(a=='autos-cond'){

                    console.log(bc.fch)

                    if(bc.status==1){var status=' <i class="fa fa-truck text-success"></i> Registro de Entrada';var ex='E: '}
                    if(bc.status==2){var status=' <i class="fa fa-truck text-danger"></i> Registro de Salida';var ex='S: '}

                    $(d).append(' <div class="item-timeline">\n' +
                        '                                        <div class="t-meta-date">\n' +
                        '                                            <p class="sft'+bc.id+'">'+ex+bc.fch+'</p>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-dot">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-text">\n' +
                        '                                            <p><b> Placa: </b> '+bc.placa+'  |  <b>Estado: </b> '+status+'</p>\n' +
                        '                                        </div>\n' +
                        '                                    </div><hr>')

                    if(bc.status==1){$('.sft'+bc.id).addClass('text-success')}
                    if(bc.status==2){$('.sft'+bc.id).addClass('text-danger')}
                }

                if(a=='autos-cam'){

                    console.log(bc.fch)

                    if(bc.status==1){var status=' <i class="fa fa-truck text-success"></i> Registro de Entrada';var ex='E: '}
                    if(bc.status==2){var status=' <i class="fa fa-truck text-danger"></i> Registro de Salida';var ex='S: '}

                    $(d).append(' <div class="item-timeline">\n' +
                        '                                        <div class="t-meta-date">\n' +
                        '                                            <p class="sft'+bc.id+'">'+ex+bc.fch+'</p>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-dot">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-text">\n' +
                        '                                            <p><b> Conductor: </b> '+bc.cnd+'  |  <b>Estado: </b> '+status+'</p>\n' +
                        '                                        </div>\n' +
                        '                                    </div><hr>')

                    if(bc.status==1){$('.sft'+bc.id).addClass('text-success')}
                    if(bc.status==2){$('.sft'+bc.id).addClass('text-danger')}
                }

                if(a=='reporte-visita'){

                    var str=bc.nm
                    var na = str.split(" ")[0]
                    var nb = str.split(" ")[1]
                    var nc = str.split(" ")[2]
                    var nd = str.split(" ")[3]


                    $(d).append('<tr>\n' +
                        '                                        <td>'+na+' '+nb+'</td>\n' +
                        '                                        <td>'+bc.ced+'</td>\n' +
                        '                                        <td>'+bc.fch+'</td>\n' +
                        '                                        <td>'+bc.fsal+'</td>\n' +
                        '                                        <td>Temperatura es: '+bc.tm+'</td>\n' +
                        '                                    </tr>')
                }

                if(a=='reporte-visita-auto'){


                    $(d).append('<tr>\n' +
                        '                                        <td>'+bc.cnd+'</td>\n' +
                        '                                        <td>'+bc.placa+'</td>\n' +
                        '                                        <td class="h-a-s'+bc.id+'"></td>\n' +
                        '                                        <td class="h-a-e'+bc.id+'"></td>\n' +
                        '                                        <td class="h-b-s'+bc.id+'"></td>\n' +
                        '                                        <td class="h-b-e'+bc.id+'"></td>\n' +
                        '                                        <td class="h-c-s'+bc.id+'"></td>\n' +
                        '                                        <td class="h-c-e'+bc.id+'"></td>\n' +
                        '                                        <td></td>\n' +
                        '                                    </tr>')

                    ac.bceinfo('horas-auto','.h-a-s'+bc.id,b,0,2,bc.placa,bc.cnd)
                    ac.bceinfo('horas-auto','.h-a-e'+bc.id,b,0,1,bc.placa,bc.cnd)

                    ac.bceinfo('horas-auto','.h-b-s'+bc.id,b,1,2,bc.placa,bc.cnd)
                    ac.bceinfo('horas-auto','.h-b-e'+bc.id,b,1,1,bc.placa,bc.cnd)

                    ac.bceinfo('horas-auto','.h-c-s'+bc.id,b,2,2,bc.placa,bc.cnd)
                    ac.bceinfo('horas-auto','.h-c-e'+bc.id,b,2,1,bc.placa,bc.cnd)
                }

            })

        })




    }

    bctablet(a,b,c,d){

        const ac = new bccore();

        if(b=='visitas') {
            var ord=0
            var qtb=50
            var data = [
                {
                    data: "path",
                    name: "path",
                    title: "<i class='fa fa-camera text-info'></i> Documento",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {
                        if(bc.path==null || bc.path==""){
                            return '<img src="ftbox/nfoto.jpg" class="fix-w-80" />'
                        }
                        return '<img src="ftbox/' + bc.path + '" class="fix-w-80 fx-margin-rigth" />'

                    }
                },
                {data: "nm", name: "nm", title: "<i class='fa fa-user text-info'></i> Visitante",className: "text-left", orderable: true,render: function (data, type, bc) {

                        var str=bc.nm
                        var na = str.split(" ")[0]
                        var nb = str.split(" ")[1]
                        var nc = str.split(" ")[2]
                        var nd = str.split(" ")[3]

                        return na+' '+nb

                    }
                 },
                {data: "emp", name: "emp", title: "<i class='fa fa-building text-info'></i> Empresa",className: "text-left",orderable: true},
                {data: "fecha", name: "fecha", title: " Entrada <i class='fa fa-arrow-right text-success'></i>",className: "text-success",orderable: true},
                {data: "fsal", name: "fsal", title: "<i class='fa fa-arrow-left text-danger'></i> Salida",className: "text-danger",orderable: true},
                {data: "df", name: "df", title: "<i class='fa fa-clock text-info'></i> Tiempo",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        if(bc.df!=null) {
                            return '<span class="text-danger"><i class="far fa-clock"></i> ' + bc.df + ' minutos</span>'
                        }
                        if(bc.df==null) {
                            return '<span class="text-info"><i class="far fa-clock"></i> En Visita</span>'
                        }

                    }
                 },
                {data: "tm", name: "tm", title: "<i class='fa fa-thermometer-quarter text-info'></i> Temp",className: "text-center",orderable: false},
                {
                    data: "status",
                    name: "status",
                    title: "<i class='fa fa-cubes text-info'></i> Estado",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-user text-success"></i><i class="fa fa-arrow-right text-success"></i>'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i><i class="fa fa-user text-danger"></i>'}


                    }
                },
                {
                    data: "idx",
                    name: "idx",
                    title: "<i class='fa fa-history text-info'></i> Historial",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        var idx=bc.idx
                        var status = idx.split("-")[0]
                        var id = idx.split("-")[1]

                        if(status==2) {
                            return '<div class="list-item"><a class="text-dark fx-pand" href="#!" id="hst' + id + '"><i class="fa fa-history fx-pand text-info"></i></a></div>'
                        }
                        if(status==1) {
                            return '<i class="fa fa-building  text-success"></i> En Visita'
                        }

                    }
                }
            ]
        }

        if(b=='autos') {
            var ord=6
            var qtb=100
            var data = [
                {
                    data: "path",
                    name: "path",
                    title: "<i class='fa fa-camera text-info'></i> Vehiculo",
                    searchable: false,
                    orderable: false,
                    className: "text-left",
                    render: function (data, type, bc) {
                        if(bc.path==null || bc.path==""){
                            return '<img src="ftbox/nfoto.jpg" class="fix-w-80" />'
                        }
                        return '<img src="ftbox/' + bc.path + '" class="fix-w-90" />'

                    }
                },
                {data: "placa", name: "placa", title: "<i class='fa fa-id-card text-info'></i> Placa",className: "text-center",orderable: true,render: function (data, type, bc) {

                        var str = bc.placa
                        var res = str.toUpperCase()
                        return res

                    }},
                {data: "cnd", name: "cnd", title: "<i class='fa fa-male text-info'></i> Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {
                        const ac = new bccore();
                        var cnd=bc.cnd
                        var ln = cnd.split(",")[0]
                        var fn = cnd.split(",")[1]

                        return '<i class="fa fa-male text-info"></i>  '+ac.fcapital(fn)+' '+ac.fcapital(ln)

                    }
                },
                {data: "fecha", name: "fecha", title: "<i class='fa fa-clock text-info'></i> Fecha - Hora",className: "text-left",orderable: true},
                {data: "loc", name: "loc", title: "<i class='fa fa-building text-info'></i> Oficina",className: "text-left"},
                {
                    data: "status",
                    name: "status",
                    title: "<i class='fa fa-arrow-left text-danger'></i><i class='fa fa-arrow-right text-success'></i> Tipo",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-car text-success"></i><i class="fa fa-arrow-right text-success"></i> Entrada'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-car text-danger"></i> Salida'}


                    }
                },
                {
                    data: "id",
                    name: "id",
                    title: "<i class='fa fa-history text-info'></i> Historial",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="text-dark fx-pand" href="#!" id="hsta'+bc.id+'"><i class="fa fa-history fx-pand text-info"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='visitantes') {
            var ord=0
            var qtb=100
            var data = [
                {data: "nm", name: "nm", title: "<i class='fa fa-user text-info'></i> Visitante",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-user text-info"></i> '+bc.nm

                    }
                },
                {data: "emp", name: "emp", title: "<i class='fa fa-building text-info'></i> Empresa",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-building text-info"></i> '+bc.emp

                    }
                },
                {data: "ced", name: "ced", title: "<i class='fa fa-id-card text-info'></i> Cedula",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-id-card text-info"></i> '+bc.ced

                    }
                },
                {
                    data: "wd",
                    name: "wd",
                    title: "<i class='fa fa-check text-info'></i> Autorizado",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.wd==1){return '<i class="fa fa-user text-success"></i><i class="fa fa-arrow-right text-success"></i>'}
                        if(bc.wd==2){return '<i class="fa fa-user-times text-danger"></i>'}


                    }
                },
                {
                    data: "idx",
                    name: "idx",
                    title: "<i class='fa fa-arrow-right text-info'></i> Autorizar | <i class='fa fa-history text-info'></i> Historial | <i class='fa fa-trash text-info'></i> Eliminar",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        var idx=bc.idx
                        var wd = idx.split("-")[0]
                        var id = idx.split("-")[1]

                        if(wd==1){var wds='<a class="" href="#!" id="act'+id+'"><i class="fa fa-user-times text-danger fx-pand"></i></a> | '}
                        if(wd==2){var wds='<a class="" href="#!" id="act'+id+'"><i class="fa fa-user text-success"></i><i class="fa fa-arrow-right text-success"></i></a> | '}

                        return '<div class="list-item">' +wds+
                            '<a class="text-dark fx-pand" href="#!" id="hstvs'+id+'"><i class="fa fa-history fx-pand text-info"></i></a> | ' +
                            '<a class="" href="#!" id="delvt'+id+'"><i class="fa fa-trash text-danger fx-pand"></i></a>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='conductores') {
            var ord=0
            var qtb=100
            var data = [
                {data: "itc", name: "itc", title: "<i class='fa fa-id-card text-info'></i> ID Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {
                        return '<i class="fa fa-id-card text-info"></i> '+bc.itc

                    }
                },
                {data: "nm", name: "nm", title: "<i class='fa fa-male text-info'></i> Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        const ac = new bccore();
                        var cnd=bc.nm
                        var ln = cnd.split(",")[0]
                        var fn = cnd.split(",")[1]

                        return '<i class="fa fa-male text-info"></i>  '+ac.fcapital(fn)+' '+ac.fcapital(ln)

                    }
                 },
                {
                    data: "id",
                    name: "id",
                    title: "<i class='fa fa-history text-info'></i> Historial",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {
                        return '<div class="list-item"><a href="#!" id="hstcnd'+bc.id+'"><i class="fa fa-history text-info fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='camiones') {
            var ord=0
            var qtb=100
            var data = [
                {data: "idt", name: "idt", title: "<i class='fa fa-car text-info'></i> ID",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-car text-info"></i> '+bc.idt.toUpperCase()


                    }
                },
                {data: "plc", name: "plc", title: "<i class='fa fa-id-card text-info'></i> Placa",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        if(bc.plc!='0') {return '<i class="fa fa-id-card text-info"></i> ' + bc.plc.toUpperCase()}
                        if(bc.plc=='0') {return '<i class="fa fa-id-card text-danger"></i> No Registrada'}


                    }},
                {data: "mc", name: "mc", title: "<i class='fa fa-star text-info'></i> Marca",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-angle-right text-info"></i> '+bc.mc.toUpperCase()


                    }
                },
                {data: "tp", name: "tp", title: "<i class='fa fa-truck-pickup text-info'></i> Tipo",className: "text-left",orderable: true,

                    render: function (data, type, bc) {

                        return '<i class="fa fa-angle-right text-info"></i> '+bc.tp.toUpperCase()


                    }
                },
                {data: "ub", name: "ub", title: "<i class='fa fa-building text-info'></i> Oficina",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-angle-right text-info"></i> '+bc.ub.toUpperCase()


                    }
                },

                {
                    data: "idx",
                    name: "idx",
                    title: "<i class='fa fa-history text-info'></i> Historial",
                    searchable: false,
                    orderable: true,
                    className: "text-center",
                    render: function (data, type, bc) {

                        var idx=bc.idx
                        var hs = idx.split("-")[0]
                        var id = idx.split("-")[1]

                        if(hs>0) {return '<div class="list-item"><a  href="#!" id="hstcam' + id + '"><i class="fa fa-history fx-pand text-info"></i></a></div>'}

                        if(hs==0) {return '<i class="fa fa-truck color-off"></i> <span class="color-off">Sin Historial</span>'}

                    }
                }
            ]
        }

        if(b=='alertas') {
            var ord=0
            var qtb=100
            var data = [
                {data: "vfch", name: "vfch", title: "Fecha",className: "text-left", orderable: true},
                {data: "ta", name: "ta", title: "Alerta",className: "text-left",orderable: true},
                {data: "nm", name: "nm", title: "Visitante",className: "text-left",orderable: true},
                {data: "emp", name: "emp", title: "Empresa",className: "text-left",orderable: true},
                {
                    data: "status",
                    name: "status",
                    title: "Estado",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="far fa-bell text-danger"></i>'}
                        if(bc.status==2){return '<i class="far fa-check text-success"></i>'}


                    }
                },
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="delal'+bc.id+'"><i class="fa fa-arrow-alt-circle-right text-danger fx-pand"></i> Resolver</a></div>'

                    }
                }
            ]
        }

        if(b=='usuarios') {
            var ord=0
            var qtb=100
            var data = [
                {data: "nm", name: "nm", title: "<i class='fa fa-male text-info'></i> Nombre",className: "text-left",
                    render: function (data, type, bc) {

                        return ' '+bc.nm

                    }
                },
                {data: "us", name: "us", title: "<i class='fa fa-user text-info'></i> Usuario",className: "text-center",
                    render: function (data, type, bc) {

                        return ' '+bc.us


                    }
                },
                {data: "loc", name: "loc", title: "<i class='fa fa-location-arrow text-info'></i> Ubicacion",className: "text-center",
                    render: function (data, type, bc) {

                        return ' '+bc.loc


                    }
                },
                {
                    data: "id",
                    name: "id",
                    title: "<i class='fa fa-trash text-info'></i> Eliminar",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="delus'+bc.id+'"><i class="fa fa-trash text-danger fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='locations') {
            var ord=0
            var qtb=100
            var data = [
                {data: "nloc", name: "nloc", title: "Ubicacion",className: "text-left"},
                {data: "qloc", name: "qloc", title: "Visitas",className: "text-center"},
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="delloc'+bc.id+'"><i class="fa fa-trash text-dark fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='dvc') {
            var ord=0
            var qtb=100
            var data = [
                {data: "loc", name: "loc", title: "Ubicacion",className: "text-left"},
                {
                    data: "thm",
                    name: "thm",
                    title: "Termica",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.thm==0){return '<i class="fas fa-ban text-danger"></i>'}
                        if(bc.thm==1){return '<i class="fas fa-fire text-success"></i>'}


                    }
                },
                {
                    data: "rcf",
                    name: "rcf",
                    title: "Biometria",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.thm==0){return '<i class="fas fa-ban text-danger"></i>'}
                        if(bc.thm==1){return '<i class="fas fa-smile text-success"></i>'}


                    }
                },
                {data: "register", name: "register", title: "Registro",className: "text-left"},
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="deldv'+bc.id+'"><i class="fa fa-trash text-dark fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='w-man') {
            var ord=0
            var qtb=10
            var data = [
                {data: "nm", name: "nm", title: "Seguridad",className: "text-left"},
                {data: "turno", name: "turno", title: "Turno",className: "text-left"},
                {data: "loc", name: "loc", title: "Ubicacion",className: "text-left"},
                {data: "psv", name: "psv", title: "Clave",className: "text-left"},
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="delps'+bc.id+'"><i class="fa fa-trash text-dark fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='w-turno') {
            var ord=0
            var qtb=10
            var data = [
                {data: "item", name: "item", title: "Turno",className: "text-left"},
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><a class="" href="#!" id="deltn'+bc.id+'"><i class="fa fa-trash text-dark fx-pand"></i></a></div>'

                    }
                }
            ]
        }

        if(b=='autos-history') {
            var ord=1
            var qtb=25
            var data = [
                {data: "cnd", name: "cnd", title: "Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {
                        const ac = new bccore();
                        var cnd=bc.cnd
                        var ln = cnd.split(",")[0]
                        var fn = cnd.split(",")[1]

                        return '<i class="fa fa-male text-info"></i>  '+ac.fcapital(fn)+' '+ac.fcapital(ln)

                    }
                },
                {data: "fecha", name: "fecha", title: "Fecha - Hora",className: "text-left",orderable: true},
                {data: "status", name: "status", title: "Tipo de Acceso",className: "text-left",orderable: true, render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-car text-success"></i><i class="fa fa-arrow-right text-success"></i> Entrada'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-car text-danger"></i> Salida'}

                    }
                }
            ]
        }

        if(b=='visita-history-main') {
            var ord=1
            var qtb=25
            var data = [
                {data: "fecha", name: "fecha", title: "Ingreso",className: "text-success",orderable: true,render: function (data, type, bc) {

                        return bc.fecha


                    }},
                {data: "fsal", name: "fsal", title: "Salida",className: "text-danger",orderable: true,render: function (data, type, bc) {

                        return bc.fsal

                    }},
                {data: "status", name: "status", title: "Estado de la Visita",className: "text-left",orderable: true, render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-user text-success"></i><i class="fa fa-arrow-right text-success"></i> En Visita'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-user text-danger"></i> Salio de la Empresa'}

                    }
                }
            ]
        }

        if(b=='visita-history') {
            var ord=1
            var qtb=25
            var data = [
                {data: "nm", name: "nm", title: "Visitante",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-male text-info"></i>  '+bc.nm

                    }
                },
                {data: "fecha", name: "fecha", title: "Ingreso",className: "text-success",orderable: true,render: function (data, type, bc) {

                        return bc.fecha


                    }},
                {data: "fsal", name: "fsal", title: "Salida",className: "text-danger",orderable: true,render: function (data, type, bc) {

                        return bc.fsal

                    }},
                {data: "status", name: "status", title: "Estado de la Visita",className: "text-left",orderable: true, render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-user text-success"></i><i class="fa fa-arrow-right text-success"></i> En Visita'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-user text-danger"></i> Salio de la Empresa'}

                    }
                }
            ]
        }

        if(b=='visita-history-cnd') {
            var ord=2
            var qtb=25
            var data = [
                {data: "placa", name: "placa", title: "Vehiculo",className: "text-left",orderable: true,
                    render: function (data, type, bc) {

                        return '<i class="fa fa-truck text-info"></i>  '+bc.placa.toUpperCase()

                    }
                },
                {data: "cnd", name: "cnd", title: "Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {
                        const ac = new bccore();
                        var cnd=bc.cnd
                        var ln = cnd.split(",")[0]
                        var fn = cnd.split(",")[1]

                        return '<i class="fa fa-male text-info"></i>  '+ac.fcapital(fn)+' '+ac.fcapital(ln)

                    }
                },
                {data: "fechax", name: "fechax", title: "Fecha - Hora",className: "text-center",orderable: true,
                    render: function (data, type, bc) {

                        var fecha=bc.fechax
                        var fh = fecha.split("#")[0]
                        var st = fecha.split("#")[1]

                        if(st==1){return '<span class="text-success">'+fh+'</span>'}
                        if(st==2){return '<span class="text-danger">'+fh+'</span>'}

                    }},
                {data: "status", name: "status", title: "Tipo de Acceso",className: "text-left",orderable: true, render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-car text-success"></i><i class="fa fa-arrow-right text-success"></i> Entrada'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-car text-danger"></i> Salida'}

                    }
                }
            ]
        }

        if(b=='visita-history-truck') {
            var ord=0
            var qtb=25
            var data = [
                {data: "cnd", name: "cnd", title: "<i class='fa fa-male text-info'></i> Conductor",className: "text-left",orderable: true,
                    render: function (data, type, bc) {
                        const ac = new bccore();
                        var cnd=bc.cnd
                        var ln = cnd.split(",")[0]
                        var fn = cnd.split(",")[1]

                        return '<i class="fa fa-male text-info"></i>  '+ac.fcapital(fn)+' '+ac.fcapital(ln)

                    }
                },
                {data: "fechax", name: "fechax", title: "<i class='fa fa-calendar text-info'></i> Fecha - Hora",className: "text-center",orderable: true,
                    render: function (data, type, bc) {

                        var fecha=bc.fechax
                        var fh = fecha.split("#")[0]
                        var st = fecha.split("#")[1]

                        if(st==1){return '<span class="text-success">'+fh+'</span>'}
                        if(st==2){return '<span class="text-danger">'+fh+'</span>'}

                    }},
                {data: "status", name: "status", title: "<i class='fa fa-arrow-left text-info'></i><i class='fa fa-arrow-right text-info'></i> Tipo de Acceso",className: "text-left",orderable: true, render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="fa fa-car text-success"></i><i class="fa fa-arrow-right text-success"></i> Entrada'}
                        if(bc.status==2){return '<i class="fa fa-arrow-left text-danger"></i> <i class="fa fa-car text-danger"></i> Salida'}

                    }
                }
            ]
        }


        $(a).DataTable({
            processing: false,
            responsive: true,
            serverSide: true,
            paging: true,
            autoWidth: false,
            search: {"regex": false},
            ajax: {
                "url": ac.bcurl()+"bcpower/phx/fx.php",
                "type": "post",
                "data": {"v": 2, "a": a, "b":b, "c":c, "d":d}
            },
            order: [[ord, "desc"]],
            columns: data,
            retrieve: true,
            "pageLength": qtb
        });


        $(a).on("click","td > div.list-item",function() {
            const ac = new bccore();
            var table = $(a).DataTable();
            let tr = $(this).closest('tr')
            let row = table.row(tr)
            let id = parseInt(row.data().id)

            if(b=='visitas'){

                $('#hst'+id).click(function () {

                    window.scrollTo(0, 0);

                    let nm = row.data().nm
                    let ced = row.data().ced
                    let idv = parseInt(row.data().idv)

                    localStorage.setItem('nm-v',nm)
                    localStorage.setItem('ced-v',ced)

                    ac.bctext('.title-core','<i class="fa fa-history text-info"></i> Historico de Visitas:'+nm)

                    console.log('Historico '+id)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main',2)
                    ac.bceinfo('visitas',id,0,0,0,0,0)
                    ac.bcworker('table', '.h-visitas','t-visitas-hs')
                    ac.bctablet('.t-visitas-hs','visita-history-main',ced,0)
                    //ac.bcdata('visitas',nm,ced,'.h-visitas')

                    ac.bceinfo('fotodoc',idv,3,'.fdoc',0,0,0)
                    $('.carousel').carousel('pause');

                    $('.go-back-history-main').click(function () {

                        var t='t-visitas'

                        ac.bchidden('.w-table-main',1)

                        ac.bctext('.title-core','Registro de Visitas')
                        ac.bcworker('table', '.bc-table',t)
                        ac.bctablet('.'+t,'visitas',0,0)
                        var table = $('.'+t).DataTable()
                        table.ajax.reload()

                    })



                })

            }

            if(b=='autos'){

                $('#hsta'+id).click(function () {

                    window.scrollTo(0, 0);

                    let placa = row.data().placa
                    let idv = parseInt(row.data().idv)

                    localStorage.setItem('nm-v',placa)
                    localStorage.setItem('ced-v',placa)

                    ac.bctext('.title-core','<i class="fa fa-history text-info"></i> Historico de Vehiculo #'+placa.toUpperCase())

                    console.log('Historico '+id)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main-auto',2)
                    ac.bceinfo('autos',id,0,0,0,0,0)
                    //ac.bcdata('autos',placa,0,'.h-visitas-auto')
                    ac.bcworker('table', '.h-visitas-auto','t-visitas-auto')
                    ac.bctablet('.t-visitas-auto','autos-history',placa,0)
                    ac.bceinfo('fotodoc',idv,4,'.fdoc-vh',0,0,0)
                    $('.carousel').carousel('pause');

                    $('.go-back-history-main-auto').click(function () {

                        var t='t-visitas-autos'

                        ac.bchidden('.w-table-main',1)

                        ac.bctext('.title-core','Registro de Autos')
                        ac.bcworker('table', '.bc-table',t)
                        ac.bctablet('.'+t,'autos',0,0)
                        var table = $('.'+t).DataTable()
                        table.ajax.reload()


                    })

                })

            }

            if(b=='visitantes'){

                $('#delvt'+id).click(function () {
                    ac.bcdelx('dtablet',b,id,'.t-visitante')
                })

                $('#act'+id).click(function () {

                    let wd = parseInt(row.data().wd)
                    if(wd==1){
                        console.log('A:'+2)
                        ac.bceupdate('autorizacion',2,id,'.t-visitante')

                    }
                    if(wd==2){
                        console.log('A:'+1)
                        ac.bceupdate('autorizacion',1,id,'.t-visitante')

                    }


                })

                $('#hstvs'+id).click(function () {

                    window.scrollTo(0, 0);

                    let nm = row.data().nm
                    let ced = row.data().ced
                    let emp = row.data().emp
                    let id = parseInt(row.data().id)

                    localStorage.setItem('nm-v',nm)
                    localStorage.setItem('ced-v',ced)
                    localStorage.setItem('emp-v',emp)

                    $('.vs-nm').empty()
                    $('.vs-nm').append('<i class="fa fa-history text-info"></i> Historial de Visita: '+ac.fcapital(nm)+' | <i class="fa fa-building text-info"></i> Empresa: '+ac.fcapital(emp) )

                    console.log('Historico '+id)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main-vs',2)
                   // ac.bcdata('visitas',nm,ced,'.h-visitas-vs')
                    ac.bcworker('table', '.h-visitas-vs','t-visitas-hs')
                    ac.bctablet('.t-visitas-hs','visita-history',ced,0)

                })

                $('.go-back-history-main-vs').click(function () {

                    var t='t-visitante'

                    ac.bchidden('.w-table-main',1)
                    ac.bctext('.title-core','Visitantes Registrados')
                    ac.bcworker('table', '.bc-table',t)
                    ac.bctablet('.'+t,'visitantes',0,0)
                    var table = $('.'+t).DataTable()
                    table.ajax.reload()


                })

            }

            if(b=='conductores'){

                /*$('#delcnd'+id).click(function () {
                    ac.bcdelx('dtablet',b,id,'.t-visitante')
                })*/

                $('#hstcnd'+id).click(function () {

                    window.scrollTo(0, 0);

                    let nm = row.data().nm
                    let id = parseInt(row.data().id)

                    localStorage.setItem('nm-v',nm)

                    var ln = nm.split(",")[0]
                    var fn = nm.split(",")[1]

                    $('.vs-nm').empty()
                    $('.vs-nm').append('Historial de conductor: '+ac.fcapital(fn)+' '+ac.fcapital(ln))

                    console.log('Historico '+id)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main-vs',2)
                    ac.bcworker('table', '.h-visitas-vs','t-visitas-hs')
                    ac.bctablet('.t-visitas-hs','visita-history-cnd',nm,0)
                   // ac.bcdata('autos-cond',nm,0,'.h-visitas-vs')

                    $('.go-back-history-main-vs').click(function () {

                        var t='t-conductores'

                        ac.bchidden('.w-table-main',1)
                        ac.bctext('.title-core','Registro de Condutores')
                        ac.bcworker('table', '.bc-table',t)
                        ac.bctablet('.'+t,'conductores',0,0)
                        var table = $('.'+t).DataTable()
                        table.ajax.reload()


                    })

                })

            }

            if(b=='camiones'){
                $('#hstcam'+id).click(function () {

                    window.scrollTo(0, 0);

                    let plc = row.data().plc
                    let id = parseInt(row.data().id)

                    localStorage.setItem('plc-v',plc)

                    $('.vs-nm').empty()
                    $('.vs-nm').append('Historial de Vehiculo Placa: '+plc )

                    console.log('Historico '+plc)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main-vs',2)
                   // ac.bcdata('autos-cam',plc,0,'.h-visitas-vs')

                    ac.bcworker('table', '.h-visitas-vs','t-visitas-hs')
                    ac.bctablet('.t-visitas-hs','visita-history-truck',plc,0)

                    $('.go-back-history-main-vs').click(function () {

                        var t='t-camiones'

                        ac.bchidden('.w-table-main',1)
                        ac.bctext('.title-core','Camiones Registrados')
                        ac.bcworker('table', '.bc-table',t)
                        ac.bctablet('.'+t,'camiones',0,0)
                        var table = $('.'+t).DataTable()
                        table.ajax.reload()


                    })

                })
            }

            if(b=='alertas'){

                $('#delal'+id).click(function () {
                    console.log('Solucionar id:'+id)
                    ac.bceupdate('alarma',2,id,'.t-alertas')
                    ac.shark()

                })

            }

            if(b=='usuarios'){

                $('#delus'+id).click(function () {
                    console.log('Borrar id:'+id)
                    ac.bcdelx('dtablet',b,id,'.t-users')

                })

            }

            if(b=='locations'){
                let qv = parseInt(row.data().qloc)
                if(qv >0){$('.m-loc'+id).hide()}
                $('#delloc'+id).click(function () {
                    console.log('Borrar id:'+id)
                    ac.bcdelx('dtablet',b,id,'.t-loc')

                })

            }

            if(b=='w-man') {

                $('#delps' + id).click(function () {
                    console.log('Borrar id:' + id)
                    ac.bcdelx('dtablet', b, id, '.t-wman')

                })
            }

            if(b=='w-turno') {

                $('#deltn' + id).click(function () {
                    console.log('Borrar id:' + id)
                    ac.bcdelx('dtablet', b, id, '.t-turno')

                })
            }




        })

    }

    bctabletrp(a,b,c){

        if(b=='marcaciones-rp') {
            var ord=2
            var data = [
                {data: "nm", name: "nm", title: "Visitante",className: "text-left",render: function (data, type, bc) {

                        var str=bc.nm
                        var na = str.split(" ")[0]
                        var nb = str.split(" ")[1]
                        var nc = str.split(" ")[2]
                        var nd = str.split(" ")[3]

                        return na+' '+nb

                    }
                },
                {data: "fecha", name: "fecha", title: "Entrada",className: "text-left"},
                {data: "fsal", name: "fsal", title: "Salida",className: "text-left"}
            ]
        }

        $(a).DataTable( {
            processing: false,
            responsive: true,
            serverSide: true,
            paging: true,
            autoWidth: false,
            search: {"regex": false},
            ajax: {
                "url": "https://fingerscan.inteliguscore.com/bcpower/phx/fx.php",
                "type": "post",
                "data": {"v": 2, "a": a, "b":b, "c":c}
            },
            order: [[ord, "desc"]],
            columns: data,
            retrieve: true,
            dom: '<"row"<"col-md-12"<"row"<"col-md-6"B><"col-md-6"f> > ><"col-md-12"rt> <"col-md-12"<"row"<"col-md-5"i><"col-md-7"p>>> >',
            buttons: {
                buttons: [
                    { extend: 'excel', className: 'btn' },
                    { extend: 'print', className: 'btn' }
                ]
            },
            "oLanguage": {
                "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
                "sInfo": "Showing page _PAGE_ of _PAGES_",
                "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
                "sSearchPlaceholder": "Search...",
                "sLengthMenu": "Results :  _MENU_",
            },
            "stripeClasses": [],
            "lengthMenu": [7, 10, 20, 50],
            "pageLength": 100
        } );

    }

    bcdelx(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:5,a:a,b:b,c:c});
        lx.done(function (r) {

            if(a=='dtablet') {
                var t = $(d).DataTable();
                t.ajax.reload();
            }

        })

    }

    bctitlex(a){

        $('title').empty()
        $('title').append(a)
    }

    bctext(a,b){

        $(a).empty()
        $(a).append(b)
    }

    bchidden(a,h){

        if(h==1) {
            $('#warning-field').hide()
            $('.w-table-main').hide()
            $('.w-history-main').hide()
            $('.w-history-main-vs').hide()
            $('.w-user-main').hide()
            $('.w-loc-main').hide()
            $('.w-history-main-auto').hide()
            $('.w-reporte').hide()
            $('.rep-vis-print').hide()
            $('.w-personal-main').hide()
            $('.w-turno-main').hide()
            $('.w-general-main').hide()
            $('.w-reporte-auto').hide()
            $(a).show()
        }

        if(h==0) {$(a).hide()}
        if(h==2) {$(a).show()}

    }

    bcselect(a,b,c,d,e){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:4,a:a,b:b,c:c});

        lx.done(function (r) {

            $(d).empty()

            $(d).append('<option value="0" selected>Selecione '+e+'</option>')

            $.each(r.lx, function (key, bc) {

                $(d).append('<option value="' + bc.item + '">' + bc.item + '</option>')

            })

            $(d).select2({
                tags: true
            })

        })


    }

    bcsavedata(dt,b,c){

        const ac = new bccore();

        $.ajax({
            url: ac.bcurl()+'bcpower/phx/fx.php',
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            data: dt,
            success: function (r) {

                if(c=='table'){
                    var table = $(b).DataTable()
                    table.ajax.reload()
                }

                if(c=='hidden'){
                    ac.bchidden(b,1)
                }

                if(c=='data'){

                    if(b=='reporte'){
                        ac.bchidden('.w-general-main',1)
                        ac.bctext('.title-gen-form','Opciones Generales')
                        ac.bceinfo('general','n-rep-vs',0,0,0,0,0)
                        ac.bceinfo('general','n-rep-auto',0,0,0,0,0)
                    }
                }

            }
        });

    }

    wachtdog(url){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:1000})

        lx.done(function (r) {

            var dog = r.wd
            if (dog == null) {
                console.log('Guuau!')
                localStorage.removeItem('ids')
                location.href = url;
            }
            if (dog != null) {

                console.log('Dog happy and sleep')
                localStorage.setItem('ids', r.wd)

            }

        })
    }

    bceinfo(a,b,c,d,e,f,g){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:3,a:a,b:b,c:c,d:d,e:e,f:f,g:g});

        lx.done(function (r) {

            if(a=='visitas'){

                $('.nm').empty()
                $('.nm').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> '+r.nm)

                $('.emp').empty()
                $('.emp').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'+r.emp)

                $('.ced').empty()
                $('.ced').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> '+r.ced)

            }

            if(a=='autos'){

                var str = r.placa
                var res = str.toUpperCase()

                var cnd=r.emp
                var ln = cnd.split(",")[0]
                var fn = cnd.split(",")[1]

                $('.emp').empty()
                $('.emp').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> '+ac.fcapital(fn)+' '+ac.fcapital(ln))

                $('.placa-nm').empty()
                $('.placa-nm').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'+res)

            }

            if(a=='fotodoc' && c >=3){
                var path=r.path
                var emp=localStorage.getItem('loc-emp')

                if(r.path==null || r.path=="" ){var path='nfoto.jpg';$(d).addClass('fx-bccropped')}
                if(emp=='acetioxigeno' && r.path==null){var path='nfoto_ac.png';$(d).addClass('fx-bccropped')}

                $(d).prop('src','ftbox/'+path)

            }

            if(a=='turnos'){

                if(r!=null) {

                    localStorage.setItem('tn-t', r.tn)
                    localStorage.setItem('nm-t', r.nm)
                }

                if(r==null) {

                    localStorage.removeItem('tn-t')
                    localStorage.removeItem('nm-t')
                }

            }

            if(a=='general'){

                if(b=='n-rep-vs'){
                    $('.n-rep-vs').val(r.item)
                    localStorage.setItem('n-rep-vs',r.item)
                }
                if(b=='n-rep-auto'){
                    $('.n-rep-auto').val(r.item)
                    localStorage.setItem('n-rep-auto',r.item)
                }

            }

            if(a=='horas-auto'){
                $(b).empty()
                $(b).append(r.item)
            }

        })
    }

    bcworker(a,b,c){

        if(a=='table') {
            $(b).empty()
            $(b).append('<table class="table '+c+'"></table>')
        }

    }

    shark(){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:1001})

        lx.done(function (r) {

            console.log(r)

                    var sw = r.sw
                    if (sw == 0) {
                        console.log('Water is safe!')
                        $('.b-alert').removeClass('text-danger')

                    }
                    if (sw != 0) {
                        console.log('Shark in the water!')
                        $('.b-alert').removeClass('text-danger')
                        $('.b-alert').addClass('text-danger')

                        ac.bcdata('alertas', 0, 0, '.l-alertas')

                    }




        })


    }

    bctimer(a,b){

        const ac = new bccore();

        if(a=='shark') {
            setInterval(function () {
                ac.shark()
            }, b);
        }

    }

    bceupdate(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:6,a:a,b:b,c:c,d:d});

        lx.done(function (r) {

                var table = $(d).DataTable()
                table.ajax.reload()

        })



    }

    bcmapmark(a,l,g) {


        var ga=parseFloat(l)
        var gb=parseFloat(g)

        var div=document.getElementById(a)

        var map = new google.maps.Map(div, {
            zoom: 16,
            center: {lat: ga, lng: gb},
        });
        var marker = new google.maps.Marker({position: map.getCenter(), map: map, draggable: true});
        google.maps.event.addListener(marker, 'dragend', function (event) {

            var geopoint=this.getPosition().toString();
            var tseparado = geopoint.split(',');
            var a=tseparado[0];
            var b=tseparado[1];
            var lat=a.replace('(', '');
            var lg=b.replace(')', '');
            console.log('lat:'+lat+' lg:'+lg);
            localStorage.setItem('lat',lat);
            localStorage.setItem('lg',lg);

        });

    }

    bcrfi(method, url, data, callback){
        $.ajax({
            async: true,
            crossDomain: true,
            url: url,
            method: method,
            headers: {
                token: "34865e4d8b61403db84aa78f964a4191"
            },
            data: data
        }).done(function (response) {
            callback(response)
        });
    }

    gettoken(i){

        function getUrlParams( prop ) {
            var params = {};
            var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
            var definitions = search.split( '#' );
            definitions.forEach( function( val, key ) {
                var parts = val.split( '=', 2 );
                params[ parts[ 0 ] ] = parts[ 1 ];
            } );

            return ( prop && prop in params ) ? params[ prop ] : params;
        }
        var token=getUrlParams(i);

        if(token!='[object Object]') {

            console.log('log:'+token)

            if(token=='acetioxigeno'){

                console.log('log-token:'+token)

                if(token=='acetioxigeno'){
                    $('.brand-name').empty()
                    $('.brand-name').append('Control de Visita')
                    $('.l-image').prop('style','background-image: url(https://skm.eman.live/assets/img/logo-ac.png) !important;background-color: #fff !important;')
                    localStorage.setItem('loc-emp',token)

                }
            }

        }

    }

    fcapital(str){
        str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        return str
    }


}










