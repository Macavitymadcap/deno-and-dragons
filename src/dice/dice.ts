import { DiceRoll, DieRoll, RollsAndModifier, RollType } from "./dice.model.ts";

export class Dice {
    private readonly dice: string;

    constructor(dice: string) {
        this.dice = dice;
    }

    private rollD(sides: number): number {
        return Math.floor(Math.random() * sides) + 1;
    }

    private parseRoll(match: RegExpExecArray): DieRoll {
        if (!match) {
            throw new Error('Invalid dice notation');
        }

        return {
            quantity: match[1] ? parseInt(match[1]) : 1,
            faces: parseInt(match[2]),
            modifier: match[3] ? eval(match[3]) : null,
        };
    }

    private getRollsAndModifier(rollType: RollType = 'standard'): RollsAndModifier {
        let match;
        const rolls: number[] = [];
        let mod: string | undefined;
        const regex = /(\d*)d(\d+)([+\-*/]\d+)?/g;

        while ((match = regex.exec(this.dice)) !== null) {
            const { quantity, faces, modifier } = this.parseRoll(match);
            const totalRolls = (rollType === 'advantage' || rollType === 'disadvantage' || rollType === 'critical') ? quantity * 2 : quantity;
            for (let i = 0; i < totalRolls; i++) {
                const roll = this.rollD(faces);
                rolls.push(roll);
            }

            if (modifier) {
                mod = modifier;
            }

            if (rollType === 'advantage') {
                rolls.sort((a, b) => b - a);
            }

            if (rollType === 'disadvantage') {
                rolls.sort((a, b) => a - b);
            }
        }

        return { rolls, modifier: mod, isCriticalHit: rolls[0] === 20};
    }

    private applyModifier(roll: DiceRoll, modifier: string) {
        roll.modifier = parseInt(modifier.substring(0, 1));
        roll.operator = modifier.substring(1);
        roll.total = eval(`${roll.sum}${roll.operator}${roll.modifier}`);
        return roll;
    }

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
