import { EncounterMultiplier } from "./model.ts";

/**
 * Return the adjusted XP based on the party size and the multiplier set.
 * @param actualXP The total XP of the monsters in the encounter.
 * @param partySize The number of characters in the party.
 * @param multiplier The set of multipiers to apply based on the number of monsters.
 * @returns 
 */
export const getAdjustedXP = (actualXP: number, partySize: number, multiplier: EncounterMultiplier): number => {
    if (partySize < 3) {
      return actualXP * multiplier.fewerThanThree;
    } else if (partySize > 3 && partySize < 6) {
      return actualXP * multiplier.threeToFive;
    }
  
    return actualXP * multiplier.sixOrMore;
  }