$(document).ready(function(){

});

$('.btn-burger').click(function(){
    $('.main-menu').toggleClass('main-menu-show');
    $('.nav').toggleClass('nav-transform');
});

$("#code").on("keydown", function(){
    if($('#code').val() === "")
    {
        $('#reset').addClass('disabled-b');
    }
    else
    {
        $('#reset').removeClass('disabled-b');
    }
});
$("#reset").click(function () {
    $('#code').val('');
});

$('#detail').click(function () {
    $('.extend').toggleClass('d-none');
    $('.alt').toggleClass('d-none');
});

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

$('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
});

$('.advantage').on("click", function() {
    $(this).toggleClass('advantage-open');
});