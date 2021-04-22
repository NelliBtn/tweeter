// create a tweet container 
const createTweetElement = function(tweetObj) {
  const name = tweetObj.user.name;
  const avatar = tweetObj.user.avatars;
  const nickname = tweetObj.user.handle;
  const content = tweetObj.content.text;
  const date = tweetObj.created_at;
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
  // edge cases trigger an alert box
  if (!$('#tweet-text').val()) {
    triggerError('Your tweet is empty or invalid!');
    return;
  }
  if ($('#tweet-text').val().length > 140) {
    triggerError('Your tweet is way too long!');
    return;
  }
  $.post('/tweets', tweetText)
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

// pop up alert box
const triggerError = function (errorMessage) {
  $(".new-tweet").prepend(
  `<div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    ${errorMessage}
  </div>`);
};
  
    
$(document).ready(function() {
  loadTweets(); // load the tweeter page
  $("#submit-new-tweet-button").on('submit', function(event) {
    event.preventDefault();
    postTweet(); //add to database
    loadTweets(); // reload the tweeter page
  })
});
    
    
    