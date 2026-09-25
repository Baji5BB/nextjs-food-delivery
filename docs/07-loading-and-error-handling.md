
# Loading and Error Handling

## Objective

Handle asynchronous loading, API failures and
unavailable recipes in the Foodly application.

## Loading UI

Next.js uses loading.tsx to provide a loading
fallback for a route segment.

Foodly displays eight skeleton recipe cards
while the recipes page is loading.

## Error Handling

error.tsx provides a route-level error boundary.

It is a Client Component because the retry
button uses the reset() function.

## Not Found

notFound() is called when a recipe ID is invalid
or the API returns HTTP 404.

The recipes/not-found.tsx file provides the UI.

## Production Considerations

- Show meaningful loading feedback.
- Do not expose sensitive error details.
- Distinguish missing resources from server errors.
- Provide retry actions where appropriate.
- Respect reduced-motion accessibility settings.
- Use production error monitoring.

## Testing

Verify loading, success, failure and 404 states.