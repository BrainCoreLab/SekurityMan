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

    menuside(){

        const ac = new bccore();

        $('.lg-go').click(function () {

            console.log('Login Go')

            var us=$('.us').val()
            var ps=$('.ps').val()

            if( !us || !ps ) {

                ac.bchidden('#warning-field',2)
                $('#warning-field').empty()
                $('#warning-field').append('<p class="text-danger">Valide sus datos!</p>')
                return false
            }
            ac.login(us,ps,'panel.html')
        })


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

        if(b=='productos') {
            var data = [
                {
                    data: "path",
                    name: "path",
                    title: "",
                    searchable: false,
                    orderable: false,
                    className: "text-center",
                    render: function (data, type, bc) {

                        return '<img src=ac.bcurl()+"ftbox/' + bc.path + '" class="fix-w-80" />'

                    }
                },
                {data: "cat", name: "cat", title: "Cat",className: "text-left"},
                {data: "scat", name: "scat", title: "SubCat",className: "text-left"},
                {data: "item", name: "item", title: "Producto",className: "text-left"},
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
                            '                                                            <a class="dropdown-item" href="#" id="edp'+bc.id+'">Editar</a>\n' +
                            '                                                            <a class="dropdown-item" href="#" id="delp'+bc.id+'">Eliminar</a>\n' +
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
            order: [[1, "desc"]],
            columns: data,
            retrieve: true
        });


        $(a).on("click","td > div.list-item",function() {

            var table = $(a).DataTable();
            let tr = $(this).closest('tr')
            let row = table.row(tr)

            if(b=='productos') {
                const ac = new bccore();
                let id = parseInt(row.data().id)

                $('#edp' + id).click(function () {
                    console.log('Editar Activo')
                    localStorage.setItem('id',id)
                    ac.bcedit('productos',id,0,0)

                })

                $('#delp' + id).click(function () {
                    console.log('Delete Activo')
                    ac.bcdelx('tablet',id,'productos','.t-productos')

                })
            }

            if(b=='categorias') {
                const ac = new bccore();
                let id = parseInt(row.data().id)
                let nc = row.data().item
                let nprod = parseInt(row.data().nprod)

                $('#edct' + id).click(function () {
                    console.log('Editar Activo')
                    localStorage.setItem('id',id)
                    localStorage.setItem('cat',nc)
                    ac.bcedit('categorias',id,0,0)

                })

                if(nprod == 0) {
                    $('#delct' + id).click(function () {
                        console.log('Delete Activo')
                        ac.bcdelx('tablet', id, 'categorias', '.t-categorias')
                    })
                }

                if(nprod > 0) {
                    $('#delct' + id).hide()
                }



            }

            if(b=='sbcat') {
                const ac = new bccore();
                let id = parseInt(row.data().id)
                let nc = row.data().item
                let cat = row.data().cat

                $('#edsct' + id).click(function () {
                    console.log('Editar SubCat Activo')
                    localStorage.setItem('id',id)
                    localStorage.setItem('cat',cat)
                    ac.bcedit('scat',id,0,0)

                })

                $('#delsct' + id).click(function () {
                    console.log('Delete Activo')
                    ac.bcdelx('tablet',id,'scat','.t-scategoria')

                })




            }

            if(b=='pedidos') {
                const ac = new bccore();
                let id = parseInt(row.data().id)
                let ids = row.data().ids

                $('#verpd' + id).click(function () {
                    console.log('Pedidos Activo')
                    localStorage.setItem('id',ids)
                    ac.bcedit('pedidos',ids,0,0)

                })

            }





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

    bctitlex(t){

        $('title').empty()
        $('title').append(t)
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
                localStorage.setItem('ids', r.ids)

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


}









