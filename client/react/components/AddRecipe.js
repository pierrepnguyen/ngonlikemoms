import React from "react"
import apiURL from "../api";

export const AddRecipe = ({
    newRecipe,
    setNewRecipe,
    setSelectedPage
}) => {

    async function postRecipe() {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify(newRecipe)
            }
            const response = await fetch(`${apiURL}/recipes`, requestOptions)
        } catch (err) {
          console.log("Oh no an error! ", err);
        }
    }

    function handleChange(ev) {
        const value=ev.target.value
        setNewRecipe({
            ...newRecipe,
            [ev.target.name]: value
        })
    }

    const handleSubmit = async (e) => {
        postRecipe()
        setNewRecipe({name: '', ingredients: '', steps: '', imageURL: ''})
    }

    const handleBackButton = async () => {
        setSelectedPage("Main View")
    }

    return (
            <>
                <div className="form-page-style">
                    <form onSubmit = {handleSubmit}>
                        <label for="name">Dish name:</label>
                        <br></br>
                        <input type='text' name='name' value={ newRecipe.name }
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="ingredients">Ingredients:</label>
                        <br></br>
                        <input type='text' name='ingredients' value = {newRecipe.ingredients}
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="steps">Steps:</label>
                        <br></br>
                        <input type='text' name='steps' value = {newRecipe.steps}
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="image">Image:</label>
                        <br></br>
                        <input type='text' name='imageURL' value = {newRecipe.imageURL}
                            onChange={handleChange} className='input-form' />
                        <br></br><br></br>
                        <div className="buttons-div">
                          <button type='submit' className='button-59'>Submit</button>
                          <button onClick={handleBackButton} className='button-59'>Back</button>
                        </div>
                    </form>
                </div>
            </>
          );
}