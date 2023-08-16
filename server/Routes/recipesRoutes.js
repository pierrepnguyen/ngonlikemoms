const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/Recipe");

// Get all Recipe
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get specific Recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipes = await Recipe.findByPk(req.params.id);
    if (recipes) {
      res.json(recipes);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
// Delete a Recipe by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(await Recipe.findAll());
  }
  catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
});

// POST 
router.post("/", async (req, res) => {
  try {
    const recipes = await Recipe.create(
      {
        name: req.body.name,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        imageURL: req.body.imageURL
    });

    res.send(recipes);
  }
  catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.json(await Recipe.findAll());
  }
  catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
})



module.exports = router;