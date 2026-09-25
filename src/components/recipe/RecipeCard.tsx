import Link from "next/link";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="recipe-card">
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
  );
}