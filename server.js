var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');


app.use(bodyParser.json());

// serving up static files in Public folder
app.use(express.static(__dirname + '/public'));


//displaying landing page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//displaying signin page for teachers/students
app.get('/signin', function(req, res) {

res.sendFile(path.join(__dirname + '/public/app/index.html'));
});


// display sign in for teachers 

app.get('/teachersignin', function(req,res){

    res.send("This is where teachers will sign in");

});



//storing leads generated from landing page
app.post('/', function(req, res) {
   var body = _.pick(req.body,'name','email','address','mobileno');
    db.lead.create(body).then(function(lead) {

        // req.addlead(lead).then(function() {
        //     return lead.reload();
        // }).then(function(lead) {
        //     res.json(lead.toJSON());
        // });
        res.json(lead.toJSON());

    }, function(e) {
     res.status(400).json(e);
    });
});


//initializing database models and starting server
db.sequelize.sync({force:true}).then(function() {

    app.listen(PORT, function() {
        console.log('Express server started');
    });

});
