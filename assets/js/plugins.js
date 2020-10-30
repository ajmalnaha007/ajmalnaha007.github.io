$('#slick').slick({
    dots: true,
    variableWidth: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dragToSlide: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: '<button class="btn slide-arrow prev"><span class="icon-ps-prev"></span></button>',
    nextArrow: '<button class="btn slide-arrow next"><span class="icon-ps-next"></span></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// blog
$('#slick-blog').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    dragToSlide: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: '<button class="btn slide-arrow prev"><span class="icon-ps-prev"></span></button>',
    nextArrow: '<button class="btn slide-arrow next"><span class="icon-ps-next"></span></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 497,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// testmonial

$('#slick-testimonial').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dragToSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: '<button class="btn slide-arrow prev"><span class="icon-ps-arrow"></span></button>',
    nextArrow: '<button class="btn slide-arrow next"><span class="icon-ps-arrow"></span></button>',
});

// brands

$('#ps-brand-list').slick({
    dots: false,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 5,
    speed: 1300,
    infinite: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
        }
    }, {
        breakpoint: 1300,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    }, {
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    }, {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
});


// function enableIsotope() {
//     // for each container
//     $('.grid').each(function (i, gridContainer) {
//         var $gridContainer = $(gridContainer);
//         // init isotope for container
//         var $grid = $gridContainer.find('.isotope').imagesLoaded(function () {
//             $grid.isotope({
//                 itemSelector: '.item',
//                 layoutMode: 'masonry',
//                 percentPosition: true,
//                 masonry: {
//                     columnWidth: $grid.width() / 12
//                 },
//                 transitionDuration: '0.7s'
//             })
//         });
//         //   $(window).resize(function() {
//         //       $grid.isotope({
//         //           masonry: {
//         //               columnWidth: $grid.width() / 12
//         //           }
//         //       });
//         //   });
//         //   $(window).on("load", function() {
//         //       $grid.isotope({
//         //           masonry: {
//         //               columnWidth: $grid.width() / 12
//         //           }
//         //       });
//     });
//     // initi filters for container
//     //   $gridContainer.find('.isotope-filter').on( 'click', '.button', function() {
//     //     var filterValue = $( this ).attr('data-filter');
//     //     $grid.isotope({ filter: filterValue });
//     //   });
//     // });

//     // $('.isotope-filter').each( function( i, buttonGroup ) {
//     //   var $buttonGroup = $( buttonGroup );
//     //   $buttonGroup.on( 'click', '.button', function() {
//     //     $buttonGroup.find('.active').removeClass('active');
//     //     $( this ).addClass('active');
//     //   });
//     // });

// };
// enableIsotope();


// $('.ps-grid').masonry({
//     // options
//     itemSelector: '.item',
//     // percentPosition: true,
//     gutter: 20,
//     horizontalOrder: true,
//     transitionDuration: '0.8s',
//     // resize: false,
//     fitWidth: true,
//     stamp: '.stamb'
//     // columnWidth: 200
// });



var $container = $('.ps-grid')

$container.imagesLoaded(function () {
    $container.masonry({
        itemSelector: '.item',
        percentPosition: true,
        gutter: 20,
        horizontalOrder: true,
        transitionDuration: '0.8s',
        // resize: false,
        fitWidth: true,
        stamp: '.stamb'
    });
});