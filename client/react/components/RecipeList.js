import React from "react";

export const RecipeList = ({
  recipe,
  setSelectedPage,
  setCurrentRecipe,
}) => {

  const handleClick = () => {
    setSelectedPage("Single Recipe")
    setCurrentRecipe(recipe)
  }

  return (
    <>
      <div className="recipe">
        <p onClick={handleClick} className='item-list'>{recipe.name}</p>
      </div>
    </>
  );
};
