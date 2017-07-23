var keys = require("./keys.js");

var input = process.argv[2];

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