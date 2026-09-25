import RecipeCard from "@/components/recipe/RecipeCard";
import { getRecipes } from "@/services/recipe.service";

export default async function RecipesPage() {
  const data = await getRecipes();

  return (
    <main>
      <section className="recipes-section">
        <div className="recipes-heading">
          <span className="section-label">EXPLORE</span>
          <h1>Find your next favorite meal</h1>
          <p>
            Discover delicious recipes from cuisines around the world.
          </p>
        </div>

        <div className="recipe-grid">
          {data.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}