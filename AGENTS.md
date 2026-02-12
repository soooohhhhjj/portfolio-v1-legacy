# Portfolio Project Architecture & Coding Guidelines

## Project Structure
- /client: React + TypeScript + Tailwind
- /server: Node.js + Express + MongoDB (TypeScript)
- /README.md: Overview and instructions

## Frontend Conventions

### Features
- Each page/section in `src/features/` (home, projects, about, contact)
- Feature folder may contain:
  - `FeaturePage.tsx` (main page)
  - Subcomponents (e.g., HomeHero, ProjectsGrid)
  - Feature-specific styles (optional)

### Layout & UI
- `src/components/layout/`:
  - `Layout.tsx` wraps Navbar, Footer, `<Outlet />`
  - Navbar.tsx, Footer.tsx
- `src/components/ui/`: reusable UI components (Button, Card, Section)

### Routing
- Centralized in `src/app/router.tsx` using `createBrowserRouter` / nested routes
- `RouterProvider` only in `main.tsx`
- Layout uses `<Outlet />` to render feature pages

### Root `src/` folders
- `hooks/`: reusable React hooks
- `utils/`: utility functions
- `types/`: shared TypeScript types

### Code Style
- TypeScript with strict typing, avoid "any"
- Functional components with clear props
- Mobile-first Tailwind responsive design
- Small reusable components preferred over monolithic
- Named exports for utils/hooks/types; default exports for React components
- Keep code modular and isolated per feature

## Backend (future)
- MVC structure: models, controllers, routes
- Async/await + error handling middleware
- Use `.env` for sensitive variables

## Code Generation Guidelines
- Only provide requested feature/module/file
- Explain each new file's purpose and location
- Ask clarifying questions for large or complex features
- Always follow the repo architecture and conventions
