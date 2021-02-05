$(document).ready(function() {
    /* Hero-Slider */
    $('.owl-hero').owlCarousel(
        {
            loop: true,
            margin: 0,
            nav: true,
            navText : ['<img src="assets/img/icons/left.svg">','<img src="assets/img/icons/right.svg">'],
            dots: false,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 2000,
            items: 1,
            /*singleItem: true,*/
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }
    );
    /* Testimonial-Slider */
    $('.owl-testimonial').owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 0,
        nav: true,
        navText : ['<img src="assets/img/icons/left.svg">','<img src="assets/img/icons/right.svg">'],
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});