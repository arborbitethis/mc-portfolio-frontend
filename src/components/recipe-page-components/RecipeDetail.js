import React from 'react';
import fetchRecipeDetail from '../../api/RecipeDetailApi';


const RecipeDetail = ({ recipeId, onBack }) => {
  const { recipeDetails, isLoading, error } = fetchRecipeDetail(recipeId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipe: {error.message}</p>;

  if (!recipeDetails) return null;
  const recipe = recipeDetails.recipe[0]; // Assuming the API returns an array with one recipe

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button onClick={onBack} className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow">
        Back
      </button>

      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="mb-4 w-full h-64 object-cover rounded" />
      <p className="text-gray-600 mb-4">{recipe.description}</p>
      <p><strong>Total Time:</strong> {recipe.prep_time + recipe.cook_time} mins</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Ingredients:</h3>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.ingredient_id}>{ingredient.ingredient_name}: {ingredient.quantity}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Instructions:</h3>
        {recipe.steps.map(step => (
          <div key={step.step_id} className="mb-4">
            <p><strong>Step {step.step_number}:</strong> {step.step_description}</p>
            {step.step_image && <img src={step.step_image} alt={`Step ${step.step_number}`} className="w-full h-64 object-cover rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;