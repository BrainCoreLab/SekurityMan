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
                '                                <a href="javascript:void(0)"> Visitas </a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="javascript:void(0)"> Visitantes </a>\n' +
                '                            </li>\n' +
                '                        </ul>\n' +
                '                    </li>\n' +
                '                    <li class="menu">\n' +
                '                        <a href="#fotos" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">\n' +
                '                            <div class="">\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>\n' +
                '                                <span>Fotos</span>\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>\n' +
                '                            </div>\n' +
                '                        </a>\n' +
                '                        <ul class="collapse submenu list-unstyled" id="fotos" data-parent="#menucore">\n' +
                '                            <li>\n' +
                '                                <a href="#!">Perfiles</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!">Termicas</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!">Documentos</a>\n' +
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
                '                                <a href="#!">Usuarios</a>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <a href="#!">Ubicaciones</a>\n' +
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

            ac.bctext('.title-core','Registro de Visitas')
            ac.bcworker('table', '.bc-table','t-visitas')
            ac.bctablet('.t-visitas','visitas',0,0)

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

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:5,a:a,b:b,c:c});

        lx.done(function (r) {

            $(d).empty()

            $.each(r.lx, function (key, bc) {

                if(a=='productos') {
                    $(d).append('<div class="col-sm-4 nopadding">\n' +
                        '                        <div class="tt-project-3">\n' +
                        '                            <div class="tt-project-3-img">\n' +
                        '                                <img class="img-responsive" src=ac.bcurl()+"ftbox/' + bc.path + '" height="282" width="389" alt="faulty and old wiring">\n' +
                        '                            </div>\n' +
                        '                            <div class="tt-project-3-info">\n' +
                        '                                <a class="tt-project-3-title" href="javascript:void(0)">' + bc.item + '</a>\n' +
                        '                                <div class="simple-text font-5"><p>' + bc.ds + '</p></div>\n' +
                        '                                <div><a href="#!" class="hped' + bc.id + ' link-simple-text c-btn"><i class="fa fa-arrow-right"></i> Agregar a Cotizacion</a></div>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>')

                    $('.hped' + bc.id).click(function () {

                        ac.inprodus(bc.cat + '-' + bc.scat, bc.item)

                    })
                }

                if(a=='pedidos') {
                    $(d).append(' <tr>\n' +
                        '<td>'+bc.id+'</td>\n' +
                        '<td>'+bc.cat+' - '+bc.item+'</td>\n' +
                        '</tr>')


                }

            })

        })




    }

    bctablet(a,b,c,d){

        const ac = new bccore();

        if(b=='visitas') {
            var data = [
                {
                    data: "path",
                    name: "path",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<img src="ftbox/' + bc.path + '" class="fix-w-80" />'

                    }
                },
                {data: "nm", name: "nm", title: "Visitante",className: "text-left"},
                {data: "emp", name: "emp", title: "Empresa",className: "text-left"},
                {data: "ced", name: "ced", title: "Cedula",className: "text-left"},
                {data: "fecha", name: "fecha", title: "Entrada",className: "text-left"},
                {data: "fsal", name: "fsal", title: "Salida",className: "text-left"},
                {data: "tmp", name: "tmp", title: "Temp",className: "text-center"},
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
                            '                                                            <a class="dropdown-item" href="#" id="alt'+bc.id+'">Alertas</a>\n' +
                            '                                                            <a class="dropdown-item" href="#" id="sal'+bc.id+'">Salida</a>\n' +
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
            order: [[4, "desc"]],
            columns: data,
            retrieve: true
        });


        $(a).on("click","td > div.list-item",function() {
            const ac = new bccore();
            var table = $(a).DataTable();
            let tr = $(this).closest('tr')
            let row = table.row(tr)
            let id = parseInt(row.data().id)


        })

    }

    bcdelx(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:3,a:a,b:b,c:c,d:d});
        lx.done(function (r) {

            const ac = new bccore();

            if(a=='tablet') {
                var t = $(d).DataTable();
                t.ajax.reload();
                $('.cr-list').trigger( "click" )
            }

            if(a=='pd-cot') {
                ac.lpdcot('.list-pd-cot')
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

    bcsavedata(data,url,a){

        const ac = new bccore();

        $.ajax({
            url: ac.bcurl()+'bcpower/phx/fx.php',
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            success: function (r) {

                if(a=='contacto'){

                    ac.bchidden('.tt-request-success',2)
                    $('.tt-request-success').empty()
                    $('.tt-request-success').append('Hemos enviado su pregunta!')
                    $('input').val('')
                    $('.go-cnt').val('Enviar')
                    return false

                }
                if(a=='cotizacion'){

                    ac.bchidden('.tt-request-success',1)
                    $('.tt-request-success').empty()
                    $('.tt-request-success').append('Hemos recibido su Cotization!')
                    $('input').val('')
                    localStorage.removeItem('su')
                    localStorage.removeItem('nm-cot')
                    localStorage.removeItem('em-cot')
                    ac.lpdcot('.list-pd-cot')
                    $('.cot-go').val('Enviar Cotizacion')
                    return false

                }
                if(a=='iprod'){

                    ac.bchidden('.w-list-productos',1)
                    ac.bctablet('.t-productos','productos',0,0)
                    var t = $('.t-productos').DataTable();
                    t.ajax.reload();
                    $('.cr-list').trigger( "click" )

                }
                if(a=='icat'){

                    ac.bchidden('.w-list-categoria',1)
                    ac.bctablet('.t-categoria','categorias',0,0)
                    var t = $('.t-categoria').DataTable();
                    t.ajax.reload();
                    $('.cr-list').trigger( "click" )

                }
                if(a=='iscat'){

                    var nc=localStorage.getItem('snc')
                    ac.bchidden('.w-error',0)
                    $('input').val('')
                    ac.bctablet('.t-scategoria','sbcat',nc,0)
                    var t = $('.t-scategoria').DataTable();
                    t.ajax.reload();
                    $('.cr-list').trigger( "click" )

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

    bcedit(a,b,c,d){

        const ac = new bccore();

        var lx = $.post(ac.bcurl()+"bcpower/phx/fx.php", {v:13,a:a,b:b,c:c,d:d});

        lx.done(function (r) {

            const ac = new bccore()

            if(a=='productos'){

                $('.cr-title').empty()
                $('.cr-title').append('Editar Producto')

                localStorage.removeItem('cat-pd')
                localStorage.removeItem('scat-pd')
                localStorage.removeItem('cat')
                localStorage.removeItem('scat')
                localStorage.setItem('u',1)
                localStorage.setItem('id',b)

                console.log('Crear Producto')

                ac.bchidden('.w-cr-productos',1)
                ac.bchidden('.w-rfotos',0)
                ac.bchidden('.w-error',0)
                ac.bcselect('cat',0,0,'.cat')
                $('.scat').prop('disabled',true)

                $('.cat').change(function() {

                    var ct=$('.cat').val()
                    if(ct!='0'){
                        $('.scat').prop('disabled',false)
                        ac.bcselect('scat',ct,0,'.scat')
                        localStorage.setItem('cat-pd',ct)
                    }
                    if(ct=='0'){
                        localStorage.setItem('scat-pd',0)
                        $('.scat').prop('disabled',true)

                    }

                });

                $('.scat').change(function() {
                    var sct = $('.scat').val()

                    if(sct=='0'){
                        localStorage.setItem('scat-pd',0)
                    }

                    localStorage.setItem('scat-pd',sct)
                })

                var im = new FileUploadWithPreview('c-img')

                $('#nc').val(r.nc)
                $('#ds').val(r.ds)


            }

            if(a=='categorias'){

                console.log('Cat Edit Activo')

                $('.cr-title').empty()
                $('.cr-title').append('Editar Categoria')

                ac.bchidden('.w-cr-categoria',1)
                ac.bchidden('.w-error',0)

                localStorage.setItem('snc',r.nc)
                localStorage.setItem('u',1)
                $('#ncat').val(r.nc)

            }

            if(a=='scat'){

                console.log('SubCat Activo')

                $('.cr-title').empty()
                $('.cr-title').append('Categoria: '+r.cat)
                localStorage.setItem('snc',r.nc)
                localStorage.setItem('u',1)
                $('#nscat').val(r.nc)

                ac.bchidden('.w-cr-subcat',1)
                ac.bchidden('.w-error',0)

                ac.bctablet('.t-scategoria','sbcat',r.cat,0)
                var t = $('.t-scategoria').DataTable();
                t.ajax.reload();


            }

            if(a=='pedidos'){

                console.log('SubCat Activo')

                ac.bchidden('.w-list-pedidos-view',1)

                $('.nm-pd').empty()
                $('.nm-pd').append(r.nm)

                $('.em-pd').empty()
                $('.em-pd').append(r.em)

                $('.tel-pd').empty()
                $('.tel-pd').append(r.ph)

                $('.ds-pd').empty()
                $('.ds-pd').append('Comentario: '+r.ds)

                $('.fc-pd').empty()
                $('.fc-pd').append(r.fch)

                ac.bcdata('pedidos',r.ids,0,'.l-cotizacion')



            }


        })



    }

    bcworker(a,b,c){

        if(a=='table') {
            $(b).empty()
            $(b).append('<table class="table '+c+'"></table>')
        }

    }


}









