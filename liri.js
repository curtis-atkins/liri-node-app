//setting variable that finds and reads the keys.js file which stores the twitter API keys
var keys = require("./keys.js"); 

 //setting variable that finds and reads the specified npm package
var Twit = require('twit');

//setting variable that authenticates twitter API
var T = new Twit(keys);

//variable that stores the argument at index 2, entered by the user
var input = process.argv[2];

//variable that stores the argument at index 3, entered by the user
var song = process.argv[3];

//variable tat stores the parameters for the twitter API request 
//parameters is searching for a user @YungKurtNC and wants to get the last 20 tweets from that user
var parameters = { 
	q: 'YungKurtNC', 
	count: 20 
}

//  if/else statement that deligates what should happen based on predetermined inputs from process.argv[2]
// if progress.argv[2] is strictly equal to the string my-tweets:
if (input === "my-tweets"){
	
	//make a call to the twitter API to return tweets 
	T.get('search/tweets', parameters, gotData);

	function gotData(err, data, response) {
		var tweets = data.statuses;
		for(var i = 0; i < tweets.length; i++){

			//prints a each tweet to a maximum of twenty
			console.log(tweets[i].text);

			//prints a each timestamp to a maximum of twenty
			console.log(tweets[i].created_at);
			//adds a blank line to make each status and timestamp easier to read
			console.log("");
		}
	}
}
// if progress.argv[2] is strictly equal to the string spotify-this-song:
else if(input === "spotify-this-song"){
	console.log("spotify");
}
// if progress.argv[2] is strictly equal to the string movie-this:
else if(input === "movie-this"){
	console.log("OMDB");
}
// if progress.argv[2] is strictly equal to the string do-what-it-says:
else if(input === "do-what-it-says"){
	console.log("Simon Says");
}
else{console.log("Input not recognized. Please enter one of the following phrases:\"my-tweets\", \"spotify-this-song\", \"movie-this\" or \"do-what-it-says\" ");}