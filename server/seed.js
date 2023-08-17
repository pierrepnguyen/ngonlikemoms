const { recipesSeed } = require('./seedData');

const {sequelize} = require('./db');
const {Recipe} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        // await Promise.all(recipes.map(recipe => Recipe.create(recipe)));
        await Recipe.bulkCreate(recipesSeed);

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();