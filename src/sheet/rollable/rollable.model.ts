import { DiceRoll } from "../../dice/index.ts";

export interface IRollable {
    name: string;
    value: number;
    getDiceString: (value: number) => string;
    rollDice: () => DiceRoll;
}