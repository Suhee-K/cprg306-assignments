"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState("");
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-2xl font-semibold mb-10">
          Please login to get access to this page.
        </h1>
        <button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
          onClick={gitHubLogin}
        >
          Login with GitHub
        </button>
      </div>
    );
  }

  async function gitHubLogin() {
    await gitHubSignIn();
  }

  async function logout() {
    await firebaseSignOut();
  }

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
      <div className="flex">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={logout}
            className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Logout
          </button>
          <h1 className="text-center my-10 text-2xl font-semibold flex-1">
            Shopping List
          </h1>
          <div className="mr-4 ">
            <img
              src={user.photoURL}
              alt="User profile image"
              className="rounded-full h-14 w-14"
            />
          </div>
        </div>
      </div>

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
