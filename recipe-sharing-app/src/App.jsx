import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar"; 

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />   
      <RecipeList />
    </div>
  );
}

export default App;
