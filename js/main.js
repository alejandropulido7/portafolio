$(document).ready(function() {


    var anchoPag = $(window).width();


    // $('#llenar1-bar').css({
    //     width: '' + $('#llenar1').html() + '%'
    // });
    // $('#llenar2-bar').css({
    //     width: '' + $('#llenar2').html() + '%'
    // });
    // $('#llenar3-bar').css({
    //     width: '' + $('#llenar3').html() + '%'
    // });
    // $('#llenar4-bar').css({
    //     width: '' + $('#llenar4').html() + '%'
    // });
    // $('#llenar5-bar').css({
    //     width: '' + $('#llenar5').html() + '%'
    // });
    // $('#llenar6-bar').css({
    //     width: '' + $('#llenar6').html() + '%'
    // });
    // $('#llenar7-bar').css({
    //     width: '' + $('#llenar7').html() + '%'
    // });
    // $('#llenar8-bar').css({
    //     width: '' + $('#llenar8').html() + '%'
    // });


    $(".loader").fadeOut("slow");
    var year = new Date();
    var anio = year.getFullYear();
    $('#anio').html(anio);


    // EFECTOS DE TRANSICIONES AL CARGAR
    $('.banner-titulo').each(function(index, elemento) {
        $(this).css({
            animationName: 'titulos-in',
            animationDuration: '1s'
        });
    });

    $('.cont-btn-arriba').css({
        cursor: 'inherit',
        opacity: '0'
    });

    $('.boton').each(function(index, elemento) {
        $(this).css({
            'top': '200px',
            opacity: '0'
        });
        $(this).animate({
            'top': '0',
            opacity: '1'
        }, 800 + (index * 300));
    });

    $('.universal-h2-bckg').css({
        top: '-300px',
        opacity: '0'
    });

    $('.text-about').css({
        top: '550px',
        opacity: '0'
    });

    // $('.top-portafolio__h2').css({
    //     left: '-100%'
    // });


    var posicionSkills = $('#skill-bars').offset().top;
    var posicionBanner = $('#top-banner').offset().top;
    var posicionAbout = $('#about-me').offset().top;
    var posicionPort = $('#portafolio').offset().top;


    $(window).scroll(function() {
        var posicionActual = $(window).scrollTop();

        // TRANSICION DE SCROLL

        /*EFECTOS BANNER */
        if (posicionActual > posicionBanner + 400) {

            $('.banner-titulo').css({
                transform: 'translateX(100%)',
                transition: '1s'
            });
            $('.btn-contacto').css({
                left: '400px',
                opacity: '0'
            });
            $('.btn-empezar').css({
                left: '400px',
                opacity: '0'
            });
            $('.nav-div').each(function(index, element) {
                $(this).css({
                    top: '400px',
                    opacity: '0',
                    transition: 'all 0.8s ease-out'
                });
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
            $('.btn-contacto').css({
                left: '0',
                opacity: '1',
                transition: 'all 0.8s ease-out'
            });
            $('.btn-empezar').css({
                left: '0',
                opacity: '1',
                transition: 'all 0.8s ease-out'
            });
            $('.nav-div').each(function(index, element) {
                $(this).css({
                    top: '0px',
                    opacity: '1',
                    transition: 'all 0.8s ease-out'
                });
            });

            $('.cont-btn-arriba').css({
                cursor: 'inherit',
                opacity: '0',
                transition: '1s'
            });
        }

        /* EFECTOS SOBRE MI */
        if (posicionActual > posicionAbout - 500) {
            $('.universal-h2-bckg').css({
                top: '0px',
                opacity: '1',
                transition: 'all 1s ease-out'
            });
            $('.text-about').css({
                top: '0px',
                opacity: '1',
                transition: 'all 0.8s ease-out'
            });
            $('.portfolio__img').css({
                opacity: '1'
            });
        } else {
            $('.universal-h2-bckg').css({
                top: '-300px',
                opacity: '0',
                transition: 'all 1s ease-out'
            });
            $('.text-about').css({
                top: '550px',
                opacity: '0',
                transition: 'all 0.8s ease-out'
            });
            $('.portfolio__img').css({
                opacity: '0',
                transition: 'all 1s ease-out'
            });
        }

        /*EFECTOS DE HABILIDADES*/

        if (posicionActual > posicionSkills - 400) {

            $('#llenar1-bar').css({
                width: '' + $('#llenar1').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar2-bar').css({
                width: '' + $('#llenar2').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar3-bar').css({
                width: '' + $('#llenar3').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar4-bar').css({
                width: '' + $('#llenar4').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar5-bar').css({
                width: '' + $('#llenar5').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar6-bar').css({
                width: '' + $('#llenar6').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar7-bar').css({
                width: '' + $('#llenar7').html() + '%',
                transition: '1.5s ease-out'
            });
            $('#llenar8-bar').css({
                width: '' + $('#llenar8').html() + '%',
                transition: '1.5s ease-out'
            });

            $('title-skill').css({
                width: 'initial',
                background: 'transparent',
                transition: '1s ease'
            });
        } else {
            $('#llenar1-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar2-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar3-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar4-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar5-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar6-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar7-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('#llenar8-bar').css({
                width: '0%',
                transition: '1s ease-out'
            });
            $('title-skill').css({


                width: '40%',
                background: '#fff'
            });
        }

        if (posicionActual > posicionPort - 400) {

            $('.top-portafolio__h2').css({
                left: '0%',
                transition: '1s ease-out'
            });
            $('.portfolio-img').css({
                opacity: '1'
            });
            $('.btn-portafolio').css({
                marginLeft: '70%'
            });

        } else {
            $('.top-portafolio__h2').css({
                left: '-150%',
                transition: '1s ease-out'
            });
            $('.portfolio-img').css({
                opacity: '0',
                transition: '1s ease'
            });
            $('.banner-portafolio').css({
                background: 'transparent'
            });
            $('.btn-portafolio').css({
                marginLeft: '0',
                transition: '1s ease'
            });
        }


    });

    //FIN EFECTOS TRANSICIONES

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

    $('.btn-menu-nav').each(function() {
        $(this).on('click', function() {
            $('.main-navigation').toggle('slow');
            $('body').css({
                'overflow-y': 'scroll'
            });
            $('#myBtn').removeClass("change");
        })
    });


    /* About me slider */
    $('.about-me-slider').slick({
        slidesToShow: 1,
        prevArrow: '<span class="span-arrow slick-prev"><</span>',
        nextArrow: '<span class="span-arrow slick-next">></span>'
    });

    /* Blog slider */
    $('.blog-slider').slick({
        slidesToShow: 2,
        prevArrow: '<span class="span-arrow slick-prev"><</span>',
        nextArrow: '<span class="span-arrow slick-next">></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

});



var counta = 0;

$(window).scroll(function(e) {


    /* Onscroll number counter */
    var statisticNumbers = $('.single-count');
    if (statisticNumbers.length) {
        var oTop = statisticNumbers.offset().top - window.innerHeight;
        if (counta == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
            });
            counta = 1;
        }
    }

});