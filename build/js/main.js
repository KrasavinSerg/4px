$(document).ready(function(){
  $('.regulation__title').click(function() {
    $('.regulation__text').toggle('regulation__open');
  });

  $("#phone, #phone-modal").mask("+7 (999) 999-99-99");
  
});
