import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AddRecipeForm />
      <Router>
        <Routes>
          {/* Home → list of all recipes */}
          <Route path="/" element={<RecipeList />} />

          {/* Recipe details page */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
