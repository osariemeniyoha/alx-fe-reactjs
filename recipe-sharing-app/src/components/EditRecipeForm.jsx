import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === Number(id))
  );

  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setDescription(recipe.description || "");
      setIngredients((recipe.ingredients || []).join(", "));
    }
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };
    updateRecipe(updated);
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
      <h2>Edit Recipe</h2>
      <div>
        <label>Title</label>
        <br />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <label>Description</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <label>Ingredients (comma separated)</label>
        <br />
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="flour, egg, milk"
          style={{ width: "100%", padding: 8 }}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <button type="submit" style={{ marginRight: 8 }}>Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
