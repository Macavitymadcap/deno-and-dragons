import { getCharacterXPThresholds, getPartyXPThresholds } from "./get-xp-thresholds.ts";
import { getMultiplier } from "./get-multiplier.ts";
import { getAdjustedXP } from "./get-adjusted-xp.ts";
import { Encounter, EncounterDifficulty, XPThresholds, Level, Difficulty } from "./model.ts";

/**
 * Returns the actual XP, adjusted XP, and difficulty of an encounter for a given set of commbatants.
 * @param combatants The character levels and monster XPs in the encounter.
 * @returns {EncounterDifficulty} The actual XP, adjusted XP, and difficulty of the encounter.
 */
export const evaluateEncounterDifficulty = (combatants: Encounter): EncounterDifficulty => {
    const actualXP = combatants.monsterXPs.reduce((acc, level) => acc + level, 0);
    const characterXpThresholds: XPThresholds[] = combatants.partyLevels.map((level) => getCharacterXPThresholds(level as Level));
    const partyXpThresholds = getPartyXPThresholds(characterXpThresholds);
    const multiplier = getMultiplier(combatants.monsterXPs.length);
    const adjustedXP = getAdjustedXP(actualXP, combatants.partyLevels.length, multiplier);
    const difficulty: Difficulty = Object.keys(partyXpThresholds).find((key) => partyXpThresholds[key as Difficulty] >= adjustedXP) as Difficulty;

    return { actualXP, adjustedXP, difficulty };
}