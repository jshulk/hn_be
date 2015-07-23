var Q = require('q');
var client = require("mongodb").MongoClient;
var db;

var mongo_uri = "mongodb://localhost:27017/myproject"
/**
* returns Promise
*/
exports.getConnection = function(){
    return db;
}

exports.init = function(){
    return createConnection();
}

function createConnection(){
    var deferred = Q.defer();
    client.connect(mongo_uri, {auto_reconnect: true}, function(err, database){
        if( err ){
            deferred.reject(err);
        } else {
            db = database;
            deferred.resolve(db);
        }
    });
    
    return deferred.promise;
}

