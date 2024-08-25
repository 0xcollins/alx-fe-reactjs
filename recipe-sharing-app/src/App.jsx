import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // Import the RecipeDetails component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Route for the recipe list */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route for recipe details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
