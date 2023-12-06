import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // const response = await axios.get(`${process.env.REACT_APP_RECPIE_API_URL}/recipes`, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

        //setRecipes(response.data);
        setRecipes([{
          "id": 1,
          "title": "Pike Place Chowder",
          "image": "https://example.com/pike-place-chowder.jpg",
          "servings": 6,
          "description": "A rich and creamy seafood chowder inspired by the famous Pike Place Chowder in Seattle.",
          "prepTime": 30,
          "cookTime": 45
      }, {
          "id": 2,
          "title": "Action's Dungeness Crab Cakes",
          "image": "https://example.com/actions-dungeness-crab-cakes.jpg",
          "servings": 4,
          "description": "These Dungeness crab cakes, man, they're out of this world! I found them at a spot in Seattle, and they were so good I had to share the recipe.",
          "prepTime": 20,
          "cookTime": 20
      }]
      )
        setIsLoading(false);

      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { recipes, isLoading, error };
};

export default useRecipes;
