const Twit = require('twit');
const twitConfig = require('../config/twit-config');
var T = new Twit(twitConfig)

console.log("app is starting...")

var params = {
    q: 'rainbow',
    count: 100
}

function returnData( err, data, response){
    var tweets = data.statuses;
    for(var i=0; i<tweets.length; i++){
        console.log("Tweet " + [i] + " is......");
        console.log(tweets[i].text);
        console.log("");
    }
}

T.get('search/tweets', params, returnData)