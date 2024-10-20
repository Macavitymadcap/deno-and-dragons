import { assertEquals, assertGreaterOrEqual, assertLessOrEqual } from 'jsr:@std/assert';

import { Dice } from './dice.ts';
import { ParsedDice, DiceRoll, RollsAndModifier, RollType, type Operator } from './dice.model.ts';


[
    { diceString: "d4", expectedRollsLength: 1, rollType: 'standard'  },
    { diceString: "100d6", expectedRollsLength: 100, rollType: 'standard' },
    { diceString: 'd20', expectedRollsLength: 2, rollType: 'advantage' },
    { diceString: 'd20', expectedRollsLength: 2, rollType: 'disadvantage' },
    { diceString: '5d10', expectedRollsLength: 10, rollType: 'critical' }
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' and rollType '${test.rollType}' returns a rolls array with a length of ${test.expectedRollsLength}`, () => {
        // Arrange
        const dice = new Dice(test.diceString)

        // Act
        const roll = dice.roll(test.rollType as RollType);

        // Assert
        assertEquals(roll.rolls.length, test.expectedRollsLength)
    });
});

[
    { diceString: 'd4+1', expectedRange: { min: 1, max: 4 }, rollType: 'standard' },
    { diceString: '2d6-1', expectedRange: { min: 2, max: 12 }, rollType: 'standard' },
    { diceString: '10d10', expectedRange: { min: 10, max: 100 }, rollType: 'standard' },
    { diceString: 'd20+1', expectedRange: { min: 2, max: 40 }, rollType: 'advantage' },
    { diceString: 'd20+2', expectedRange: { min: 2, max: 40 }, rollType: 'disadvantage' },
    { diceString: 'd8-2', expectedRange: { min: 2, max: 16 }, rollType: 'critical' },
    { diceString: '2d10+2', expectedRange: { min: 4, max: 40 }, rollType: 'critical' },
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' and rollType '${test.rollType}' returns sum in range ${test.expectedRange.min} - ${test.expectedRange.max}`, () => {
        // Arrange
        const roll = new Dice(test.diceString);

        // Act
        const result = roll.roll(test.rollType as RollType).sum;

        // Assert
        assertGreaterOrEqual(result, test.expectedRange.min);
        assertLessOrEqual(result, test.expectedRange.max);
    });
});


[
    { diceString: 'd4+1', expectedRange: { min: 2, max: 5 }, rollType: 'standard' },
    { diceString: '2d6-1', expectedRange: { min: 1, max: 11 }, rollType: 'standard' },
    { diceString: '10d10', expectedRange: { min: 10, max: 100 }, rollType: 'standard' },
    { diceString: 'd20+1', expectedRange: { min: 2, max: 21 }, rollType: 'advantage' },
    { diceString: 'd20+2', expectedRange: { min: 3, max: 22 }, rollType: 'disadvantage' },
    { diceString: 'd8-2', expectedRange: { min: 0, max: 14 }, rollType: 'critical' },
    { diceString: '2d10+2', expectedRange: { min: 6, max: 42 }, rollType: 'critical' },
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' and rollType '${test.rollType}' returns total in range ${test.expectedRange.min} - ${test.expectedRange.max}`, () => {
        // Arrange
        const roll = new Dice(test.diceString);

        // Act
        const result = roll.roll(test.rollType as RollType).total;

        // Assert
        assertGreaterOrEqual(result, test.expectedRange.min);
        assertLessOrEqual(result, test.expectedRange.max);
    });
});


[
    { diceString: 'd20', expectedModifier: undefined },
    { diceString: '2d6+2', expectedModifier: 2 },
    { diceString: '3d8-1', expectedModifier: 1 },
    { diceString: 'd4+420', expectedModifier: 420 }
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' returns the modifier ${test.expectedModifier}`, () => {
        // Arrange
        const dice = new Dice(test.diceString);

        // Act
        const roll = dice.roll();

        // Assert
        assertEquals(roll.modifier, test.expectedModifier);
    });
});

[
    { diceString: 'd20', expectedOperator: undefined },
    { diceString: '2d6+2', expectedOperator: '+' },
    { diceString: '3d8-1', expectedOperator: '-' },
    { diceString: 'd8*3', expectedOperator: '*' },
    { diceString: '5d12/2', expectedOperator: '/' }
].forEach((test) => {
    Deno.test(`roll given '${test.diceString}' returns the operator ${test.expectedOperator}`, () => {
        // Arrange
        const dice = new Dice(test.diceString);

        // Act
        const roll = dice.roll();

        // Assert
        assertEquals(roll.operator, test.expectedOperator as Operator);
    });
});

