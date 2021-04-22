// create a tweet container 
const createTweetElement = function(tweetObj) {
  const name = tweetObj.user.name;
  const avatar = tweetObj.user.avatars;
  const nickname = tweetObj.user.handle;
  const content = tweetObj.content.text;
  let date = tweetObj.created_at;
  date = timeago.format(date);


  $('.tweets').prepend(
    `<article class="tweet-container">
    <header class="user-info">
    <div class="avatar-name">
    <img src="${avatar}}"></img>
    <p class="name">${name}</p>
    </div>
    <p class="nickname">${nickname}</p>
    </header>
    <p class="tweet">${escape(content)}</p>
    <footer>
    <p class="date">${date}</p>
    <div class="icons">
    <i id="flag" class="far fa-flag"></i>
    <i id="retweet" class="fas fa-retweet"></i>
    <i id="like" class="far fa-heart"></i>
    </div>
    </footer>
    </article>`
  ); 
};

// POST the tweet to the server database
const postTweet = function() {
  const tweetText = $( "#submit-new-tweet-button").serialize();
  console.log(tweetText)
  //EDGE CASES
  if (!$('#tweet-text').val()) {
    $(".errorMessage").text("The tweet is empty or invalid!");
    $(".alert").slideDown();
    return;
  }
  if ($('#tweet-text').val().length > 140) {
    $(".errorMessage").text("The tweet is waaaay too long!");
    $(".alert").slideDown();
    return;
  }
  // IF NO ERRORS
  $.post('/tweets', tweetText);
  $('#tweet-text').val('');

};

// XSS escape
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
  
// loop through the array of tweet objects
const renderTweets = function(data) {
  for (let tweet of data) {
    createTweetElement(tweet);
  }
};
  
// pull out the tweets from server database
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' }).then(data => {
    renderTweets(data);
  })
};


    
$(document).ready(function() {

  // LOAD ALL TWEETS
  loadTweets();

  // POST AND UPLOAD A NEW TWEET
  $("#submit-new-tweet-button").on('submit', function(event) {
    event.preventDefault();
    postTweet(); // add to database
    $('.tweets').empty(); // empty the current tweet container to avoid duplicating
    loadTweets(); // reload the tweeter page

  })

  // TRIGGERING ERRORS WHILE TYPING 
  $('#tweet-text').on('input', function() {
    const text = $(this).val();
    if (text.length > 0 && text.length < 140) {
      $(".alert").slideUp();
    }
    if (text.length > 140) {
      $(".errorMessage").text("The tweet is waaaay too long!");
      $(".alert").slideDown();
    }
  });

  $('.closebtn').on('click', function() {
    $(".alert").slideUp();
  })

});
    
    
    