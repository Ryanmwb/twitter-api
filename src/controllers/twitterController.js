const Twit = require('twit');
const twitConfig = require('../config/twit-config');
var T = new Twit(twitConfig)

module.exports = {
    landing(req, res, next){
            res.render("static/landing");
    },
    search(req, res, next){
        var word = req.params.word;
        var number = req.params.number;

        console.log("number is.....");
        console.log(number);

        var params = {
            q: word,
            count: number
        }

        function returnData( err, data, response){
            if(err){
                console.log(err)
            } else {
                /*var tweets = data.statuses;
                console.log("tweets are....")
                console.log(tweets)*/
                res.json({data})
            }
        }

        T.get('search/tweets', params, returnData);
    }
}




