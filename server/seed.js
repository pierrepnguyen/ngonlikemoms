const { recipesSeed } = require('./seedData');

const { db } = require('./db/db');
const { Recipe } = require('./models/Recipe');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await db.sync({ force: true });
    
        // insert data
        await Recipe.bulkCreate(recipesSeed);

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
