// src/store/recipeStore.js

import { create } from 'zustand';

// Extended Zustand store to handle favorites and recommendations
export const useRecipeStore = create(set => ({
  recipes: [], // Initial state for recipes
  favorites: [], // State to store favorite recipe IDs
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),
  recommendations: [], // State to store recommended recipes
  // Action to generate recommendations (mock implementation)
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
