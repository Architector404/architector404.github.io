jQuery("document").ready(function($){
    var nav = $('.nav');
    $(window).scroll(function () {
        var b = $(window).scrollTop();
        /*var h = $('.nav').height();
        var h2 = $('.nav').height();
        if (h2) h = h2 + h;*/
        if( b > 0 ){
            nav.addClass("nav-fixed");
            nav.prependTo('.wrapper');
        } else {
            nav.removeClass("nav-fixed");
            nav.prependTo('.header');
        }
    });

});