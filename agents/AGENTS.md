# UI Forge Agent Guide

UI Forge is a personal component workshop and shadcn-compatible source registry.

## Philosophy
- Components are copy-paste friendly and readable in isolation.
- Prefer a small, obvious API over a universal component.
- Prefer composition over configuration.
- Avoid premature abstraction and unnecessary variants.
- Each component should solve one interaction problem clearly.
- Accessibility, keyboard behavior, reduced motion, mobile touch targets and dark mode are first-class review items.

## Adding a component
1. Add one TypeScript component under `registry/components/<name>.tsx`.
2. Add one item to root `registry.json`.
3. Add metadata to `metadata/components.json` with `category`, `tags`, `useFor`, `motion`, and dependency information.
4. Run `npm run catalog` to regenerate the browser catalog from metadata and source.
5. Run `npm run check` and test the preview on mobile and desktop.
6. Validate the registry with `npx shadcn@latest registry validate branzfamily01/ui-forge-registry`.

## AI selection rules
Select by user intent first, visual novelty second. Avoid high-motion components when the task is formal, repetitive, accessibility-sensitive, or already visually dense. Use completion/reward components only after the user action, never before it.
