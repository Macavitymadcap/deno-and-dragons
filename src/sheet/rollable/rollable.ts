
import { Dice, DiceRoll, RollType } from "../../dice/index.ts";
import { IRollable } from "./rollable.model.ts";

export class Rollable implements IRollable {
    name: string;
    value: number;

    constructor(value: number, name: string) {
        this.name = name;
        this.value = value;
    }

    getDiceString(): string {
        return `d20${this.value >= 0 ? '+' : '-'}${Math.abs(this.value)}`;
    }

    rollDice(rollType: RollType = 'standard'): DiceRoll {
        return new Dice(this.getDiceString()).roll(rollType);
    }
}