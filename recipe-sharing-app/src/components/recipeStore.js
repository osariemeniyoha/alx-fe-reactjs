import { create } from "zustand";


const filterByTerm = (recipes, term) => {
  if (!term) return recipes;
  const t = term.toLowerCase();
  return recipes.filter((recipe) => {
    const title = recipe.title ?? "";
    const desc = recipe.description ?? "";
    const ingredients = Array.isArray(recipe.ingredients)
      ? recipe.ingredients.join(" ")
      : "";
    return (
      title.toLowerCase().includes(t) ||
      desc.toLowerCase().includes(t) ||
      ingredients.toLowerCase().includes(t)
    );
  });
};

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  
  addRecipe: (newRecipe) =>
    set((state) => {
      const recipe = newRecipe.id ? newRecipe : { ...newRecipe, id: Date.now() };
      const recipes = [...state.recipes, recipe];
      return { recipes, filteredRecipes: filterByTerm(recipes, state.searchTerm) };
    }),

  
  setRecipes: (recipes) =>
    set((state) => ({ recipes, filteredRecipes: filterByTerm(recipes, state.searchTerm) })),

  
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      );
      return { recipes, filteredRecipes: filterByTerm(recipes, state.searchTerm) };
    }),

  
  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((r) => r.id !== id);
      return { recipes, filteredRecipes: filterByTerm(recipes, state.searchTerm) };
    }),

  
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterByTerm(state.recipes, term),
    })),
}));
