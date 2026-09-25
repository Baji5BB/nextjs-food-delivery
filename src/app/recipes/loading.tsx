
import RecipeCardSkeleton from "@/components/recipe/RecipeCardSkeleton";

export default function Loading() {
  return (
    <main>
      <section className="recipes-section">
        <div className="recipes-heading">
          <span className="section-label">
            EXPLORE
          </span>

          <h1>Find your next favorite meal</h1>

          <p>Preparing something delicious for you...</p>
        </div>

        <div
          className="recipe-grid"
          role="status"
          aria-label="Loading recipes"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <RecipeCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}