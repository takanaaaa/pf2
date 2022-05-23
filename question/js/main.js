'use strict';

$('.item-q').on('click', function() {
  $(this).toggleClass('open');

  let answer = $(this).next(".item-a");

  if($(this).hasClass('open')){
    $(answer).slideDown(500);
  }else{
    $(answer).slideUp(500);
  }
});