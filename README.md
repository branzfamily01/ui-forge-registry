# UI Forge

AI-native component workshop + shadcn-compatible GitHub source registry.

## What this repository contains

- A GitHub Pages-ready component gallery (`index.html`)
- Beginner-friendly HTML manual (`manual.html`) linked from Settings
- 30 original React/TypeScript UI components
- Root `registry.json` compatible with shadcn GitHub Registries
- AI intent metadata (`metadata/components.json`)
- Agent guidance (`agents/AGENTS.md`)
- PWA files for mobile-friendly browsing

## Publish on GitHub Pages

1. Create a public repository named `ui-forge-registry`.
2. Upload **the contents of this folder**, not the ZIP file and not an extra enclosing folder. `index.html` must remain at repository root.
3. Commit to `main`.
4. GitHub → Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
5. The gallery will be available at `https://<owner>.github.io/ui-forge-registry/`.

## Use as a shadcn GitHub Registry

After the repository is public:

```bash
npx shadcn@latest list <owner>/ui-forge-registry
npx shadcn@latest view <owner>/ui-forge-registry/spotlight-card
npx shadcn@latest add <owner>/ui-forge-registry/spotlight-card
```

Validate after editing:

```bash
npx shadcn@latest registry validate <owner>/ui-forge-registry
```

## Adding components

Add the source under `registry/components/`, register it in `registry.json`, and add intent metadata under `metadata/components.json`. Then run `npm run catalog` and `npm run check`. Keep one idea per component.

## Architecture

- **Primitive** — small motion/interaction behavior
- **Component** — reusable UI element
- **Block** — future complete screen or feature kit

## License

UI Forge starter code is MIT licensed. The initial components were independently implemented for this registry. Componentry and shadcn/ui were used as architectural references; their branding and component source are not copied here. Third-party dependencies remain under their own licenses.
