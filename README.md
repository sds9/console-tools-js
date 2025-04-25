# console-tools-js

JavaScript/TypeScript execution utilities for text formatting.

[![npm version](https://img.shields.io/npm/v/console-tools-js.svg?style=flat&logo=npm)](https://www.npmjs.com/package/console-tools-js)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](config/eslint/README.md)
[![Prettier](https://img.shields.io/badge/-Prettier-FF69B4?style=flat&logo=prettier&logoColor=white)](config/prettier/README.md)
[![Vitest](https://img.shields.io/badge/-Vitest-6E40C9?style=flat&logo=vitest&logoColor=white)](config/vitest/README.md)

## Installation

```bash
npm install console-tools-js
```

## Usage

### Text Formatting

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

### Console Tables

```typescript
import { createTable, TableColumn, FontColor } from 'console-tools-js';

// Sample data
const data = [
  { id: 1, name: 'Alice', status: 'active' },
  { id: 2, name: 'Bob', status: 'inactive' },
  { id: 3, name: 'Charlie', status: 'pending' }
];

// Define columns
const columns: TableColumn[] = [
  { header: 'ID', key: 'id' },
  { header: 'Name', key: 'name' },
  { header: 'Status', key: 'status', color: FontColor.GREEN }
];

// Create a basic table
const basicTable = createTable(data, columns);
console.log(basicTable);

// Create a table with borders and custom header color
const fancyTable = createTable(data, columns, {
  border: true,
  headerColor: FontColor.CYAN,
  padding: 3
});
console.log(fancyTable);
```

## API Documentation

### Text Formatting

#### `formatText(text: string, style: FontStyle): string`

Formats text with ANSI escape sequences for terminal styling.

- **Parameters**:
  - `text` - The text to format
  - `style` - An object containing formatting options
- **Returns**: The formatted text string with ANSI escape codes

#### `FontStyle` type

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

#### `FontColor` enum

```typescript
enum FontColor {
  BLACK = '30',
  RED = '31',
  GREEN = '32',
  YELLOW = '33',
  BLUE = '34',
  MAGENTA = '35',
  CYAN = '36',
  WHITE = '37',
  // ...and more bright variants
}
```

#### `BackgroundColor` enum

```typescript
enum BackgroundColor {
  BLACK = '40',
  RED = '41',
  GREEN = '42',
  YELLOW = '43',
  BLUE = '44',
  MAGENTA = '45',
  CYAN = '46',
  WHITE = '47',
  // ...and more bright variants
}
```

### Console Tables

#### `createTable(data: Record<string, any>[], columns: TableColumn[], options?: TableOptions): string`

Creates a formatted table for console output.

- **Parameters**:
  - `data` - Array of objects containing the data to display
  - `columns` - Column configuration with header text, data key, and optional color
  - `options` - Table display options (optional)
- **Returns**: A formatted table string ready for console output

#### `TableColumn` interface

```typescript
interface TableColumn {
  header: string;      // Column header text
  key: string;         // Property name in data objects
  color?: FontColor;   // Optional color for column values
  width?: number;      // Optional explicit column width
}
```

#### `TableOptions` interface

```typescript
interface TableOptions {
  headerColor?: FontColor;  // Color for all headers
  padding?: number;         // Padding between columns
  border?: boolean;         // Whether to draw table borders
}
```
