"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="flex mx-auto mt-10 w-36 bg-white justify-between items-center  rounded-md p-4">
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
  );
}
