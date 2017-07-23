//setting variable that finds and reads the keys.js file which stores the twitter API keys
var keys = require("./keys.js");
console.log(keys);
 
//setting variable that finds and reads the specified npm package
var Twitter = require('twitter');

//variable that stores the argument at index 2, entered by the user
var input = process.argv[2];

//if/else statement that deligates what shoould happen based on predetermined inputs from process.argv[2]
if (input === "my-tweets"){
	console.log("twitter");
}
else if(input === "spotify-this-song"){
	console.log("spotify");
}
else if(input === "movie-this"){
	console.log("OMDB");
}
else if(input === "do-what-it-says"){
	console.log("Simon Says");
}
else{console.log("Input not recognized. Please enter one of the following phrases:\"my-tweets\", \"spotify-this-song\", \"movie-this\" or \"do-what-it-says\" ");}