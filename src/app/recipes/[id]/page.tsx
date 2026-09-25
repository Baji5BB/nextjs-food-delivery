import { getRecipeById } from "@/services/recipe.service";

interface RecipeDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const { id } = await params;

  const recipe = await getRecipeById(id);

  return (
    <main>
      <section className="recipe-details">
        <div className="recipe-details-container">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="recipe-details-image"
          />

          <div className="recipe-details-content">
            <p className="section-label">{recipe.cuisine.toUpperCase()}</p>

            <h1>{recipe.name}</h1>

            <p className="recipe-details-rating">
              ⭐ {recipe.rating.toFixed(1)} · {recipe.reviewCount} reviews
            </p>

            <p>{recipe.difficulty} · {recipe.caloriesPerServing} kcal</p>

            <div className="recipe-details-section">
              <h2>Ingredients</h2>

              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-details-section">
              <h2>Instructions</h2>

              <ol>
                {recipe.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}