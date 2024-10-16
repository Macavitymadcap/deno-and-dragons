import { assertEquals } from 'jsr:@std/assert';
import { getMultiplier } from "../src/functions/get-multiplier.ts";
import { ENCOUNTER_MULTIPLIERS } from "../src/functions/model.ts";

Deno.test("getMultiplier given 1 monster returns the first multiplier", () => {
    // Arrange
    const numberOfMonsters = 1;

    const expectedMultiplier = ENCOUNTER_MULTIPLIERS[0];

    // Act
    const result = getMultiplier(numberOfMonsters);

    // Assert
    assertEquals(result, expectedMultiplier);
});

Deno.test("getMultiplier given 2 monsters returns the second multiplier", () => {
    // Arrange
    const numberOfMonsters = 2;

    const expectedMultiplier = ENCOUNTER_MULTIPLIERS[1];

    // Act
    const result = getMultiplier(numberOfMonsters);

    // Assert
    assertEquals(result, expectedMultiplier);
});

[3, 4, 5, 6].forEach((numberOfMonsters) => {
    Deno.test(`getMultiplier given ${numberOfMonsters} monsters returns the third multiplier`, () => {
        // Arrange
        const expectedMultiplier = ENCOUNTER_MULTIPLIERS[2];

        // Act
        const result = getMultiplier(numberOfMonsters);

        // Assert
        assertEquals(result, expectedMultiplier);
    });
});

[7, 8, 9, 10].forEach((numberOfMonsters) => {
    Deno.test(`getMultiplier given ${numberOfMonsters} monsters returns the fourth multiplier`, () => {
        // Arrange
        const expectedMultiplier = ENCOUNTER_MULTIPLIERS[3];

        // Act
        const result = getMultiplier(numberOfMonsters);

        // Assert
        assertEquals(result, expectedMultiplier);
    });
});

[11, 12, 13, 14].forEach((numberOfMonsters) => {
    Deno.test(`getMultiplier given ${numberOfMonsters} monsters returns the fifth multiplier`, () => {
        // Arrange
        const expectedMultiplier = ENCOUNTER_MULTIPLIERS[4];

        // Act
        const result = getMultiplier(numberOfMonsters);

        // Assert
        assertEquals(result, expectedMultiplier);
    });
});

[15, 16, 17, 18].forEach((numberOfMonsters) => {
    Deno.test(`getMultiplier given ${numberOfMonsters} monsters returns the sixth multiplier`, () => {
        // Arrange
        const expectedMultiplier = ENCOUNTER_MULTIPLIERS[5];

        // Act
        const result = getMultiplier(numberOfMonsters);

        // Assert
        assertEquals(result, expectedMultiplier);
    });
});