# Shipping Box

This project is a minimalistic shipping cost calculator implemented as a single-page React application. It demonstrates clean code, separation of concerns, responsive design, and environment-based configuration using Rsbuild (Rspack).

---

## 📦 Project Overview

**Shipping Box** allows users to:

- Add shipping box details (receiver, weight, color, destination)
- View all submitted boxes in a table
- Calculate shipping cost based on destination
- Switch between form and table views via a responsive navbar

---

## ✨ Features & Requirements

- **Add Box Form**: Receiver name, weight (kg), box color (RGB), destination country (with cost multipliers)
- **Validation**: Required fields, negative weight error (defaults to 0)
- **Table View**: Lists all boxes with color swatch and calculated shipping cost
- **Navigation**: Navbar to switch between form and table
- **Responsive**: Works on all device sizes
- **State Management**: Uses React state/hooks and localStorage
- **Environment Config**: Uses `.env` and `.env.production` for base URL
- **Clean Architecture**: MVC-style separation, type safety, modular code

---

## 🎨 Design Note

No Figma or external design specification was provided for this project. As a result, a minimalistic, accessible, and responsive design approach was used throughout. All UI is built with CSS Modules, focusing on clarity, usability, and clean visual hierarchy, while ensuring the application works well across devices.

---

## 🛠️ Tech Stack

- React 18 (functional components, hooks)
- TypeScript (strict typing)
- Rsbuild (Rspack) for build tooling
- CSS Modules for scoped, minimal styles

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file for development:

```
PUBLIC_APP_BASE_URL=http://localhost:3000
```

Create a `.env.production` file for production:

```
PUBLIC_APP_BASE_URL=https://shippingbox.devcord.in/
```

### 3. Start the development server

```bash
npm run dev
```

App runs at [https://shippingbox.devcord.in/](https://shippingbox.devcord.in/)

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 🧩 Project Structure

- `src/components/` — Reusable UI components (form, table, navbar, dropdown, input-field)
- `src/views/add-box/` — Add Box form logic, validation, and constants
- `src/views/shipments/` — Shipments table and data logic
- `src/services/boxService.ts` — LocalStorage-based data persistence
- `src/constants/route.ts` — Route definitions
- `src/App.tsx` — Main SPA logic and routing

---

## 🌍 Environment Variables

- `PUBLIC_APP_BASE_URL` — Used in navigation links; switches between local and production URLs automatically

---

## 🏗️ Architecture & Design

- **MVC-style separation**: Business logic in hooks/services, presentation in components
- **Type safety**: All logic and props are strictly typed
- **Minimal, accessible UI**: CSS Modules, focus/hover states, mobile-friendly
- **No backend required**: All data is stored in browser localStorage

---

## 📋 Assignment Requirements Checklist

- [x] Add box form with validation and error handling
- [x] Table view with color swatch and calculated cost
- [x] Responsive, minimal, accessible design
- [x] Navigation bar with two routes
- [x] State management and local persistence
- [x] Environment-based configuration
- [x] Clean, modular, documented code

---

## 📚 Further Reading

- [Rsbuild documentation](https://rsbuild.rs)
- [Rspack documentation](https://rspack.rs)

---
