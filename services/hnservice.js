var request = require("superagent"),
	Q = require("q"),
	db = require('../db'),
	appConstants = require("../constants/appConstants");

var hnService = {

	fetchTopStories: function(){

		var deferred = Q.defer();
		request(appConstants.TOP_STORIES_URL)
		.end(function(error, response){
			if( error ){
				deferred.reject(error);
			} else {
				deferred.resolve(response.body);
			}
		});

		return deferred.promise;
	}, 
	fetchItem: function(item){

	},
	/**
	 * Does an 'in' query with passed ids
	 * @param  {[Array]} ids [description]
	 * @return {[type]}     [description]
	 */
	storyIdsToFetch: function(ids){

	},
	updateStory: function(){
		//create a deferred, make it promise based
		var connection = db.getConnection();
		if( connection ){
			//process the request,
		} else {
			 //otherwise fail it
		}
	}
};

module.exports = hnService;