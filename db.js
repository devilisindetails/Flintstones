var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/config.json')[env];
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
var pg = require('pg');


var conString = process.env.ELEPHANTSQL_URL || "postgres://postgres:5432@localhost/postgres";
var client = new pg.Client(conString);
client.connect();

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    });

// var conStringPri = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
// var conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;
// connect to postgres db
// pg.connect(conStringPri, function(err, client, done) {
//     // create the db and ignore any errors, for example if it already exists.
//     client.query('CREATE DATABASE ' + dbName, function(err) {
//         //db should exist now, initialize Sequelize
//         sequelize = new Sequelize(conStringPost);
//         client.end(); // close the connection
//     });
// });



// client.connect(function(err) {
//     if (err) {
//         return console.error('could not connect to postgres', err);
//     }

//     client.query('CREATE DATABASE' + dbName, function(err, result) {
//         if (err) {
//             return console.error('error running query', err);
//         }
//         sequelize = new Sequelize(conString);
//         console.log("At least we are inside database which was just created");

//     });
//     
//     // Adding properties on db object

//     //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//     client.end();
// }).then(function() {

//     console.log("Everything has been created.Now inside promise function");


// }, function(e) {
//     console.log("Connection interrupted due to some problem");
//     console.error(e)
// });

db.lead = sequelize.import(__dirname + '/API/models/lead.js');
db.student = sequelize.import(__dirname + '/API/models/student.js');
db.teacher = sequelize.import(__dirname + '/API/models/teacher.js');
db.batch = sequelize.import(__dirname + '/API/models/batch.js');
db.studentfeedback = sequelize.import(__dirname + '/API/models/studentfeedback.js');
db.testdetail = sequelize.import(__dirname + '/API/models/testdetail.js');




// defining associations within models
db.student.belongsTo(db.batch);
db.batch.hasMany(db.student);
db.teacher.hasMany(db.batch);
db.batch.belongsTo(db.teacher);
db.studentfeedback.belongsTo(db.student);
db.student.hasMany(db.studentfeedback);
db.testdetail.belongsTo(db.teacher);
db.teacher.hasMany(db.testdetail);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


client.end();

