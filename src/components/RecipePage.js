import React, { useState } from 'react';
import RecipeCard from './recipe-page-components/RecipeCard';
import Filters from './recipe-page-components/Filters';
import useRecipes from '../api/RecipeApi';

const RecipePage = () => {
  const { recipes, isLoading, error } = useRecipes();
  const [searchTerm, setSearchTerm] = useState('');
  const [prepTime, setPrepTime] = useState(80);
  const [category, setCategory] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    recipe.prepTime <= prepTime &&
    (category === '' || recipe.category === category)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mb-4 text-2xl font-bold text-gray-700">Recipe Page</h1>
      <p className="text-center mb-8 text-lg text-gray-600 max-w-lg mx-auto">
        My wife and I have a passion for cooking..... write something else meaningful here... 
        (rest of your text)
      </p>
      <Filters 
        setSearchTerm={setSearchTerm}
        setPrepTime={setPrepTime}
        setCategory={setCategory}
        prepTime={prepTime}
      />
      {isLoading ? (
        <div className="text-center text-lg text-gray-600 my-4">Loading...</div>
      ) : error ? (
        <div className="text-center text-lg text-gray-500 my-4">Error: {error.message}</div>
      ) : filteredRecipes.length === 0 ? (
        <div className="text-center text-lg text-gray-500 my-4">No recipes match the current filter criteria.</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={index}
              className="min-w-0 overflow-hidden break-words"
              title={recipe.title}
              category={recipe.category}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipePage;
