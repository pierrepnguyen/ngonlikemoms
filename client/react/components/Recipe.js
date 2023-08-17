import React from "react";
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
    setSelectedPage("Main View")
  }

  const handleDelete = (e) => {
    fetchDelete(e.target.value)
  }

  const handleBackButton = async () => {
    setSelectedPage("Main View");
  };


  return (
      <>
          <h3 className="single-item-header">{currentRecipe.name}</h3>
          <div className="item-content">
            <img src={currentRecipe.imageURL} alt={currentRecipe.name} className="image" />
            <p className="single-item"><span className="bold">Ingredients: </span>{currentRecipe.ingredients}</p>
            <p className="single-item"><span className="bold">Steps: </span>{currentRecipe.steps}</p>
          </div>
          <div className="buttons-div">
            <button onClick={handleDelete} value={currentRecipeID} className='button-59'>Delete</button>
            <button onClick={handleBackButton} className='button-59'>Back</button>
          </div>
      </>
  );
};
