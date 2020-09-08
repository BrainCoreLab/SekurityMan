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
                '                                <a href="javascript:void(0)" class="d-visitas"> Visitas </a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)" class="d-vistantes"> Visitantes </a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)" class="d-alertas"> Alertas </a>\n' +
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
                '                                <a href="#!">General</a>\n' +
                '                            </li>\n' +
                '\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu">\n' +
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

            ac.bctext('.title-core','Registro de Visitas')
            ac.bcworker('table', '.bc-table','t-visitas')
            ac.bctablet('.t-visitas','visitas',0,0)

            $('.d-visitas').click(function () {

                var t='t-visitas'

                ac.bchidden('.w-table-main',1)

                ac.bctext('.title-core','Registro de Visitas')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'visitas',0,0)
                var table = $('.'+t).DataTable()
                table.ajax.reload()

            })

            $('.d-vistantes').click(function () {

                var t='t-visitante'

                ac.bchidden('.w-table-main',1)
                ac.bctext('.title-core','Registro de Visitantes')
                ac.bcworker('table', '.bc-table',t)
                ac.bctablet('.'+t,'visitantes',0,0)
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
                ac.bctext('.title-core','Listado de Usuarios')
                ac.bctext('.title-cr-form','Creacion de Usuarios')
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

            /*Guardar*/

            $('.save-go-c-us').click(function () {

                console.log('Crear Usuario')

                var d = new FormData();

                var nus = $('.nm-us-c').val()
                var usc = $('.us-c').val()
                var psa = $('.ps-a-c').val()
                var psb = $('.ps-b-c').val()

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

                    if(bc.status==1){var status=' <i class="far fa-user text-danger"></i> No Registro Salida'}
                    if(bc.status==2){var status=' <i class="far fa-user text-success"></i>  Salida'}
                    if(bc.tmp==0){var tmp=' Manual '}
                    if(bc.tmp!=0){var tmp=bc.tmp}

                    $(d).append(' <div class="item-timeline">\n' +
                        '                                        <div class="t-meta-date">\n' +
                        '                                            <p class="text-success">E: '+bc.fch+'</p>\n' +
                        '                                            <hr>' +
                        '                                            <p class="text-danger">S: '+bc.fsal+'</p>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-dot">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="t-text">\n' +
                        '                                            <p><b>Temperatura: </b> '+tmp+' |<b> Ubicacion: </b> '+bc.loc+' | <b>Estado Visita: </b> '+status+'</p>\n' +
                        '                                        </div>\n' +
                        '                                    </div><hr>')
                }

                if(a=='alertas'){

                    $(d).append('<div class="dropdown-item">\n' +
                        '                                <div class="media">\n' +
                        '                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon text-danger"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>\n' +
                        '                                    <div class="media-body">\n' +
                        '                                        <div class="notification-para"><span class="user-name text-danger">'+bc.qty+'</span> '+bc.item+'</div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>')
                }

            })

        })




    }

    bctablet(a,b,c,d){

        const ac = new bccore();

        if(b=='visitas') {
            var ord=4
            var data = [
                {
                    data: "path",
                    name: "path",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {
                        if(bc.path==null || bc.path==""){
                            return '<img src="ftbox/nfoto.jpg" class="fix-w-80" />'
                        }
                        return '<img src="ftbox/' + bc.path + '" class="fix-w-80" />'

                    }
                },
                {data: "nm", name: "nm", title: "Visitante",className: "text-left"},
                {data: "emp", name: "emp", title: "Empresa",className: "text-left"},
                {data: "fecha", name: "fecha", title: "Entrada",className: "text-left"},
                {data: "fsal", name: "fsal", title: "Salida",className: "text-left"},
                {data: "loc", name: "loc", title: "Oficina",className: "text-left"},
                {data: "tmp", name: "tmp", title: "Temp",className: "text-center"},
                {data: "tm", name: "tm", title: "TM",className: "text-center"},
                {
                    data: "status",
                    name: "status",
                    title: "Estado",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.status==1){return '<i class="far fa-user text-danger"></i>'}
                        if(bc.status==2){return '<i class="far fa-user text-success"></i>'}


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

                        return '<div class="list-item"><div class="dropdown custom-dropdown">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#" id="hst'+bc.id+'">Historial</a>\n' +
                            '                                                            <a class="dropdown-item" href="#" id="sal'+bc.id+'">Salida</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='visitantes') {
            var ord=1
            var data = [
                {data: "nm", name: "nm", title: "Visitante",className: "text-left"},
                {data: "emp", name: "emp", title: "Empresa",className: "text-left"},
                {data: "ced", name: "ced", title: "Cedula",className: "text-left"},
                {
                    data: "wd",
                    name: "wd",
                    title: "Autorizacion",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        if(bc.wd==1){return '<i class="far fa-user text-success"></i>'}
                        if(bc.wd==2){return '<i class="far fa-user text-danger"></i>'}


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

                        return '<div class="list-item"><div class="dropdown custom-dropdown">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#!" id="act'+bc.id+'">Autorizacion</a>\n' +
                            '                                                            <a class="dropdown-item" href="#!" id="delvt'+bc.id+'">Eliminar</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='alertas') {
            var ord=1
            var data = [
                {data: "vfch", name: "vfch", title: "Fecha",className: "text-left"},
                {data: "ta", name: "ta", title: "Alerta",className: "text-left"},
                {data: "nm", name: "nm", title: "Visitante",className: "text-left"},
                {data: "emp", name: "emp", title: "Empresa",className: "text-left"},
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

                        return '<div class="list-item"><div class="dropdown custom-dropdown">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#" id="delal'+bc.id+'">Resolver</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='usuarios') {
            var ord=1
            var data = [
                {data: "nm", name: "nm", title: "Nombre",className: "text-left"},
                {data: "us", name: "us", title: "Usuario",className: "text-left"},
                {
                    data: "id",
                    name: "id",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<div class="list-item"><div class="dropdown custom-dropdown">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#" id="delus'+bc.id+'">Eliminar</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='locations') {
            var ord=1
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

                        return '<div class="list-item"><div class="dropdown custom-dropdown m-loc'+bc.id+'">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#" id="delloc'+bc.id+'">Eliminar</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

                    }
                }
            ]
        }

        if(b=='dvc') {
            var ord=1
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

                        return '<div class="list-item"><div class="dropdown custom-dropdown m-loc'+bc.id+'">\n' +
                            '                                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                            '                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>\n' +
                            '                                                        </a>\n' +
                            '\n' +
                            '                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink7">\n' +
                            '                                                            <a class="dropdown-item" href="#" id="delloc'+bc.id+'">Eliminar</a>\n' +
                            '                                                        </div>\n' +
                            '                                                    </div>' +
                            '</div>'

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
            order: [[ord, "ASC"]],
            columns: data,
            retrieve: true
        });


        $(a).on("click","td > div.list-item",function() {
            const ac = new bccore();
            var table = $(a).DataTable();
            let tr = $(this).closest('tr')
            let row = table.row(tr)
            let id = parseInt(row.data().id)

            if(b=='visitas'){

                $('#hst'+id).click(function () {

                    let nm = row.data().nm
                    let ced = row.data().ced
                    let idv = parseInt(row.data().idv)

                    localStorage.setItem('nm-v',nm)
                    localStorage.setItem('ced-v',ced)

                    console.log('Historico '+id)
                    ac.bchidden('.w-table-main',0)
                    ac.bchidden('.w-history-main',2)
                    ac.bceinfo('visitas',id,0,0)
                    ac.bcdata('visitas',nm,ced,'.h-visitas')
                    ac.bceinfo('fotodoc',idv,1,'.fdoc')
                    ac.bceinfo('fotodoc',idv,2,'.fterm')
                    ac.bceinfo('fotodoc',idv,3,'.fbio')
                    $('.carousel').carousel('pause');

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




        })

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
            $('.w-user-main').hide()
            $('.w-loc-main').hide()
            $(a).show()
        }

        if(h==0) {$(a).hide()}
        if(h==2) {$(a).show()}

    }

    bcselect(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:11,a:a,b:b,c:c});

        lx.done(function (r) {

            $(d).empty()

            $(d).append('<option value="0" selected>Selecione..</option>')

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

    bceinfo(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:3,a:a,b:b,c:c,d:d});

        lx.done(function (r) {
            if(a=='visitas'){

                $('.nm').empty()
                $('.nm').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> '+r.nm)

                $('.emp').empty()
                $('.emp').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'+r.emp)

                $('.ced').empty()
                $('.ced').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> '+r.ced)

            }
            if(a=='fotodoc' && c==1){
                var path=r.path
                if(r.path==null || r.path==""){var path='nfoto.jpg';$(d).addClass('fx-bccropped')}
                $(d).prop('src','ftbox/'+path)

            }
            if(a=='fotodoc' && c==2){
                var path=r.path
                if(r.path==null || r.path==""){var path='ntfoto.jpg';$(d).addClass('fx-bccropped')}
                $(d).prop('src','ftbox/'+path)


            }
            if(a=='fotodoc' && c==3){
                var path=r.path
                if(r.path==null || r.path==""){var path='nbfoto.jpg';$(d).addClass('fx-bccropped')}
                $(d).prop('src','ftbox/'+path)

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

            var sw = r.sw
            if (sw  == 0) {
                console.log('Water is safe!')
                $('.b-alert').removeClass('text-danger')

            }
            if (sw  != 0) {
                console.log('Shark in the water!')
                $('.b-alert').removeClass('text-danger')
                $('.b-alert').addClass('text-danger')
                ac.bcdata('alertas',0,0,'.l-alertas')

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


}









