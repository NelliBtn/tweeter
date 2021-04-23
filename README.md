# Tweeter Project

Tweeter is a simple, single-page Ajax-based Twitter clone. SPA is built with HTML, CSS, JS, jQuery and AJAX for front-end, and Node, Express and MongoDB for back-end.

Display:

-- responsive CSS with a breakpoint at 1024px;

-- fixed Navigation bar;

-- header includes an avatar and the user name;

-- compose tweet box with a submit button and a character counter;

-- list of tweets displaying tweets in reverse-chronological order (using timeago library to display the time passed since a tweet).


Functionality includes:

-- a dynamic Character Counter that updates to show how many characters user can still type (with maximum of 140);

-- app submits a valid tweet and the list of tweets is refreshed (displaying a new tweet), the input is cleared, the cheracter counter is reset;

-- appropriate error messages are displyed when user exceeds the valid amount of characters or submits an invalid tweet.

## Final Product

!["Screenshot of the main page for 1024px and above"](https://github.com/NelliBtn/tweeter/blob/master/docs/main-page-1024px-and-above.png?raw=true)

!["Screenshot of the error and dynamic char counter"](https://github.com/NelliBtn/tweeter/blob/master/docs/error-and-dynamic-char-counter.png?raw=true)

!["Screenshot of the responsive layout for 1023px and below"](https://github.com/NelliBtn/tweeter/blob/master/docs/main-page-1023-and-below.png?raw=true)


## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- express
