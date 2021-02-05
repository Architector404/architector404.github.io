jQuery("document").ready(function($){
    var nav = $('.header');
    $(window).scroll(function () {
        var b = $(window).scrollTop();
        var h = $('.header').height();
        var h2 = $('.catalog-slider').height();
        if (h2) h = h2 + h;
        if( b > h ){
            nav.hide();
            $('.header-fixed').show();
        } else {
            $('.header-fixed').hide();
            nav.show();
        }
    });

});