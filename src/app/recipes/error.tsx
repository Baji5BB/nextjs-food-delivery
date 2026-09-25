
"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Recipes page error:", error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-content">
        <div className="error-icon">!</div>

        <h1>Oops! Something went wrong</h1>

        <p>
          We couldn't load your recipes.
          Please try again.
        </p>

        <button
          type="button"
          className="retry-button"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}