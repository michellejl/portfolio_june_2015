
// Web Portfolio Slider

$(document).ready(function(){
    $('.portfolioSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        adaptiveHeight: true
    });

    $('.miniSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });

});