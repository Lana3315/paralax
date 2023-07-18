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
    $('.paralax_fog').css('transform', 'scale(' + z_1 + ')');
    $('.paralax_fog').css('opacity', o);
    var z_2 = 1 + (w / 5000000 * p);
    $('.paralax_montain_1 ').css('transform', 'scale(' + z_2 + ')');
    var hr = w / 2000 * p_block;
     var z_3 = 1 + (w * 0.000005 * p_block);
    $('.paralax_montain_2 ').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')');
    
    var hr_1 = w / 1500 * p_block;
     var z_4 = 1 + (w * 0.00001 * p_block);
    $('.paralax_montain_3 ').css('transform','translate3d('+hr_1+'px,0,0) scale(' + z_4 + ')');
  })
})