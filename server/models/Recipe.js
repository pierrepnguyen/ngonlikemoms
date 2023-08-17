const {DataTypes} = require('sequelize')
const { db } = require('../db/db')

const Recipe = db.define("Recipes", {
  name: DataTypes.STRING,
  ingredients: DataTypes.STRING,
  steps: DataTypes.STRING,
  imageURL: DataTypes.STRING,
});

module.exports = {
  Recipe,
};