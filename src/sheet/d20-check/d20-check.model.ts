import { DiceRoll } from "../../dice/index.ts";

export interface ID20Check {
    name: string;
    value: number;
    getDiceString: (value: number) => string;
    rollDice: () => DiceRoll;
}