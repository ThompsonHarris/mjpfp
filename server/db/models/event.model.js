const Sequelize = require('sequelize')
const db = require('../db')

const {STRING,INTEGER,BOOLEAN} = Sequelize

const Event = db.define('event',{
    Name: {
        type: STRING,
        allowNull: false,
      },
    Year: {
      type: INTEGER,
      allowNull: false,
      validate: {
          notEmpty: true,
          len: [4],
        },
    },
    Month: {
      type: INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,2],
      },
    },
    Day: {
      type: INTEGER,
      allowNull: false,
      validate: {
          notEmpty: true,
          len: [1,2],
        },
    },    
    Description: {
        type: STRING,
        allowNull: false
      },
    Completion: {
       type: BOOLEAN,
       allowNull: false
     }
  })
  
  module.exports = Event


