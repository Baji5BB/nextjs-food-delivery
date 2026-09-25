# Server Components and Data Fetching

## Server Components

Next.js App Router components are Server Components by default.

Server Components can fetch data directly on the server.

Example:

```tsx
export default async function RecipesPage() {
  const data = await getRecipes();

  return (...);
}