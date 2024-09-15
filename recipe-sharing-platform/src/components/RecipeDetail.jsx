import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(r => r.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <img className="w-full h-64 object-cover rounded-lg" src={recipe.image} alt={recipe.title} />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-700">{recipe.summary}</p>
      {/* Add more detailed recipe information */}
    </div>
  );
}

export default RecipeDetail;
