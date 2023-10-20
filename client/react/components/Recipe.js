import React from "react";
import { Link } from 'react-router-dom';
import apiURL from "../api";

export const Recipe = ({
  setSelectedPage,
  currentRecipe,
  fetchRecipes
}) => {

  const currentRecipeID = currentRecipe.id

  const fetchDelete=async(currentRecipeID)=>{
    const res = await fetch(`${apiURL}/recipes/${currentRecipeID}`, {
      method: "DELETE"
    })
    const data = await res.json()
    fetchRecipes()
  }

  const handleDelete = (e) => {
    fetchDelete(e.target.value)
  }

  return (
      <div className="recipe-cont">
        <div className="row">
          <h1 className="single-item-header">{currentRecipe.name}</h1>
        </div>
        <div className="info-grid">
          <div className="item-content col1">
            <p className="single-item"><span className="bold">Ingredients: </span>{currentRecipe.ingredients}</p>
            <p className="single-item"><span className="bold">Steps: </span>{currentRecipe.steps}</p>
          </div>
          <div className="col2">
            <img src={currentRecipe.imageURL} alt={currentRecipe.name} className="image" />
          </div>
        </div>
        <div className="buttons-div">
          <Link onClick={handleDelete} to={'/'} value={currentRecipeID} className='button-59'>Delete</Link>
          <Link to={'/recipes'} className='button-59'>Back</Link>
        </div>
      </div>
  );
};
