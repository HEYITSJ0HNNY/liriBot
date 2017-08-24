// create variables
var keys = require('./keys.js').twitterKeys;
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');
var userRequest = process.argv[2];



// if statement based on userInput
if (userRequest === 'my-tweets'){
  var client = new Twitter(keys);
  var twitterHandle = {screen_name: 'heyitsj0hnny'};
  client.get('statuses/user_timeline', twitterHandle, function(error, tweets, response) {
    if (!error) {
      var tweetNum = 1
      for (var i = 0; i < tweets.length; i++){
        console.log(tweetNum + ': ', tweets[i].text);
        tweetNum++;
      }
    }
  })
};
if (userRequest === 'spotify-this-song'){
}
if (userRequest === 'movie-this'){
}
if (userRequest === 'do-what-it-says'){
}
