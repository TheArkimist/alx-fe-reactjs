import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeList = () => {
  const { filteredRecipes, setSearchTerm, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    setSearchTerm: state.setSearchTerm,
    searchTerm: state.searchTerm,
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;