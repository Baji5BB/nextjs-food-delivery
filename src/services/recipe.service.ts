import { notFound } from "next/navigation";
import { Recipe, RecipeApiResponse } from "@/types/recipe";

const RECIPES_API_URL = "https://dummyjson.com/recipes";

export async function getRecipes(): Promise<RecipeApiResponse> {
  const response = await fetch(RECIPES_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

export async function getRecipeById(
  id: string
): Promise<Recipe> {
  if (!/^\d+$/.test(id) || Number(id) < 1) {
    notFound();
  }

  const response = await fetch(
    `${RECIPES_API_URL}/${id}`
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  return response.json();
}