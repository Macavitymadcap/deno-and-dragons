import { assertEquals } from 'jsr:@std/assert';
import { evaluateEncounterDifficulty } from "../src/functions/evaluate-encounter-difficulty.ts";
import { Encounter, EncounterDifficulty } from "../src/functions/model.ts";


Deno.test("evaluateEncounterDifficulty correctly evaluates a Medium encounter", () => {
    // Arrange 
    const mediumEncounter: Encounter = {
        monsterXPs: [25, 25, 25, 25],
        partyLevels: [1, 1, 1, 1],
    };

    const expectedDifficulty: EncounterDifficulty = {
        actualXP: 100,
        adjustedXP: 200,
        difficulty: 'Medium'
    };

    // Act
    const result = evaluateEncounterDifficulty(mediumEncounter);

    // Assert
    assertEquals(result, expectedDifficulty);
});
