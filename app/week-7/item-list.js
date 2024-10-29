"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [] }) {
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
          return (a.name || "").localeCompare(b.name || "");
        } else if (sortBy === "category") {
          return (a.category || "").localeCompare(b.category || "");
        }
        return 0;
      })
    : items;

  return (
    <div className="w-1/2 mx-auto">
      <div className="mb-5">
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
      </div>
      <div className="grid grid-cols-3 gap-x-7">
        {sortBy !== "grouped" &&
          sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
}
