import { DiceRoll, RollType } from "../../dice/index.ts";
import { D20Check } from "../d20-check/index.ts";
import { ISavingThrow } from "./abilities.model.ts";

export class SavingThrow extends D20Check implements ISavingThrow {
  value: number;
  proficient: boolean;

  constructor(savingThrow: ISavingThrow) {
    super(savingThrow.value, savingThrow.name);
    this.value = savingThrow.value;
    this.proficient = savingThrow.proficient;
  }

  roll(rollType?: RollType): DiceRoll {
    const roll = this.rollDice(rollType);
    const seperator = rollType === "advantage" ? " / " : " + ";
    console.log(
      `Rolling ${this.name} Save (${rollType}): ${
        roll.rolls.join(seperator)
      } ${roll.operator} ${roll.modifier} = ${roll.total}`,
    );

    return roll;
  }

  log(): void {
    console.log(`Save: ${this.value} (${this.getModifierString()})`);
  }
}
