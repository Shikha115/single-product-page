$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        nav: false,
        autoplayHoverPause: false
    });
});