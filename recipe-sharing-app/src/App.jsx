import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AddRecipeForm />
      <Router>
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
          <div style={{ flex: 2 }}>
            <Routes>
              {/* Home → list of all recipes */}
              <Route path="/" element={<RecipeList />} />

              {/* Recipe details page */}
              <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            </Routes>
          </div>
          <div style={{ flex: 1 }}>
            <FavoritesList />
            <RecommendationsList />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
