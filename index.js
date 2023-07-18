$(document).ready(function () {
  $(window).scroll(function (event) {
    var s = $(this).scrollTop();
    var w = $(this).outerWidth();
    var h = $('.content').outerHeight();
    var h_block = $('.paralax').outerHeight();
    var p = s / h * 100;
    var p_block = s / h_block * 100;
    var o = 1 - 1 / 100 * p_block;
    var z_1 = 1 + (w / 10000 * p_block);
    $('.paralax_fog').css('transform','scale('+z_1+')');
  })
})