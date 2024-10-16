"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList() {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

  const [sortBy, setSortBy] = useState("");

  function handleClick(sortType) {
    setSortBy(sortType);
  }

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = [...items].reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="w-1/2 mx-auto">
      <div className="my-5">
        <span>Sort by: </span>
        <button
          onClick={() => handleClick("name")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "name" ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => handleClick("category")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "category" ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => handleClick("grouped")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "grouped" ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
          }`}
        >
          Grouped Category
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-7">
        {sortBy !== "grouped" &&
          sortedItems.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
      </div>
      {sortBy === "grouped" &&
        Object.keys(groupedItems).map((category) => (
          <div key={category} className="w-1/2 mb-5">
            <h3 className="capitalize font-bold mb-2">{category}</h3>
            {groupedItems[category].map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
