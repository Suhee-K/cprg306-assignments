"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [randomUrl, setRandomUrl] = useState("");
  const [breedList, setBreedList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  async function fetchRandomDog(breed) {
    try {
      const response = breed
        ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        : await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setRandomUrl(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchListBreed() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      const breeds = Object.keys(data.message);
      setBreedList(breeds);
    } catch (error) {
      console.error(error);
    }
  }

  function handleBreedChange(event) {
    setSelectedBreed(event.target.value);
  }

  useEffect(() => {
    fetchRandomDog();
    fetchListBreed();
  }, []);

  useEffect(() => {
    if (selectedBreed == "") {
      return;
    }
    fetchRandomDog(selectedBreed);
  }, [selectedBreed]);

  return (
    <div>
      <div>
        <select onChange={handleBreedChange}>
          {breedList.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <img src={randomUrl} alt="Random dog" />
    </div>
  );
}
