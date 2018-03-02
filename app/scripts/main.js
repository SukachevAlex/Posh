$( document ).ready(function() {
    $('.second-line').on('click', function () {
        $('.hamburger__inner').toggleClass('is-active');
        $('.menu').toggleClass('is-visible');
    });

    $('.tabs__link').click(function () {
       var tab_id = $(this).attr('data-tab');

       $('.tabs__link').removeClass('tab_active');
       $('.fragment').removeClass('fragment_active');

       $(this).addClass('tab_active');
       $(tab_id).addClass('fragment_active');
    });


    $(".gallery-slider-js").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.gallery-slider__prev',
        nextArrow: '.gallery-slider__next'
    });


});

var nav = $('.navigation');

$(window).scroll(function()
{
    if (nav.offset().top + nav.height() > $('.header').height())
        nav.addClass('navigation_dark');
    else
        nav.removeClass('navigation_dark');

});