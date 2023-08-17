const { Recipe } = require('./Recipe')
const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

module.exports = { db: sequelize, Recipe }
