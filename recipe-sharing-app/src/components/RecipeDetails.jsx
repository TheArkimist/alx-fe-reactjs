// RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(recipeId))
  );

  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />

      <button
        onClick={() => deleteRecipe(recipe.id)}
        style={{ marginTop: "1rem", background: "red", color: "#fff" }}
      >
        Delete Recipe
      </button>
    </div>
  );
}
