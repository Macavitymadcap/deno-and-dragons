import { Level, XPThresholds, XP_THRESHOLDS_BY_LEVEL, Difficulty } from "./model.ts";

/**
 * Returns the XP thresholds for a given character level.
 * @param level The level of the character.
 * @returns {XPThresholds} The XP thresholds for the character based on their level.
 */
export const getCharacterXPThresholds = (level: Level): XPThresholds => XP_THRESHOLDS_BY_LEVEL[level];

/**
 * Returns the total XP thresholds for the party.
 * @param party A list of XP thresholds for each character in the party.
 * @returns {XPThresholds} The total XP thresholds for the party.
 */
export const getPartyXPThresholds = (party: XPThresholds[]): XPThresholds => {

  return party.reduce((acc, level) => {
    Object.keys(level).forEach((key) => {
      acc[key as Difficulty] = (acc[key as Difficulty] || 0) + level[key as Difficulty];
    });

    return acc;
  }, {} as XPThresholds);
}