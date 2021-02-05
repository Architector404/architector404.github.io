jQuery(function($){
    $( '.btnBurger' ).click(function(){
        $('.mainMenu').toggleClass('mainMenuShow');
    })
})
jQuery(function($){
    $(".has-children").append("<div class='btnBurgerSubmenu plus'>+</div>");
    $('.has-children').append("<div class='btnBurgerSubmenu minus'>-</div>");

    $('.plus').addClass('visible');
    $('.has-children > a').addClass("not-active");

    $('.has-children').click(function(e){
        var childMenu =  e.currentTarget.children[1];
        if($(childMenu).hasClass('mainSubmenuShow')){
            $(childMenu).removeClass("mainSubmenuShow");

            $(e.currentTarget.children[3]).removeClass("visible");
            $(e.currentTarget.children[2]).addClass("visible");
        } else {
            $(childMenu).addClass("mainSubmenuShow");

            $(e.currentTarget.children[2]).removeClass("visible");
            $(e.currentTarget.children[3]).addClass("visible");
        }
    });
});