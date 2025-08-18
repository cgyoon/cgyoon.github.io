var a = [
  '아',
  '무'
]

var b = [
  '아',
  '무'
]

var c = [
  '아',
  '무'
]

var d = [
  '아',
  '무'
]

var e = [
  '아',
  '무'
]

$(document).ready(function() {
  
  function congrats(database) {
    return database[Math.floor(Math.random() * 2)];
  }

    $('.a').text(congrats(a));
    $('.b').text(congrats(b));
    $('.c').text(congrats(c));
    $('.d').text(congrats(d));
    $('.e').text(congrats(e));

  $('body').click(function() {
    $('.a').text(congrats(a));
    $('.b').text(congrats(b));
    $('.c').text(congrats(c));
    $('.d').text(congrats(d));
    $('.e').text(congrats(e));

    if($('.a').text() == '아' && $('.b').text() == '아' && $('.c').text() == '아' && $('.d').text() == '아' && $('.e').text() == '아') {
      setTimeout(function() {
        alert('축하합니다.');
      }, 100);
    }

    if($('.a').text() == '무' && $('.b').text() == '무' && $('.c').text() == '무' && $('.d').text() == '무' && $('.e').text() == '무') {
      setTimeout(function() {
        alert('축하합니다.');
      }, 100);
    }   
  
  });

});