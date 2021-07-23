$(document).ready(function($) {

    "use strict";

    // loader
    var loader = function() {
        setTimeout(function() {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    var carousel = function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            stagePadding: 5,
            nav: false,
            navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    };
    carousel();

    // scroll
    var scrollWindow = function() {
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    var counter = function() {

        $('#section-counter').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                $('.ftco-number').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });

            }

        }, {
            offset: '95%'
        });

    };
    counter();



    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('body .ftco-animate.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {
            offset: '95%'
        });
    };
    contentWayPoint();

    // navigation
    var OnePageNav = function() {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
            e.preventDefault();

            var hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function() {
                window.location.hash = hash;
            });


            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
        $('body').on('activate.bs.scrollspy', function() {
            console.log('nice');
        });
    };
    OnePageNav();
});
//getosinfo
function getOsInfo() {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = 'Unknown';
    var version = 'Unknown';
    if (userAgent.indexOf('win') > -1) {
        name = 'Windows';
        if (userAgent.indexOf('windows nt 5.0') > -1) {
            version = 'Windows 2000';
        } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
            version = 'Windows XP';
        } else if (userAgent.indexOf('windows nt 6.0') > -1) {
            version = 'Windows Vista';
        } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
            version = 'Windows 7';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
            version = 'Windows 8';
        } else if (userAgent.indexOf('windows nt 6.3') > -1) {
            version = 'Windows 8.1';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
            version = 'Windows 10';
        } else {
            version = 'Unknown';
        }
    } else if (userAgent.indexOf('iphone') > -1) {
        name = 'Iphone';
    } else if (userAgent.indexOf('mac') > -1) {
        name = 'Mac';
    } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
        name = 'Unix';
    } else if (userAgent.indexOf('linux') > -1) {
        if (userAgent.indexOf('android') > -1) {
            name = 'Android';
        } else {
            name = 'Linux';
        }
    } else {
        name = 'Unknown';
    }
    return {
        name,
        version
    };
}

//part2 self-adaption
var flag = false;
var p2Imgs = document.getElementsByClassName("p2_img");
var p2ImgWrappers = document.getElementsByClassName("p2_imgwrapper");
var p2MainFlexWrapper = document.getElementById("p2MainFlexWrapper");
var p2ImgWrapper3 = document.getElementsByClassName("p2_imgwrapper3")[0];
var p2ImgWrapper4 = document.getElementsByClassName("p2_imgwrapper4")[0];

function part2AutoAdaption() {
    if ((window.innerWidth / window.innerHeight < 1)) {
        p2MainFlexWrapper.className = "p2MainFlexWrapperMobile";
        p2ImgWrapper3.classList.toggle("p2_imgwrapper3mobile");
        p2ImgWrapper4.classList.toggle("p2_imgwrapper4mobile");
        var p2ImgWrapperMobile01 = document.createElement("div");
        p2ImgWrapperMobile01.appendChild(p2MainFlexWrapper.children[0]);
        p2ImgWrapperMobile01.appendChild(p2MainFlexWrapper.children[0]);
        var p2ImgWrapperMobile234 = document.createElement("div");
        p2ImgWrapperMobile234.appendChild(p2MainFlexWrapper.children[0]);
        p2ImgWrapperMobile234.appendChild(p2MainFlexWrapper.children[0]);
        p2ImgWrapperMobile234.appendChild(p2MainFlexWrapper.children[0]);
        p2MainFlexWrapper.appendChild(p2ImgWrapperMobile01);
        p2MainFlexWrapper.appendChild(p2ImgWrapperMobile234);
        for (var i = 0; i < p2Imgs.length; i++) {
            var p2ImgWrapperPadding = 10 * p2Imgs[i].width / 345;
            p2Imgs[i].width = window.innerWidth * 0.4 - p2ImgWrapperPadding;
            p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
        }
    } else {
        p2MainFlexWrapper.className = "p2MainFlexWrapperNormal";
        for (var i = 0; i < p2Imgs.length; i++) {
            var p2ImgWrapperPadding = 15 * p2Imgs[i].width / 345;
            p2Imgs[i].width = window.innerWidth * 0.16 - p2ImgWrapperPadding;
            p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
        }
    }
}
window.onload = part2AutoAdaption();
window.onresize = function() {
    if (window.innerWidth / window.innerHeight > 1) {
        if (flag == true) {
            flag = false;
            part2AutoAdaption();
        }
        p2MainFlexWrapper.className = "p2MainFlexWrapperNormal";
        for (var i = 0; i < p2Imgs.length; i++) {
            var p2ImgWrapperPadding = 15 * p2Imgs[i].width / 345;
            p2Imgs[i].width = window.innerWidth * 0.16 - p2ImgWrapperPadding;
            p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
        }
    } else if (flag == false) {
        flag = true;
        location.reload();
    }
    /* if ((window.innerWidth / window.innerHeight < 1) && ((getOsInfo().name == 'iphone') || (getOsInfo().name == 'android'))) {
         if (flag == false) {
             location.reload();
             flag = true;
         }
     }*/
};


$(".navbar-toggler").blur(function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $(".navbar-collapse").collapse('hide');
    }
});