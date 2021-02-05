jQuery("document").ready(function($){
    var nav = $('.header');
    $(window).scroll(function () {
        var b = $(window).scrollTop();
        var h = $('.header').height();
        var h2 = $('.nevermind').height();
        if (h2) h = h2 + h;
        if( b > h ){
            nav.addClass("header-fixed");
        } else {
            nav.removeClass("header-fixed");
        }
    });

});