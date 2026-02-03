# thomasvangoidsenhoven.com

Personal portfolio website built with SvelteKit 2 and Svelte 5.

## Tech Stack

- **Framework:** SvelteKit 2 with Svelte 5 (runes)
- **Styling:** Tailwind CSS 4
- **Build:** Vite 7
- **Language:** TypeScript 5 (strict mode)
- **Deployment:** Static site generation with Nginx (Docker)

## Development

### Prerequisites

- Node.js 22+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

### Available Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start development server             |
| `npm run build`    | Build for production                 |
| `npm run preview`  | Preview production build             |
| `npm run check`    | Type check Svelte & TypeScript       |

## Project Structure

```
src/
├── app.css                 # Tailwind config with custom theme
├── routes/
│   ├── +layout.svelte      # Root layout
│   └── +page.svelte        # Home page
└── lib/
    ├── components/
    │   ├── ui/             # Reusable UI components
    │   └── sections/       # Page sections (Hero, About, etc.)
    └── data/               # Content data (skills, experience, projects)
```

## Deployment

### Docker

```bash
# Build and run with Docker Compose
docker compose up -d

# Or build manually
docker build -t portfolio .
docker run -p 8081:8081 portfolio
```

### Static Hosting

The site builds to static HTML/CSS/JS. Run `npm run build` and deploy the `build/` directory to any static host.