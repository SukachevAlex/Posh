$( document ).ready(function() {
    $('.second-line').on('click', function () {
        $('.hamburger__inner').toggleClass('is-active');
        $('.menu').toggleClass('is-visible');
    });
});