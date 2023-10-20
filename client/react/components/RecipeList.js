import React from "react";

import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({
  recipes,
  setSelectedPage,
  setCurrentRecipe,
  currentRecipe
}) => {

  return (
    <>
      <div className="recipe-container">
        {recipes.map((recipe, idx) => {<RecipeCard
          currentRecipe={currentRecipe}
          recipe={recipe}
          key={idx} 
        />})}
      </div>
    </>
  );
};
