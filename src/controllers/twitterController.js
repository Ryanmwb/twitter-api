const Twit = require('twit');
const twitConfig = require('../config/twit-config');
var T = new Twit(twitConfig)

module.exports = {
    landing(req, res, next){
            res.render("static/landing");
    },
    search(req, res, next){
        console.log(req.body)
        var word = req.params.word;
        var number = req.params.number;

        if(word.split(" ").length > 1){
            res.flash("notice", "You can only search one word at a time.")
            res.redirect("/")
        }
        if(number > 50  || number < 1){
            res.flash("notice", "Number must be 50 or lower.")
            res.redirect("/")
        }

        console.log(req.params)

        var params = {
            q: word,
            count: number
        }

        function returnData( err, data, response){
            if(err){
                console.log(err)
            } else {
                var tweets = data.statuses;
                res.json({tweets})
            }
        }

        T.get('search/tweets', params, returnData);
    }
}




