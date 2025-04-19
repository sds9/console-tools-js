# Vitest Configuration 🧪

## Overview

This directory contains the Vitest configuration for the `console-tools-js` project. Vitest is our testing framework of choice for running unit tests on our JavaScript and TypeScript code.

## Why Vitest? 🤔

Vitest is a fast and lightweight testing framework that provides a great developer experience. Some key benefits include:

- **Fast execution** ⚡ - Vitest runs tests quickly, making the development process more efficient
- **TypeScript support** 🛠️ - Vitest has built-in support for TypeScript, ensuring type safety in tests
- **Snapshot testing** 📸 - Vitest supports snapshot testing, making it easy to verify complex outputs
- **Rich API** 📚 - Vitest provides a comprehensive API for writing and organizing tests

## Configuration

Our Vitest configuration is defined in [vitest.config.ts](./vitest.config.ts). This configuration:

- Enables global variables for tests
- Sets the test environment to Node.js
- Includes test files with `.test` or `.spec` extensions in the `src` directory

## Usage

You can run Vitest from the project root using:

```bash
npm run test
```

This command is configured in the root `package.json` file and will run all tests in the `src` directory.

To run tests in watch mode:

```bash
npm run test:watch
```

## Official Documentation 📚

For more information about Vitest and how to customize its configuration, check out:

- [Vitest Official Documentation](https://vitest.dev/)
