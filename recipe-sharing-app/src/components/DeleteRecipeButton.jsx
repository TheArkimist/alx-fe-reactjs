import React from 'react'
import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";

const DeleteRecipeButton = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(r => r.id === Number(recipeId))
    );

    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  return (
    <button
        onClick={() => deleteRecipe(recipe.id)}
        style={{ marginTop: "1rem", background: "red", color: "#fff" }}
      >
        Delete Recipe
      </button>
  )
}

export default DeleteRecipeButton