import { parseArgs } from "jsr:@std/cli/parse-args";
import { EncounterEvaluator } from "./encounter-evaluator.ts";

const usageText = `Usage: ./evaluate --monsterXPs=<monsterXPs> --partyLevels=<partyLevels>`;

const helpText = `
Evaluate the difficulty of an encounter based on the monster XPs and party levels provided.

Options:
  --opponents  The XP values of the monsters in the encounter, separated by commas.
  --party The levels of the party members, separated by commas.
`;

/**
 * Main function for the CLI.
 */
export const cli = () => {
  const args = parseArgs(Deno.args, {
    string: ["opponents", "party"],
    boolean: ["help"],

  });

  if (args.help) {
    console.log(usageText);
    console.log(helpText);
    Deno.exit(0);
  }

  if (!args.monsterXPs || !args.partyLevels) {
    console.error(usageText);
    Deno.exit(1);
  }

  
  const opponents = args.opponents!.split(",").map((xp) => parseInt(xp));
  const party = args.party!.split(",").map((level) => parseInt(level));
  const evaluation = new EncounterEvaluator({ opponents, party })
  
  console.log(`Evaluated Encounter:`);
  console.log(`\tParty Levels: ${evaluation.party}`);
  console.log(`\tMonster XPs:  ${evaluation.opponents}`);
  console.log(`\tDifficulty:   ${evaluation.difficulty}`);
  console.log(`\tActual XP:    ${evaluation.actualXp}`);
  console.log(`\tAdjusted XP:  ${evaluation.adjustedXp}`);

}

if (import.meta.main) {
  cli();
}
