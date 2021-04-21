/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const createTweetElement = function(tweetObj) {
  const name = tweetObj.user.name;
  const avatar = tweetObj.user.avatars;
  const nickname = tweetObj.user.handle;
  const content = tweetObj.content.text;
  const date = tweetObj.created_at;
  $('.tweets').prepend(
    `
    <article class="tweet-container">
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
    </article>
    `
    ); 
  };
  
  const postTweet = function() {
    const tweetText = $( "#submit-new-tweet-button").serialize();
    $.post('/tweets', tweetText)
  };


  const renderTweet = function(tweetData) {
    for (let tweet of tweetData) {
      createTweetElement(tweet);
      $("#submit-new-tweet-button").on('submit', function(event) {
        event.preventDefault();
        postTweet();
      })
    }
  };



$(document).ready(function() {
  renderTweet(tweetData);
})

