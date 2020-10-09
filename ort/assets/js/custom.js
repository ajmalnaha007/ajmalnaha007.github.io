
function background() {
    $(".cover-bg, section , [data-image-src]").each(function () {
        var e = $(this).attr("data-image-src");
        void 0 !== e && !1 !== e && $(this).css("background-image", "url(" + e + ")")
    })
}

! function (e) {
    "use strict";

    function t(r) {
        background(),
            function () {
                const t = e(".filtering");
                var n = e(".gallery").isotope({
                    itemSelector: ".item",
                    transitionDuration: "0.5s"
                });
                t.on("click", "button", function () {
                    var t = e(this).attr("data-filter");
                    n.isotope({
                        filter: t
                    })
                }), t.on("click", "button", function () {
                    e(this).addClass("active").siblings().removeClass("active");
                    let t = a;
                    s.isScroller(!0) && (t = s.getScrollbar()), setTimeout(function () {
                        TweenLite.to(t, 1.5, {
                            scrollTo: n.offset().top - 150,
                            ease: Expo.easeInOut
                        })
                    }, 500)
                })
            }(),
            function (t) {
                function a() {
                    dsnGrid.elementHover(i, "a.link-pop , a > img", "cursor-view"), dsnGrid.elementHover(i, ".close-wind", "cursor-close"), dsnGrid.elementHover(i, "a:not(> img) , .dsn-button-sidebar,  button", "cursor-link")
                }
                const i = ".cursor";
                if (n().isMobiles()) return;
                if (void 0 !== t && !0 === t) return void a();
                if (e("body").hasClass("dsn-large-mobile")) return;
                dsnGrid.mouseMove(i), a()
            }(r)
    }

    function n() {  
        const t = window.Scrollbar;
        var n = document.querySelector("#dsn-scrollbar");
        return {
            isMobile: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i))
            },
            isMobiles: function () {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i) || a.width() <= 991)
            },
            isScroller: function (e) {
                e && (n = document.querySelector("#dsn-scrollbar"));
                let t = !i.hasClass("dsn-effect-scroll") || this.isMobile() || null === n;
                return t && e && i.addClass("dsn-mobile"), !t
            },
            locked: function () {
                if (i.addClass("locked-scroll"), this.isScroller()) {
                    let e = this.getScrollbar();
                    void 0 !== e && e.destroy()
                }
            },
            unlocked: function () {
                i.removeClass("locked-scroll"), this.start(), r.allInt(), dsnGrid.progressCircle(s)
            },
            getScrollbar: function (e) {
                return void 0 === e ? t.get(n) : t.get(document.querySelector(e))
            },
            getListener: function (e) {
                if (void 0 !== e) {
                    var t = this;
                    t.isScroller(!0) ? t.getScrollbar().addListener(e) : a.on("scroll", e)
                }
            },
            start: function () {
                if (dsnGrid.scrollTop(0, 1), e(".scroll-to").on("click", function (t) {
                    t.preventDefault();
                    let n = a;
                    s.isScroller(!0) && (n = s.getScrollbar()), TweenLite.to(n, 1.5, {
                        scrollTo: e(".wrapper").offset().top,
                        ease: Expo.easeInOut
                    })
                }), !this.isScroller(!0)) return;
                let i = .05;
                this.isMobiles() && (i = .02), t.init(n, {
                    damping: i
                }), this.workScroll()
            },
            sliderScroll: function () {
                t.init(document.querySelector(".slider .main-slider .slider-nav-list"), {
                    damping: .05
                })
            },
            menuScroll: function () {
                t.init(document.querySelector(".nav__content"), {
                    damping: .05
                })
            },
            commentScroll: function () {
                const e = document.querySelector(".comment-modal .comment-modal-container");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            sidebarScroll: function () {
                const e = document.querySelector(".dsn-sidebar .sidebar-single");
                null !== e && t.init(e, {
                    damping: .05
                })
            },
            workScroll: function () {
                const e = document.querySelector(".dsn-all-work .dsn-work-scrollbar");
                null !== e && t.init(e, {
                    damping: .05
                })
            }
        }
    }
    const a = e(window),
        i = e("body"),
        o = {
            animateTextAjax: '.dsn-nav-bar , .headefr-fexid .project-title .title-text-header .cat ,[data-dsn-animate="ajax"] , footer, .next-project , .root-project'
        };
    ! function () {
        var t = e(".preloader"),
            n = t.find(".preloader-block"),
            i = n.find(".percent"),
            o = n.find(".title"),
            s = n.find(".loading"),
            r = t.find(".preloader-bar"),
            l = r.find(".preloader-progress"),
            d = t.find(".preloader-after"),
            c = t.find(".preloader-before"),
            u = dsnGrid.pageLoad(0, 100, 300, function (e) {
                i.text(e), l.css("width", e + "%")
            });
        a.on("load", function () {
            clearInterval(u), TweenMax.fromTo(l, .5, {
                width: "95%"
            }, {
                width: "100%",
                onUpdate: function () {
                    var e = l.width() / l.parent().width() * 100;
                    i.text(parseInt(e, 10))
                },
                onComplete: function () {
                    TweenMax.to(r, .5, {
                        left: "100%"
                    }), TweenMax.to(o, 1, {
                        autoAlpha: 0,
                        y: -100
                    }), TweenMax.to(s, 1, {
                        autoAlpha: 0,
                        y: 100
                    }), TweenMax.to(i, 1, {
                        autoAlpha: 0
                    }), TweenMax.to(c, 1, {
                        y: "-100%",
                        delay: .7
                    }), TweenMax.to(d, 1, {
                        y: "100%",
                        delay: .7,
                        onComplete: function () {
                            t.addClass("hidden")
                        }
                    })
                }
            })
        })
    }(),
        function () {
            var t = e(".menu-icon");
            e(".site-header .custom-drop-down > a").on("click", function () {
                return !1
            }), a.on("load", function () {
                const n = e(".site-header nav > ul");
                if (n.length <= 0) return;
                let a = n[0].outerHTML;
                (a = e(a)).attr("class", "nav__list"), a.find("li.custom-drop-down").attr("class", "nav__list-dropdown"), a.find("li").addClass("nav__list-item");
                let o = e(".header-top .nav .nav__content");
                void 0 !== o && o.prepend(a), t.on("click", function () {
                    i.toggleClass("nav-active")
                }), e(".nav__list-item:not(.nav__list-dropdown) ").on("click", function () {
                    i.removeClass("nav-active")
                }), e(".nav__list-dropdown > a").on("click", function (t) {
                    t.preventDefault();
                    var n = e(this).parent(),
                        a = n.find("ul").css("display");
                    e(".nav__list-dropdown").find("ul").slideUp("slow"), "block" !== a && n.find("ul").slideDown("slow")
                })
            }), a.on("scroll", function () {
                var t = a.scrollTop(),
                    n = e(".site-header , .header-top"),
                    i = e(".page-content").offset(),
                    o = 70;
                void 0 !== i && (o = i.top), t > o ? (n.addClass("header-stickytop"), e(".sections").addClass("body-pt")) : (n.removeClass("header-stickytop"), e("body").css("paddingTop", 0))
            });
            var n = e(".header-top .header-container .menu-icon .text-menu");
            if (!(n.length <= 0)) {
                var o = n.find(".text-button"),
                    s = n.find(".text-open"),
                    r = n.find(".text-close");
                dsnGrid.convertTextWord(o, o, !0), dsnGrid.convertTextWord(s, s, !0), dsnGrid.convertTextWord(r, r, !0)
            }
        }();
    var s = n(),
        r = function () {
            var t = new ScrollMagic.Controller;
            const n = '[data-dsn-header="project"]',
                o = '[data-dsn-footer="project"]';
            return {
                clearControl: function () {
                    t = new ScrollMagic.Controller
                },
                isElemntId: function (e) {
                    return null !== document.getElementById(e)
                },
                headerProject: function () {
                    if (e(n).length <= 0) return !1;
                    let a = e("#dsn-hero-parallax-img"),
                        o = e("#dsn-hero-parallax-title"),
                        s = e("#dsn-hero-parallax-fill-title"),
                        r = e("#descover-holder"),
                        l = 1.2;
                    a.hasClass("parallax-move-element") && dsnGrid.parallaxMoveElemnt({
                        target: e(n),
                        element: a.find(".cover-bg")
                    }, 5, 1);
                    var d = new TimelineMax;
                    if (a.length > 0) {
                        let e = a.hasClass("has-top-bottom") ? 1 : 1.08;
                        d.to(a, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: e
                        }, 0)
                    }
                    if (o.length > 0 && (o.hasClass("project-title") && (l = 1), d.to(o, .8, {
                        force3D: !0,
                        top: "30%",
                        autoAlpha: 0,
                        scale: l
                    }, 0)), s.length > 0 && d.to(s, 1, {
                        force3D: !0,
                        height: 80
                    }, 0).to("#dsn-hero-parallax-fill-title h1", 1, {
                        force3D: !0,
                        top: 0
                    }, 0).to(o.find(".slider-header.slider-header-top"), 1, {
                        force3D: !0,
                        height: 0
                    }, 0), r.length > 0 && d.to(r, .8, {
                        force3D: !0,
                        bottom: "-10%",
                        autoAlpha: 0
                    }, 0), d._totalDuration <= 0) return !1;
                    var c = new ScrollMagic.Scene({
                        triggerElement: n,
                        triggerHook: 0,
                        duration: "100%"
                    }).setTween(d).addTo(t);
                    let u = a.find("video");
                    return (u.length > 0 || i.hasClass("v-light")) && (c.on("enter", function () {
                        u.length > 0 && u.get(0).play(), i.hasClass("v-light") && !e(n).hasClass("header-hero-2") && i.removeClass("menu-light")
                    }), c.on("leave", function () {
                        u.length > 0 && u.get(0).pause(), i.hasClass("v-light") && !e(n).hasClass("header-hero-2") && i.addClass("menu-light")
                    })), c
                },
                nextProject: function () {
                    let n = e("#dsn-next-parallax-img"),
                        a = e("#dsn-next-parallax-title"),
                        r = !(n.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: o,
                            triggerHook: 1,
                            duration: "100%"
                        }).setTween(TweenMax.to(n, 1, {
                            force3D: !0,
                            y: "30%",
                            scale: 1
                        }, 0)).addTo(t),
                        l = !(a.length <= 0) && new ScrollMagic.Scene({
                            triggerElement: o,
                            triggerHook: .5,
                            duration: "55%"
                        }).setTween(TweenMax.to(a, 1, {
                            force3D: !0,
                            top: "0%",
                            opacity: 1,
                            ease: Power0.easeNone
                        }, 0)).addTo(t);
                    s.getListener(function (e) {
                        !1 !== r && r.refresh(), !1 !== l && l.refresh()
                    }), !1 !== l && i.hasClass("v-light") && l.on("progress", function (e) {
                        e.progress > .8 ? i.removeClass("menu-light") : i.addClass("menu-light")
                    })
                },
                parallaxImg: function () {
                    e('[data-dsn-grid="move-up"]').each(function () {
                        let n = e(this);
                        n.attr("data-dsn-grid", "moveUp");
                        let a = n.find("img:not(.hidden) , video"),
                            i = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-duration"), 1 !== i ? "100%" : "200%");
                        if (a.length > 0) {
                            var r;
                            if (a.hasClass("has-top-bottom")) {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-move"), "15%");
                                r = TweenMax.to(a, .8, {
                                    force3D: !0,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            } else {
                                let e = dsnGrid.getUndefinedVal(a.data("dsn-y"), "10%"),
                                    t = dsnGrid.getUndefinedVal(a.data("dsn-scale"), 1.1);
                                1 !== i ? (a.css("top", 0), r = TweenMax.to(a, 2, {
                                    force3D: !0,
                                    scale: t,
                                    y: e
                                })) : r = TweenMax.to(a, 1, {
                                    force3D: !0,
                                    scale: t,
                                    y: e,
                                    ease: Power0.easeNone
                                })
                            }
                            var l = new ScrollMagic.Scene({
                                triggerElement: this,
                                triggerHook: i,
                                duration: o
                            }).setTween(r).addTo(t);
                            s.getListener(function () {
                                l.refresh()
                            })
                        }
                    })
                },
                moveSection: function () {
                    e('[data-dsn-grid="move-section"]').each(function () {
                        let n = e(this);
                        n.removeAttr("data-dsn-grid"), n.addClass("dsn-move-section");
                        let i = dsnGrid.getUndefinedVal(n.data("dsn-move"), -100),
                            o = dsnGrid.getUndefinedVal(n.data("dsn-triggerhook"), 1),
                            r = dsnGrid.getUndefinedVal(n.data("dsn-opacity"), n.css("opacity")),
                            l = dsnGrid.getUndefinedVal(n.data("dsn-duration"), "150%");
                        if ("tablet" === n.data("dsn-responsive") && a.width() < 992) return;
                        let d = TweenMax.to(n, 2, {
                            y: i,
                            autoAlpha: r,
                            ease: Power0.easeNone
                        });
                        var c = new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: o,
                            duration: l
                        }).setTween(d).addTo(t);
                        s.getListener(function () {
                            c.refresh()
                        })
                    })
                },
                parallaxImgHover: function () {
                    const t = e('[data-dsn="parallax"]');
                    0 === t.length || a.width() < 992 || t.each(function () {
                        var t = e(this),
                            n = (dsnGrid.removeAttr(t, "data-dsn"), dsnGrid.removeAttr(t, "data-dsn-speed")),
                            a = dsnGrid.removeAttr(t, "data-dsn-move"),
                            i = !1;
                        t.hasClass("image-zoom") && (i = !0), dsnGrid.parallaxMoveElemnt(t, a, n, void 0, i)
                    })
                },
                changeColor: function () {
                    const n = "v-light";
                    var a = i.hasClass(n);
                    e('[data-dsn="color"]').each(function () {
                        let o = dsnGrid.getUndefinedVal(e(this).data("dsn-duration"), e(this).outerHeight() + 70);
                        var r = new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: .05,
                            duration: o
                        }).addTo(t);
                        r.on("enter", function () {
                            a ? i.removeClass(n) : i.addClass(n)
                        }), r.on("leave", function () {
                            a ? i.addClass(n) : i.removeClass(n)
                        }), s.getListener(function () {
                            r.refresh()
                        })
                    })
                },
                animateText: function () {
                    e('[data-dsn-animate="text"] , [data-dsn-animate="up"]').each(function () {
                        let n = e(this),
                            a = 1;
                        "text" === n.data("dsn-animate") ? (dsnGrid.convertTextWord(n, n), n.attr("data-dsn-animate", "animate")) : a = .8;
                        var i = new ScrollMagic.Scene({
                            triggerElement: this,
                            reverse: !1,
                            triggerHook: a
                        }).setClassToggle(this, "dsn-active").addTo(t);
                        s.getListener(function () {
                            i.refresh()
                        })
                    })
                },
                headerBlog: function () {
                    const n = e('[data-dsn-header="blog"]');
                    if (!(n.length <= 0 || a.width() < 992)) {
                        var i = new ScrollMagic.Scene({
                            triggerElement: ".header-single-post",
                            triggerHook: 0,
                            duration: "100%"
                        }).setTween(TweenMax.fromTo(n, 1, {
                            width: "100%"
                        }, {
                            width: "80%"
                        })).addTo(t);
                        s.getListener(function () {
                            i.refresh()
                        })
                    }
                },
                allInt: function () {
                    this.clearControl();
                    let e = this.headerProject();
                    s.getListener(function (t) {
                        !1 !== e && e.refresh()
                    }), this.nextProject(), this.parallaxImgHover(), this.parallaxImg(), this.moveSection(), this.animateText(), this.changeColor()
                }
            }
        }();
    s.start(), r.allInt(), t(), a.on("popstate", function (a) {
        e("main.main-root").load(document.location + " main.main-root > *", function () {
            t(!0), n().unlocked()
        })
    })
}(jQuery);