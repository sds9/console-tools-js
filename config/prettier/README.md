# Prettier Configuration ✨

## Overview

This directory contains the Prettier configuration for the `console-tools-js` project. Prettier is our code formatter of choice for ensuring consistent code style across our JavaScript and TypeScript code.

## Why Prettier? 🤔

Prettier is an opinionated code formatter that helps us maintain a consistent code style throughout our codebase. Some key benefits include:

- **Consistent formatting** 📏 - Ensures that all code looks the same, regardless of who wrote it
- **Reduces code review overhead** 🔍 - By automating code formatting, we can focus on the logic and functionality during code reviews
- **Improves readability** 📖 - Makes code more maintainable and easier to understand for all contributors
- **Integrates with editors** 🛠️ - Works seamlessly with popular code editors and IDEs

## Configuration

Our Prettier configuration is defined in [prettier.config.ts](./prettier.config.ts). This configuration:

- Sets the maximum line length to 80 characters
- Enforces the use of single quotes for strings
- Ensures trailing commas are used where possible

## Usage

You can run Prettier from the project root using:

```bash
npm run format
```

This command is configured in the root `package.json` file and will format all JavaScript and TypeScript files in the `src` directory.

To check for formatting issues without making changes:

```bash
npm run format:check
```

## Official Documentation 📚

For more information about Prettier and how to customize its configuration, check out:

- [Prettier Official Documentation](https://prettier.io/docs/en/index.html)

## Integration

This Prettier configuration works alongside our ESLint setup to provide comprehensive code quality and formatting for our codebase. Together, they help us maintain high-quality, readable, and consistent code throughout the project lifecycle.
