import { ENCOUNTER_MULTIPLIERS, EncounterMultiplier } from "./model.ts";

/**
 * Returns the set of multipliers to apply to the encounter based on the number of monsters and party size.
 * 
 * @param numberOfMonsters The number of monsters in the encounter.
 * @returns {EncounterMultiplier} The set of multipliers by party size to apply to the encounter based on the number of monsters.
 */
export const getMultiplier = (numberOfMonsters: number): EncounterMultiplier => {
    if (numberOfMonsters >= 15) {
      return ENCOUNTER_MULTIPLIERS[5];
    }
    return ENCOUNTER_MULTIPLIERS.find((multiplier, index) => numberOfMonsters >= multiplier.numberOfMonsters && numberOfMonsters < ENCOUNTER_MULTIPLIERS[index + 1].numberOfMonsters)!;
  }