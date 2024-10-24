import {
  DiceRoll,
  type Operator,
  ParsedDice,
  RollsAndModifier,
  RollType,
} from "./dice.model.ts";

export class Dice {
  private regex = /(\d*)d(\d+)([+\-*\/]\d+)?/g;
  diceString: string;

  constructor(dice: string) {
    this.diceString = dice;
  }

  private rollD(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }

  private parseRoll(match: RegExpExecArray): ParsedDice {
    if (!match) {
      throw new Error("Invalid dice notation");
    }

    return {
      quantity: match[1] ? parseInt(match[1]) : 1,
      faces: parseInt(match[2]),
      modifier: match[3] ? match[3] : undefined,
    };
  }

  private getRollsAndModifier(
    rollType: RollType = "standard",
  ): RollsAndModifier {
    let match;
    const rolls: number[] = [];
    let mod: string | undefined;

    while ((match = this.regex.exec(this.diceString)) !== null) {
      const { quantity, faces, modifier } = this.parseRoll(match);
      const totalRolls =
        (rollType === "advantage" || rollType === "disadvantage" ||
            rollType === "critical")
          ? quantity * 2
          : quantity;
      for (let i = 0; i < totalRolls; i++) {
        const roll = this.rollD(faces);
        rolls.push(roll);
      }

      if (modifier !== undefined) {
        mod = modifier;
      }

      if (rollType === "advantage") {
        rolls.sort((a, b) => b - a);
      }

      if (rollType === "disadvantage") {
        rolls.sort((a, b) => a - b);
      }
    }

    return { rolls, modifier: mod, isCriticalHit: rolls[0] === 20 };
  }

  private applyModifier(roll: DiceRoll, modifier: string) {
    roll.operator = modifier.charAt(0) as Operator;
    roll.modifier = parseInt(modifier.substring(1));
    roll.total = eval(`${roll.total}${roll.operator}${roll.modifier}`);

    return roll;
  }

  roll(rollType: RollType = "standard"): DiceRoll {
    const { rolls, modifier, isCriticalHit } = this.getRollsAndModifier(
      rollType,
    );
    const sum = rolls.reduce((a, b) => a + b, 0);
    let diceRoll: DiceRoll = {
      rolls,
      sum,
      total: (rollType === "advantage" || rollType === "disadvantage")
        ? rolls[0]
        : sum,
      isCriticalHit,
    };

    if (modifier) {
      diceRoll = this.applyModifier(diceRoll, modifier);
    }

    return diceRoll;
  }
}

export const roll = (dice: string, rollType?: RollType): DiceRoll => {
  const diceRoll = new Dice(dice);
  return diceRoll.roll(rollType);
};
