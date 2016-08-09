var Sequelize = require(‘sequelize’);
var sequelize = new Sequelize(‘database’, ‘Username’, null, {
 host: ‘localhost’,
 dialect: ‘postgres’
});

var db = {};
db.leads = sequelize.import(__dirname + 'API/models/leads.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;