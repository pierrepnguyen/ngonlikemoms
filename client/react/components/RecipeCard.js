import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CustomImage } from "./CustomImage";
import { Recipe } from "./Recipe";
import apiURL from "../api";

export const RecipeCard = ({
  recipe,
  currentRecipe,
  setCurrentRecipe
}) => {
  const fetchRecipe=async(recipe)=>{
    const res = await fetch(`${apiURL}/recipes/${recipe.id}`, {
      method: 'GET'
    })
    const data = await res.json()
    setCurrentRecipe(data)
  }

  let address = '/recipes/' + recipe.id;
  const handleClick = () => {
    setCurrentRecipe(recipe)
    // fetchRecipe();
    console.log(currentRecipe)
  }
  return (
    <>
      <div className="recipe-card">
        <CustomImage imgSrc={recipe.imageURL} pt='60%' />
        <div className="recipe-card-info">
          <p className='recipe-title'>{recipe.name}</p>
          <Link className="view-btn" onClick={handleClick} to={<Route path={address} element={<Recipe currentRecipe={currentRecipe} />} />} >View Recipe</Link>
        </div>
      </div>
    </>
  );
}