var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/signin',function(req,res){

	res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

app.use(express.static(__dirname + '/public'));
app.listen(3000,function(){
	console.log('Express server started');
});