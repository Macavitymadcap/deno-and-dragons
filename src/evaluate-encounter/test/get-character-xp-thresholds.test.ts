import { assertEquals } from 'jsr:@std/assert';
import { getCharacterXPThresholds } from "../get-xp-thresholds.ts";
import { Level, XP_THRESHOLDS_BY_LEVEL } from "../model.ts";


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15, 16, 17, 18, 19, 20].forEach((level) => {
    Deno.test(`getCharacterXPThresholds given a ${level} returns the correct XP thresholds`, () => {
        // Arrange
        const expectedThreshold = XP_THRESHOLDS_BY_LEVEL[level as Level];
        
        // Act
        const result = getCharacterXPThresholds(level as Level);

        // Assert
        assertEquals(result, expectedThreshold);
    });
})