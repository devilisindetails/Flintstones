'use strict';
module.exports = function(sequelize, DataTypes) {
    var testdetail = sequelize.define('testdetail', {

        test_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        test_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        test_duration_seconds: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        test_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        test_window_duration_start: {
            type: DataTypes.DATE,
            allowNull: true
        },
        test_window_duration_end: {
            type: DataTypes.DATE,
            allowNull: true
        },
        test_status: { // Should be Draft , Submitted
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Draft"
        },
        test_for_batches: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        test_topics: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }

    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return testdetail;
};

// "properties": {
//     "test_id": {
//       "type": "string",
//       "required": true
//     },
//     "title": {
//       "type": "string",
//       "required": true
//     },
//     "duration_seconds": {
//       "type": "number"
//     },
//     "batches": {
//       "type": [
//         "string"
//       ],
//       "required": true
//     },
//     "topics": {
//       "type": [
//         "string"
//       ]
//     },
//     "description": {
//       "type": "string"
//     },
//     "window_start": {
//       "type": "date"
//     },
//     "window_stop": {
//       "type": "date"
//     },
//     "status": {
//       "type": "string"
//     },
//     "coaching_id": {
//       "type": "string",
//       "required": true
//     },
//     "questions": {
//       "type": "object"
//     },
//     "date_updated": {
//       "type": "date"
//     },
//     "teacher_id": {
//       "type": "string"
//     },
//     "instructions": {
//       "type": "string"
//     }
//   },
