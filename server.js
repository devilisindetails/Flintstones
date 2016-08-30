var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// serving up static files in Public folder
app.use(express.static(__dirname + '/public'));


//displaying landing page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


//displaying signin page for students
app.get('/signin', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/public/app/index.html'));
});



// display sign in for teachers 
app.get('/teachersignin', function(req, res) {
    res.send("This is where teachers will sign in");
});



//storing leads generated from landing page
app.post('/', function(req, res) {
    var body = _.pick(req.body, 'name', 'email', 'address', 'mobileno');
    db.lead.create(body).then(function(lead) {
        res.json(lead.toJSON());
    }, function(e) {
        res.status(400).json(e);
    });
});


//signing in by student
app.post('/signin', function(req, res) {
    var body = _.pick(req.body, 'loginID', 'password');
    db.student.authenticate(body).then(function(student) {
        res.json(student.toJSON());
    }, function(e) {
        return res.status(401).send();
    });
});



// Requesting Home Page by student
app.get('/student', function(req, res) {
    console.log("You are a certified student now");
});

//initializing database models and starting server
db.sequelize.sync({ 'force': true }).then(function() {
    console.log("Successfully created Database tables");
    db.student.findOrCreate({ where: { student_loginID: 'admin' }, defaults: { student_password: 'password', student_email: 'ankit@studysolo.com' } }).spread(function(student, created) {});
    app.listen(PORT, function() {
        console.log('Express server started on ' + PORT);
    });

});
