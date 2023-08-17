const { application } = require('express')
const express = require('express')
const { async } = require('regenerator-runtime')
const router = express.Router()

const { Recipe } = require('../models/index')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

// GET 
router.get('/', async(req,res,next)=>{
  try{
    const recipes = await Recipe.findAll()
    res.send(recipes)
  } catch(error){
    next(error)
  }
})

router.get('/:id',async(req,res,next)=>{
    try{
        const recipe = await Recipe.findByPk(req.params.id)
        res.send(recipe)
    }catch(error){
        next(error)
    }
    
})

router.post('/', async(req,res,next) => {
    try{
      const newRecipe = await Recipe.create(req.body)
      res.send(newRecipe)
    } 
    catch(error){
      next(error)
    }
})

// DELETE
router.delete('/:id', async(req, res, next) =>{
  try {
    await Recipe.destroy({
      where: {
        id: req.params.id
      }
    });
    const recipes = await Recipe.findAll()
    res.send(recipes)
  } catch (error) {
    next(error)
  }
})

module.exports = router