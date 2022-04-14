/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;
GLOBAL.columnsStartLength = GLOBAL.columnsStartLength || 0;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-mask-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        "tabThrough": true,
        "showMaskOnHover": false,
    });

    $('.js-mask-email').inputmask({
        alias: "email",
        "tabThrough": true,
        "showMaskOnHover": false,
    });
}

function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon icon icon_close"></i>' +
                "</button>",
        },
        arrows: false,
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        beforeClose: function (instance) {
        },
        afterLoad: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                current.$content.append('' +
                    '<button class="fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_left"><i class="icon icon_arrow-left"></i></i>' +
                    '</button>' +
                    '<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_right"><i class="icon icon_arrow-right"></i></i>' +
                    '</button>'
                );
            }
        }
    });
}

function openPopupCallback($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-callback');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initPopupConfidential();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close fancybox-close_inner" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon icon icon_close"></i>' +
                "</button>",
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupCallback() {
    $(".js-open-callback").on('click', function() {
        $.fancybox.close();
        openPopupCallback($(".js-open-callback"));
    });
}

function openPopupConfidential($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-confidential');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initScroll();
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close fancybox-close_inner" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon icon icon_close"></i>' +
                "</button>",
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupConfidential() {
    $(".js-open-confidential").on('click', function() {
        $.fancybox.close();
        openPopupConfidential($(".js-open-confidential"));
    });
}

function openPopupSuccess(url) {
    if (typeof(url) == 'undefined') {
        url = '/';
    }

    $.fancybox.open({
        src  : url,
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close fancybox-close_inner" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon icon icon_close"></i>' +
                "</button>",
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

var sliderCategory;
function initSliderCategory() {
    jQuery('.js-slider-category').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderCategory = new Swiper($slider[0], {
            loop: false,
            pagination: false,
            navigation: false,
            spaceBetween: 0,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    loop: sliderLength > 1 ? true : false,
                    simulateTouch: false,
                },
                744: {
                    slidesPerView: 2,
                    loop: sliderLength > 2 ? true : false,
                    simulateTouch: false,
                },
                984: {
                    slidesPerView: 2,
                    loop: sliderLength > 2 ? true : false,
                    simulateTouch: false,
                },
                1164: {
                    slidesPerView: 3,
                    loop: sliderLength > 3 ? true : false,
                    simulateTouch: false,
                },
                1344: {
                    slidesPerView: 5,
                    loop: sliderLength > 4 ? true : false,
                },
                1800: {
                    slidesPerView: 5,
                    loop: sliderLength > 5 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderSport;
function initSliderSport() {
    jQuery('.js-slider-sport').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderSport = new Swiper($slider[0], {
            loop: false,
            pagination: {
                el: $slider.find('.js-slider-pagination')[0],
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            spaceBetween: 0,
            slidesPerView: 1,
            effect: "fade",
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    simulateTouch: false,
                },
                744: {
                    simulateTouch: false,
                },
                984: {
                    simulateTouch: false,
                },
                1164: {
                    simulateTouch: false,
                },
                1344: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderClients;
function initSliderClients() {
    jQuery('.js-slider-clients').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderClients = new Swiper($slider[0], {
            loop: false,
            pagination: false,
            navigation: false,
            spaceBetween: 24,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    loop: sliderLength > 1 ? true : false,
                    simulateTouch: false,
                },
                744: {
                    slidesPerView: 2,
                    loop: sliderLength > 2 ? true : false,
                    simulateTouch: false,
                },
                984: {
                    slidesPerView: 3,
                    loop: sliderLength > 3 ? true : false,
                    simulateTouch: false,
                },
                1164: {
                    slidesPerView: 3,
                    loop: sliderLength > 3 ? true : false,
                    simulateTouch: false,
                },
                1344: {
                    slidesPerView: 5,
                    loop: sliderLength > 4 ? true : false,
                },
                1800: {
                    slidesPerView: 5,
                    loop: sliderLength > 5 ? true : false,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

function initTab() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Tab').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initScrollTop() {
    var $scrolltop = $('.js-scrolltop'),
        scrolltopActiveClass = $scrolltop.data('scrolltop');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
            $scrolltop.addClass(scrolltopActiveClass);
        } else {
            $scrolltop.removeClass(scrolltopActiveClass);
        }
    });
    $scrolltop.click(function(){
        $('html, body').animate({scrollTop: '0px'}, 500);
        return false;
    });
}

function initNumerator1() {
    jQuery('.js-numerator-item-1').each(function() {
        var $element = $(this),
            $parent = $(this).closest('.js-numerator'),
            $value = $element.find('.js-numerator-value'),
            value = $value.text(),
            max = $element.data('numerator-max'),
            step = $element.data('numerator-step'),
            speed = $element.data('numerator-speed');

        function start() {
            if (value < max){
                value = Number(value) + Number(step);
                $value.html(value);
                setTimeout(start, speed);
            } else {
                if (value > 0){
                    if (value >= 1000000){
                        max = value/1000000;
                    }
                    $value.html(max);
                    $parent.addClass('advantages-list_active');
                }
            }
        }
        start();
    });
}

function initNumerator2() {
    jQuery('.js-numerator-item-2').each(function() {
        var $element = $(this),
            $parent = $(this).closest('.js-numerator'),
            $value = $element.find('.js-numerator-value'),
            value = $value.text(),
            max = $element.data('numerator-max'),
            step = $element.data('numerator-step'),
            speed = $element.data('numerator-speed');

        function start() {
            if (value < max){
                value = Number(value) + Number(step);
                $value.html(value);
                setTimeout(start, speed);
            } else {
                if (value > 0){
                    if (value >= 1000000){
                        max = value/1000000;
                    }
                    $value.html(max);
                    $parent.addClass('advantages-list_active');
                }
            }
        }
        start();
    });
}

function initAnimateSection() {
    var wow = new WOW(
        {
            boxClass:     'js-animate-section-1',
            animateClass: 'animated',
            offset:       200,
            mobile:       true,
            live:         true,
            callback:     function(box) {
                initNumerator1();
            },
            scrollContainer: null,
        }
    );
    wow.init();
}

function initAnimateSection2() {
    var wow = new WOW(
        {
            boxClass:     'js-animate-section-2',
            animateClass: 'animated',
            offset:       200,
            mobile:       true,
            live:         true,
            callback:     function(box) {
                initNumerator2();
            },
            scrollContainer: null,
        }
    );
    wow.init();
}

function initAnchorScroll() {
    var $page = $('html, body');

    $('.js-anchor-link[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
}

function initGalleryCard() {
    var galleryThumbs = document.querySelector(".js-gallery-card-thumbs");
    if (galleryThumbs) {
        galleryThumbs = new Swiper(".js-gallery-card-thumbs", {
            loop: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: "auto",
            autoHeight: false,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            watchOverflow: true,
            navigation: false,
            breakpoints: {}
        });
    }
    var galleryTop = new Swiper(".js-gallery-card-main", {
        loop: false,
        direction: "horizontal",
        navigation: {
            nextEl: ".js-slider-next",
            prevEl: ".js-slider-prev",
        },
        pagination: false,
        thumbs: {
            swiper: galleryThumbs,
        },
        breakpoints: {
            0: {
                spaceBetween: 24,
            },
            744: {
                spaceBetween: 48,
            },
        },
    });
    $(".js-gallery-card-prev").on('click', function(e) {
        galleryTop.slidePrev();
    });
    $(".js-gallery-card-next").on('click', function(e) {
        galleryTop.slideNext();
    });
};


function initPopupGallery() {
    $(".js-popup-gallery").fancybox({
        src  : $(this).data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<i class="fancybox-close-icon icon icon_close"></i>' +
                "</button>",
        },
        arrows: false,
        touch: false,
        infobar : false,
        loop: true,
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
        beforeClose: function (instance) {
        },
        afterLoad: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                $('.js-popup-gallery-container').append('' +
                    '<div class="card-popup-buttons">' +
                    '<button class="card-popup-button card-popup-button_left fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_left"><i class="icon icon_arrow-left"></i></i>' +
                    '</button>' +
                    '<button class="card-popup-button card-popup-button_right fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_right"><i class="icon icon_arrow-right"></i></i>' +
                    '</button>' +
                    '</div>'
                );
                if (current.index == 0) {
                    $('.fancybox-button--arrow_left').addClass('disabled');
                }
                if (current.index >= instance.group.length - 1) {
                    $('.fancybox-button--arrow_right').addClass('disabled');
                }
            }
        },
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initGalleryCard();
            initPopupClose();
            initPopupConfidential();
        },
    });
}

function initPopupClose() {
    $('.js-popup-close').on('click', function () {
        $.fancybox.close();
    });
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
    } else {
        GLOBAL.widthWindow = '';
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initValidate();
    initMask();
    initPopup();
    initScrollTop();
    initScroll();
    initSliderCategory();
    initSliderSport();
    initSliderClients();
    initTab();
    initPopupCallback();
    initPopupConfidential();
    initAnimateSection();
    initAnimateSection2();
    initAnchorScroll();
    initGalleryCard();
    initPopupGallery();
    initPopupClose();
});
