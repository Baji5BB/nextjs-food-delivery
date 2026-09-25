# Dynamic Routes

## Dynamic Route

Next.js allows dynamic segments using square brackets.

Example:

src/app/recipes/[id]/page.tsx

This handles:

/recipes/1
/recipes/2
/recipes/10

## Route Parameters

The dynamic value is available through the page parameters.

Example:

```tsx
const { id } = await params;