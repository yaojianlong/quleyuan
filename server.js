	var express = require('express');
	var app = express();
	app.get('*',function(req,res){
		res.sendFile(__dirname+req.url);
	});
	app.listen('8888','localhost',function(err){
	if(err){console.log(err)}
	else{
		console.log('Server running at http://127.0.0.1:8888/');
	}
	})