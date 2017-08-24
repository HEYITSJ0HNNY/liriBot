// create variables
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
var userRequest = process.argv[2];

// if statement based on userInput
if (userRequest === 'my-tweets'){
  console.log('mytweets');
}
if (userRequest === 'spotify-this-song'){
  console.log('spotifyThis');
}
if (userRequest === 'movie-this'){
  console.log('movieThis');
}
if (userRequest === 'do-what-it-says'){
  console.log('doThis');
}
