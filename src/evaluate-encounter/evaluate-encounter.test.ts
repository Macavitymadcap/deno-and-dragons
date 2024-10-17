import { assertEquals } from 'jsr:@std/assert';
import { ENCOUNTER_MULTIPLIERS, Level, XP_THRESHOLDS_BY_LEVEL, XpThresholds } from "./encounter-evaluator.model.ts";
import { EncounterEvaluator } from "./encounter-evaluator.ts";

[
    { monsters: [25], expectedMultiplierIndex: 0 },
    { monsters: [25, 25], expectedMultiplierIndex: 1 },
    { monsters: [25, 25, 25], expectedMultiplierIndex: 2 },
    { monsters: [25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 3 },
    { monsters: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 4 },
    { monsters: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 5 },
].forEach((test) => {
    Deno.test(`getMultiplier given ${test.monsters} monsters returns the third multiplier`, () => {
        // Arrange
        const encounter = { opponents: test.monsters, party: [1]};
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
        const encounter = {opponents: [1], party: [level]};
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

    const expectedThresholds: XpThresholds = {
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