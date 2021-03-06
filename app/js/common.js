$(window).on('load', function(){
    // When the page has loaded
    $("body").fadeIn(2000);
});


$(document).ready(function () {



    // Header scripts

    $('#nav-toggle-btn').click(function (e) {
        e.preventDefault();
        if ($('#nav-toggle').hasClass('active'))
            $('#nav-toggle').removeClass('active')
        else $('#nav-toggle').addClass('active');
    });


    $('.main-nav__item').hover(
        function () {
            $(this).find('.mega-nav').addClass('active');
            $(this).addClass('active');
        },
        function () {
            $(this).find('.mega-nav').removeClass('active');
            $(this).removeClass('active');
        }
    );


    // Home Page scripts

    $('.main-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });

    // Home Page Collections Slider

    $('.home-collections__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="slick-prev" aria-label="Previous"></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"></div>',

    });


    $('.gum__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        // centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="slick-prev" aria-label="Previous"></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }

        ]

    });


    $('.home-reviews__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        appendArrows:'.home-reviews__arrows',
        prevArrow: '<div class="home-reviews__prev"></div>',
        nextArrow: '<div class="home-reviews__next"></div>'

    });



    // Open Filter on Collection Page

    $('#js-filter-btn').click(function (e) {
        e.preventDefault();
        if ($('#js-col-sidebar').hasClass('active') && $('#js-filters-menu').hasClass('hide') && $('#js-filters-chosen').hasClass('show')) {
            $(this).removeClass('active');
            $('#js-col-sidebar').removeClass('active');
            $('#js-filters-menu').removeClass('hide');
            $('#js-col-sidebar').parent('.collection__box').parent('.block-container').removeClass('large');
            $('#js-filters-chosen').removeClass('show');
        }
        else {
            $('#js-col-sidebar').addClass('active');
            $('#js-filters-menu').addClass('hide');
            $('#js-col-sidebar').parent('.collection__box').parent('.block-container').addClass('large');
            $('#js-filters-chosen').addClass('show');
            $(this).addClass('active');
        }
    });


    // Collection Page Slider

    $('.step-slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    variableWidth: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }

        ]
    });


    // Collection Page Accordion
    $('.toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show') && $this.hasClass('active')) {
            $this.removeClass('active');
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        }

        else {
            $('.toggle').removeClass('active');
            $this.toggleClass('active');
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });


    // Team Gear Product Page Images Slider

    $('#js-product-image-slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });


    // Product Page Accordion
    $('.customization-accordion__toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.removeClass('active');
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $('.customization-accordion__toggle').removeClass('active');
            $this.toggleClass('active');
            $this.next().slideToggle(350);
        }
    });


    // open Fit/Size Guide popup

    $('.open-popup-link').magnificPopup({
        items: [
            {
                src: '#js-guide-popup',
                type: 'inline'
            }
        ]
    });

    $('.open-size-popup-link').magnificPopup({
        items: [
            {
                src: '#js-size-guide-popup',
                type: 'inline'
            }
        ]
    });



    // About Team Gear Page Slider

    $('.atg-slider').slick({
        // infinite: true,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });



    // Team Store Product Page Slider

    $('.team-store-product-slider').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: false,
                    variableWidth: false
                }
            }



        ]
    });



    // Product Page Section Complete Slider

    $('.section-complete__slider').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    infinite: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: false,
                    variableWidth: false,
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }


        ]
    });



    // Ecommerce Product Page scroll to section
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
    });

    // Product Page Tabs

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });


    // Team Gear Product Page Slider

    $('.team-gear-slider').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    variableWidth: true
                }
            }
        ]
    });


    // Ecommerce product page Hero slider unslick
    $('.ecommerce-hero .main-slider').slick('unslick');


    // Regular Product Page Accordion

    $('.product-accordion__toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.removeClass('active');
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $('.product-accordion__toggle').removeClass('active');
            $this.toggleClass('active');
            $this.next().slideToggle(350);
        }
    });


    // About Bulk Ordering Page slider

    $('.bulk-slider').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1
    });


    // Home Page updates

    $('.home-hero .main-slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });


    // Home Page Upd reviews Slider

    $('.read-reviews__slider ').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        appendArrows:'.read-reviews__arrows',
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    centerMode: false,
                    infinite: false,
                    variableWidth: false,
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }


        ]
    });

    /* contact form popup */

    $('.contact-section .open-popup').click(function(){
        $("body").addClass('active-popup');
    });

    $('.contact-section .close-popup').click(function(){
        $("body").removeClass('active-popup');
    });


    $('.input-control').on('focus blur', function(e){
       if(!$(this).val())$(this).parent()[e.type === 'focus' ? 'addClass' : 'removeClass']('input-focused');
    });

    /* custom input file */

    $('#falseinput').click(function(){
        $("#fileinput").click();
        $(this).parent().parent().addClass('active-file');
    });

    $('#fileinput').change(function() {
      $('#selected_filename').text($('#fileinput')[0].files[0].name);
      $(this).parent().addClass('active-file');
    });

    $('#falseinput1').click(function(){
        $("#fileinput1").click();
        $(this).parent().parent().addClass('active-file');
    });

    $('#fileinput1').change(function() {
      $('#selected_filename1').text($('#fileinput1')[0].files[0].name);
      $(this).parent().addClass('active-file');
    });



});



