$(document).ready(function() {


    // EFECTOS DE TRANSICIONES AL CARGAR
    $('.banner-titulo').each(function(index, elemento) {
        $(this).css({
            animationName: 'titulos-in',
            animationDuration: '1s'
        });
    });


    $('.btn-inicio').css({
        animationName: 'titulos-in',
        animationDuration: '1s'
    });

    /* Navegacion dinamica barra lateral */
    $('.nav-div').hover(function() {
        $(this).children('a').children('span').fadeIn();
        $(this).css({
            backgroundColor: '#5830FF',
            transition: 'all 1s'
        });
    }, function() {
        $(this).children('a').children('span').fadeOut();
        $(this).css({
            backgroundColor: 'transparent',
            transition: 'all 1s'
        });
    });

    /* Navigation burger onclick side navigation show */
    $('.burger-container').on('click', function() {
        $('.main-navigation').toggle('slow');

        if ($('#myBtn').hasClass('change')) {
            $('body').addClass('stop-scroll');
        } else {
            $('body').removeClass('stop-scroll');
        }
    });

    var posicionPort = $('#top-pag-portafolio').offset().top;
    var posicionItems = $('#portafolio-items').offset().top;

    var anchoPag = $(window).width();

    $(window).scroll(function() {
        var posicionActual = $(window).scrollTop();
        if (posicionActual > posicionPort + 400) {

            $('.banner-titulo').css({
                transform: 'translateX(100%)',
                transition: '1s'
            });
            $('.btn-empezar').css({
                left: '400px',
                opacity: '0'
            });
            $('.cont-btn-arriba').css({
                cursor: 'pointer',
                opacity: '1',
                transition: '1s ease-out'
            });
        } else {
            $('.banner-titulo').css({
                transform: 'translateX(0%)',
                transition: '1s'
            });
            $('.btn-empezar').css({
                left: '0',
                opacity: '1',
                transition: 'all 0.8s ease-out'
            });
            $('.cont-btn-arriba').css({
                opacity: '0',
                transition: '1s ease-out'
            });
        }



        if (posicionActual > posicionItems - 400) {

            $('.container-item-porta').fadeIn(300 + (index * 200));
        } else {
            $('.container-item-porta').fadeOut(300 + (index * 200));
        }
    });
});