//var db = require(‘.. / .. / config / database’).database;


'use strict';
module.exports = function(sequelize, DataTypes) {
    return leads = sequelize.define('leads', {

        {
            name: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        {
            email: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        {
            address: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 250]
            }
        },

        {
            mobileno: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
};
