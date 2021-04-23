$(document).ready(function() {

  // SUBSTRACTING CHARS FROM THE COUNTER
  $('#tweet-text').on('input', function() {
    const text = $(this).val(); //input
    let counter = $(this).parent().parent().children('.submit').children('.counter'); // traversing to find the counter
    const currentNumOfChars = text.length;
    let charsLeft = 140 - currentNumOfChars;
    counter.text(charsLeft);

    // SET UP THE COLOR
    if (charsLeft < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '#0f0e00');
    }

  });

});