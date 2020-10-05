const mediaMobile = window.matchMedia('(min-width: 991px)');
const header = document.getElementById("ps-header");
const goTopBtn = document.getElementById('go-top');
const menu = document.getElementById('menu');
const dropdowns = document.querySelectorAll('.has-dropdown');
const toggleBtn = document.getElementById('menu-toggle');
const bannerSec = document.getElementById('ps-banner-sec');
const bannerText = document.getElementById('ps-banner-txt');
const bannerOption = document.getElementById('bannerOptions');
const counterOuter = document.getElementById('counter');
const filterElement = document.getElementById('blogFilter');



// onload function
onLoadFucntion = () => {
    bannerHeight();
    bannerTxtOffset();
    menuToggle();
    scrollToTop();
    updateScrollIndicators();
}

// onresize function 
onResizeFunction = () => {
    bannerHeight();
    bannerTxtOffset();
    updateScrollIndicators();
}

window.onresize = onResizeFunction;

window.onload = onLoadFucntion;


// preloader
window.addEventListener('load', function () {
    var preloader = document.getElementById('ps-preloader');
    if (preloader) {
        preloader.classList.add('fade');
        setTimeout(() => {
            preloader.style.display = "none";
        }, 3000);
    }
});

// header class add

addClassHeader = () => {
    header.classList.add("is-sticky");
}

removeClassHeader = () => {
    header.classList.remove("is-sticky");
}

window.addEventListener('scroll', function () {
    let getScrollposition = window.scrollY;
    if (getScrollposition > 0) {
        addClassHeader();
    } else {
        removeClassHeader();
    }
});


// banner Height and width 

bannerHeight = () => {
    if ((mediaMobile.matches) && (bannerSec != null)) {
        bannerSec.style.width = '100%';
        bannerSec.style.height = window.innerHeight + "px";
    }
}

bannerTxtOffset = () => {
    if (header) {
        let logoLeftSpace = header.children[0].offsetLeft;
        if (mediaMobile.matches && logoLeftSpace && bannerText) {
            bannerText.style.paddingLeft = logoLeftSpace + 30 + "px";
        }
    }
    // about banner
    var aboutBanner = document.getElementById('ps-about-bnr');
    if (aboutBanner && bannerOption) {
        aboutBanner.style.marginBottom = bannerOption.clientHeight / 2 + 80 + "px";
    }
}

// scroll to top

window.addEventListener('scroll', () => {
    if (goTopBtn) {
        if (document.body.scrollToTop > 20 || document.documentElement.scrollTop > 20)
            goTopBtn.classList.add('active');
        else
            goTopBtn.classList.remove('active');
    }
})

scrollToTop = () => {
    if (goTopBtn) {
        goTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
}



// menu toggle button on responsive

menuToggle = () => {
    if (!mediaMobile.matches && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('is-active');
            header.classList.toggle('minisidebar');
            document.body.classList.toggle('is-overlay');
        });
    }
}

// header menu addclass in responsive

activeDropdown = (item) => {
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
        if (!mediaMobile.matches) {
            activeDropdown(item);
        }
    });
});


bannerOptionControl = (item, e) => {
    if (e.type == 'mouseover') {
        if (!(item.style.opacity == '.1')) {
            var i;
            for (i = 0; i < singleOption.length; i++) {
                singleOption[i].closest('a').style.opacity = '.1';
            }
        }
        item.closest('a').style.opacity = '1';
        item.style['fill'] = 'var(--secondary-color)';
        item.closest('a').classList.add('is-hovered');
    }
    if (e.type == 'mouseout') {
        var i;
        for (i = 0; i < singleOption.length; i++) {
            singleOption[i].closest('a').style.opacity = '1';
        }
        item.removeAttribute('style');
        item.closest('a').classList.remove('is-hovered');
    }
}



var singleOption = '';

bannerOptions = () => {
    if (bannerOption) {
        singleOption = bannerOption.querySelectorAll('.outer-div');
        singleOption.forEach(item => {
            item.addEventListener('mouseover', (e) => {
                bannerOptionControl(item, e);
            }, false);

            item.addEventListener('mouseout', (e) => {
                bannerOptionControl(item, e);
            }, false);
        });
    }
}

bannerOptions();

// counter Animation

var isActive = true;

counterInView = () => {
    if (counterOuter) {
        var elementHeight = counterOuter.clientHeight;
        let scrollY = window.scrollY || window.pageYOffset;
        let scrollPosition = scrollY + window.innerHeight;
        let elementPosition = counterOuter.getBoundingClientRect().top + scrollY + elementHeight / 2;
        if (scrollPosition > elementPosition)
            return true;
    }
    return false;
}

updateScrollIndicators = () => {
    if (filterElement) {
        var filterContainerWidth = filterElement.offsetWidth,
            filterContainerScrollWidth = filterElement.scrollWidth,
            prevBtn = document.querySelector(".scroll-prev"),
            nextBtn = document.querySelector(".scroll-next"),
            i = Math.ceil(filterElement.scrollLeft),
            n = 0 < i,
            o = i + filterContainerWidth >= filterContainerScrollWidth;
        console.log(n);
        console.log(i);
        if (!n)
            prevBtn.classList.add("d-none");
        else
            prevBtn.classList.remove("d-none");
        if (o)
            nextBtn.classList.add("d-none");
        else
            nextBtn.classList.remove("d-none");
        prevBtn.addEventListener('click', () => {
            filterElement.scrollLeft -= 100;
        });
        nextBtn.addEventListener('click', () => {
            filterElement.scrollLeft += 100;
        });
    }
}

filterElement ? filterElement.addEventListener('scroll', updateScrollIndicators, false) : '';

