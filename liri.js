//setting variable that finds and reads the keys.js file which stores the twitter API keys
var keys = require("./keys.js");

//setting variable that finds and reads the specified npm package
var Twit = require('twit');

//setting variable that authenticates twitter API
var Twitty = new Twit(keys);

//setting variable that finds and reads the specified npm package
var Spotify = require('node-spotify-api');

//setting variable that authenticates spotify API
//var Spotty = new Object(keys);
//setting variable that finds and reads the specified package
var request = require("request");

//setting variable that finds and reads the specified npm package
var fs = require("fs");

//variable that stores the argument at index 2, entered by the user
var input = process.argv[2];

//variable that stores the argument at index 3, entered by the user
var title = process.argv[3];

//variable that stores the parameters for the twitter API request 
//parameters is searching for a user @YungKurtNC and wants to get the last 20 tweets from that user
var parameters = {
    q: 'YungKurtNC',
    count: 20
};

//variable that stores the keys for the spotify API request 
var spotify = new Spotify({
    id: "7c59d07332044ed4818f2ccf5f71b74b",
    secret: "b6f31901fb5a4df3a0df2abd7e747fce"
});

//  if/else statement that deligates what should happen based on predetermined inputs from process.argv[2]
// if progress.argv[2] is strictly equal to the string my-tweets:
if (input === "my-tweets") {
    //make a call to the twitter API to return tweets 
    Twitty.get('search/tweets', parameters, gotData);

    function gotData(err, data, response) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
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
else if (input === "spotify-this-song") {
    if (title === undefined) {
        console.log("You forget to place a track title in process.argv[3]");
    } else {
		
        //search spotify for the track that is passed in by the variale song
        spotify.search({
            type: 'track',
            query: title
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Song Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    }
}

// if progress.argv[2] is strictly equal to the string movie-this:
else if (input === "movie-this") {
    if (title === undefined) {
		
        // We then run the request module on a URL with a JSON
        request("http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			
            // If there were no errors and the response code was 200 (i.e. the request was successful)...
            if (!error && response.statusCode === 200) {
				
                // Then we print out the movie Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country,Language, Plot and Actors
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            }
        });
    } else {
        request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
			
            // If there were no errors and the response code was 200 (i.e. the request was successful)...
            if (!error && response.statusCode === 200) {
				
                // Then we print out the movie Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country,Language, Plot and Actors
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("OMDB");
            };
        })
    }
}
// if progress.argv[2] is strictly equal to the string do-what-it-says:
else if (input === "do-what-it-says") {
	
	//Read the file random.txt, split the string into an array with two values,
	// the values are then placed into separate values and the spotify API is called again
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        var output = data.split(",");
        title = (output[0]);
        var song = (output[1]);
        console.log(title);
        console.log(song);
		
        //search spotify for the track that is passed in by the variale song
        spotify.search({
            type: 'track',
            query: song
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
			
			//print Artist, Title, Preiew Link and Album of the given song
            console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Song Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        });
    })
} else {
	
	//Message to inform user to enter the correct vaue in argv[2]
    console.log("Input not recognized. Please enter one of the following phrases in process.argv[2]:\"my-tweets\", \"spotify-this-song\", \"movie-this\" or \"do-what-it-says\" ");
}