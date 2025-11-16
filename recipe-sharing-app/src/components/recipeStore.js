import { create } from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Spicy West African rice" },
    { id: 2, title: "Waakye", description: "Rice and beans with stew" },
  ],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== recipeId) })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes })
}));
