import React, { useState } from 'react';

const RecipeEditForm = ({ recipe, onCancel }) => {
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleIngredientChange = (index, e) => {
    const updatedIngredients = [...editedRecipe.ingredients];
    updatedIngredients[index][e.target.name] = e.target.value;
    setEditedRecipe({ ...editedRecipe, ingredients: updatedIngredients });
  };

  const handleStepChange = (index, e) => {
    const updatedSteps = [...editedRecipe.steps];
    updatedSteps[index][e.target.name] = e.target.value;
    setEditedRecipe({ ...editedRecipe, steps: updatedSteps });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${process.env.REACT_APP_RECPIE_API_URL}/recipe/${recipe.id}`, editedRecipe, {
        headers: {
          'Content-Type': 'application/json'
          // Include other headers like authorization tokens if needed
        }
      });

      console.log('Recipe updated:', response.data);
      // Call onCancel or any other logic to navigate away or give feedback
      onCancel();
    } catch (error) {
      console.error('Error updating recipe:', error);
      // Handle errors (e.g., show a message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
      
      {/* Existing Fields */}
      
      <label className="block mb-2">
        Prep Time (mins):
        <input
          type="number"
          name="prep_time"
          value={editedRecipe.prep_time}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Cook Time (mins):
        <input
          type="number"
          name="cook_time"
          value={editedRecipe.cook_time}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Servings:
        <input
          type="number"
          name="servings"
          value={editedRecipe.servings}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </label>

      <h3 className="font-bold mb-2">Ingredients:</h3>
      {editedRecipe.ingredients.map((ingredient, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            name="ingredient_name"
            value={ingredient.ingredient_name}
            onChange={(e) => handleIngredientChange(index, e)}
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="quantity"
            value={ingredient.quantity}
            onChange={(e) => handleIngredientChange(index, e)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      ))}

      <h3 className="font-bold mb-2">Steps:</h3>
      {editedRecipe.steps.map((step, index) => (
        <textarea
          key={index}
          name="step_description"
          value={step.step_description}
          onChange={(e) => handleStepChange(index, e)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      ))}

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save Changes
      </button>

      <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
        Cancel
      </button>
    </form>
  );
};

export default RecipeEditForm;