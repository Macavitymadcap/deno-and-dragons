import { assertEquals } from 'jsr:@std/assert';
import { ENCOUNTER_MULTIPLIERS, Level, XP_THRESHOLDS_BY_LEVEL, XPThresholds } from "./encounter-evaluator.model.ts";
import { EncounterEvaluator } from "./encounter-evaluator.ts";

[
    { monsters: 1, expectedMultiplierIndex: 0 },
    { monsters: 2, expectedMultiplierIndex: 1 },
    { monsters: 3, expectedMultiplierIndex: 2 },
    { monsters: 4, expectedMultiplierIndex: 2 },
    { monsters: 5, expectedMultiplierIndex: 2 },
    { monsters: 6, expectedMultiplierIndex: 2 },
    { monsters: 7, expectedMultiplierIndex: 3 },
    { monsters: 8, expectedMultiplierIndex: 3 },
    { monsters: 9, expectedMultiplierIndex: 3 },
    { monsters: 9, expectedMultiplierIndex: 3 },
    { monsters: 10, expectedMultiplierIndex: 3 },
    { monsters: 11, expectedMultiplierIndex: 4 },
    { monsters: 12, expectedMultiplierIndex: 4 },
    { monsters: 13, expectedMultiplierIndex: 4 },
    { monsters: 14, expectedMultiplierIndex: 4 },
    { monsters: 15, expectedMultiplierIndex: 5 },
    { monsters: 50, expectedMultiplierIndex: 5 },
].forEach((test) => {
    Deno.test(`getMultiplier given ${test.monsters} monsters returns the third multiplier`, () => {
        // Arrange
        const encounter = { opponents: [test.monsters], party: [1]};
        const expectedMultiplier = ENCOUNTER_MULTIPLIERS[test.expectedMultiplierIndex];

        // Act
        const result = new EncounterEvaluator(encounter).multiplier;

        // Assert
        assertEquals(result, expectedMultiplier);
    });
});

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20].forEach((level) => {
    Deno.test(`getCharacterXPThresholds given a ${level} returns the correct XP thresholds`, () => {
        // Arrange
        const encounter = {opponents: [1], party: [1]};
        const expectedThreshold = XP_THRESHOLDS_BY_LEVEL[level as Level];
        
        // Act
        const result = new EncounterEvaluator(encounter).partyXpThresholds

        // Assert
        assertEquals(result, expectedThreshold);
    });
})

Deno.test('getPartyXPThresholds totals the XP thresholds for a party of 4 level 1 characters', () => {
    // Arrange 
    const encounter = { party: [1, 1, 1, 1], opponents: [25, 25, 25, 25] };

    const expectedThresholds: XPThresholds = {
        Easy: 100,
        Medium: 200,
        Hard: 300,
        Deadly: 400
    };

    // Act
    const result = new EncounterEvaluator(encounter).partyXpThresholds;

    // Assert
    assertEquals(result, expectedThresholds);
});

Deno.test('getAdjustedXp returns the correct adjusted XP for a party of 4 level 1 characters against 4 1/8 CR monsters', () => {
    // Arrange
    const encounter = { party: [1, 1, 1, 1], opponents: [25, 25, 25, 25] };
    const expectedAdjustedXP = 200;

    // Act
    const result = new EncounterEvaluator(encounter).adjustedXp;

    // Assert
    assertEquals(result, expectedAdjustedXP);
});

Deno.test("evaluateEncounterDifficulty correctly evaluates a Medium encounter", () => {
    // Arrange 
    const encounter = {
        opponents: [25, 25, 25, 25],
        party: [1, 1, 1, 1],
    };
    const expectedDifficulty = 'Medium'

    // Act
    const result = new EncounterEvaluator(encounter).difficulty;

    // Assert
    assertEquals(result, expectedDifficulty);
});