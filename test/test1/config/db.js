var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var connection1 = mongoose.createConnection('mongodb://127.0.0.1/testdb');
connection1.on('error', console.error.bind(console, "connection error"));

connection1.once('open', function () {
	  console.log("Connection to testdb is open...");
});


module.exports.dbconnect = connection1;