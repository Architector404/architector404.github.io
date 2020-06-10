$(document).ready(function(){
    $('.owl-simple').owlCarousel({
        loop: true,
        margin: 15,
        stagePadding: 0,
        nav: true,
        navText : ['<img src="static/images/content/prev.png">','<img src="static/images/content/next.png">'],
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});