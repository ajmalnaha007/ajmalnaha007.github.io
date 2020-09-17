var getScrollposition = window.scrollY,
    header = document.getElementById("ps-header");

function addClassHeader() {
    header.classList.add("is-sticky");
}

function removeClassHeader() {
    header.classList.remove("is-sticky");
}

window.addEventListener('scroll', function () {
    getScrollposition = window.scrollY;
    if (getScrollposition > 120) {
        addClassHeader();
    }
    else {
        removeClassHeader();
    }
});

var bannerSec = document.getElementById('ps-banner-sec');
bannerSec.style.width = '100%';
bannerSec.style.height = window.innerHeight + "px";

const goTopBtn = document.getElementById('go-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollToTop > 20 || document.documentElement.scrollTop > 20)
        goTopBtn.classList.add('active');
    else
        goTopBtn.classList.remove('active');
})

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {

        // // Header Sticky
        // $(window).on('scroll', function () {
        //     if ($(this).scrollTop() > 120) {
        //         $('#ps-header').addClass("is-sticky");
        //     }
        //     else {
        //         $('#ps-header').removeClass("is-sticky");
        //     }
        // });

        // Go to Top
        // $(function () {
        //     //Scroll event
        //     $(window).on('scroll', function () {
        //         var scrolled = $(window).scrollTop();
        //         if (scrolled > 300) $('.go-top').fadeIn('slow');
        //         if (scrolled < 300) $('.go-top').fadeOut('slow');
        //     });
        //     //Click event
        //     $('.go-top').on('click', function () {
        //         $("html, body").animate({ scrollTop: "0" }, 500);
        //     });
        // });

    });
}(jQuery));