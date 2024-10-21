# Evaluate Encounter

A program that evaluates the difficulty of a combat encounter based on the
number of players and their levels, as well as the number and XP value of their
opponents.

## Usage

The program can be run in two ways:

1. as a deno task:

```bash
deno task run:evaluate --oponents=25,25,25,25 --party=1,1,1,1
```

2. compiled into a standalone executable and run from the command line:

```bash
deno task compile:evaluate
./build/evaluate --oponents=25,25,25,25 --party=1,1,1,1
```

Alternatively the `EncounterEvaluator` class can be imported and used in other
programs.
