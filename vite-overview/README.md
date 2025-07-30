# Vite Overview

This folder contains various Vite projects demonstrating different configurations and use cases for modern web development.

## Projects Overview

### 1. `vite-project/` - Basic Vite Vanilla JavaScript

A simple Vite project with vanilla JavaScript, demonstrating the basic setup and configuration.

**Features:**

- Vanilla JavaScript
- Basic Vite configuration
- Simple counter functionality
- CSS styling

**To run:**

```bash
cd vite-project
npm install
npm run dev
```

### 2. `vite-project-ts/` - Basic Vite TypeScript

A Vite project configured with TypeScript, showing how to set up type-safe development.

**Features:**

- TypeScript configuration
- Type-safe counter functionality
- TypeScript-specific Vite setup
- CSS styling

**To run:**

```bash
cd vite-project-ts
npm install
npm run dev
```

### 3. `jquery-todos-ts/` - jQuery Todos with TypeScript

A full-featured todo application built with jQuery and TypeScript, demonstrating CRUD operations with a JSON server backend.

**Features:**

- TypeScript with jQuery
- Full CRUD operations (Create, Read, Update, Delete)
- Bootstrap UI components
- JSON Server backend
- Async/await patterns
- Type-safe development

**To run:**

```bash
cd jquery-todos-ts
npm install
npm run start  # Start JSON server on port 3002
npm run dev     # Start Vite dev server (in another terminal)
```

### 4. `jquery-todos-js/` - jQuery Todos with Vanilla JavaScript

A vanilla JavaScript version of the todo application, identical functionality to the TypeScript version but without type safety.

**Features:**

- Vanilla JavaScript with jQuery
- Full CRUD operations (Create, Read, Update, Delete)
- Bootstrap UI components
- JSON Server backend
- Async/await patterns
- Same functionality as TypeScript version

**To run:**

```bash
cd jquery-todos-js
npm install
npm run start  # Start JSON server on port 3002
npm run dev     # Start Vite dev server (in another terminal)
```

## Common Commands

All projects support these standard Vite commands:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure Comparison

| Project           | Language   | Type Safety | Backend     | UI Framework       |
| ----------------- | ---------- | ----------- | ----------- | ------------------ |
| `vite-project`    | Vanilla JS | ❌          | ❌          | None               |
| `vite-project-ts` | TypeScript | ✅          | ❌          | None               |
| `jquery-todos-ts` | TypeScript | ✅          | JSON Server | Bootstrap + jQuery |
| `jquery-todos-js` | Vanilla JS | ❌          | JSON Server | Bootstrap + jQuery |

## Key Learning Points

### Vite Benefits

- **Fast Development**: Hot Module Replacement (HMR)
- **Optimized Builds**: Rollup-based bundling
- **Framework Agnostic**: Works with any frontend framework
- **Rich Ecosystem**: Extensive plugin support

### TypeScript vs Vanilla JavaScript

- **TypeScript**: Provides compile-time type checking, better IDE support, and catches errors early
- **Vanilla JavaScript**: Simpler setup, no compilation step, but lacks type safety

### JSON Server

- **Mock API**: Provides a full REST API from a JSON file
- **CRUD Operations**: Supports GET, POST, PUT, DELETE
- **Development**: Perfect for frontend development without a real backend

## Getting Started

1. **Choose a project** based on your learning goals
2. **Install dependencies** with `npm install`
3. **Start the development server** with `npm run dev`
4. **For todo projects**, also start the JSON server with `npm run start`

## Dependencies

### Common Dependencies

- **Vite**: Build tool and dev server
- **Bootstrap**: CSS framework (todo projects)
- **jQuery**: DOM manipulation library (todo projects)

### TypeScript Projects

- **TypeScript**: Language compiler
- **@types/jquery**: Type definitions for jQuery

### Backend (Todo Projects)

- **json-server**: Mock REST API server

## Development Workflow

1. **Development**: Use `npm run dev` for hot reloading
2. **Testing**: Open browser and test functionality
3. **Building**: Use `npm run build` for production builds
4. **Preview**: Use `npm run preview` to test production build locally

## Notes

- The todo projects require both the Vite dev server and JSON server to run simultaneously
- JSON server runs on port 3002 by default
- Vite dev server typically runs on port 5173
- All projects use ES modules (`"type": "module"` in package.json)
