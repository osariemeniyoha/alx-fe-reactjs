import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
        <Link to="/">⬅ Back to Recipes</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {isEditing ? (
        <EditRecipeForm recipe={recipe} onFinish={() => setIsEditing(false)} />
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
        </>
      )}

      <br />
      <Link to="/">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;
