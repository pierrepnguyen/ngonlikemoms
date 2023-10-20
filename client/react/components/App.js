import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Recipe } from "./Recipe";
import { RecipeList } from "./RecipeList"
import { AddRecipe } from "./AddRecipe"
import { Home } from "./Home";
import { Nav } from "./Nav"
import { HeroSection } from "./Hero";
import { Footer } from "./Footer";


export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({name: '', ingredients: '', steps: '', imageURL: ''})
  const [selectedPage, setSelectedPage] = useState("Main View")

  async function fetchRecipes() {
    try {
      const response = await fetch(`${apiURL}/recipes`);
      const recipesData = await response.json();

      setRecipes(recipesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return(
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path='/recipes/:id' element={<Recipe
          currentRecipe={currentRecipe}
          fetchRecipes={fetchRecipes} />
        } />
        <Route path="/add-recipe" element={<AddRecipe 
                                            newRecipe={newRecipe}
                                            setNewRecipe={setNewRecipe}/>
                                          } />

      </Routes>
      <Footer />
    </Router>
  )

  // if(selectedPage === "Main View") {
  //   return (<Home />)}
  // else if (selectedPage === "Recipe List") {
  //   return(
  //     <main>
  //       <RecipeList recipes={recipes}/>
  //   </main>
  //   )
  // }
  // else if (selectedPage === "Add Recipe") {
  //   return (<main>
  //     <Nav 
  //       selectedPage={selectedPage} 
  //       setSelectedPage={setSelectedPage}
  //     />
  //     <div className="add-recipe main" >
  //       <AddRecipe
  //         newRecipe={newRecipe}
  //         setNewRecipe={setNewRecipe}
  //         selectedPage={selectedPage}
  //         setSelectedPage={setSelectedPage}
  //       />
  //     </div>
  //     <Footer />
  //   </main>
  // )}

  // else if (selectedPage === "Single Recipe") {
  //   return(<main>
  //     <Nav 
  //       selectedPage={selectedPage} 
  //       setSelectedPage={setSelectedPage}
  //     />
      // <Recipe
      //   setSelectedPage={setSelectedPage}
      //   currentRecipe={currentRecipe}
      //   fetchRecipes={fetchRecipes}
      // />
  //     <Footer />
  //   </main>
  // )}
};
