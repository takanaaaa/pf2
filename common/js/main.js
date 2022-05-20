'use strict';

$('#hamburger').on('click', function () { 
  $('#js-line1').toggleClass('line_1');
  $('#js-line2').toggleClass('line_2');
  $('#js-line3').toggleClass('line_3');
  $('#nav').toggleClass('active');
});

$('.accordion').on('click', function() {
  $('.nav__down').slideUp(500);

  let findElm = $(this).next(".nav__down");

  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});