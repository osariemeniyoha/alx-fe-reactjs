import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); 

  const validate = () => { 
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2) {
      tempErrors.ingredients = "At least two ingredients required";
    }
    if (!steps.trim()) tempErrors.steps = "Steps are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { title, ingredients, steps });
      
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
