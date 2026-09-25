# Layouts and Navigation

## Layouts

Next.js layouts provide shared UI across multiple routes.

Our root layout is:

src/app/layout.tsx

It currently provides the application header and page content.

## Shared Components

Reusable UI is placed inside:

src/components/

Our header is:

src/components/layout/Header.tsx

## Navigation

Next.js provides the `Link` component for navigation between application routes.

Example:

<Link href="/recipes">Recipes</Link>

## Current Application Structure

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── recipes/
│       └── page.tsx
│
└── components/
    └── layout/
        └── Header.tsx

## Key Learning

Layouts are useful for UI shared across routes.

Reusable components prevent duplication and make the application easier to maintain.