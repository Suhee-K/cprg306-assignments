"use client";

import React, { useEffect, useState } from "react";

export default function MealIdeas({ ingredient, fetchMeals }) {
  const [meals, setMeals] = useState([]);

  async function loadMeals() {
    try {
      const data = await fetchMeals();
      setMeals(data || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadMeals();
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-xl mb-5">Meal Ideas</h1>
      <p className="mb-3">Here are some meal ideas with {ingredient}:</p>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li
              className="bg-[#D1D8C5] mb-3 p-3 rounded-md hover:bg-[#BBC6A7] cursor-pointer"
              key={meal.idMeal}
            >
              {meal.strMeal}
            </li>
          ))
        ) : (
          <li>No meals ideas found for {ingredient}.</li>
        )}
      </ul>
    </div>
  );
}
