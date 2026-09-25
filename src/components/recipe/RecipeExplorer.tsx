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

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [recipes, search]);

  return (
    <div>
      {/* Search */}
      <div className="recipe-search">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Result count */}
      <p>
        Showing {filteredRecipes.length} of {recipes.length} recipes
      </p>

      {/* Recipes */}
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