var request = require("superagent"),
	Q = require("q"),
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

	}
};

module.exports = hnService;