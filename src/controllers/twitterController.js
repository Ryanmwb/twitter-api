const Twit = require('twit');
const twitConfig = require('../config/twit-config');
var T = new Twit(twitConfig)

module.exports = {
    landing(req, res, next){
            res.render("static/landing");
    },
    search(req, res, next){
        console.log(req.body)
        var word = req.body.word;
        var number = req.body.number;
        console.log(word);
        console.log(number)

        /*var params = {
            q: word,
            count: number
        }

        function returnData( err, data, response){
            if(err){
                console.log(err)
            } else {
                var tweets = data.statuses;
                res.render("/results", {tweets})
            }
        }

        T.get('search/tweets', params, returnData)

        res.render("static/landing")*/
    }
}




