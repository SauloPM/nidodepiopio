$(document).ready(function() {

    // ––––––––––– //
    //     WOW     //
    // ––––––––––– //

   new WOW().init();

    // ––––––––––––––––– //
    //     PRELOADER     //
    // ––––––––––––––––– //

    // Hacemos desaparecer el spinner con un delay de medio segundo
    $('#spinner').fadeOut(500);

    // El fondo blanco desaparecerá medio segundo después del spinner
    $('#preloader').delay(1500).fadeOut(500);

    $('body').css({
        'overflow': 'visible', // Restablecemos la propiedad CSS overflow
        'overflow-x': 'hidden' // Ocultamos el exceso de contenido en el eje x
    });

    // –––––––––––– //
    //     LOPD     //
    // –––––––––––– //

    // Activamos o desactivamos el botón del formulario de contacto en función de si se ha aceptado o no la LOPD, respectivamente
    $("#contacto form input[type='checkbox']").change(function() {
        if ( $(this).is(':checked') ) {
            $("#contacto .boton").addClass("activo");
            $("#contacto .boton").prop("disabled", false);
        }
        else {
            $("#contacto .boton").removeClass("activo");
            $("#contacto .boton").prop("disabled", true);
        }
    });

    // –––––––––––––––– //
    //     PARALLAX     //
    // –––––––––––––––– //

    $(window).scroll(function() {
      parallax();
    });

    // Efecto Parallax sobre la imagen de fondo del header
    function parallax() {
      var wScroll = $(window).scrollTop();

      /* Reducimos la velocidad de desplazamiento de la imagen de fondo a la mitad que en fixed */
      $('header').css('background-position', 'center ' + (wScroll * .5) + 'px');
    }

    // ––––––––––––––– //
    //     COOKIES     //
    // ––––––––––––––– //

    $('#cookies button').click(function() {
        $('#cookies').fadeOut();
    });

    // –––––––––––––––––––– //
    //     OWL CAROUSEL     //
    // –––––––––––––––––––– //

    // Configuración
    $('.loop').owlCarousel({
        loop: false,
        nav: false,
        center: false,
        items: 3,
        responsive : {
            0 : {
                items : 1,
            },
            550 : {
                items : 2,
            },
            980 : {
                items : 3,
            }
        }
    });

    // ––––––––––––––––– //
    //     COPYRIGHT     //
    // ––––––––––––––––– //

    // Obtenemos el año actual
    var year = new Date();
    year = year.getFullYear();
    $('#anoActual').text(year);
});