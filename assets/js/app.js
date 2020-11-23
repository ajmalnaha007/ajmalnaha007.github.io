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

        var item = $('#get-in').clone();
        $(".item:nth-child(15n)").after(item);
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
        var makeBtnClick = () => {
            document.querySelector('.ps-make-wish').addEventListener('click', animateNavbar);
            function animateNavbar() {
                TweenMax.to('.make-canvas', 1, {
                    opacity: 1,
                    ease: Power3.ease,
                    onComplete: function () {
                        $('body').css({ 'overflow': 'hidden' });
                        $('.make-a-wish-inner').attr('data-open', "true");
                        TweenMax.to('.make-canvas', 1, {
                            backgroundColor: '#30203c',
                            ease: Power3.easeIn
                        });
                        TweenMax.to('.make-a-wish-inner', 1, {
                            opacity: 1
                        });
                        TweenMax.to('.ps-form', 1, {
                            opacity: 1,
                            x: 0,
                            ease: Power3.easeIn,
                            onComplete: function () {
                                TweenMax.staggerTo('.animate', 1, {
                                    y: 0,
                                    opacity: 1,
                                    ease: Power3.easeIn,
                                }, 0.2);
                            }
                        });
                        TweenMax.to('.make-a-wish-inner .img-wrapper', 1, {
                            opacity: 1,
                            X: 0,
                            ease: Power3.easeIn
                        });
                    }
                });
            }
        }

        makeBtnClick();

        var makeBgCanvas = () => {
            var Stars = {
                canvas: null,
                context: null,
                circleArray: [],
                colorArray: ['#2F2F82', '#85D6A6', '#F7D125', '#1f2e37', '#474848', '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'],
                mouseDistance: 100,
                radius: .5,
                maxRadius: 1.5,
                mouse: {
                    x: undefined,
                    y: undefined,
                    down: false,
                    move: false
                },
                init: function () {
                    this.canvas = document.getElementById('canvas-make-bg');
                    this.canvas.width = window.innerWidth;
                    this.canvas.height = window.innerHeight;
                    this.canvas.style.display = 'block';
                    this.context = this.canvas.getContext('2d');

                    window.addEventListener('mousemove', this.mouseMove);
                    window.addEventListener('resize', this.resize);

                    this.prepare();
                    this.animate();
                },
                Circle: function (x, y, dx, dy, radius, fill) {
                    this.x = x;
                    this.y = y;
                    this.dx = dx;
                    this.dy = dy;
                    this.radius = radius;
                    this.minRadius = this.radius;

                    this.draw = function () {
                        Stars.context.beginPath();
                        Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                        Stars.context.fillStyle = fill;
                        Stars.context.fill();
                    };
                    this.update = function () {
                        if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
                        if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

                        this.x += this.dx;
                        this.y += this.dy;

                        //  INTERACTIVITY
                        if (Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance) {
                            if (this.radius < Stars.maxRadius) this.radius += 1;
                        } else if (this.radius > this.minRadius) {
                            this.radius -= 1;
                        }

                        this.draw();
                    };
                },
                prepare: function () {
                    this.circleArray = [];

                    for (var i = 0; i < 1200; i++) {
                        var radius = Stars.radius;
                        var x = Math.random() * (this.canvas.width - radius * 2) + radius;
                        var y = Math.random() * (this.canvas.height - radius * 2) + radius;
                        var dx = (Math.random() - 0.5) * 1.5;
                        var dy = (Math.random() - 1) * 1.5;
                        var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

                        this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill));
                    }
                },
                animate: function () {
                    requestAnimationFrame(Stars.animate);
                    Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);

                    for (var i = 0; i < Stars.circleArray.length; i++) {
                        var circle = Stars.circleArray[i];
                        circle.update();
                    }
                },
                mouseMove: function (event) {
                    Stars.mouse.x = event.x;
                    Stars.mouse.y = event.y;
                },
                resize: function () {
                    Stars.canvas.width = window.innerWidth;
                    Stars.canvas.height = window.innerHeight;
                }
            };
            Stars.init();
        }

        makeBgCanvas();

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