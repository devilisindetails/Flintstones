var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;


// setting up environment variable
if (env === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL,{
        dialect:'postgres'
    });
}else{
	sequelize = new Sequelize(undefined,undefined,undefined,{

		'dialect' : 'sqlite',
		'storage' : __dirname + '/data/dev-jarvis.sqlite'
	});
}



//Instantiating database class and exporting the same
var db = {};
db.lead = sequelize.import(__dirname + '/API/models/lead.js');
db.student = sequelize.import(__dirname + '/API/models/student.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
