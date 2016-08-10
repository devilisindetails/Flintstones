var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000 ;

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/signin',function(req,res){

	res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT,function(){
	console.log('Express server started');
});