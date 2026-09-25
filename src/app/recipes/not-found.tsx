
import Link from "next/link";

export default function RecipeNotFound() {
  return (
    <main className="error-page">
      <div className="error-content">
        <h1>Recipe not found</h1>

        <p>
          This recipe doesn't exist or is no longer
          available.
        </p>

        <Link
          href="/recipes"
          className="retry-button"
          style={{ display: "inline-block" }}
        >
          Explore Recipes
        </Link>
      </div>
    </main>
  );
}