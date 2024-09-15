import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you're importing Link
import data from '../data.json'; // Assuming data.json contains the mock recipe data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from data.json when the component mounts
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold sm:text-lg">{recipe.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{recipe.summary}</p>
              <Link 
                to={`/recipe/${recipe.id}`} 
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
