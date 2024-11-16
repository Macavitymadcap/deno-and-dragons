# Deno And Dragons

A Typescript libaray built with Deno for running 5e D&D.

## Dependencies

| Dependency | Installation              |
| ---------- | ------------------------- |
| Deno       | [deno](https://deno.com/) |

## Installation

```bash
deno install
```

## Commands

- `deno task run:evaluate` - Evaluate the difficulty of a combat encounter.
- `deno task compile:evaluate` - Compile the evaluate-encounter program into a
  standalone executable.
- `deno task run:dice` - Roll dice as standard, advantage, disadvantage or
  critical.
- `deno task compile:dice` - Compile the dice program into a standalone
  executable.
- `deno task build:ui`- Populate the build dir with compile html and css.
- `deno task serve:dev` - Serve the buld dir on a dev server.
- `deno task refresh:dev` Run the clean, build and serve scripts for dev.
- `deno task clean` - Remove the build dir.
- `deno test` - Run the tests.
