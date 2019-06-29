(function($) {
    "use strict"
    var PATH = {};
    /******************** 1. PRELOADER ********************/
    PATH.preLoader = function() {
        // will first fade out the loading animation
        $(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".loader").delay(1000).fadeOut("slow");
    }

    /******************** 3. ADD CLASS HEADER ********************/
    PATH.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(),
                $(".navbar").addClass("nav-sticky")
        });
    }

    /******************** 4. NAV COLLAPSE ********************/
    PATH.MenuClose = function() {
        $('.navbar-nav .nav-link').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    /******************** 6. FIXED HEADER ********************/
    PATH.HeaderFixed = function() {
        var varHeaderFix = $(window).scrollTop() >= 60,
            $navbar = $('.navbar');
        if (varHeaderFix) {
            $navbar.addClass('nav-sticky');
        } else {
            $navbar.removeClass('nav-sticky');
        }

    }

    // header add class		
    PATH.addActive = function() {
        $("li.active-li").children("a.nav-link").addClass("active");
    }

    /* Document ready function */
    $(function() {
        PATH.HeaderSticky();
        PATH.MenuClose();
        PATH.addActive();
    });


    /* Window on load function */
    $(window).on('load', function() {
        PATH.preLoader();
    });


    $(window).on("scroll", function() {
        PATH.HeaderFixed();
    });

})(jQuery);