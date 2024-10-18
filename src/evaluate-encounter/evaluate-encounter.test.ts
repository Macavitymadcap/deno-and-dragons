import { assertEquals } from 'jsr:@std/assert';
import { ENCOUNTER_MULTIPLIERS, Level, XP_THRESHOLDS_BY_LEVEL } from "./encounter-evaluator.model.ts";
import { EncounterEvaluator } from "./encounter-evaluator.ts";

[
    { monsters: [25], expectedMultiplierIndex: 0 },
    { monsters: [25, 25], expectedMultiplierIndex: 1 },
    { monsters: [25, 25, 25], expectedMultiplierIndex: 2 },
    { monsters: [25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 3 },
    { monsters: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 4 },
    { monsters: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], expectedMultiplierIndex: 5 },
].forEach((test) => {
    Deno.test(`getMultiplier given ${test.monsters.length} monsters returns the multiplier at index ${test.expectedMultiplierIndex}`, () => {
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
    Deno.test(`getCharacterXPThresholds given level ${level} returns the corresponding XP thresholds`, () => {
        // Arrange
        const encounter = {opponents: [1], party: [level]};
        const expectedThreshold = XP_THRESHOLDS_BY_LEVEL[level as Level];
        
        // Act
        const result = new EncounterEvaluator(encounter).partyXpThresholds

        // Assert
        assertEquals(result, expectedThreshold);
    });
});

[
    { 
        party: [1, 1, 1, 1], 
        opponents: [25, 25, 25, 25], 
        expectedThresholds: { Easy: 100, Medium: 200, Hard: 300, Deadly: 400 },
        description: '4 level 1 characters'
    },
    { 
        party: [2, 2, 2, 2], 
        opponents: [25, 25, 25, 25], 
        expectedThresholds: { Easy: 200, Medium: 400, Hard: 600, Deadly: 800 },
        description: '4 level 2 characters'
    },
    {
        party: [3, 3, 3, 3],
        opponents: [25, 25, 25, 25],
        expectedThresholds: { Easy: 300, Medium: 600, Hard: 900, Deadly: 1600 },
        description: '4 level 3 characters'
    },
    {
        party: [3, 3, 3, 2],
        opponents: [25, 25, 25, 25],
        expectedThresholds: { Easy: 275, Medium: 550, Hard: 825, Deadly: 1400 },
        description: '3 level 3 characters and 1 level 2 character'
    },
    {
        party: [8, 7, 6, 5],
        opponents: [25, 25, 25, 25],
        expectedThresholds: { Easy: 1_350, Medium: 2_750, Hard: 4_150, Deadly: 6_300 },
        description: 'a level 8 character, level 7 character, level 6 character and level 5 character'
    },
    {
        party: [20, 20, 20, 20],
        opponents: [25, 25, 25, 25],
        expectedThresholds: { Easy: 11_200, Medium: 22_800, Hard: 34_000, Deadly: 50_800 },
        description: '4 level 20 characters'
    }
].forEach((test) => {
    Deno.test(`getPartyXPThresholds totals the XP thresholds for a party of ${test.description}`, () => {
        // Arrange 
        const encounter = { party: test.party, opponents: test.opponents };
    
        // Act
        const result = new EncounterEvaluator(encounter).partyXpThresholds;
    
        // Assert
        assertEquals(result, test.expectedThresholds);
    });
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