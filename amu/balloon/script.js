$(document).ready(function() {

  $('.balloon').click(function() {
    if($('.balloon').hasClass('a')) {
       $('.balloon').removeClass('a').addClass('b');  
    }  else if($('.balloon').hasClass('b')) {
       $('.balloon').removeClass('b').addClass('c');  
    }  else if($('.balloon').hasClass('c')) {
       $('.balloon').removeClass('c').addClass('d');  
    }  else if($('.balloon').hasClass('d')) {
       $('.balloon').removeClass('d').addClass('e'); 
    }  else if($('.balloon').hasClass('e')) {
       $('.balloon').removeClass('e').addClass('f'); 
    }  else if($('.balloon').hasClass('f')) {
       $('.balloon').removeClass('f').addClass('a');  
    }
  });  
});

