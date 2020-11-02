(function ($) {
    "use strict"
    var PATH = {};

    PATH.preLoader = function () {
        var preloader = $('#ps-preloader');
        preloader && preloader.delay(350).fadeOut('slow');
    }

    PATH.headerSticky = function () {
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop(),
                scrollTrue = scroll >= 50;
            scrollTrue ? $("#ps-header").addClass("is-sticky") : $("#ps-header").removeClass("is-sticky");
        });
    }


    //Scroll back to top

    PATH.backToTop = function () {
        var progressPath = document.querySelector('.go-top path');
        if (progressPath) {
            var pathLength = progressPath.getTotalLength(),
                offset = 50,
                duration = 550;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';


            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();

            $(window).scroll(updateProgress);


            $(window).on('scroll', function () {
                ($(this).scrollTop() > offset) ? $('.go-top').addClass('active-progress') : $('.go-top').removeClass('active-progress');
            });

            $('.go-top').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, duration);
                return false;
            })
        }

    }

    PATH.setBannerStyle = () => {
        let mediaMobile = window.matchMedia('(min-width: 991px)');
        var bannerHeight = () => {
            (mediaMobile.matches) ?
                $('#ps-banner-sec').css({
                    'width': '100%',
                    'height': $(window).height()
                }) :
                $('#ps-banner-sec').removeAttr("style");
        }
        bannerHeight();

        var bannerTxtOffset = () => {
            var headerOffset = $('#ps-header').children().offset().left + 20 + 'px',
                bannerOptionHgt = $('#bannerOptions').height() / 2 + 80 + 'px';
            (mediaMobile.matches) ? $('#ps-banner-txt').css({ 'padding-left': headerOffset }) : $('#ps-banner-txt').removeAttr('style');
            $('#ps-about-bnr').css({ 'margin-bottom': bannerOptionHgt });
        }
        bannerTxtOffset();
    }

    PATH.menuToggle = () => {
        var menuDropDownClass = () => {
            $(".has-dropdown").each(function () {
                $(this).on('click', function () {
                    $(this).toggleClass('active').siblings().removeClass('active');
                })
            });
        }
        menuDropDownClass();

        var toggleBtnClass = () => {
            $('#menu-toggle').on('click', function (event) {
                $(this).toggleClass('is-active');
                $('#ps-header').toggleClass('minisidebar');
                $('body').toggleClass('is-overlay');
            });
        }
        toggleBtnClass();
    }


    PATH.aboutBannerOption = () => {
        $('.outer-div').each(function () {
            $(this).mouseover(function () {
                $(this).parent().siblings().css({
                    'opacity': '.1'
                });

            }).mouseout(function () {
                $(this).parent().siblings().css({
                    'opacity': '1'
                })
            });
        });
    }


    PATH.counterSec = () => {
        var a = 0;
        $(window).scroll(function () {
            if ($('#counter').length) {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {

                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }

                        });
                    });
                    a = 1;
                }
            }
        });
    }

    PATH.filterScroll = () => {
        jQuery.fn.hasScrollBar = function () {
            return this.get(0).scrollWidth > this.innerWidth();
        }
        $(".scroll-prev").hide();
        $(".scroll-next").hide();
        if ($('#blogFilter').length && $('#blogFilter').hasScrollBar()) {
            $(".scroll-next").show()
            $('#blogFilter').on('scroll', function () {
                var filterContainerWidth = $('#blogFilter').outerWidth(),
                    filterContainerScrollWidth = $('#blogFilter').get(0).scrollWidth - 15,
                    i = $('#blogFilter').scrollLeft(),
                    n = 0 < i,
                    o = i + filterContainerWidth >= filterContainerScrollWidth;
                (!n) ? $(".scroll-prev").hide() : $(".scroll-prev").show();
                (o) ? $(".scroll-next").hide() : $(".scroll-next").show();
            });
        }
        $('.scroll-next').click(function (event) {
            event.preventDefault();
            $('#blogFilter').animate({
                scrollLeft: "+=130px"
            }, "linear");
        });

        $('.scroll-prev').click(function (event) {
            event.preventDefault();
            $('#blogFilter').stop().animate({
                scrollLeft: "-=130px"
            }, "linear");
        });
    }

    PATH.blogHeader = () => {
        window.addEventListener('scroll', () => {
            var optionWrapper = document.getElementById("sticky"),
                bottomft = document.getElementById("btm");
            if (optionWrapper && bottomft) {
                let start = (optionWrapper.offsetTop + 161),
                    stop = (bottomft.offsetTop - 161);
                var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if ((scrollTop <= stop) && (scrollTop >= start)) {
                    optionWrapper.classList.add('is-sticky');
                    optionWrapper.style.top = header.clientHeight + 'px';
                } else {
                    optionWrapper.classList.remove('is-sticky');
                    optionWrapper.removeAttribute('style');
                }
            }
        });
    }

    // slick

    PATH.slickPlugin = () => {
        $('#slick').not('.slick-initialized').slick({
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
        $('#slick-blog').not('.slick-initialized').slick({
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

        $('#slick-testimonial').not('.slick-initialized').slick({
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

        $('#ps-brand-list').not('.slick-initialized').slick({
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
    }

    PATH.masnoryPort = () => {
        // var container = $('.ps-grid');
        // var msnry;
        // if ($('.ps-grid').length) {
        //     $container.imagesLoaded(function () {
        //         $container.masonry({
        //             itemSelector: '.item',
        //             gutter: 20,
        //             horizontalOrder: true,
        //             transitionDuration: '0.8s',
        //             fitWidth: true,
        //             stamp: '.stamb',
        //         });
        //     });
        // }

        var $grid = $('.ps-grid').imagesLoaded(function () {
            // init Masonry after all images have loaded
            $grid.masonry({
                itemSelector: '.item',
                gutter: 20,
                horizontalOrder: true,
                transitionDuration: '0.8s',
                fitWidth: true,
                stamp: '.stamb',
            });

            $('.ps-grid')
            $('.ps-grid').animate({ 'opacity': 1 });
        });
        $grid.on('layoutComplete', function () {
            $(this).animate({
                'opacity': 1
            });
            // $('.item').fillcolor();
        });

        // console.log($('.item1').fillColor()[0]);


        //     var container = document.querySelector('.ps-grid');
        //     var msnry;
        //     //create empty var msnry
        //     // var msnry;
        //     // initialize Masonry after all images have loaded
        //     imagesLoaded(container, function () {
        //         msnry = new Masonry(container, {
        //             itemSelector: '.item',
        //             gutter: 20,
        //             horizontalOrder: true,
        //             transitionDuration: '0.8s',
        //             fitWidth: true,
        //             stamp: '.stamb',
        //         });
        //     });
    }

    PATH.addColorToPort = () => {
        $('.ps-grid').imagesLoaded(function () {
            // images have loaded
            // $('.item').fillColor();
            const colorThief = new ColorThief();
            const img = document.querySelector('.img-check1');
            var color;

            // Make sure image is finished loading
            if (img.complete) {
                color = colorThief.getColor(img);
            } else {
                image.addEventListener('load', function () {
                    color = colorThief.getColor(img);
                });
            }
            console.log(color);
        });

    }



    /* Document ready function */
    $(function () {
        PATH.backToTop();
        PATH.headerSticky();
        PATH.menuToggle();
        PATH.counterSec();
        PATH.aboutBannerOption();
        PATH.filterScroll();
        PATH.blogHeader();
        PATH.masnoryPort();
        PATH.slickPlugin();
        PATH.addColorToPort();
    });

    /* Window on load function */
    $(window).on('load', function () {
        PATH.preLoader();
        PATH.setBannerStyle();
        PATH.counterSec();
    });

    $(window).on('resize', function () {
        PATH.setBannerStyle();
        PATH.filterScroll();
    });

})(jQuery);