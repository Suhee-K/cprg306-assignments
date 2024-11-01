"use client";

import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedText = item.name.match(/^[a-zA-Z]+(?:\s[a-zA-Z]+)?/)[0];
    setIngredient(cleanedText);
  };

  async function fetchMeals() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  }

  return (
    <main>
      <h1 className="text-center my-10 text-2xl font-semibold">
        Shopping List
      </h1>
      <div className="flex">
        <div className="">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="ml-36">
          <MealIdeas ingredient={ingredient} fetchMeals={fetchMeals} />
        </div>
      </div>
    </main>
  );
}
