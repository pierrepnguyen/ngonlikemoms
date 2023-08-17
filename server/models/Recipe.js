const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Recipe = sequelize.define("recipes", {
  name: Sequelize.STRING,
  ingredients: Sequelize.STRING,
  steps: Sequelize.STRING,
  imageURL: Sequelize.STRING,
  originalURL: Sequelize.STRING
})

  module.exports = { Recipe }