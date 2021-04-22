
/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


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
    <p class="tweet">${content}</p>
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
  
const postTweet = function() {
  const tweetText = $( "#submit-new-tweet-button").serialize();
  //console.log($('#tweet-text').val)
  $.post('/tweets', tweetText)
};
  
  
const renderTweets = function(data) {
  for (let tweet of data) {
    createTweetElement(tweet);
  }
};
  
  
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' }).then(data => {
    renderTweets(data);
  })
};
  
    
$(document).ready(function() {
  loadTweets(); // load the tweeter page
  $("#submit-new-tweet-button").on('submit', function(event) {
    event.preventDefault();
    postTweet(); //add to database
    loadTweets(); // reload the tweeter page
  })
});
    
    
    