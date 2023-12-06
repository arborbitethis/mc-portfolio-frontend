import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRecipeDetail = (recipeId) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // const response = await axios.get(`${process.env.REACT_APP_RECPIE_API_URL}/recipe/${recipeId}`, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

        // setRecipeDetails(response.data);
        setRecipeDetails({
            "recipe": [
                {
                    "id": 1,
                    "title": "Pike Place Chowder",
                    "image": "https://example.com/pike-place-chowder.jpg",
                    "prep_time": 30,
                    "cook_time": 45,
                    "servings": 6,
                    "description": "A rich and creamy seafood chowder inspired by the famous Pike Place Chowder in Seattle."
                }
            ],
            "ingredients": [
                {
                    "ingredient_id": 1,
                    "recipe_id": 1,
                    "ingredient_name": "mixed seafood",
                    "quantity": "1 lb"
                },
                {
                    "ingredient_id": 2,
                    "recipe_id": 1,
                    "ingredient_name": "vegetable broth",
                    "quantity": "4 cups"
                },
                {
                    "ingredient_id": 3,
                    "recipe_id": 1,
                    "ingredient_name": "heavy cream",
                    "quantity": "1 cup"
                },
                {
                    "ingredient_id": 4,
                    "recipe_id": 1,
                    "ingredient_name": "diced onions",
                    "quantity": "1/2 cup"
                },
                {
                    "ingredient_id": 5,
                    "recipe_id": 1,
                    "ingredient_name": "diced celery",
                    "quantity": "1/2 cup"
                },
                {
                    "ingredient_id": 6,
                    "recipe_id": 1,
                    "ingredient_name": "diced carrots",
                    "quantity": "1/2 cup"
                },
                {
                    "ingredient_id": 7,
                    "recipe_id": 1,
                    "ingredient_name": "diced potatoes",
                    "quantity": "1/2 cup"
                },
                {
                    "ingredient_id": 8,
                    "recipe_id": 1,
                    "ingredient_name": "butter",
                    "quantity": "1/4 cup"
                },
                {
                    "ingredient_id": 9,
                    "recipe_id": 1,
                    "ingredient_name": "all-purpose flour",
                    "quantity": "1/4 cup"
                },
                {
                    "ingredient_id": 10,
                    "recipe_id": 1,
                    "ingredient_name": "salt",
                    "quantity": "to taste"
                },
                {
                    "ingredient_id": 11,
                    "recipe_id": 1,
                    "ingredient_name": "pepper",
                    "quantity": "to taste"
                }
            ],
            "steps": [
                {
                    "step_id": 1,
                    "recipe_id": 1,
                    "step_number": 1,
                    "step_description": "In a large pot, melt butter over medium heat. Add onions, celery, carrots, and potatoes. Cook until softened, about 5 minutes.",
                    "step_image": null
                },
                {
                    "step_id": 2,
                    "recipe_id": 1,
                    "step_number": 2,
                    "step_description": "Stir in flour and cook for another 2 minutes. Gradually add vegetable broth, stirring constantly.",
                    "step_image": null
                },
                {
                    "step_id": 3,
                    "recipe_id": 1,
                    "step_number": 3,
                    "step_description": "Add mixed seafood and bring to a simmer. Cook for 20 minutes.",
                    "step_image": null
                },
                {
                    "step_id": 4,
                    "recipe_id": 1,
                    "step_number": 4,
                    "step_description": "Stir in heavy cream, salt, and pepper. Simmer for another 10 minutes. Serve real hot.",
                    "step_image": null
                }
            ]
        });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [recipeId]);

  return { recipeDetails, isLoading, error };
};

export default useFetchRecipeDetail;
