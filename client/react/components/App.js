import React, { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList"
import { AddRecipe } from "./AddRecipe"

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Recipe } from "./Recipe";

export const App = () => {
  const [recipes, setRecipies] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({name: '', ingredients: '', steps: '', imageURL: ''})
  const [selectedPage, setSelectedPage] = useState("Main View")

  async function fetchRecipes() {
    try {
      const response = await fetch(`${apiURL}/recipes`);
      const recipesData = await response.json();

      setRecipies(recipesData);
      // console.log(recipesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleAddRecipeButton = () => {
    setSelectedPage("Add Recipe")
  }

  if(selectedPage === "Main View") {
    return (<main>
        <h1 className="align-header">Ngonlikemoms</h1>
        <h2 className="align-header">All Recipes</h2>
        <div className="button-location">
          <button onClick={handleAddRecipeButton} className='button-59'>Add Recipe</button>
        </div>
        <br></br><hr></hr>
        <div className="form-page-style">
          {recipes.map((recipe, idx) => <RecipeList
            recipe={recipe}
            key={idx}
            setSelectedPage={setSelectedPage}
            setCurrentRecipe={setCurrentRecipe}
            />)}
        </div>
    </main>
  )}
  else if (selectedPage === "Add Recipe") {
    return (<main>
      <h1 className="align-header">Ngonlikemoms</h1>
      <h2 className="align-header">Add Recipe</h2>
      <hr></hr>
      <AddRecipe
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </main>
  )}

  else if (selectedPage === "Single Recipe") {
    return(<main>
        <h1 className="align-header">Ngonlikemoms</h1>
        <h2 className="align-header">View</h2>
        <hr></hr>
      <Recipe
        setSelectedPage={setSelectedPage}
        currentRecipe={currentRecipe}
        fetchRecipes={fetchRecipes}
      />
    </main>
  )}
};
