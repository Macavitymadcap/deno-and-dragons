import { assertGreaterOrEqual, assertLessOrEqual } from 'jsr:@std/assert';

import { Dice } from './dice.ts';
import { ParsedDice, DiceRoll, RollsAndModifier, RollType } from './dice.model.ts';

[
    { diceString: 'd4', expectedRange: { min: 1, max: 4 } },
    { diceString: '2d6', expectedRange: { min: 2, max: 12 } },
    { diceString: '3d8', expectedRange: { min: 3, max: 24 } },
    { diceString: '4d10', expectedRange: { min: 4, max: 40 } },
    { diceString: '5d12', expectedRange: { min: 5, max: 60 } },
    { diceString: '6d20', expectedRange: { min: 6, max: 120 } },
    { diceString: '10d100', expectedRange: { min: 10, max: 10_00 } },
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' returns total in range ${test.expectedRange.min} - ${test.expectedRange.max}`, () => {
        // Arrange
        const roll = new Dice(test.diceString);

        // Act
        const result = roll.roll().total;

        // Assert
        assertGreaterOrEqual(result, test.expectedRange.min);
        assertLessOrEqual(result, test.expectedRange.max);
    });
});
