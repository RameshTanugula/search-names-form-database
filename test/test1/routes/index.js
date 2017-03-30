var express = require('express');
var router = express.Router();
var data=require('../models/data');
var data1=require('../models/data1');
var fs=require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('views/index');
  
// });

router.post('/name',function(req,res){
	var insertdata=new data(req.body);//inserted values into db
insertdata.save(function(err,data){
	
 if(err){console.log('data not inserted'+err);
	}else{//console.log(data);
	res.send(data);
	}	

});
});
router.post('/getname',function(req,res){
	 
	 data.find({name:new RegExp(req.body.name,'i')},function(err,data){
		 if(err){
			 
			 console.log("err");
		 }
		 else{
			 console.log(data);
			 res.send(data);
		 }
		 
		 
	 });
	 
	 
 });
 
 router.post('/sname', function(req, res,next) {
 
console.log('hello world');
	var im = req.body;
	console.log(im.imag.filename);
if(im.imag!=null && im.imag.filename!=undefined){
	console.log('hello');
	var filename=im.imag.filename;
if(im.imag.filetype=='image/jpeg'){filename='/uploads/'+filename};
if(im.imag.filetype=='image/jpg'){filename='/uploads/'+filename};	
if(im.imag.filetype=='image/png'){filename='/uploads/'+filename};
	
	console.log(filename);

fs.writeFile('public'+filename,new Buffer(im.imag.base64,'base64'),function(err){
	
	if(err){console.log(err);}
else{console.log('file uploaded');
req.body.imag=filename;          //stored in db
}	



  var insertdata=new data1(req.body);//inserted values into db
insertdata.save(function(err,data){
	
 if(err){console.log('data not inserted'+err);
	}else{//console.log(data);
	res.send(data);
	}	

});	
});
}
});

module.exports = router;
