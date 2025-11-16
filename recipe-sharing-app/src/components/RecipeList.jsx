import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

    const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
      <h1>Recipes</h1>

      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </div>
      ))}
    </div>
    );
  };

  export default RecipeList