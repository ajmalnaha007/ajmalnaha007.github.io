const content = document.getElementById('content-section');
const map_sections = [document.getElementsByClassName('land')];
const headerHeight = 450;
const headerHeightOffset = window.pageYOffset + content.getBoundingClientRect().top - headerHeight;
let active_section = null;

const details = [
    [
        {
            "id": "IN",
            "name": "India",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_LMPjq5rCrNdQ9EmhTxDU8AGlOp7Z4vnzcO18c-Ml5TtaU-u9",
            "desc": "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world"
        },
        {
            "id": "IN",
            "name": "Second India",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_LMPjq5rCrNdQ9EmhTxDU8AGlOp7Z4vnzcO18c-Ml5TtaU-u9",
            "desc": "Second India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world"
        }
    ],
    [
        {
            "id": "CA",
            "name": "Canada",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHkEGEivIt24Kz85rRi0RY9QgK_SOY-3HDOyYFgierQFcixVmy",
            "desc": "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area."
        }
    ],
    [
        {
            "id": "RU",
            "name": "Russia",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXJ5FYu8NTY54WrHk8pV3yQZPitMTL2uQHyVunWJtKowlm1Zbn",
            "desc": "Russia, officially the Russian Federation, is a country in Eastern Europe with a vast expanse of territory that stretches across Northern Asia."
        }
    ],
    [
        {
            "id": "AR",
            "name": "Argentina",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS75Cp7F94ciJ3yJaZ5e6eV2kT-LCcz4p_4CB-klp6vRaoMdYnM",
            "desc": "Argentia is a Canadian commercial seaport and industrial park located in the Town of Placentia, Newfoundland and Labrador. It is situated on the southwest coast of the Avalon Peninsula and defined by a triangular shaped headland which reaches northward out into Placentia Bay creating a natural harbour 3 km in length"
        }
    ]
]


function contentDiv(title, image, description) {
    return `<div class="card">
            <h5 id="head" class="card-title">${title}</h5>
            <div class="card-row no-gap p-20">
              <div class="col-img">
                <img src=${image} id="image" class="card-img" alt="" />
              </div>
              <div class="col-content">
                <div class="card-body">
                  <p id="desc" class="card-text">${description}</p>
                </div>          
              </div>
              <div class="col-footer">
                <div class="card-footer">
                    <button class="btn btn-pro">More</button>
                </div>
              </div>
            </div>
          </div>`
}


// grab the country name and display
function showCountrydetails(action) {
    let countryID = event.target.getAttribute('id');
    let result = details.find(({ id }) => id === countryID);
    if (result == undefined)
        changeMapColor();
    if (active_section != null)
        active_section.style["fill"] = '#d7232c';
    details.map((item) => {
        if (item[0].id === countryID) {
            changeMapColor();
            event.target.style["fill"] = '#d7232c';
            if (active_section != null)
                active_section.style["fill"] = '#d7232c';
            if (action === 'click') {
                active_section = event.target;
                changeMapColor();
                active_section.style["fill"] = '#d7232c';
                if (content.style.display === "none")
                    content.style.display = "block";
                if (item.length) {
                    let content_div = "";
                    item.map(detailedItem => {
                        content_div = content_div + contentDiv(detailedItem.name, detailedItem.image, detailedItem.desc);
                        content.innerHTML = content_div;
                    })
                }
                window.scroll({ top: headerHeightOffset, behavior: "smooth" });
            }
        }
    })
}

// set event listener on the map
map.addEventListener('click', function (event) {
    if (event.target.classList.contains('land'))
        showCountrydetails('click');
});

map.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('land')) {
        showCountrydetails('hover')
    }
});


function changeMapColor() {
    map_sections.map((item) => {
        details.map((detail) => {
            item[detail[0]['id']].style["fill"] = '#ed8e8e';
            item[detail[0]['id']].style.cursor = 'pointer';
        })
    })
}
changeMapColor();



/*About Office Slider*/

var numberEl = $("#we-lead .wrapper-img .container-el .el").length;
var countEl = 1;
var delayTeamCaroussel = 8000;
var intervalTeamCaroussel = setInterval(function() {
    sectionTeamCarousselInit();
}, delayTeamCaroussel);


function sectionTeamCarousselPrg() {
    $('#we-lead .wrapper-img .container-action .btn .progress').removeClass('active');
    setTimeout(function() {
        $('#we-lead .wrapper-img .container-action .btn .progress').addClass('active');
    }, 50);

    var elPp = '#we-lead .wrapper-img .container-el .el';
    if (countEl < numberEl) {
        $(elPp + '.show').removeClass('show').addClass('hide');
        setTimeout(function() {
            $(elPp + '.hide').hide().removeClass('hide');
        }, 700);
        countEl++;

        $('#we-lead .wrapper-img .container-el .el:nth-child(' + countEl + ')').show();

        setTimeout(function() {
            $(elPp + ':visible').addClass('show');
        }, 100);

        clearInterval(intervalTeamCaroussel);
        intervalTeamCaroussel = setInterval(function() {
            sectionTeamCarousselPrg();
        }, delayTeamCaroussel);

    } else {
        countEl = 0;
        sectionTeamCarousselPrg();
    };
};

function sectionTeamCarousselInit() {
    sectionTeamCarousselPrg();
};

$('#we-lead .wrapper-img .container-action .btn').click(function() {

    $('#we-lead .wrapper-img .container-action .btn .progress').removeClass('active');

    clearInterval(intervalTeamCaroussel);
    intervalTeamCaroussel = setInterval(function() {
        sectionTeamCarousselPrg();
    }, delayTeamCaroussel);
    sectionTeamCarousselPrg();
})

sectionTeamCarousselInit();
/*About Office Slider*/


// Top banner image
// setTimeout(function() {
//     $('.img-container img').addClass('active');
// }, 500);


$('#we-lead').addClass('anim');
// Banner Slider
// $(window).on('load', function() {
//     setTimeout(function() {
//         setTimeout(function() {
//             scrollAnim();
//         }, 500);
//     }, 100);

//     sectionTeamCarousselInit();
// })

//$window = $(window);
//var windowHeight = $window.height() / 1.5;
//var distanceSectionOffice = $('#we-lead').offset().top - windowHeight;
// function scrollAnim() {
//     if ($window.scrollTop() >= distanceSectionOffice) {
//         if (!$('#we-lead').hasClass('anim')) {
//             $('#we-lead').addClass('anim');
//             sectionTeamCarousselInit();
//         }
//     }
// }
// $window.scroll(function() {
//     scrollAnim();
// });


// SubMenu
$('.tab-link').hover(function() {
    if ($(this).find('a').hasClass('current')) {
        $(this).find('a').removeClass('current');

    } else {
        $(this).find('a').addClass('current');
    }
})
$('.tab-link').mouseenter(function() {
    $('.overlay').addClass('show');
})
$('.tab-link').mouseleave(function() {
    $('.overlay').removeClass('show');
})

// Header on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
        $('.header-container').addClass('shrink');
    } else {
        $('.header-container').removeClass('shrink');
    }
})



AOS.init({
    once: true
});



// Achievement Slider
$(document).ready(function() {
    $('#achievement-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 500000000,
        autoplayHoverPause: false,
    })
})

$('.checkbox').on('click', function() {
    $(this).toggleClass('active');
})


// stats Count Section 
$(document).ready(function() {
    $(window).on('scroll', function() {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var totalHeight = winScroll + winHeight;
        var cs2 = $('.stats').offset().top;
        if (totalHeight > cs2) {
            $('.stats').addClass('anim-start');
        } else {
            $('.stats').removeClass('anim-start');
        }
    })
});



// Portfolio Slider for Mobile 
$(document).ready(function() {
    $('#port-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
    })
})



// Portfolio Desktop

if($(window).width() >= 767){
    
$(function() {
    var winht = $(window).height(),
        winhwt = $(window).width();
    var controller = new ScrollMagic.Controller({
        container: window
    });
    $('.appi-portfolio-sec').css('height', winht * 8);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: -winht * 2,
        duration: winht
    }).on("enter", function() {
        $('.clock-dial-center-wrap').removeClass("active");
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "0,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.one", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".nexgtv-center-text .text-big p", 1, {
            ease: Power4.easeInOut,
            top: "95px"
        });
        TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0",
                visibility: "hidden"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.8, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".nexgtv-img figure.l1", 1, {
            ease: Power4.easeInOut,
            bottom: "-1000px",

        });
        TweenLite.to(".nexgtv-img figure.l2", 1.2, {
            ease: Power4.easeInOut,
            bottom: "-1000px"
        });
        TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".dotsstro, .dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill, .dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: 0,
        duration: winht * 7
    }).setPin(".appi-ins-portfolio-sec").addTo(controller);
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            offset: -winht * 2 / 2,
            duration: winht * 2
        }).on("enter", function() {
            $('.clock-dial-center-wrap').addClass("active");
            TweenLite.to(".appi-portfolio-sec-left figure.one", 1, { ease: Power4.easeInOut, css: { opacity: "1" } });
            setTimeout(function() {
                TweenLite.to("#Opaque_Ring", 1, {
                    ease: Power4.easeInOut,
                    strokeDasharray: "10,1000"
                });
                TweenLite.to(".dotsstro", 1.5, {
                    ease: Power4.easeInOut,
                    css: {
                        opacity: 1
                    }
                });
                TweenLite.to(".dotsfill", 1.5, {
                    ease: Power4.easeInOut,
                    css: {
                        fill: "#0092ff",
                        opacity: 1
                    }
                });
            }, 200);
            TweenLite.to(".nexgtv-center-text .text-big p", 1, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, {
                ease: Power4.easeInOut,
                css: {
                    opacity: "1",
                    visibility: "visible"
                }
            });
            TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.2, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.4, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.6, {
                ease: Power4.easeInOut,
                top: "0"
            });
            TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.8, {
                ease: Power4.easeInOut,
                css: {
                    scale: 1,
                    zIndex: "1"
                }
            });
            TweenLite.to(".nexgtv-img", 1, {
                ease: Power4.easeInOut,
                opacity: "1",
                visibility: "visible"
            });
            TweenLite.to(".nexgtv-img figure.l1", 1, {
                ease: Power4.easeInOut,
                bottom: "-184px"
            });
            TweenLite.to(".nexgtv-img figure.l2", 1.2, {
                ease: Power4.easeInOut,
                bottom: "-184px"
            });
            TweenLite.to(".appi-ins-portfolio-sec", 1, {
                ease: Power4.easeInOut,
                css: {
                    backgroundColor: "#d2d2d5"
                }
            });
            TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
                ease: Power4.easeInOut,
                css: {
                    backgroundColor: "#6e13b2"
                }
            });
            TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: "0"
                }
            });
            TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1, {
                ease: Power4.easeInOut,
                top: "30px"
            });
            TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1, {
                ease: Power4.easeInOut,
                top: "65px"
            });
            TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1, {
                ease: Power4.easeInOut,
                top: "30px"
            });
            TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
                ease: Power4.easeInOut,
                top: "45px"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, {
                ease: Power4.easeInOut,
                top: "30px"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, {
                ease: Power4.easeInOut,
                top: "30px"
            });
            TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, {
                ease: Power4.easeInOut,
                top: "30px"
            });
            TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1.8, {
                ease: Power4.easeInOut,
                css: {
                    scale: 0,
                    zIndex: "-1"
                }
            });
            TweenLite.to(".vemeport-img", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: "0",
                    visibility: "hideen"
                }
            });
            TweenLite.to(".vemeport-img figure.l1 img", 1, {
                ease: Power4.easeInOut,
                top: "100vh"
            });
            TweenLite.to(".vemeport-img figure.l2 img", 1.3, {
                ease: Power4.easeInOut,
                top: "-100vh"
            });
            TweenLite.to(".dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 0
                }
            });
            TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: "1"
                }
            });
            TweenLite.to(".dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 0.4,
                    fill: "#fff",
                }
            });
        })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht,
        duration: winht
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "152,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.one", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".nexgtv-center-text .text-big p", 1, {
            ease: Power4.easeInOut,
            top: "-115px"
        });
        TweenLite.to(".nexgtv-center-text .text-sm p", 1, {
            ease: Power4.easeInOut,
            top: "-38px"
        });
        TweenLite.to(".nexgtv-center-text .text-big .plus", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1", 1.1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2", 1.3, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.5, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".nexgtv-img figure.l1", 1, {
            ease: Power4.easeInOut,
            bottom: "-1000px"
        });
        TweenLite.to(".nexgtv-img figure.l2", 1, {
            ease: Power4.easeInOut,
            bottom: "-1000px"
        });

        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#1f046d"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#562dd3"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro1", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill1", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 800);
        TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1.3, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1.5, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1.8, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1.8, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".vemeport-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            }
        });
        TweenLite.to(" .vemeport-img figure.l1 img", 1.5, {
            ease: Power4.easeInOut,
            top: "0vh"
        });
        TweenLite.to(" .vemeport-img figure.l2 img", 1.8, {
            ease: Power4.easeInOut,
            top: "0vh"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "89px"
        });
        TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1.5, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".nasa-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(" .nasa-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht * 2,
        duration: winht
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "282,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1, {
            ease: Power4.easeInOut,
            top: "-65px"
        });
        TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".vemeport-img figure.l1 img", 1, {
            ease: Power4.easeInOut,
            top: "100vh"
        });
        TweenLite.to(".vemeport-img figure.l2 img", 1.3, {
            ease: Power4.easeInOut,
            top: "-100vh"
        });
        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#141751"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#0e1041"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro2", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill2", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 800);
        TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1.3, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.5, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".appi-ins-portfolio-right.nasa-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            },

        });
        TweenLite.to(".nasa-img figure.l1", 1.5, {
            ease: Power4.easeInOut,
            bottom: "-6%"
        });
        TweenLite.to(".nasa-img figure.l2", 1.8, {
            ease: Power4.easeInOut,
            top: "-9%"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "75px"
        });
        TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1, {
            ease: Power4.easeInOut,
            top: "-450px"
        });

        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "-50%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            bottom: "-80%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-250px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            right: "-150px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
            ease: Power4.easeInOut,
            right: "-50%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
            ease: Power4.easeInOut,
            left: "-50%"
        });

        TweenLite.to(".dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht * 3,
        duration: winht
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "405,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "-89px"
        });
        TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(" .nasa-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(" .nasa-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#0d141c"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#162b44"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro3", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill3", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 800);
        TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            },

        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            top: "3%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            bottom: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-50px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            right: "150px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
            ease: Power4.easeInOut,
            right: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
            ease: Power4.easeInOut,
            left: "0"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "70px"
        });
        TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });


        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            left: "120%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });

        TweenLite.to(".dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht * 4,
        duration: winht
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "535,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "-80px"
        });
        TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1.4, {
            ease: Power4.easeInOut,
            top: "-450px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "-50%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            bottom: "-80%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-250px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            right: "-150px"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
            ease: Power4.easeInOut,
            right: "-50%"
        });
        TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
            ease: Power4.easeInOut,
            left: "-50%"
        });
        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#25d5eb"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#1070ea"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro4", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill4", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 800);
        TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            },

        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            top: "7%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            bottom: "2%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            left: "70%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-13%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-18%"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "65px"
        });
        TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.3, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".dotsstro5, .dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill5, .dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht * 5,
        duration: winht
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "680,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "-80px"
        });
        TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.3, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
            ease: Power4.easeInOut,
            left: "120%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#fea700"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#00319c"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro5", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill5", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 800);
        TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            }
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1.3, {
            ease: Power4.easeInOut,
            bottom: "0%"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.seven", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l7", 1, {
            ease: Power4.easeInOut,
            top: "45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l7", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-port-clocktext.melltoo .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-port-clocktext.melltoo .middel-text .l2", 1.2, {
            ease: Power4.easeInOut,
            top: "65px"
        });
        TweenLite.to(".appi-port-clocktext.melltoo .down-text .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "30px"
        });
        TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l1", 1.1, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l2", 1.3, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l2", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".dotsstro6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0
            }
        });
        TweenLite.to(".dotsfill6", 0.1, {
            ease: Power4.easeInOut,
            css: {
                opacity: 0.4,
                fill: "#fff",
            }
        });
    }).addTo(controller);
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: winht * 6,
        duration: winht - winht / 3
    }).on("enter", function() {
        TweenLite.to("#Opaque_Ring", 1, {
            ease: Power4.easeInOut,
            strokeDasharray: "815,1000"
        });
        TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
            ease: Power4.easeInOut,
            top: "-45px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 0,
                zIndex: "-1"
            }
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "0"
            }
        });
        TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.1, {
            ease: Power4.easeInOut,
            top: "-80px"
        });
        TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.3, {
            ease: Power4.easeInOut,
            top: "-30px"
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1, {
            ease: Power4.easeInOut,
            bottom: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l2", 1.1, {
            ease: Power4.easeInOut,
            right: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l3", 1.3, {
            ease: Power4.easeInOut,
            top: "-100%"
        });
        TweenLite.to(".appi-ins-portfolio-sec", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#00bf72"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
            ease: Power4.easeInOut,
            css: {
                backgroundColor: "#008d54"
            }
        });
        TweenLite.to(".appi-portfolio-sec-left figure.seven", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        setTimeout(function() {
            TweenLite.to(".dotsstro6", 1, {
                ease: Power4.easeInOut,
                css: {
                    opacity: 1
                }
            });
            TweenLite.to(".dotsfill6", 1, {
                ease: Power4.easeInOut,
                css: {
                    fill: "#0092ff",
                    opacity: "1"
                }
            });
        }, 500);
        TweenLite.to(".appi-port-left-content .pp-head p .l7", 1, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-casestudy-navi .pp-navi.l7", 1, {
            ease: Power4.easeInOut,
            css: {
                scale: 1,
                zIndex: "1"
            }
        });
        TweenLite.to(".appi-port-clocktext.melltoo .up-text .l1", 1.2, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.melltoo .middel-text .l2", 1.4, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-port-clocktext.melltoo .down-text .l3", 1.6, {
            ease: Power4.easeInOut,
            top: "0"
        });
        TweenLite.to(".appi-ins-portfolio-right.melltoo-img", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1",
                visibility: "visible"
            },
            onStart: function() {}
        });
        TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l2", 1, {
            ease: Power4.easeInOut,
            css: {
                opacity: "1"
            }
        });
        TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l1", 1.2, {
            ease: Power4.easeInOut,
            bottom: "-10%"
        });
        TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l2", 1.4, {
            ease: Power4.easeInOut,
            bottom: "-17%"
        });
    }).addTo(controller);

});
}
// SKIP Animate
$(function() {
    var _top = $(window).scrollTop();
    var _direction;
    $(window).scroll(function() {
        var _cur_top = $(window).scrollTop();
        if (_top < _cur_top) {
            $(".portskip.dwn").show();
            $(".portskip.up").hide();
        } else {
            $(".portskip.up").show();
            $(".portskip.dwn").hide();
        }
        _top = _cur_top;
    });
});
$(".portskip").click(function(event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 75
    }, 1000);
});