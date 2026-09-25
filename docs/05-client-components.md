# Client Components

## Why Client Components?

Client Components are used when browser-side interactivity is required.

Examples:

- useState
- useEffect
- onClick
- onChange
- Browser APIs

## use client

A component becomes a Client Component by adding:

"use client";

at the top of the file.

## Foodly Implementation

RecipesPage remains a Server Component.

RecipeExplorer is a Client Component.

The flow is:

RecipesPage
→ fetch recipes
→ RecipeExplorer
→ search/filter
→ render recipes

## Production Principle

Do not make the entire page a Client Component when only part of the page requires interactivity.

Keep server-rendered sections on the server and isolate interactive functionality into Client Components.