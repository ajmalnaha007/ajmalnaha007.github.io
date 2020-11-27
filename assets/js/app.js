(function ($) {
    "use strict"
    var PATH = {};
    // $("body").addClass("loaded");
    // $('#ps-preloader').hide();
    // AOS.init({
    //     easing: 'ease-in-out', // default easing for AOS animations
    //     once: false, // whether animation should happen only once - while scrolling down
    //     duration: 500, // values from 0 to 3000, with step 50ms
    // });
    PATH.preLoader = function () {
        TweenMax.to($("#ps-preloader svg , #ps-preloader .ps-loader-text"), 1.0, {
            force3D: true,
            y: "-150px",
            opacity: 0,
            ease: Expo.easeInOut,
            delay: 1.2,
            onComplete: function () {
                TweenMax.to($(".loader-anim"), 0.8, {
                    force3D: true,
                    bottom: "100%",
                    ease: Expo.easeInOut,
                });
                TweenMax.to($(".loader-anim2"), 0.8, {
                    force3D: true,
                    bottom: "100%",
                    delay: 0.2,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        $(".loader").fadeOut(1);
                    }
                });
                TweenMax.to($("#ps-preloader"), 0.8, {
                    force3D: true,
                    bottom: "100%",
                    delay: 0.2,
                    ease: Expo.easeInOut,
                    onComplete: function () {
                        $(".loader").fadeOut(1);
                    }
                });
                setTimeout(function () {
                    $("body").addClass("loaded");
                    $('#ps-preloader').hide();
                    AOS.init({
                        easing: 'ease-in-out', // default easing for AOS animations
                        once: false, // whether animation should happen only once - while scrolling down
                        duration: 500, // values from 0 to 3000, with step 50ms
                    });
                }, 800);
            }
        });
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
        var backToTopBtn = $('.go-top-btn');
        if (backToTopBtn.length) {
            $(window).on('scroll', function () {
                ($(this).scrollTop() > 50) ? backToTopBtn.addClass('active-progress') : backToTopBtn.removeClass('active-progress');
            });
            backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, 500);
                return false;
            });
        }

    }

    PATH.setBannerStyle = () => {
        let mediaMobile = window.matchMedia('(min-width: 992px)');
        var bannerHeight = () => {
            (mediaMobile.matches) ?
                $('#ps-banner-sec').css({
                    'width': '100%',
                    'height': $(window).height() - 68 + 'px'
                }) :
                $('#ps-banner-sec').removeAttr("style");
        }
        bannerHeight();

        var bannerTxtOffset = () => {
            var headerOffset = $('#ps-header').children().offset().left + 20 + 'px';
            (mediaMobile.matches) ? $('#ps-banner-txt').css({ 'padding-left': headerOffset }) : $('#ps-banner-txt').removeAttr('style');
            // (mediaMobile.matches) ? $('.make-a-wish-inner').css({ 'left': headerOffset }) : $('.make-a-wish-inner').removeAttr('style');

        }
        ($('#ps-header').length) && bannerTxtOffset();
    }

    PATH.menuToggle = () => {
        var headerSubmenuHover = () => {
            $('#ps-header li.dropdown').hover(
                function () {
                    $(this).addClass('show')
                },
                function () {
                    $(this).removeClass('show')
                });
        }
        headerSubmenuHover();

        var mobileToggleMenu = () => {
            var element = document.getElementsByClassName("drop-head");
            var i;

            for (i = 0; i < element.length; i++) {
                element[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.height) {
                        content.style.height = null;
                    } else {
                        content.style.height = content.scrollHeight + "px";
                    }
                });
            };
        }

        mobileToggleMenu();
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
                header = document.getElementById('ps-header'),
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

    PATH.blogBannerText = () => {
        $('ul.nav > li > a').on("shown.bs.tab", function (e) {
            var getClass = $(e.target).attr("href").substr(1).toLowerCase();
            var createClass = "ps-resource-bnr-ins " + getClass;
            $('#blogHead').removeClass().addClass(createClass);
        });
    }

    // slick

    PATH.slickPlugin = () => {
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
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 576,
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
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dragToSlide: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            arrows: false,
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
            variableWidth: true,
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
                    centerMode: true
                }
            }
            ]
        });
    }

    PATH.masnoryPort = () => {

        function mediaCheck(media) {
            let value = media + 'px';
            if (window.matchMedia(`(max-width:${value})`).matches) {
                return true
            } else {
                return false
            }
        }

        function masonrySet() {

            var options = {
                itemSelector: '.item',
                horizontalOrder: true,
                transitionDuration: '.2s',
                fitWidth: true,
                stamp: '.stamb',
                isResizable: true,
            }
            if (mediaCheck(991)) {
                options = {
                    itemSelector: '.item',
                    horizontalOrder: true,
                    transitionDuration: '.2s',
                    fitWidth: true,
                    stamp: '',
                    isResizable: true,
                }
            }

            if ($('.ps-grid').length) {
                var $grid = $('.ps-grid').imagesLoaded(function () {
                    $grid.masonry({
                        ...options,
                    });
                });
                $grid.on('layoutComplete', function () {
                    $(this).animate({
                        'opacity': 1
                    });
                    AOS.init({ disable: 'mobile' });
                });
            }
        }
        masonrySet();

        if ($('#get-item').length)
            var item = $('#get-in').clone();
        mediaCheck(450) && $(".item:nth-child(15n)").after(item);
    }

    PATH.modalOpen = () => {
        var a = true;
        if ($('body.port').length) {
            $(window).scroll(function () {
                if (localStorage.getItem('modalState') != 'shown' && $(document).scrollTop() > $(document).height() / 2 && a) {
                    $('#portgetinTouch').modal('show');
                    localStorage.setItem('modalState', 'shown');
                    a = false;
                }
            });
        }
    }

    PATH.contactForm = () => {
        var switcher = () => {
            $(".switcher-wrapper .form-group").hide();
            $(".switcher-wrapper .form-group.web-url").show();
            $(".switcher-wrapper input[type='radio']").click(function () {
                var inputValue = $(this).val();
                $(".switcher-wrapper .form-group").hide();
                $("." + inputValue).show();
            });
        }
        switcher();

        var savePrevData = (item) => {
            item.data('val', item.val());
        }
        var printData = (item) => {
            var prevValue = item.data('val').replace(/C:\\fakepath\\/i, ''),
                currentValue = item.val().replace(/C:\\fakepath\\/i, '');
            (item.val()) ? item.parent().find('.file-name').html(currentValue) : item.parent().find('.file-name').html(prevValue);
        }

        var handleUpload = () => {
            $(document).on('focusin', '#doc-file', function () {
                savePrevData($(this));
            }).on('change', '#doc-file', function () {
                printData($(this));
            });
            $(document).on('focusin', '#media-file', function () {
                savePrevData($(this));
            }).on('change', '#media-file', function () {
                printData($(this));
            });
        }
        handleUpload();
    }

    PATH.makeAWishSec = () => {
        var isOpen = false;

        function openMake() {
            if (isOpen == false) {
                TweenMax.to('.ps-make-wish .wish-outer', 1, {
                    css: {
                        animation: 'none',
                        transform: 'rotate(0deg)',
                        backgroundColor: '#ffffff'
                    },
                    force3D: true,
                    ease: Power3.easeInOut,
                    onComplete: function () {
                        TweenMax.to('.wish-outer', 1, { opacity: 0 })
                    },
                    onStart: function () {
                        $('.ps-make-wish').addClass('is-active');
                        $('.make-canvas').attr('data-open', "true");
                        TweenMax.to('.wish-txt', 1, {
                            opacity: 0,
                            display: 'none',
                            ease: Power3.easeInOut,

                        });
                        TweenMax.to('.ps-make-wish .wish-btn', 1, {
                            opacity: 0,
                            display: 'none',
                            ease: Power3.easeInOut,
                            onStart: function () {

                            }
                        });
                        TweenMax.to('.make-canvas', 1, {
                            force3D: true,
                            css: {
                                // transform: 'scale(9)',
                                width: '430px',
                                height: '480px',
                                backgroundColor: '#ffffff',
                                opacity: 1
                            },
                            ease: Power3.easeInOut,
                            onStart: function () {
                                TweenMax.to('.make-art', 1, {
                                    opacity: 1,
                                    delay: .5,
                                });
                                TweenMax.to('.ps-banner-sec-left', 1, {
                                    webkitFilter: 'blur(6px)',
                                    filter: 'blur(6px)',
                                    opacity: 0,
                                    ease: Power3.easeInOut,
                                });
                                TweenMax.to('.ps-banner-img img.banner-art', 1, {
                                    webkitFilter: 'blur(6px)',
                                    filter: 'blur(6px)',
                                    opacity: 0,
                                    ease: Power3.easeInOut
                                });
                            },
                            onComplete: function () {
                                TweenMax.to('.make-a-wish-inner', 1, {
                                    opacity: 1,
                                    onStart: function () {
                                        TweenMax.staggerTo('.make-ani', 1, {
                                            y: 0,
                                            opacity: 1,
                                            ease: Power3.easeIn,
                                        }, 0.2);
                                    }
                                });
                            }
                        });
                        TweenMax.to('.ps-make-wish .wish-outer-animation', 1, {
                            opacity: 0,
                            display: "none"
                        });
                    }
                });
                isOpen = true;
            }
        }
        function closeMake() {
            if (isOpen == true) {
                TweenMax.staggerTo('.make-ani', 1, {
                    y: 50,
                    opacity: 0,
                    ease: Power3.easeIn,
                    onStart: function () {
                        $('.ps-make-wish').removeClass('is-active');
                        $('.make-canvas').attr('data-open', "false");
                    },
                    onComplete: function () {
                        TweenMax.to('.make-a-wish-inner', 1, {
                            opacity: 0,
                            onStart: function () {
                                TweenMax.to('.wish-txt', 1, {
                                    opacity: 1,
                                    display: '',
                                    ease: Power3.easeInOut,
                                    delay: .5
                                });
                                TweenMax.to('.ps-make-wish .wish-btn', 1, {
                                    opacity: 1,
                                    display: '',
                                    ease: Power3.easeInOut,
                                    delay: .5
                                });
                                TweenMax.to('.ps-make-wish .wish-outer', 1, {
                                    css: {
                                        transform: 'rotate(45deg)',
                                        backgroundColor: '#8e3ccc',
                                        opacity: 1
                                    },
                                    force3D: true,
                                    delay: .3,
                                    ease: Power3.easeInOut,
                                    onComplete: function () {
                                        TweenMax.to('.ps-make-wish .wish-outer', 1, {
                                            css: {
                                                animation: ''
                                            }
                                        });
                                        TweenMax.to('.ps-make-wish .wish-outer-animation', 1, {
                                            opacity: 1,
                                            display: ""
                                        });
                                    }
                                });
                                TweenMax.to('.make-canvas', 1, {
                                    force3D: true,
                                    css: {
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: '#8e3ccc',
                                        opacity: 0,
                                    },
                                    delay: .2,
                                    ease: Power3.easeInOut,
                                    onComplete: function () {
                                        TweenMax.to('.ps-banner-sec-left', 1, {
                                            webkitFilter: 'blur(0)',
                                            filter: 'blur(0)',
                                            opacity: 1
                                        })
                                        TweenMax.to('.ps-banner-img img.banner-art', 1, {
                                            webkitFilter: 'blur(0)',
                                            filter: 'blur(0)',
                                            opacity: 1
                                        });
                                    }
                                });
                            }
                        });
                    }
                }, 0.2);
                isOpen = false;
            }
        }

        $(".wish-btn").on("click", function () { openMake() });

        $(".close-make").on("click", function () { closeMake() });

        $(window).on('scroll', function () {
            ($(this).scrollTop() > 250 && isOpen == true) && closeMake();
        });



    }

    /* Document ready function */
    $(function () {
        PATH.backToTop();
        PATH.headerSticky();
        PATH.menuToggle();
        PATH.counterSec();
        PATH.filterScroll();
        PATH.blogHeader();
        PATH.masnoryPort();
        PATH.slickPlugin();
        PATH.modalOpen();
        PATH.contactForm();
        PATH.blogBannerText();
        PATH.makeAWishSec();
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
        PATH.masnoryPort();
    });

})(jQuery);

// pure js
document.addEventListener('DOMContentLoaded', function () {
    var aboutBannerOption = () => {
        function aboutImageSwap(targets) {
            var element = document.querySelectorAll(targets);
            for (i = 0; i < element.length; i++) {
                if (i != 2) {
                    var first = element[i].querySelectorAll('.ps-abt-opt-in:nth-child(1)');
                    var middile = element[i].querySelectorAll('.ps-abt-opt-in:nth-child(2)');
                    var last = element[i].querySelectorAll('.ps-abt-opt-in:nth-child(3)');
                    function animDelay(data, delay) {
                        data.forEach(element => {
                            function imageReplace() {
                                if (element.classList.contains('is-show')) {
                                    element.classList.remove('is-show');
                                    if (element.nextElementSibling == null) {
                                        setTimeout(function () {
                                            element.parentNode.firstElementChild.classList.add('is-show');
                                        }, 1000);
                                    } else if (element.nextElementSibling) {
                                        setTimeout(function () {
                                            element.nextElementSibling.classList.add('is-show');
                                        }, 1000);
                                    }
                                }
                            }
                            imageReplace();
                            setInterval(imageReplace, delay);
                        })
                    }
                    animDelay(first, 15000);
                    animDelay(middile, 15000);
                    animDelay(last, 15000);
                }
            }
        }
        var item1 = '.ps-abt-opt .ps-abt-opt-item:nth-child(1)';
        var item2 = '.ps-abt-opt .ps-abt-opt-item:nth-child(2)';
        var item3 = '.ps-abt-opt .ps-abt-opt-item:nth-child(3)';

        setTimeout(function () { aboutImageSwap(item1) }, 5000);
        setTimeout(function () { aboutImageSwap(item2) }, 10000);
        setTimeout(function () { aboutImageSwap(item3) }, 15000);
    }
    aboutBannerOption();
}, false);