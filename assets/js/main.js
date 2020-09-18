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

var toggleBtn = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});



// document.addEventListener('click', (e) => {
//     let isClicked = menu.contains(e.target);
//     if (isClicked) {
//         toggleBtn.classList.remove('is-active');
//         header.classList.remove('minisidebar');
//     }
// });

// toggleBtn.addEventListener('click', () => {
//     toggleBtn.classList.toggle('is-active');
//     header.classList.toggle('minisidebar');
// });


(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {

        // $('#test').on('click', function (event) {
        //     $(this).toggleClass('open');
        //     $('#menu').slideToggle(400);
        // });

        // $(".has-submenu a").click(function() {
        //     if(window.innerWidth < 992){
        //         if($(this).parent().hasClass('open')){
        //             $(this).siblings('.submenu').removeClass('open');
        //             $(this).parent().removeClass('open');
        //         } else {
        //             $(this).siblings('.submenu').addClass('open');
        //             $(this).parent().addClass('open');
        //         }
        //     }
        // });

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