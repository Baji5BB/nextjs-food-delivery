
export default function RecipeCardSkeleton() {
  return (
    <div
      className="recipe-card skeleton-card"
      aria-hidden="true"
    >
      <div className="skeleton skeleton-image" />

      <div className="recipe-card-content">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-badge" />
      </div>
    </div>
  );
}