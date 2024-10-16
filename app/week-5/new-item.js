"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit(e) {
    if (!name) {
      return;
    }
    e.preventDefault();
    alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setQuantity(1);
    setName("");
    setCategory("Produce");
  }

  return (
    <div className="mx-auto mt-20 w-full max-w-sm p-2">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Item name"
            className="w-full p-3 rounded-md"
            pattern="[A-Za-z]+"
          />
        </div>
        <div className="flex items-start justify-between mt-5">
          <div className="flex bg-white w-36 justify-between rounded-md p-3">
            <span>{quantity}</span>
            <div className="text-white">
              <button
                className="rounded-md disabled:bg-[#cad2c5] hover:bg-[#588157] bg-[#84a98c] box-border w-10 mr-1"
                onClick={increment}
                disabled={quantity === 20}
              >
                +
              </button>
              <button
                onClick={decrement}
                className="rounded-md disabled:bg-[#cad2c5] bg-[#84a98c] hover:bg-[#588157] box-border w-10 disabled:cursor-not-allowed"
                disabled={quantity === 1}
              >
                -
              </button>
            </div>
          </div>
          <div>
            <select className="p-3.5 rounded-md">
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <input
            type="submit"
            value="+"
            className="items-center justify-center w-full mt-5 hover:bg-[#588157] bg-[#84a98c] p-3 rounded-md text-white"
          ></input>
        </div>
      </form>
    </div>
  );
}
