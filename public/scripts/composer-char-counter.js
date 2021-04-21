$(document).ready(function() {

  $('#tweet-text').on('input', function() {
    const text = $(this).val();//input
    let counter = $(this).parent().parent().children('.submit').children('.counter');
    const currentNumOfChars = text.length;
    let charsLeft = 140 - currentNumOfChars;
    counter.text(charsLeft);


    if ( charsLeft < 0) {
      counter.css('color', 'red')
    } else {
      counter.css('color', '#0f0e00')
    }

  });

});