# Employee Management System

A single-page React application for managing employee records: add new staff, view everyone in a table, edit details in a modal, and delete entries. There is no backend; data persists in the browser using `localStorage`, so records survive page refreshes on the same device and browser.

## Features

- **Dashboard (Home)** — Landing page with shortcuts to add employees or open the full list.
- **Add employee** — Form validated with [Zod](https://zod.dev/) and [React Hook Form](https://react-hook-form.com/) (name, age, department, position).
- **View all** — Sortable-style table listing employees with row actions.
- **Edit** — Dialog-based editor for an existing row.
- **Delete** — Remove an employee from the list (with confirmation-style feedback via toast alerts).
- **Dark mode** — Toggle in the navigation bar; preference is applied to the document root for Tailwind dark styling.
- **Toast feedback** — Success toasts when adding, updating, or deleting (SweetAlert2).

## Tech stack

| Area        | Choice |
|------------|--------|
| UI         | React 19, TypeScript |
| Build      | Vite 7 (`@vitejs/plugin-react-swc`) |
| Styling    | Tailwind CSS 4, Geist font |
| Components | Radix UI primitives, shadcn-style UI components, Lucide icons |
| Forms      | React Hook Form, Zod, `@hookform/resolvers` |
| Routing    | React Router 7 |
| State      | React Context (`EmployeesContext`, `ThemeContext`) |

## Getting started

**Requirements:** Node.js 20+ (or current LTS) and npm.

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Scripts

| Command        | Description |
|----------------|-------------|
| `npm run dev`    | Start Vite dev server with HMR |
| `npm run build`  | Typecheck (`tsc -b`) then production build to `dist/` |
| `npm run preview`| Serve the production build locally |
| `npm run lint`   | Run ESLint on the project |

## Project layout (high level)

- `src/pages/` — Route screens: `Home`, `AddEmployees`, `Employees`
- `src/components/` — Shared layout (`Layout`) and UI primitives under `components/ui/`
- `src/components/EmployeesPage/` — Employee-specific UI (e.g. edit modal)
- `src/context/` — Global employee list and theme providers
- `src/constants/` — Static lists such as departments and positions
- `public/` — Static assets (e.g. home page image)

Path alias: imports using `@/` resolve to `src/` (see `tsconfig.app.json` and `vite.config.ts`).

## Data storage

Employee data is stored under the key `employees` in `localStorage` as JSON. Clearing site data or using another browser profile starts from the app’s built-in sample employees until you add or change records again.
