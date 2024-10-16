import { assertEquals } from 'jsr:@std/assert';
import { getPartyXPThresholds } from "../src/functions/get-xp-thresholds.ts";
import { XP_THRESHOLDS_BY_LEVEL, XPThresholds } from "../src/functions/model.ts";

Deno.test('getPartyXPThresholds totals the XP thresholds for a party of 4 level 1 characters', () => {
    // Arrange 
    const party: XPThresholds[] = [
        XP_THRESHOLDS_BY_LEVEL[1],
        XP_THRESHOLDS_BY_LEVEL[1],
        XP_THRESHOLDS_BY_LEVEL[1],
        XP_THRESHOLDS_BY_LEVEL[1],
    ];

    const expectedThresholds: XPThresholds = {
        Easy: 100,
        Medium: 200,
        Hard: 300,
        Deadly: 400
    };

    // Act
    const result = getPartyXPThresholds(party);

    // Assert
    assertEquals(result, expectedThresholds);
});

