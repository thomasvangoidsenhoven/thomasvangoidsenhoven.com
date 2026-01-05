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
- **SvelteKit 2** with adapter-static (static site generation)
- **Vite 7** build tool
- **TypeScript 5** (strict mode)
- **Tailwind CSS 4** with custom theme

## Architecture

Single-page portfolio website. The main page (`src/routes/+page.svelte`) composes section components and uses Intersection Observer for active section highlighting and scroll-based animations.

### Source Structure

```
src/
├── app.css                    # Tailwind config with custom theme variables
├── app.html                   # Root HTML template
├── routes/
│   ├── +layout.svelte         # Root layout
│   ├── +layout.js             # Static prerendering config
│   └── +page.svelte           # Home page (composes all sections)
└── lib/
    ├── index.ts               # Barrel exports for $lib imports
    ├── types/index.ts         # TypeScript type definitions
    ├── data/                  # Content data files
    │   ├── navigation.ts      # Nav items
    │   ├── skills.ts          # Skills data
    │   ├── experience.ts      # Work experience
    │   └── projects.ts        # Portfolio projects
    ├── components/
    │   ├── ui/                # Reusable UI components
    │   │   ├── SectionHeader.svelte
    │   │   ├── StatCard.svelte
    │   │   ├── SkillBar.svelte
    │   │   ├── ExperienceCard.svelte
    │   │   ├── ProjectCard.svelte
    │   │   └── ContactCard.svelte
    │   └── sections/          # Page section components
    │       ├── Navigation.svelte
    │       ├── Hero.svelte
    │       ├── About.svelte
    │       ├── Skills.svelte
    │       ├── Experience.svelte
    │       ├── Projects.svelte
    │       ├── Certifications.svelte
    │       ├── Contact.svelte
    │       └── Footer.svelte
    └── assets/                # Static assets (favicon)
```

### Import Pattern

All exports are centralized in `$lib/index.ts`. Import components and data using:
```ts
import { Navigation, Hero, skills, experiences } from '$lib';
```

### Custom Theme (`app.css`)

Custom CSS variables defined in `@theme` block:
- **Colors:** Background variants (`bg-deep`, `bg-dark`, `bg-card`, `bg-elevated`), .NET Purple accent, Azure Blue, C# Green
- **Fonts:** Outfit (display), Source Sans 3 (body), JetBrains Mono (mono)
- **Utilities:** `text-gradient`, `glow-dotnet`, `glow-azure`, `bg-grid`, `bg-noise`
