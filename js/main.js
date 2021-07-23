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

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
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

        }, { offset: '95%' });

    }
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

        }, { offset: '95%' });
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
        })
    };
    OnePageNav();
});

window.onload = function() {
    var p2Imgs = document.getElementsByClassName("p2_img");
    var p2ImgWrappers = document.getElementsByClassName("p2_imgwrapper");
    var p2MainFlexWrapper = document.getElementById("p2MainFlexWrapper");
    var p2ImgWrapper3 = document.getElementsByClassName("p2_imgwrapper3")[0];
    var p2ImgWrapper4 = document.getElementsByClassName("p2_imgwrapper4")[0];
    console.log(p2ImgWrapper3.classList);
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
            //console.log(window.innerWidth * 0.14 - 30);
            var p2ImgWrapperPadding = 10 * p2Imgs[i].width / 345;
            p2Imgs[i].width = window.innerWidth * 0.4 - p2ImgWrapperPadding;
            //console.log(15 * p2Imgs[i].width / 345);
            p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
        }
    } else {
        p2MainFlexWrapper.className = "p2MainFlexWrapperNormal";
        for (var i = 0; i < p2Imgs.length; i++) {
            //console.log(window.innerWidth * 0.14 - 30);
            var p2ImgWrapperPadding = 15 * p2Imgs[i].width / 345;
            p2Imgs[i].width = window.innerWidth * 0.16 - p2ImgWrapperPadding;
            //console.log(15 * p2Imgs[i].width / 345);
            p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
        }
    }
    /*window.onresize = function() {
        if ((window.innerWidth / window.innerHeight < 1) && (flag = false)) {
            flag = true;
            p2MainFlexWrapper.className = "p2MainFlexWrapperMobile";
            var p2ImgWrapperMobile12 = document.createElement("div");
            p2ImgWrapperMobile12.appendChild(p2MainFlexWrapper.childNodes[1]);
            p2ImgWrapperMobile12.appendChild(p2MainFlexWrapper.childNodes[3]);
            console.log(p2MainFlexWrapperMobile12);
            var p2ImgWrapperMobile345 = document.createElement("div");
            for (var i = 0; i < p2Imgs.length; i++) {
                //console.log(window.innerWidth * 0.14 - 30);
                var p2ImgWrapperPadding = 15 * p2Imgs[i].width / 345;
                p2Imgs[i].width = window.innerWidth * 0.16 - p2ImgWrapperPadding;
                //console.log(15 * p2Imgs[i].width / 345);
                p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
            }
        } else {
            flag = false;
            p2MainFlexWrapper.className = "p2MainFlexWrapperNormal";
            for (var i = 0; i < p2Imgs.length; i++) {
                //console.log(window.innerWidth * 0.14 - 30);
                var p2ImgWrapperPadding = 15 * p2Imgs[i].width / 345;
                p2Imgs[i].width = window.innerWidth * 0.16 - p2ImgWrapperPadding;
                //console.log(15 * p2Imgs[i].width / 345);
                p2ImgWrappers[i].style.paddingLeft = p2ImgWrapperPadding.toString() + "px";
            }
        }
    }*/
}