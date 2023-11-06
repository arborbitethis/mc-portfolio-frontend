import React from 'react';

const RecipeDetail = ({ recipe, onBack }) => {
  if (!recipe) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <button 
        onClick={onBack} 
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow"
      >
        Back
      </button>

            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="mb-4 w-full h-64 object-cover rounded" />
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <p><strong>Total Time:</strong> {recipe.prepTime + recipe.cookTime} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <div className="mt-4">
                <h3 className="font-bold mb-2">Ingredients:</h3>
                <p>{recipe.ingredients}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-bold mb-2">Instructions:</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;
