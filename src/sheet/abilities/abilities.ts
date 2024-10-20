import { AbilityScore } from "./ability-score.ts";
import { AbilitiesMap, AbilityScoreName } from "./abilities.model.ts";

export class Abilities implements AbilitiesMap {
  strength!: AbilityScore;
  dexterity!: AbilityScore;
  constitution!: AbilityScore;
  intelligence!: AbilityScore;
  wisdom!: AbilityScore;
  charisma!: AbilityScore;

  constructor(abilities: AbilitiesMap) {
    const abilityNames = Object.keys(abilities) as AbilityScoreName[];

    for (const ability of abilityNames) {
      this[ability] = new AbilityScore(abilities[ability]);
    }
  }

  log(): void {
    for (const ability in this) {
      if (this[ability] instanceof AbilityScore) {
        this[ability].log();
      }
    }
  }
}
