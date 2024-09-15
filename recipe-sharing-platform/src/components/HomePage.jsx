import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {recipes.map(recipe => (
        <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <img className="w-full h-48 object-cover rounded-t-lg" src={recipe.image} alt={recipe.title} />
          <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
          <p className="text-gray-600 mt-2">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
