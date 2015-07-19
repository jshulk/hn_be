var express = require("express"),
	router = express.Router(),
	hnservice = require("../services/hnservice");

router.get("/topstories", function(req, res, next){
	hnservice.fetchTopStories()
	.then(function(stories){
		res.status(201).json({storyIds: stories})
	})
	.catch(function(data){
		res.status(500).json({error: data});
	})
	.done();
});

module.exports = router;