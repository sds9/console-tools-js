# ESLint Configuration 🛠️

## Overview

This directory contains the ESLint configuration for the `js-exec` project. ESLint is our code quality tool of choice for identifying and fixing problems in our JavaScript and TypeScript code.

## Why ESLint? 🤔

ESLint is a static code analysis tool that helps us maintain consistent code quality and style across our codebase. Some key benefits include:

- **Catch bugs early** ⚡ - ESLint helps identify potential errors before they make it to production
- **Enforce code style** 📏 - Ensures consistent formatting and coding practices across the team
- **Improve code quality** 💎 - Promotes best practices and helps avoid common pitfalls
- **Enhance readability** 📖 - Makes code more maintainable and easier to understand for all contributors

## Configuration

Our ESLint configuration is defined in [eslint.config.ts](./eslint.config.ts), which uses the new flat config format introduced in ESLint v9. This configuration:

- Enforces TypeScript-specific rules using `@typescript-eslint`
- Applies recommended rule sets for consistency
- Includes custom rules tailored to our project's needs
- Uses ES modules format for better compatibility with modern JavaScript

## Usage

You can run ESLint from the project root using:

```bash
npm run lint
```

This command is configured in the root `package.json` file and will check all TypeScript files in the `src` directory.

To fix automatically fixable issues:

```bash
npm run lint -- --fix
```

## Official Documentation 📚

For more information about ESLint and how to customize its configuration, check out:

- [ESLint Official Documentation](https://eslint.org/docs/latest/)
- [TypeScript ESLint Documentation](https://typescript-eslint.io/)
- [ESLint Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new)

## Integration

This ESLint configuration works alongside our TypeScript setup to provide comprehensive static analysis and type checking for our codebase. Together, they help us maintain high-quality, type-safe code throughout the project lifecycle.
