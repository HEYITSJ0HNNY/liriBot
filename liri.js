var keys = require('./keys.js');
// console.log(keys);

var userRequest = process.argv[2];

// console.log('user ', userRequest)

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
