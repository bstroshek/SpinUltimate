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
        slidesToShow: 1
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
            }


        ]
    });



});



