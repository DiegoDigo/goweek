const express = require("express");
const TweetController = require("./controllers/TweetsController");

const routes = express.Router();

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

module.exports = routes;