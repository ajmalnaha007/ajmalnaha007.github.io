const mediaMobile = window.matchMedia('(min-width: 991px)')

onloadFucntion = () => {
    bannerHeight();
    bannerOffset();
}
window.onresize =
    onloadFucntion;

window.onload =
    onloadFucntion;

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

function bannerHeight() {
    let bannerSec = document.getElementById('ps-banner-sec');
    if (mediaMobile.matches) {
        bannerSec.style.width = '100%';
        bannerSec.style.height = window.innerHeight + "px";
    }
    // bannerSec.style.paddingTop = header.clientHeight + 'px';
}


// const goTopBtn = document.getElementById('go-top');

// window.addEventListener('scroll', () => {
//     if (document.body.scrollToTop > 20 || document.documentElement.scrollTop > 20)
//         goTopBtn.classList.add('active');
//     else
//         goTopBtn.classList.remove('active');
// })

// goTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// });

var menu = document.getElementById('menu');


menuToggle = () => {
    let toggleBtn = document.getElementById('menu-toggle');
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('is-active');
        header.classList.toggle('minisidebar');
        document.body.classList.toggle('is-overlay');
    });
}

menuToggle();


// window.onresize =
//     bannerOffset;

// window.onload =
//     bannerOffset;



function bannerOffset() {
    if (mediaMobile.matches) {
        var logoLeftSpace = header.children[0].offsetLeft;
        var bannerText = document.getElementById('ps-banner-txt');
        bannerText.style.paddingLeft = logoLeftSpace + 30 + "px";
    }
}


// /* Javascript only */
var dropdowns = document.querySelectorAll('.has-dropdown');

function myFunction(item) {
    if (!item.classList.contains('active')) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('active');
        }
    }
    item.classList.toggle("active");
}


dropdowns.forEach(item => {
    item.addEventListener('click', () => {
        myFunction(item);
    })
})





// let ul = document.querySelector('#navbarMobile');
// let li = document.querySelectorAll('.has-dropdown');

// li.forEach(item => {
//     item.addEventListener('click', () => {
//         let isClassName = ul.querySelector('.active');
//         if (isClassName) {
//             isClassName.classList.remove('active');
//         }
//         item.classList.toggle('active');
//     })
// })

// menuToggleAdd();



// const mediaQuerySideBar = window.matchMedia('(max-width: 991px)')
// function sideBarToggle() {
//     if (mediaQuerySideBar.matches) {
//         document.getElementById('navbarMobile').addEventListener('click', (e) => {
//             var elems = document.querySelectorAll(".active");
//             [].forEach.call(elems, function (el) {
//                 el.classList.remove("active");
//             });
//             let isClassName = hasClass(e.target.parentNode, 'has-dropdown');
//             if (isClassName) {
//                 // e.target.classList.add("active");
//                 e.target.parentNode.classList.toggle('active');
//             }
//         });
//     }
// }

// window.onload = sideBarToggle;
// window.onresize = sideBarToggle;




// (function ($) {
//     "use strict";
//     jQuery(document).on('ready', function () {

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
//     });        // });

// });
// }(jQuery));

// (function ($) {
//     "use strict"
    // jQuery(document).on('ready', function () {

            // responsive: [
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             arrows: false,
            //             centerMode: true,
            //             centerPadding: '40px',
            //             slidesToShow: 3
            //         }
            //     },
            //     {
            //         breakpoint: 480,
            //         settings: {
            //             arrows: false,
            //             centerMode: true,
            //             centerPadding: '40px',
            //             slidesToShow: 1
            //         }
            //     }
            // ]
        // });

    // });
// })();