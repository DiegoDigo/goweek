const Tweets = require("../models/Tweet");

module.exports = {
    async index(req, res) {
        const tweets = await Tweets.find({}).sort('-createdAt');
        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await Tweets.create(req.body);
        return res.json(tweet);
    }
}