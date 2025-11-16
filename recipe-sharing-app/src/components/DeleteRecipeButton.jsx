import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";

const DeleteRecipeButton = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(Number(recipeId)); // Delete the recipe
    navigate("/"); // Navigate back to the recipe list
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: "1rem", background: "red", color: "#fff" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;