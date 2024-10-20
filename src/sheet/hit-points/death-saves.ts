import { IDeathSaves } from "./hit-points.model.ts";
import { Dice, DiceRoll, RollType } from "../../dice/index.ts";
import { XP_THRESHOLDS_BY_LEVEL } from "../../encounter-evaluator/encounter-evaluator.model.ts";

export class DeathSaves implements IDeathSaves {
  successes!: number;
  failures!: number;
  private d20 = "d20";

  constructor(deathSaves: IDeathSaves) {
    this.successes = deathSaves.successes;
    this.failures = deathSaves.failures;
  }

  roll(rollType?: RollType): DiceRoll {
    const roll = new Dice(this.d20).roll(rollType);

    if (roll.total >= 11) {
      this.successes = Math.min(3, this.successes + 1);
    } else {
      this.failures = Math.min(3, this.failures + 1);
    }

    return roll;
  }
}
