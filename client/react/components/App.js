import React, { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList"
import { AddRecipe } from "./AddRecipe"
import { Nav } from "./Nav"
import { HeroSection } from "./Hero";
import { Footer } from "./Footer";

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

  if(selectedPage === "Main View") {
    return (<main>
        <Nav 
            selectedPage={selectedPage} 
            setSelectedPage={setSelectedPage}
        />
        <div className="container main">
          <HeroSection  
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} 
          />
        </div>
        <Footer />
    </main>
  )}
  else if (selectedPage === "Recipe List") {
    return(
      <main>
      <Nav 
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
      />
        <div className="grid-list main">
          {recipes.map((recipe, idx) => <RecipeList
            recipe={recipe}
            key={idx}
            setSelectedPage={setSelectedPage}
            setCurrentRecipe={setCurrentRecipe}
          />)}
        </div>
      <Footer />
    </main>
    )
  }
  else if (selectedPage === "Add Recipe") {
    return (<main>
      <Nav 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <div className="add-recipe main" >
        <AddRecipe
          newRecipe={newRecipe}
          setNewRecipe={setNewRecipe}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <Footer />
    </main>
  )}

  else if (selectedPage === "Single Recipe") {
    return(<main>
      <Nav 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Recipe
        setSelectedPage={setSelectedPage}
        currentRecipe={currentRecipe}
        fetchRecipes={fetchRecipes}
      />
      <Footer />
    </main>
  )}
};
