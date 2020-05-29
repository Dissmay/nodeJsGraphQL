const Sequelize = require('sequelize')

const DB_NAME = 'null'
const USER_NAME = 'null'
const PASSWORD = 'null'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize