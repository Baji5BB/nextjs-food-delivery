"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Recipe } from "@/types/recipe";

interface RecipeExplorerProps {
  recipes: Recipe[];
}

export default function RecipeExplorer({
  recipes,
}: RecipeExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const cuisines = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(recipes.map((recipe) => recipe.cuisine))),
    ];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCuisine =
        selectedCuisine === "All" ||
        recipe.cuisine === selectedCuisine;

      return matchesSearch && matchesCuisine;
    });
  }, [recipes, search, selectedCuisine]);

  return (
    <div>
      <div className="recipe-search">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="cuisine-filters">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            type="button"
            className={
              selectedCuisine === cuisine
                ? "cuisine-filter active"
                : "cuisine-filter"
            }
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      <p>
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="recipe-card"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-card-image"
            />

            <div className="recipe-card-content">
              <div className="recipe-card-header">
                <h2>{recipe.name}</h2>
                <span>⭐ {recipe.rating.toFixed(1)}</span>
              </div>

              <p>{recipe.cuisine}</p>

              <div className="recipe-card-meta">
                <span>{recipe.difficulty}</span>
                <span>{recipe.caloriesPerServing} kcal</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}