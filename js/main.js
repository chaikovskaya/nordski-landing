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

function initDropdownMarks() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown-Marks').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
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

function initScrollUp() {
    $(window).scroll(function(){
        var position = $(window).scrollTop(),
            positionBlock = $('.js-main-content').scrollTop();

        if (position > positionBlock) {
            $('body').addClass('main-content-animate');
        } else {
            $('body').removeClass('main-content-animate');
        }
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

function initForm() {
    jQuery('.js-form').each(function() {
        var $checkbox = $(this).find('.js-form-checkbox'),
            $button = $(this).find('.js-form-button'),
            classDisabled = $(this).data('form-disabled');

        if ($checkbox.is(':checked')) {
            $button.removeClass(classDisabled);
        } else {
            $button.addClass(classDisabled);
        }

        $checkbox.on("change", function(e) {
            e.stopPropagation();
            if ($checkbox.is(':checked')) {
                $button.prop("disabled", false);
                $button.removeClass(classDisabled);
            } else {
                $button.prop("disabled", true);
                $button.addClass(classDisabled);
            }
        });
    });
}

function initSwitch() {
    $('.js-switch').each(function() {
        var $img = $(this).find('.js-switch-img'),
            $link = $(this).find('.js-switch-link'),
            classActive = 'products-img_active';

        if ($link.length == 1) {
            $link.hide();
        }

        $link.hover(function(){
            var index = $(this).index();

            $img.removeClass(classActive);
            $img.eq(index).addClass(classActive);
        });
    });
}

function initPassword() {
    jQuery('.js-password').each(function() {
        var $element = jQuery(this),
            $link = $element.find('.js-password-link'),
            $input = $element.find('.js-password-input'),
            $classActive = $element.data('password');

        $link.on("click", function() {
            $element.toggleClass($classActive);
            if ($input.attr('type') == 'password') {
                $input.attr('type','text');
            } else {
                $input.attr('type','password');
            }
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

function initTabInner() {
    if (typeof(TabInner) === 'undefined' || !jQuery.isFunction(TabInner)) {
        return false;
    }

    var common = {};

    jQuery('.JS-TabInner').not('.JS-TabInner-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new TabInner(this, jQuery.extend({}, common, local));
    });
}

function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close">' +
                'Закрыть<i class="fancybox-close-icon icon icon_cross_light"></i>' +
                '</button>',
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initPopupGallery() {
    $(".js-popup-gallery").fancybox({
        loop: true,
        infobar: false,
        toolbar  : false,
        smallBtn : true,
        arrows : false,
        animationEffect: "fade",
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close">' +
                'Закрыть<i class="fancybox-close-icon icon icon_cross_light"></i>' +
                '</button>',
        },
        beforeClose: function (instance) {
        },
        afterLoad: function(instance, current) {
            if ( instance.group.length > 1 && current.$content ) {
                current.$content.append('' +
                    '<div class="fancybox-nav-block">' +
                    '<button class="fancybox-button fancybox-button--arrow_left prev" data-fancybox-prev>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_left icon icon_arrow-left"></i></button>' +
                    '<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next>' +
                    '<i class="fancybox-button-icon fancybox-button-icon_right icon icon_arrow-right"></i></button>' +
                    '</div>'
                );
            }
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initPopupProfile() {
    $('.js-popup-profile').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initValidate();
                    initMask();
                    initPopupForgot();
                    initPopupRegistration();
                    initScroll();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupRegistration() {
    $('.js-popup-reg').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initValidate();
                    initMask();
                    initPopupProfile();
                    initScroll();
                    initForm();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupForgot() {
    $('.js-forgot-password').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initValidate();
                    initMask();
                    initPopupProfile();
                    initScroll();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupBuy() {
    $('.js-popup-buy').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initValidate();
                    initMask();
                    initScroll();
                    initForm();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupBasket() {
    $('.js-popup-basket').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);

                    initScroll();
                    initQuantity();
                    initShowMoreBasket();
                    initPopupBuy();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupWishlist() {
    $('.js-popup-wishlist').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);

                    initScroll();
                    initQuantity();
                    initShowMoreBasket();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initQuantity() {
    if (typeof(Quantity) === 'undefined' || !jQuery.isFunction(Quantity)) {
        return false;
    }

    var common = {};

    $('.JS-Quantity').not('.JS-Quantity-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('quantity'));
        new Quantity(this, jQuery.extend({}, common, local));
    });
}

function initSearch() {
    $('.js-search').each(function(){
        var $element = $(this),
            classDynamic = $(this).data('search-dynamic'),
            $input = $(this).find('.js-search-input'),
            $link = $(this).find('.js-search-reset');

        $link.on('click', function(e, data) {
            $input.val('');
            $element.removeClass(classDynamic);
        });

        $input.on('input', function(e, data) {
            var val = $input.val();
            if (val != '') {
                $element.addClass(classDynamic);
            } else {
                $element.removeClass(classDynamic);
            }
        });
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

function initExpand() {
    jQuery('.js-expand').each(function() {
        var $element = $(this),
            $block = $element.find('.js-expand-block'),
            $link = $element.find('.js-expand-link'),
            local = GLOBAL.parseData(jQuery(this).data('expand')),
            classActive = local.classActive || 'active',
            classShow = local.classShow || 'show',
            heightParent = parseInt($block.css('min-height'),10) || 24,
            heightChild = $block.height();

        if (heightChild > heightParent) {
            $element.addClass(classActive);

            $link.on("click", function() {
                $element.addClass(classShow);
            });
        }
    });
}

function initAccordion() {
    if (typeof(Accordion) === 'undefined' || !jQuery.isFunction(Accordion)) {
        return false;
    }

    var common = {};

    $('.JS-Accordion').not('.JS-Accordion-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('accordion'));
        new Accordion(this, jQuery.extend({}, common, local));
    });
}

function initShowMore(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {},
            toggle: function () {}
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initIndicator(parent, currentAmount, currentTotal) {
    var $element = $(parent).find('.js-indicator'),
        total = $element.data("indicator-total"),
        $value = $element.find('.js-indicator-value');

    if ((currentAmount > 0) && (currentTotal > 0)) {
        var percent = (currentAmount * 100)/currentTotal;
    }

    var res = (total * percent)/100;
    if (res) {
        $value.attr('stroke-dasharray', res + ',' + total);
    }
}

function initShowMoreBasket(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {
                var lengthItem = $('.JS-ShowMore-Basket').find('.JS-ShowMore-Item').length,
                    lengthItemCurrent = $('.JS-ShowMore-Basket').find('.JS-ShowMore-Item').not('.JS-ShowMore-Hide').length;
                initIndicator($('.JS-ShowMore-Basket'), lengthItemCurrent, lengthItem);

                if (lengthItem < 10) {
                    lengthItem =  '0' + lengthItem;
                }
                if (lengthItemCurrent < 10) {
                    lengthItemCurrent =  '0' + lengthItemCurrent;
                }
                $('.JS-ShowMore-Basket .js-showMore-amount').html(lengthItem);
                $('.JS-ShowMore-Basket .js-showMore-current').html(lengthItemCurrent);
            },
            toggle: function () {
                var lengthItem = $('.JS-ShowMore-Basket').find('.JS-ShowMore-Item').length,
                    lengthItemCurrent = $('.JS-ShowMore-Basket').find('.JS-ShowMore-Item').not('.JS-ShowMore-Hide').length;
                initIndicator($('.JS-ShowMore-Basket'), lengthItemCurrent, lengthItem);

                if (lengthItem < 10) {
                    lengthItem =  '0' + lengthItem;
                }
                if (lengthItemCurrent < 10) {
                    lengthItemCurrent =  '0' + lengthItemCurrent;
                }
                $('.JS-ShowMore-Basket .js-showMore-amount').html(lengthItem);
                $('.JS-ShowMore-Basket .js-showMore-current').html(lengthItemCurrent);
            },
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore-Basket').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initShowMoreCatalogSection(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {},
            toggle: function () {}
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore-CatalogSection').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initShowMoreOrder(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = {
            start: function () {},
            toggle: function () {}
        },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore-Order').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initSelect() {
    $('.js-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
    });
}

function initSliderRange() {
    jQuery('.js-slider-range').each(function() {
        var $element = $(this),
            $track = $element.find('.js-slider-range-track');

        var min = Number($(this).find('.min-price').attr('data-value'));
        var max = Number($(this).find('.max-price').attr('data-value'));

        var price_id = $(this).attr('data-code');

        $track.slider({
            range: true,
            min: min,
            max: max,
            drag: true,
            values: [min, max],
            classes: {
                "ui-slider-handle": "slider-range-button",
                "ui-slider-range": "slider-range-quantity"
            },
            slide: function (event, ui) {
                $("input#minCost_" + price_id).val(ui.values[0]);
                $("input#maxCost_" + price_id).val(ui.values[1]);

                $('#minCost_' + price_id).trigger('change');
            },
            stop: function (event, ui) {
                $("input#minCost_" + price_id).val(ui.values[0]);
                $("input#maxCost_" + price_id).val(ui.values[1]);

                $('#minCost_' + price_id).trigger('change');
            }
        });
    });
}

function initTooltip() {
    $('.js-tooltip').each(function() {
        var $content = $(this).find('.js-tooltip-content'),
            classElement = $(this).data('tooltip-class');

        Tipped.create($(this), $content, {
            position: 'bottom',
            size: 'x-small',
            skin: 'light',
            hideOthers: true,
        });
    });
}

function initParallaxBanner() {
    $(".js-parallax-banner").each(function(){
        var scene = this;
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            hoverOnly: true,
            pointerEvents: true,
        });
    });
}

function initSliderMainBanner() {
    $(".js-slider-main-banner").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 45,
            items: 1,
            nav: true,
            responsive: {
                0: {
                },
                720: {
                    mouseDrag: true,
                },
                992: {
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);
                updateButtons();

                initParallaxBanner();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
            updateButtons();
        });
    });
}

function initSliderCategory() {
    $(".js-slider-category").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: false,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                    mouseDrag: true,
                },
                720: {
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                 },
                1200: {
                    items: 3,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
        });
    });
}

function initSliderCatalogGallery() {
    $(".js-slider-catalog-gallery").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 4,
                    loop: itemLength > 4 ? true : false,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);
                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
            updateButtons();
        });
    });
}

function initSliderProducts() {
    $(".js-slider-products").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                },
                1200: {
                    items: 4,
                    loop: itemLength > 4 ? true : false,
                },
                1640: {
                    items: 5,
                    loop: itemLength > 5 ? true : false,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}

function initSliderNew() {
    $(".js-slider-new").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    autoWidth: true,
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    autoWidth: true,
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    autoWidth: false,
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                },
                1200: {
                    autoWidth: false,
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                },
                1640: {
                    autoWidth: true,
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}

function initSliderOwnProducts() {
    $(".js-slider-own-products").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 2,
                    loop: itemLength > 2 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                },
                1200: {
                    items: 4,
                    loop: itemLength > 4 ? true : false,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}

function initSliderInstagram() {
    $(".js-slider-instagram").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: false,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                    mouseDrag: true,
                },
                720: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                },
                1200: {
                    items: 4,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
        });
    });
}
function reInitSliderInstagram() {
    $(".js-slider-instagram .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderVideo() {
    $(".js-slider-video").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            items: 1,
            responsive: {
                0: {
                    margin: 24,
                },
                720: {
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                },
                1200: {
                },
                1640: {
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}


function initSliderAbout() {
    $(".js-slider-about").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount'),
            $description = $element.find('.js-slider-about-description'),
            angle = 0;

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoWidth: true,
            autoHeight: false,
            smartSpeed: 300,
            margin: 0,
            nav: true,
            items: 3,
            responsive: {
                0: {
                },
                720: {
                    mouseDrag: true,
                },
                992: {
                },
                1200: {
                },
                1640: {
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('prev.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');

            angle = angle - 110;
            $list.css('transform','rotate(' + angle + 'deg)');
            $list.find('.owl-item.active').css('transform','rotate(' + (-angle) + 'deg)');

            var item = $description.filter('[data-slider-index="' + index + '"]');
            $description.removeClass('about-description-item_active');
            item.addClass('about-description-item_active');

            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
            updateButtons();
        });
        $list.on('next.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');

            angle = angle + 110;
            $list.css('transform','rotate(' + angle + 'deg)');
            $list.find('.owl-item.active').css('transform','rotate(-' + angle + 'deg)');

            var item = $description.filter('[data-slider-index="' + index + '"]');
            $description.removeClass('about-description-item_active');
            item.addClass('about-description-item_active');

            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
            updateButtons();
        });
    });
}

function initSliderCatalogSection() {
    $(".js-slider-catalog-section").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {

                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);
                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);
            updateButtons();
        });
    });
}
function reInitSliderCatalogSection() {
    $(".js-slider-catalog-section .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderCatalogCategory() {
    $(".js-slider-catalog-category").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    items: 4,
                    loop: itemLength > 4 ? true : false,
                },
                1200: {
                    items: 5,
                    loop: itemLength > 5 ? true : false,
                },
                1640: {
                    items: 6,
                    loop: itemLength > 6 ? true : false,
                },
            },
            onInitialized : function(event) {
                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            updateButtons();
        });
    });
}
function reInitSliderCatalogCategory() {
    $(".js-slider-catalog-category .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderCatalogCategoryMain() {
    $(".js-slider-catalog-category-main").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: itemLength > 1 ? true : false,
                    margin: 24,
                },
                720: {
                    items: 3,
                    loop: itemLength > 3 ? true : false,
                    mouseDrag: true,
                    margin: 24,
                },
                992: {
                    items: 4,
                    loop: itemLength > 4 ? true : false,
                },
                1200: {
                    items: 5,
                    loop: itemLength > 5 ? true : false,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}
function reInitSliderCatalogCategoryMain() {
    $(".js-slider-catalog-category-main .js-slider-list").trigger('destroy.owl.carousel');
}

function initMainSubmenu() {
    $(".main-submenu").each(function(){
        var $list = $(this),
            $item = $list.find('li'),
            lengthItem = $item.length,
            className1 = 'main-submenu_col-2',
            className2 = 'main-submenu_col-3',
            amountItem1 = 6,
            amountItem2 = amountItem1 * 2;

        $list.removeClass(className1);
        $list.removeClass(className2);
        if (lengthItem > amountItem1) {
            $list.addClass(className1);
        }
        if (lengthItem > amountItem2) {
            $list.addClass(className2);
        }
    });
}

function initSliderCatalog() {
    $(".js-slider-catalog").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 1,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            updateButtons();
        });
    });
}
function reInitSliderCatalog() {
    $(".js-slider-catalog .js-slider-list").trigger('destroy.owl.carousel');
}

function initProgressbar() {
    $('.js-progressbar').each(function() {
        var $element = $(this),
            $amount = $element.find('.js-progressbar-amount'),
            $total = $element.find('.js-progressbar-total').text(),
            $item = $element.find('.js-progressbar-item');

        var amount = $item.last().data('progressbar-index');
        $amount.html(amount);

        initIndicator($element, amount, $total);
    });
}

function initAjaxMoreProducts() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var lastElement;
    var common = {
        beforeSend: function () {
            lastElement = $(".js-slider-catalog .js-slider-item").length;
        },
        success: function () {
            if ( GLOBAL.widthWindow == 'isMobile') {
                reInitSliderCatalog();
                initSliderCatalog();
                $(".js-slider-catalog .js-slider-list").trigger('to.owl.carousel', lastElement);
            }
            initProgressbar();
            initDropdownMarks();
        }
    };

    $('.JS-AjaxMore-Products').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initGalleryCard() {
    var galleryThumbs = new Swiper(".js-gallery-card-thumbs", {
        loop: true,
        centeredSlides: false,
        centeredSlidesBounds: false,
        direction: "vertical",
        spaceBetween: 12,
        slidesPerView: "auto",
        autoHeight: true,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        navigation: false,
        breakpoints: {
            0: {
            },
            720: {
                spaceBetween: 7,
            },
        }
    });
    var galleryTop = new Swiper(".js-gallery-card-main", {
        loop: true,
        direction: "horizontal",
        spaceBetween: 40,
        navigation: {
            nextEl: ".js-slider-next",
            prevEl: ".js-slider-prev",
        },
        pagination: {
            el: '.js-slider-bullets',
            type: 'bullets',
            clickable: true,
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    $(".js-gallery-card-prev").on('click', function(e) {
        galleryTop.slidePrev();
    });
    $(".js-gallery-card-next").on('click', function(e) {
        galleryTop.slideNext();
    });
};

function initSliderTabs() {
    var sliderClass = ".js-slider-tabs";

    var index = $(sliderClass).find('.tabs-menu-item_active').index();
        index = index;

    var swiper = new Swiper(sliderClass, {
        loop: false,
        pagination: false,
        navigation: false,
        slidesPerView: "auto",
        resistance: true,
        resistanceRatio: 0,
        initialSlide: index,
    });
}

function initSelectCheckbox() {
    $('.js-selectCheckbox').each(function() {
        var $input = jQuery(this).find('.js-selectCheckbox-input'),
            $link = jQuery(this).find('.js-selectCheckbox-link');

        $link.on("click", function() {
            $input.prop("checked", true);
        });
    });
}

function initTextareaSize() {
    $('.js-textarea-size').on('input', function (e) {
        e.target.style.innerHeight = 'auto';
        e.target.style.height = e.target.scrollHeight + "px";
    });
}

function initSliderDelivery() {
    $(".js-slider-delivery").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 1,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
            },
        }));
    });
}
function reInitSliderDelivery() {
    $(".js-slider-delivery .js-slider-list").trigger('destroy.owl.carousel');
}

function initRadio() {
    if (typeof(Radio) === 'undefined' || !jQuery.isFunction(Radio)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Radio').not('.JS-Radio-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('radio'));
        new Radio(this, jQuery.extend({}, common, local));
    });
}

function initRadioInner() {
    if (typeof(RadioInner) === 'undefined' || !jQuery.isFunction(RadioInner)) {
        return false;
    }

    var common = {};

    jQuery('.JS-RadioInner').not('.JS-RadioInner-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('radio'));
        new RadioInner(this, jQuery.extend({}, common, local));
    });
}

function initSliderShops() {
    $(".js-slider-shops").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 1,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
            },
        }));
    });
}
function reInitSliderShops() {
    $(".js-slider-shops .js-slider-list").trigger('destroy.owl.carousel');
}

function initRadioActive() {
    $(".js-radio-active").each(function(){
        var $element = $(this),
            $item = $element.find('.js-radio-active-item'),
            $input = $item.find('.js-radio-active-input'),
            classActive = $element.data('radio-active-class');

        if ($input.is(':checked')) {
            $item.removeClass(classActive);
            $input.filter(':checked').closest('.js-radio-active-item').addClass(classActive);
        }
        $input.on('change.JS-Radio', function(e){
            e.stopPropagation();
            $item.removeClass(classActive);
            $input.filter(':checked').closest('.js-radio-active-item').addClass(classActive);
        });
    });
}

function initSliderBanner() {
    $(".js-slider-banner").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: false,
            autoWidth:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 1,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
            },
        }));
    });
}
function reInitSliderBanner() {
    $(".js-slider-banner .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderTabsDelivery() {
    var sliderClass = ".js-slider-tabs-delivery";

    var swiper = new Swiper(sliderClass, {
        loop: false,
        pagination: false,
        navigation: false,
        slidesPerView: "auto",
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 24,
    });
}

function initSliderBannerCooperation() {
    $(".js-slider-banner-cooperation").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length;

        var isStart = itemLength > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 1,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
            },
        }));
    });
}
function reInitSliderBannerCooperation() {
    $(".js-slider-banner-cooperation .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderAlgorithm() {
    $(".js-slider-algorithm").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: false,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 300,
            margin: 40,
            nav: true,
            items: 1,
            responsive: {
                0: {
                    margin: 24,
                },
                720: {
                    mouseDrag: true,
                    margin: 24,
                    items: 2,
                },
                992: {
                    items: 3,
                },
            },
            onInitialized : function(event) {
                var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
                initIndicator($element, index, itemLength);
                if (itemLength < 10) {
                    itemLength =  '0' + itemLength;
                }
                $amountPages.html(itemLength);

                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            var index = $list.find('.owl-item.active .js-slider-item').data('slider-index');
            initIndicator($element, index, itemLength);
            if (index < 10) {
                index =  '0' + index;
            }
            $currentPage.html(index);

            updateButtons();
        });
    });
}
function reInitSliderAlgorithm() {
    $(".js-slider-algorithm .js-slider-list").trigger('destroy.owl.carousel');
}

function initFiles() {
    $('.js-file-input').MultiFile({
        STRING: {
            remove: 'Удалить<i class="file-name-close"><span class="icon icon_cross_gray"></span></i>',
            toomany: 'Выбрано слишком много файлов (максимум: $max)',
        },
        previewCss: 'max-height:100%; max-width:100%;',
        afterFileAppend: function () {
            $('.profile-form-photo-inner').removeClass('profile-form-photo-inner_active')
                                          .addClass('profile-form-photo-inner_active');
        },
        FileRemove: function () {
            $('.profile-form-photo-inner').removeClass('profile-form-photo-inner_active');
        },
    });
}

function initAjaxMoreOrders() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        beforeSend: function () {
        },
        success: function () {
            initProgressbar();
        }
    };

    $('.JS-AjaxMore-Orders').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initSliderManufacture() {
    $(".js-slider-manufacture").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item'),
            itemLength = $item.length,
            $currentPage = $element.find('.js-slider-current'),
            $amountPages = $element.find('.js-slider-amount');

        var isStart = itemLength > 1 ? true : false;

        function updateButtons() {
            $prev.removeClass('slider-button_disabled');
            $next.removeClass('slider-button_disabled');
            var prevOwl = $list.find('.owl-prev');
            if (prevOwl.hasClass('disabled') && !$prev.hasClass('slider-button_disabled')) {
                $prev.addClass('slider-button_disabled');
            }

            var nextOwl = $list.find('.owl-next');
            if (nextOwl.hasClass('disabled') && !$next.hasClass('slider-button_disabled')) {
                $next.addClass('slider-button_disabled');
            }
        }

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 150,
            margin: 40,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 24,
                },
                720: {
                    items: 2,
                    mouseDrag: true,
                    margin: 24,
                },
            },
            onInitialized : function(event) {
                updateButtons();
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
        $list.on('translated.owl.carousel', function(event) {
            updateButtons();
        });
    });
}
function reInitSliderManufacture() {
    $(".js-slider-manufacture .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        reInitSliderInstagram();
        initSliderCatalogSection();

        var localExtraCatalogSection = GLOBAL.parseData(jQuery('.JS-ShowMore-CatalogSection').data('showmore-extra'));
        initShowMoreCatalogSection(localExtraCatalogSection);

        reInitSliderCatalogCategory();
        reInitSliderCatalogCategoryMain();
        initSliderCatalog();
        initSliderDelivery();
        initSliderShops();

        var localExtraOrder = GLOBAL.parseData(jQuery('.JS-ShowMore-Order').data('showmore-extra'));
        initShowMoreOrder(localExtraOrder);
        initSliderBanner();
        initTabInner();
        initSliderBannerCooperation();
        reInitSliderAlgorithm();
        initSliderManufacture();
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        initSliderInstagram();
        initSliderCatalogSection();

        var localExtraCatalogSection = GLOBAL.parseData(jQuery('.JS-ShowMore-CatalogSection').data('showmore-extra'));
        initShowMoreCatalogSection(localExtraCatalogSection);

        initSliderCatalogCategory();
        initSliderCatalogCategoryMain();
        reInitSliderCatalog();
        reInitSliderDelivery();
        reInitSliderShops();
        initShowMoreOrder();
        reInitSliderBanner();
        reInitSliderBannerCooperation();
        initSliderAlgorithm();
        initSliderManufacture();
    } else {
        GLOBAL.widthWindow = '';
        initSliderInstagram();
        reInitSliderCatalogSection();
        initShowMoreCatalogSection();
        initSliderCatalogCategory();
        initSliderCatalogCategoryMain();
        reInitSliderCatalog();
        reInitSliderDelivery();
        reInitSliderShops();
        initShowMoreOrder();
        reInitSliderBanner();
        reInitSliderBannerCooperation();
        initSliderAlgorithm();
        reInitSliderManufacture();
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initDropdownMarks();
    initMobileMenu();
    initScroll();
    initScrollUp();
    initValidate();
    initMask();
    initForm();
    initSwitch();
    initPopup();
    initPopupProfile();
    initPopupRegistration();
    initPopupBasket();
    initPopupBuy();
    initPassword();
    initTab();
    initSearch();
    initScrollTop();
    initExpand();
    initAccordion();
    initShowMore();
    initSelect();
    initSliderRange();
    initQuantity();
    initTooltip();
    initSliderMainBanner();
    initSliderCategory();
    initSliderCatalogGallery();
    initSliderProducts();
    initSliderNew();
    initSliderOwnProducts();
    initSliderVideo();
    initSliderAbout();
    initPopupWishlist();
    initMainSubmenu();
    initAjaxMoreProducts();
    initProgressbar();
    initGalleryCard();
    initSliderTabs();
    initSelectCheckbox();
    initPopupGallery();
    initTextareaSize();
    ymaps.ready(initMap);
    initRadio();
    initRadioInner();
    initRadioActive();
    initSliderTabsDelivery();
    initFiles();
    initAjaxMoreOrders();
});
