$(function () {

    // Burger
    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger, .header__nav').toggleClass('active');
            $('body').toggleClass('lock');
        });

        $('.nav__link').click(function (event) {
            $('.header__burger, .header__nav').removeClass('active');
            $('body').removeClass('lock');
        });
    });

    // Features
    $('.features__link.first').click(function () {
        $('.features__link').removeClass('active');
        $(this).toggleClass("active");
    });
    $('.features__link.second').click(function () {
        $('.features__link').removeClass('active');
        $(this).toggleClass("active");
    });
    $('.features__link.thrid').click(function () {
        $('.features__link').removeClass('active');
        $(this).toggleClass("active");
    });
    $('.features__link.fourth').click(function () {
        $('.features__link').removeClass('active');
        $(this).toggleClass("active");
    });
    $('.features__link.fifth').click(function () {
        $('.features__link').removeClass('active');
        $(this).toggleClass("active");
    });



    $('.features__link.first').click(function () {
        $('.features__item').removeClass('block');
        $('.features__item.first').toggleClass('block');
    });
    $('.features__link.second').click(function () {
        $('.features__item').removeClass('block');
        $('.features__item.second').toggleClass('block');
    });
    $('.features__link.thrid').click(function () {
        $('.features__item').removeClass('block');
        $('.features__item.thrid').toggleClass('block');
    });
    $('.features__link.fourth').click(function () {
        $('.features__item').removeClass('block');
        $('.features__item.fourth').toggleClass('block');
    });
    $('.features__link.fifth').click(function () {
        $('.features__item').removeClass('block');
        $('.features__item.fifth').toggleClass('block');
    });



    $('.features__link.first').click(function () {
        $('.features__heading').removeClass('active');
        $('.features__heading.first').toggleClass('active');
    });
    $('.features__link.second').click(function () {
        $('.features__heading').removeClass('active');
        $('.features__heading.second').toggleClass('active');
    });
    $('.features__link.thrid').click(function () {
        $('.features__heading').removeClass('active');
        $('.features__heading.thrid').toggleClass('active');
    });
    $('.features__link.fourth').click(function () {
        $('.features__heading').removeClass('active');
        $('.features__heading.fourth').toggleClass('active');
    });
    $('.features__link.fifth').click(function () {
        $('.features__heading').removeClass('active');
        $('.features__heading.fifth').toggleClass('active');
    });



    // Sliders
    // https://kenwheeler.github.io/slick/
    $(document).ready(function () {

        $('.gallery__slider').slick({
            arrows: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            speed: 500,
            autoplay: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: false,
            swipe: false,
            waitForAnimate: false,
            responsive: [{
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                }
            }],
        });
    });

    $(document).ready(function () {
        $('.reviews__slider').slick({
            arrows: false,
            adaptiveHeight: true,
            dots: true,
            autoplay: true,
            speed: 2000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: false,
            swipe: false,
            waitForAnimate: false,
        });
    });



    //Scroll
    $(".nav__link").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 110
        }, 800);
    });


});
















