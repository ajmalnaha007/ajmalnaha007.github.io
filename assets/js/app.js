(function ($) {
    "use strict"
    var PATH = {};
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
            var headerOffset = $('#ps-header').children().offset().left + 20 + 'px',
                bannerOptionHgt = $('#bannerOptions').height() / 2 + 80 + 'px';
            (mediaMobile.matches) ? $('#ps-banner-txt').css({ 'padding-left': headerOffset }) : $('#ps-banner-txt').removeAttr('style');
            $('#ps-about-bnr').css({ 'margin-bottom': bannerOptionHgt });
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
        // var menuDropDownClass = () => {
        //     $(".has-dropdown").each(function () {
        //         $(this).on('click', function () {
        //             $(this).toggleClass('active').siblings().removeClass('active');
        //         })
        //     });
        // }
        // menuDropDownClass();

        // var toggleBtnClass = () => {
        //     $('#menu-toggle').on('click', function (event) {
        //         $(this).toggleClass('is-active');
        //         // $('#ps-header').toggleClass('minisidebar');
        //         // $('body').toggleClass('is-overlay');
        //     });
        // }
        // toggleBtnClass();
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
            variableWidth: true,
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
        if ($('.ps-grid').length) {
            var $grid = $('.ps-grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.item',
                    gutter: 20,
                    horizontalOrder: true,
                    transitionDuration: '.2s',
                    fitWidth: true,
                    stamp: '.stamb',
                });
            });
            $grid.on('layoutComplete', function () {
                $(this).animate({
                    'opacity': 1
                });
                AOS.init();
            });
        }

        var item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = '<div class="get-in-item"><div class="get-in-item-bg"></div><h1>Lorem Ipsum Dolar</h1><button class="btn ps-btn-alt">GET IN TOUCH</button></div>';
        item.setAttribute("data-aos", "zoom-in");
        $(".item:nth-child(15n)").after(item);
    }

    PATH.modalOpen = () => {
        var a = true;
        $(window).scroll(function () {
            if (localStorage.getItem('modalState') != 'shown' && $(window).scrollTop() > $(window).height() / 2 && a) {
                $('#exampleModalCenter').modal('show');
                localStorage.setItem('modalState', 'shown');
                a = false;
            }

        });
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

    // PATH.test = () => {
    //     maskCircle = {
    //         x: t,
    //         y: e,
    //         radius: 0
    //     }
    //     $('#make').mouseover(function () {
    //         TweenLite.to(maskCircle, .4, {
    //             radius: 0,
    //             ease: Power2.easeOut,
    //             onComplete: function () {
    //                 // e.isHoveringOut = !1
    //             }
    //         });
    //         // $(this).css({
    //         //     'opacity': '.1'
    //         // });

    //     }).mouseout(function () {
    //         // $('#make').css({
    //         //     'opacity': '1'
    //         // })
    //     });
    // }

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
        PATH.modalOpen();
        PATH.contactForm();
        // PATH.test();
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