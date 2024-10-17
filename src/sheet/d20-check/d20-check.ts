
import { Dice, DiceRoll, RollType } from "../../dice/index.ts";
import { ID20Check } from "./d20-check.model.ts";

export class D20Check implements ID20Check {
    name: string;
    value: number;

    constructor(value: number, name: string) {
        this.name = name;
        this.value = value;
    }

    getModifierString(): string {
        return `${this.value >= 0 ? '+' : '-'}${this.value}`;
    }

    getDiceString(): string {
        return `d20${this.getModifierString()}`;
    }

    rollDice(rollType: RollType = 'standard'): DiceRoll {
        return new Dice(this.getDiceString()).roll(rollType);
    }
}