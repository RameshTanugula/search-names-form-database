	var mongoose = require('mongoose'), //mongo connection
	 autoIncrement = require('mongoose-auto-increment');
	
	var dbcon = require('../config/db'); 
	var mongooseconn = dbcon.dbconnect;

//	console.log(mongooseconn);
	autoIncrement.initialize(mongooseconn);
	
var ausersSchema = new mongoose.Schema({ 
	name_id:Number,
	name:String,
	created_dt: { type: Date, default: Date.now }
});
ausersSchema.plugin(autoIncrement.plugin, {
    model: 'data',
    field: 'name_id',
    startAt: 1,
    incrementBy: 1
});

var Ausers = mongooseconn.model('data', ausersSchema);

 module.exports =  Ausers;