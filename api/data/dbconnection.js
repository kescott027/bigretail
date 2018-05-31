var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel';
var dbName = 'meantest';

var _connection = null;
var _client_connection = null;

var open = function() {
/*  MongoClient.connect(dburl, function(err, db){ */
  MongoClient.connect(dburl, function(err, client){
    if (err) {
      console.log("DB connection failed");
      return;
    }
      /* _connection = db*/
      db = client.db(dbName);
      console.log("DB connection open ", db);
  });
};

var get = function() {
  return db;
};

module.exports = {
  open : open,
  get : get
}
