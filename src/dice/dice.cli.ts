import { parseArgs } from "jsr:@std/cli/parse-args";
import type { RollType } from "./dice.model.ts";
import { Dice } from "./index.ts";

const usageText = `Usage: ./roll [string] --rollType=<RollType>`;

const helpText = `
Roll a given string of dice notation following the format (X)dY(?Z), where:

     (X) Optional number of dice, if excluded this defaults to 1.
      dY Required polyhedral die with Y faces, e.g. d4, d6, d8, d10, d12,
         d20, 100.
    (?Z) Optional modifier (Z) applied with a basic arithmetic operation;
         addition [+]; subtraction [-]; multiplication [*] or division [/].

Additionally, the dice can be rolled:
    standard     Roll dice as written
    advantage    Roll twice and return highest to lowest
    disadvantage Roll dice twice and return lowest to highest
    critical     Roll double the amount of dice and then apply any modifiers
`;


export const cli = () => {
    const args = parseArgs(Deno.args, {
        string: ["rollType"],
        boolean: ["help"]
    })

    if (args.help) {
        console.log(usageText);
        console.log(helpText);
        Deno.exit(0);
    }

    if (args._.length !== 1) {
        console.error(usageText);
        Deno.exit(1);
    }

    const diceString = args._[0] as string;
    const rollType: RollType = args.rollType ? args.rollType as RollType : 'standard';
    const dice = new Dice(diceString);
    const roll = dice.roll(rollType);
    const sum = rollType === 'advantage' || rollType === 'disadvantage' ? `${roll.rolls[0]} | ${roll.rolls[1]}` : `${roll.rolls.join(' + ')}`;
    const isD20Roll = diceString.match(/^1?d20/);

    console.log(`Dice: ${diceString}\tType: ${rollType}`);
    console.log(`Total: ${roll.total}\tRolls: ${sum} ${isD20Roll && roll.isCriticalHit ? ' CRIT' : ''}`)
}

if (import.meta.main) {
    cli();
}