"use client";

import { useState } from "react";
import itemJson from "./items.json";
import Item from "./item";

export default function ItemList() {
  const items = [...itemJson];
  const [sortBy, setSortBy] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  function handleClick(sortType) {
    if (sortBy === sortType) {
      setIsSorted(!isSorted);
    } else {
      setSortBy(sortType);
      setIsSorted(true);
    }
  }

  const sortedItems = isSorted
    ? [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
        return 0;
      })
    : items;

  const groupedItems = [...items].reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    acc[item.category].sort((a, b) => a.name.localeCompare(b.name));
    return acc;
  }, {});

  return (
    <div className="w-1/2 mx-auto">
      <div className="my-5">
        <span>Sort by: </span>
        <button
          onClick={() => handleClick("name")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "name" && isSorted ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => handleClick("category")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "category" && isSorted ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => handleClick("grouped")}
          className={`px-2 py-1 rounded-md mr-3 ${
            sortBy === "grouped" && isSorted ? "bg-[#BBC6A7]" : "bg-[#D1D8C5]"
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
      {isSorted && sortBy === "grouped"
        ? Object.keys(groupedItems).map((category) => (
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
          ))
        : sortBy === "grouped" &&
          sortedItems.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
    </div>
  );
}
