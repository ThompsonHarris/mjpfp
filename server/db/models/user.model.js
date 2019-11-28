const Sequelize = require('sequelize')
const db = require('../db')

const {STRING} = Sequelize

const User = db.define('user',{
    firstName: {
        type: STRING,
        allowNull: false
      },
      lastName: {
        type: STRING,
        allowNull: false
      },
      email: {
        type: STRING,
        allowNull: false
      },
})

module.exports = User