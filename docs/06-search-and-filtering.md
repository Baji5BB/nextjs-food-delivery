# Search and Filtering

## Client-Side Filtering

Foodly currently receives the recipe collection from DummyJSON and filters it in the Client Component.

Search and cuisine selection are maintained using React state.

## State

The component maintains:

- Search text
- Selected cuisine

## Derived State

The filtered recipe list is derived from:

- Recipes
- Search text
- Selected cuisine

## URL Search Parameters

Search and filter state can also be represented in the URL.

Example:

/recipes?search=pizza&cuisine=Italian

This makes the state shareable and bookmarkable.

## Production Consideration

For small datasets, client-side filtering can be acceptable.

For large datasets, filtering should normally happen on the server or backend so that the browser does not need to download the complete dataset.

## Key Learning

Application state can be represented using URL search parameters when that state should be shareable, bookmarkable, or restorable.