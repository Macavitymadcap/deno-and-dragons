import { assertEquals } from 'jsr:@std/assert';
import { getAdjustedXP } from "../src/functions/get-adjusted-xp.ts";
import { ENCOUNTER_MULTIPLIERS } from "../src/functions/model.ts";

Deno.test('getAdjustedXp returns the correct adjusted XP for a party of 4 level 1 characters against 4 1/8 CR monsters', () => {
    // Arrange
    const actualXP = 100;
    const partySize = 4;
    const multiplier = ENCOUNTER_MULTIPLIERS[2];

    const expectedAdjustedXP = 200;

    // Act
    const result = getAdjustedXP(actualXP, partySize, multiplier);

    // Assert
    assertEquals(result, expectedAdjustedXP);
});