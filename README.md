# Oldlit Bookstore
This application is built using TypeScript, JavaScript, React, Next.js, and Tailwind CSS. It utilizes the npm package manager for dependency management.

## Features
Book Listing: The application allows users to view a list of books. The books can be filtered based on their premium status and active status.

Book Details: Each book has details including name, images, description, price, and user information.

## Installation
To install the application, you need to install the dependencies first. You can do this by running the following command in your terminal:

```bash
npm install

# or

yarn

# or

pnpm install
```

## Running the Application
You can run the application in development mode using the following command:

```bash
npm run dev

# or

yarn dev

# or

pnpm dev
```

## Building the Application
To build the application for production, you can use the following command:

```bash
npm run build

# or

yarn build

# or

pnpm build
```

## Linting
The application uses ESLint for linting. You can run the linter using the following command:

```bash
npm run lint

# or

yarn lint

# or

pnpm lint
```

## Dependencies
The application uses several dependencies, including:

- react: A JavaScript library for building user interfaces.
- next: A React framework for production.
- axios: Promise based HTTP client for the browser and node.js.
- antd: An enterprise-class UI design language and React UI library.
- zustand: A small, fast and scaleable bearbones state-management solution.
- tailwindcss: A utility-first CSS framework for rapidly building custom user interfaces.

## Development Dependencies
The application also uses several development dependencies, including:

- @types/react, @types/node: TypeScript definitions for React and Node respectively.
- eslint, eslint-config-next: ESLint and its configuration for Next.js.
- typescript: A language for application-scale JavaScript development.
- jest: A delightful JavaScript Testing Framework with a focus on simplicity.
- vitest: A new test runner for Vite.

## File Structure
- README.md: Contains basic information about the project and instructions for installation, running, building, and previewing the application.
- src/config/API.ts: Contains the configuration for axios and its interceptors.
- src/types: Contains TypeScript types for the application.
- package.json: Lists the packages that your project depends on, specifies versions of a package that your project can use using semantic versioning rules.
- src/app: Contains the main application components.
- src/components: Contains the shared components used in the application.
- src/hooks: Contains the custom hooks used in the application.
- src/store: Contains the store for the application.
- src/context: Contains the context for the application.
- src/assets: Contains the assets used in the application.
- src/utils: Contains the utility functions used in the application.
- src/middleware: Contains the middleware used in the application.
