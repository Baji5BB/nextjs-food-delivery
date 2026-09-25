# Next.js Fundamentals

## What is Next.js?

Next.js is a React framework for building web applications.

It provides application-level features such as routing, server rendering, data fetching, optimization, and production deployment support on top of React.

## App Router

Next.js uses the `app` directory for the App Router.

The location of a file inside `src/app` determines its route.

## Pages

A `page.tsx` file represents a page.

Examples:

src/app/page.tsx
→ /

src/app/recipes/page.tsx
→ /recipes

src/app/categories/page.tsx
→ /categories

## Layouts

A `layout.tsx` file provides shared UI around pages.

Examples include:

- Header
- Navigation
- Footer
- Global providers

## Project Application

Our food delivery application currently contains:

/
→ Food Delivery home page

/recipes
→ Recipe listing page

## Key Learning

Next.js App Router uses the filesystem to define application routes.

We do not manually configure routes for standard pages.