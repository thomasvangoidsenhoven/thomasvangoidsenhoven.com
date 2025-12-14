# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type check Svelte & TypeScript
npm run check:watch  # Type check with file watching
```

## Tech Stack

- **Svelte 5** with runes (`$state`, `$props`)
- **SvelteKit 2** with adapter-auto
- **Vite 7** build tool
- **TypeScript 5** (strict mode)
- **Tailwind CSS 4** with custom theme

## Architecture

Single-page portfolio website with all content in `src/routes/+page.svelte`. The page uses Intersection Observer for active section highlighting and scroll-based animations.

### Source Structure

```
src/
├── app.css           # Tailwind config with custom theme variables
├── app.html          # Root HTML template
├── lib/assets/       # Static assets (favicon)
└── routes/
    ├── +layout.svelte  # Root layout
    └── +page.svelte    # Home page (single-page app)
```

### Custom Theme (`app.css`)

Custom CSS variables defined in `@theme` block:
- **Colors:** Background variants, .NET Purple accent, Azure Blue, C# Green
- **Fonts:** Outfit (display), Source Sans 3 (body), JetBrains Mono (mono)
- **Utilities:** `text-gradient`, `glow-dotnet`, `glow-azure`, `bg-grid`, `bg-noise`
