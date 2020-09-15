(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {

        // Header Sticky
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 120) {
                $('.uxhaven-nav').addClass("is-sticky");
            }
            else {
                $('.uxhaven-nav').removeClass("is-sticky");
            }
        });

        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'),
                    index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Go to Top
        $(function () {
            //Scroll event
            $(window).on('scroll', function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });
            //Click event
            $('.go-top').on('click', function () {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });

    });
}(jQuery));