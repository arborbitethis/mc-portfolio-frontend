import { useState, useEffect } from 'react';
// import axios from 'axios';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // const response = await axios.get('http://localhost:80/recipe/assets', {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        // setRecipes(response.data);

        const mockData = [
            {
              id: 1,
              title: 'Pike Place Chowder',
              image: 'https://example.com/pike-place-chowder.jpg',
              prepTime: 30,
              cookoTime: 45,
              servings: 6,
              description: 'A rich and creamy seafood chowder inspired by the famous Pike Place Chowder in Seattle.',
              ingredients: '1 lb mixed seafood, 4 cups vegetable broth, ...',
              instructions: '1. In a large pot, melt butter over medium heat. ...',
              category: 'soup'
            },
            {
              id: 2,
              title: "Action's Dungeness Crab Cakes",
              image: 'https://example.com/actions-dungeness-crab-cakes.jpg',
              prepTime: 20,
              cookTime: 20,
              servings: 4,
              description: 'These Dungeness crab cakes, man, theyre out of this world! I found them at a spot in Seattle, and they were so good I had to share the recipe.',
              ingredients: '1 lb Dungeness crab meat, 1/2 cup panko breadcrumbs, ...',
              instructions: '1. In a large bowl, mix together crab meat, ...',
              category: 'seafood'
            },
            {
                id: 1,
                title: 'Breakfast Sausage Casserole',
                image: 'https://example.com/breakfast-sausage-casserole.jpg',
                prepTime: 15,
                cookTime: 45,
                servings: 6,
                description: 'A hearty and delicious breakfast casserole, perfect for a weekend brunch or holiday mornings. Combines sausage, eggs, and cheese for a satisfying start to the day.',
                ingredients: '1 lb breakfast sausage, 6 large eggs, 2 cups milk, 1 tsp salt, 1/2 tsp black pepper, 1/2 tsp paprika, 2 cups shredded cheddar cheese, 6 slices white bread, 1/4 cup chopped green onions',
                instructions: '1. Preheat the oven to 350°F (175°C). Grease a 9x13-inch baking dish.\n2. In a skillet, brown the sausage over medium heat. Drain excess fat.\n3. In a large bowl, whisk together eggs, milk, salt, pepper, and paprika.\n4. Cut bread slices into cubes and add them to the egg mixture.\n5. Stir in the cooked sausage and shredded cheese.\n6. Pour the mixture into the prepared baking dish.\n7. Sprinkle the top with chopped green onions.\n8. Bake for 45 minutes or until the casserole is set and lightly browned on top.\n9. Allow to cool for 5 minutes before serving.',
                category: 'breakfast'
              }
          ];
          setTimeout(() => {        // Simulate an API call with setTimeout
            setRecipes(mockData);
            setIsLoading(false);
          }, 1000);

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