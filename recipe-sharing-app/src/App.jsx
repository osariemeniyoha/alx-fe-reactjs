import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ router import
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail"; // ✅ new detail page

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />

          {/* Recipe detail route */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
