$(document).ready(function() {
  
  // $('.twinkle').css({
  //   'top': Math.random() * $(document).height(), 
  //   'left': Math.random() * $(document).width()
  // }).fadeIn();

    $('.twinkle').each(function() {
      $(this).css({
      'top': Math.random() * $(document).height(), 
      'left': Math.random() * $(document).width()
    }).fadeIn();
    });

  $('#one').click(function() {
    alert('Slept Slept Still Sleepy — Choong-geun');
  });

  $('#two').click(function() {
    alert('No Pain No Gain — Jisu');
  });

  $('#three').click(function() {
    alert('Seize The Day — Sunmi');
  });

  $('#four').click(function() {
    alert('i like winter — Sohyeon');
  });

});


