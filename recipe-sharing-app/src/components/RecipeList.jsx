import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>
          {searchTerm
            ? `No recipes match "${searchTerm}".`
            : "No recipes yet. Add one!"}
        </p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "1rem" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
