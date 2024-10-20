import { DiceRoll, ParsedDice, RollsAndModifier, RollType, type Operator } from "./dice.model.ts";

/**
 * The `Dice` class represents a dice notation parser and roller.
 * It provides methods to roll dice based on standard RPG dice notation (e.g., "2d6+3").
 *
 * @example
 * ```typescript
 * const dice = new Dice("2d6+3");
 * const result = dice.roll('advantage');
 * console.log(result);
 * ```
 *
 * @remarks
 * - The class supports different roll types: 'standard', 'advantage', 'disadvantage', and 'critical'.
 * - The dice notation should follow the format: `XdY+Z`, where `X` is the number of dice, `Y` is the number of faces, and `Z` is an optional modifier.
 * - The `roll` method returns an object containing the individual rolls, the sum of the rolls, the total (which may be adjusted based on roll type), and whether the roll is a critical hit.
 *
 * @public
 */
export class Dice {
    private regex = /(\d*)d(\d+)([+\-*\/]\d+)?/g;
    diceString: string;

    constructor(dice: string) {
        this.diceString = dice;
    }

    /** 
     * Rolls a die with the specified number of sides.
     *
     * @param sides - The number of sides on the die.
     * @returns {number} The result of the roll.
     */
    private rollD(sides: number): number {
        return Math.floor(Math.random() * sides) + 1;
    }

    /**
     * Parses a regular expression match array into a DieRoll object.
     *
     * @param match - The regular expression match array containing the parsed dice notation.
     * @returns {ParsedDice} A DieRoll object containing the quantity, faces, and modifier of the dice roll.
     * @throws Will throw an error if the match array is invalid.
     */
    private parseRoll(match: RegExpExecArray): ParsedDice {
        if (!match) {
            throw new Error('Invalid dice notation');
        }

        return {
            quantity: match[1] ? parseInt(match[1]) : 1,
            faces: parseInt(match[2]),
            modifier: match[3] ? match[3] : undefined,
        };
    }

    /**
     * Generates an array of rolls and a modifier based on the specified roll type.
     *
     * @param rollType - The type of roll to perform. Can be 'standard', 'advantage', 'disadvantage', or 'critical'.
     *                   Defaults to 'standard'.
     * @returns {RollsAndModifier} An object containing the rolls, the modifier, and a flag indicating if the first roll is a critical hit.
     *
     * @remarks
     * - The function uses a regular expression to parse the dice notation from the `this.dice` string.
     * - For 'advantage' and 'disadvantage' roll types, the rolls are sorted in descending and ascending order respectively.
     * - For 'critical' roll type, the number of rolls is doubled.
     * - The function checks if the first roll is a critical hit (i.e., a roll of 20).
     *
     * @example
     * ```typescript
     * const result = getRollsAndModifier('advantage');
     * console.log(result.rolls); // [18, 15, 12, ...]
     * console.log(result.modifier); // '+3'
     * console.log(result.isCriticalHit); // false
     * ```
     */
    private getRollsAndModifier(rollType: RollType = 'standard'): RollsAndModifier {
        let match;
        const rolls: number[] = [];
        let mod: string | undefined;

        while ((match = this.regex.exec(this.diceString)) !== null) {
            const { quantity, faces, modifier } = this.parseRoll(match);
            const totalRolls = (rollType === 'advantage' || rollType === 'disadvantage' || rollType === 'critical') ? quantity * 2 : quantity;
            for (let i = 0; i < totalRolls; i++) {
                const roll = this.rollD(faces);
                rolls.push(roll);
            }

            if (modifier !== undefined) {
                mod = modifier;
            }

            if (rollType === 'advantage') {
                rolls.sort((a, b) => b - a);
            }

            if (rollType === 'disadvantage') {
                rolls.sort((a, b) => a - b);
            }
        }

        return { rolls, modifier: mod, isCriticalHit: rolls[0] === 20 };
    }

    /**
     * Applies a modifier to a dice roll.
     *
     * @param {DiceRoll} roll The dice roll object to which the modifier will be applied.
     * @param {string} modifier The modifier string, first character is the operator and the rest is the modifier value.
     * @returns {DiceRoll} The updated dice roll object with the applied modifier.
     */
    private applyModifier(roll: DiceRoll, modifier: string) {
        roll.operator = modifier.charAt(0) as Operator;
        roll.modifier = parseInt(modifier.substring(1));
        roll.total = eval(`${roll.total}${roll.operator}${roll.modifier}`);
        
        return roll;
    }

    /**
     * Rolls the dice based on the specified roll type and returns the result.
     *
     * @param rollType - The type of roll to perform. Defaults to 'standard'.
     * @returns {DiceRoll} An object containing the details of the dice roll, including the 
     *          individual rolls, the sum of the rolls, the total (which may be adjusted
     *          based on roll type), and whether the roll is a critical hit.
     */
    roll(rollType: RollType = 'standard'): DiceRoll {
        const { rolls, modifier, isCriticalHit } = this.getRollsAndModifier(rollType);
        const sum = rolls.reduce((a, b) => a + b, 0);
        let diceRoll: DiceRoll = {
            rolls,
            sum,
            total: (rollType === 'advantage' || rollType === 'disadvantage') ? rolls[0] : sum,
            isCriticalHit,
        };

        if (modifier) {
            diceRoll = this.applyModifier(diceRoll, modifier);
        }

        return diceRoll;
    }
}
