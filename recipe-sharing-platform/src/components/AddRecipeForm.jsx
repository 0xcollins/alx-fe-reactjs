import React, { useState } from 'react';

function AddRecipeForm() {
  // State to track form values
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  // State to track validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function to check for empty fields
  const validate = () => {
    let validationErrors = {};

    if (!formData.title) {
      validationErrors.title = 'Title is required';
    }

    if (!formData.ingredients) {
      validationErrors.ingredients = 'At least one ingredient is required';
    }

    if (!formData.instructions) {
      validationErrors.instructions = 'Instructions are required';
    }

    // Set errors if any validation fails
    setErrors(validationErrors);

    // Return boolean indicating whether validation passed
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validate()) {
      // Form is valid, handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);

      // Reset form and errors
      setFormData({
        title: '',
        ingredients: '',
        instructions: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
