const Sequelize = require('sequelize')

const pgURL = process.env.DATABASE_URL || 'postgres://localhost:5432/mjpfp'

const db = new Sequelize(pgURL,{ logging: false })

module.exports = db