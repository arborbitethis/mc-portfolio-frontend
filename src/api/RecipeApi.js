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
              cookTime: 45,
              servings: 6,
              description: 'A rich and creamy seafood chowder inspired by the famous Pike Place Chowder in Seattle.',
              ingredients: '1 lb mixed seafood (clams, shrimp, mussels), 4 cups vegetable broth, 2 cups heavy cream, 1 onion (chopped), 3 garlic cloves (minced), 2 potatoes (diced), 1 carrot (diced), 2 celery stalks (diced), 2 tbsp butter, Salt and pepper to taste, Fresh parsley for garnish',
              instructions: '1. In a large pot, melt butter over medium heat.\n2. Add onions, garlic, carrots, and celery, and sauté until soft.\n3. Add the vegetable broth and potatoes, bring to a boil.\n4. Reduce heat and let simmer until potatoes are tender.\n5. Add the mixed seafood and heavy cream.\n6. Simmer until the seafood is cooked through.\n7. Season with salt and pepper.\n8. Serve hot, garnished with fresh parsley.',
              category: 'soup'
            },
            {
              id: 2,
              title: "Action's Dungeness Crab Cakes",
              image: 'https://example.com/actions-dungeness-crab-cakes.jpg',
              prepTime: 20,
              cookTime: 20,
              servings: 4,
              description: 'These Dungeness crab cakes are out of this world! A Seattle-inspired recipe.',
              ingredients: '1 lb Dungeness crab meat, 1/2 cup panko breadcrumbs, 1/4 cup mayonnaise, 1 egg (beaten), 2 tsp Dijon mustard, 1 tsp Worcestershire sauce, 1/4 tsp cayenne pepper, Salt and pepper to taste, 2 tbsp butter or oil for frying, Lemon wedges for serving',
              instructions: '1. In a large bowl, mix together crab meat, breadcrumbs, mayonnaise, beaten egg, Dijon mustard, Worcestershire sauce, cayenne pepper, salt, and pepper.\n2. Form the mixture into patties.\n3. Heat butter or oil in a skillet over medium heat.\n4. Fry the crab cakes until golden brown on each side, approximately 4-5 minutes per side.\n5. Serve hot with lemon wedges.',
              category: 'seafood'
            },            
            {
                id: 3,
                title: 'Breakfast Sausage Casserole',
                image: 'https://example.com/breakfast-sausage-casserole.jpg',
                prepTime: 15,
                cookTime: 45,
                servings: 6,
                description: 'A hearty and delicious breakfast casserole, perfect for a weekend brunch or holiday mornings. Combines sausage, eggs, and cheese for a satisfying start to the day.',
                ingredients: '1 lb breakfast sausage, 6 large eggs, 2 cups milk, 1 tsp salt, 1/2 tsp black pepper, 1/2 tsp paprika, 2 cups shredded cheddar cheese, 6 slices white bread, 1/4 cup chopped green onions',
                instructions: '1. Preheat the oven to 350°F (175°C). Grease a 9x13-inch baking dish.\n2. In a skillet, brown the sausage over medium heat. Drain excess fat.\n3. In a large bowl, whisk together eggs, milk, salt, pepper, and paprika.\n4. Cut bread slices into cubes and add them to the egg mixture.\n5. Stir in the cooked sausage and shredded cheese.\n6. Pour the mixture into the prepared baking dish.\n7. Sprinkle the top with chopped green onions.\n8. Bake for 45 minutes or until the casserole is set and lightly browned on top.\n9. Allow to cool for 5 minutes before serving.',
                category: 'breakfast'
              },
              {
                id: 4,
                title: 'Cast Iron Skillet Strip Steak',
                image: 'https://example.com/cast-iron-strip-steak.jpg',
                prepTime: 10,
                cookTime: 14,
                servings: 2,
                description: 'A perfectly seared thick strip steak cooked in a cast iron skillet, locking in the juices and flavor.',
                ingredients: '2 thick-cut strip steaks, 2 tbsp olive oil, 2 cloves garlic (minced), 1 tbsp unsalted butter, Salt and pepper to taste, Fresh rosemary or thyme (optional)',
                instructions: '1. Allow the steaks to come to room temperature for about 30 minutes before cooking.\n2. Preheat the cast iron skillet on high heat.\n3. Season the steaks generously with salt and pepper on both sides.\n4. Add olive oil to the skillet, followed by the steaks. Sear for 5-7 minutes on each side for medium-rare.\n5. Add butter, garlic, and fresh herbs to the skillet.\n6. Tilt the skillet slightly and use a spoon to baste the steaks with the melted butter for about a minute.\n7. Remove the steaks from the skillet and let them rest for 5 minutes before slicing.',
                category: 'main'
              },
              {
                id: 5,
                title: 'Garlic Parmesan Roasted Asparagus',
                image: 'https://example.com/garlic-parmesan-asparagus.jpg',
                prepTime: 10,
                cookTime: 20,
                servings: 4,
                description: 'Tender asparagus spears roasted with garlic and parmesan, a perfect side dish for any steak dinner.',
                ingredients: '1 lb fresh asparagus, 3 tbsp olive oil, 4 cloves garlic (minced), 1/4 cup grated parmesan cheese, Salt and pepper to taste, Lemon zest (optional), Chopped fresh parsley for garnish',
                instructions: '1. Preheat the oven to 400°F (200°C).\n2. Trim the tough ends of the asparagus and arrange them on a baking sheet.\n3. Drizzle with olive oil and sprinkle with minced garlic, tossing to coat evenly.\n4. Season with salt and pepper.\n5. Roast in the oven for 15-20 minutes or until the asparagus is tender.\n6. Sprinkle with grated parmesan cheese and return to the oven for an additional 2-3 minutes or until the cheese is melted and slightly golden.\n7. Garnish with lemon zest and fresh parsley before serving.',
                category: 'side'
              }                            
          ];
          setTimeout(() => {        // Simulate an API call with setTimeout
            setRecipes(mockData);
            setIsLoading(false);
          }, 500);

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