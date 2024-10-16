
import { parseArgs } from "jsr:@std/cli/parse-args";

import { evaluateEncounterDifficulty } from "./evaluate-encounter-difficulty.ts";
import { Encounter } from "./model.ts";

const usageText = `Usage: ./evaluate --monsterXPs <monsterXPs> --partyLevels <partyLevels>`;

const helpText = `
Evaluate the difficulty of an encounter based on the monster XPs and party levels provided.

Options:
  --monsterXPs  The XP values of the monsters in the encounter, separated by commas.
  --partyLevels The levels of the party members, separated by commas.
`
/**
 * Main function for the CLI.
 */
const main = () => {
  const args = parseArgs(Deno.args, {
    string: ["monsterXPs", "partyLevels"],
    boolean: ["help"],

  });

  if (args.help) {
    console.log(helpText);
    Deno.exit(0);
  }

  if (!args.monsterXPs || !args.partyLevels) {
    console.error(usageText);
    Deno.exit(1);
  }
  
  const monsterXPs = args.monsterXPs!.split(",").map((xp) => parseInt(xp));
  const partyLevels = args.partyLevels!.split(",").map((level) => parseInt(level));
  
  const encounter: Encounter = { monsterXPs, partyLevels };
  
  const result = evaluateEncounterDifficulty(encounter);
  
  console.log(`Evaluated Encounter:`);
  console.log(`\tParty Levels: ${encounter.partyLevels}`);
  console.log(`\tMonster XPs:  ${encounter.monsterXPs}`);
  console.log(`\tDifficulty:   ${result.difficulty}`);
  console.log(`\tActual XP:    ${result.actualXP}`);
  console.log(`\tAdjusted XP:  ${result.adjustedXP}`);

}

if (import.meta.main) {
  main();
}
