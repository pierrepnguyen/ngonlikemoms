const { recipesSeed } = require('./seedData');

const {sequelize} = require('./db');
const {Recipe} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: false });
    
        // insert data
        // await Recipe.bulkCreate(recipesSeed);

        // console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();