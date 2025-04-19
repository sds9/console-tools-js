# js-exec

JavaScript/TypeScript execution utilities.

## Installation

```bash
npm install js-exec
```

## Usage

```typescript
import { greet } from 'js-exec';

// Use the library
const greeting = greet('World');
console.log(greeting); // Output: Hello, World!
```

## API Documentation

### `greet(name: string): string`

A simple hello world function.

- **Parameters**:
  - `name` - The name to greet
- **Returns**: A greeting message

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/sds9-org/js-exec.git
cd js-exec

# Install dependencies
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## License

ISC