# console-tools-js

JavaScript/TypeScript execution utilities for text formatting.

[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](config/eslint/README.md)
[![Prettier](https://img.shields.io/badge/-Prettier-FF69B4?style=flat&logo=prettier&logoColor=white)](config/prettier/README.md)

## Installation

```bash
npm install console-tools-js
```

## Usage

```typescript
import { formatText, FontColor, BackgroundColor } from 'console-tools-js';

// Format text with various styles
const boldRedText = formatText('Important message', { 
  bold: true, 
  fontColor: FontColor.RED 
});

// Format text with background color
const highlightedText = formatText('Warning', {
  backgroundColor: BackgroundColor.RED,
  fontColor: FontColor.BLACK
});

// Combine multiple styles
const emphasisText = formatText('Critical alert', {
  bold: true,
  italic: true,
  underline: true,
  fontColor: FontColor.RED
});

console.log(boldRedText);
console.log(highlightedText);
console.log(emphasisText);
```

## API Documentation

### `formatText(text: string, style: FontStyle): string`

Formats text with ANSI escape sequences for terminal styling.

- **Parameters**:
  - `text` - The text to format
  - `style` - An object containing formatting options
- **Returns**: The formatted text string with ANSI escape codes

### `FontStyle` type

```typescript
type FontStyle = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  fontColor?: FontColor
  backgroundColor?: BackgroundColor
  strikethrough?: boolean
}
```

### `FontColor` enum

```typescript
enum FontColor {
  BLACK = '30',
  RED = '31'
}
```

### `BackgroundColor` enum

```typescript
enum BackgroundColor {
  BLACK = '40',
  RED = '41'
}
```
