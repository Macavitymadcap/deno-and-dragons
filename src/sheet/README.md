# Character Sheet

A Class for managing a json representation of a D&D 5e character sheet.

## Getting Started

1. Start a deno session and import the libs and data.
```bash
deno
```  
```typescript
import { Sheet } from './src/index.ts';
import myCharacter from "./data/myCharacter.json" with { type: "json" };
```

3. Load your character data into the Sheet class:
```typescript
const myCharacter = new Sheet(myCharacter);
```

4. You can now use all the functionality of the `Sheet` class, so roll initiative!

```typescript
sheet.rollInitiative();
Initiative Roll: 2 + 2 = 4
4