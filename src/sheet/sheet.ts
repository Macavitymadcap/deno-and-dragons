import {
  IAttack,
  ICharacter,
  IDescription,
  IEquipment,
  IFeaturesAndTraits,
  IOtherProficiencies,
  IPersonality,
  ISpellcasting,
} from "./sheet.model.ts";
import { Core } from "./core/index.ts";
import { HitPoints } from "./hit-points/index.ts";
import { Skills } from "./skills/index.ts";
import { Abilities } from "./abilities/index.ts";

export class Sheet implements ICharacter {
  core: Core;
  abilities: Abilities;
  hitPoints: HitPoints;
  skills: Skills;
  inspiration: boolean;
  proficiencyBonus: number;
  armorClass: number;
  initiative: number;
  speed: number;
  passivePerception: number;
  otherProficienciesAndLanguages: IOtherProficiencies;
  attacksAndSpellcasting: IAttack[];
  equipment?: IEquipment;
  personality?: IPersonality;
  featuresAndTraits: IFeaturesAndTraits;
  description?: IDescription;
  backstory?: string;
  alliesAndOrganizations?: string[];
  characterAppearance?: string;
  additionalFeaturesAndTraits?: string[];
  treasure?: string[];
  spellcasting?: ISpellcasting;

  constructor(
    characterSheet: ICharacter,
  ) {
    this.core = new Core(characterSheet.core);
    this.hitPoints = new HitPoints(characterSheet.hitPoints);
    this.skills = new Skills(characterSheet.skills);
    this.abilities = new Abilities(characterSheet.abilities);

    this.inspiration = characterSheet.inspiration;
    this.proficiencyBonus = characterSheet.proficiencyBonus;
    this.armorClass = characterSheet.armorClass;
    this.initiative = characterSheet.initiative;
    this.speed = characterSheet.speed;
    this.passivePerception = characterSheet.passivePerception;
    this.otherProficienciesAndLanguages =
      characterSheet.otherProficienciesAndLanguages;
    this.attacksAndSpellcasting = characterSheet.attacksAndSpellcasting;
    this.equipment = characterSheet.equipment;
    this.personality = characterSheet.personality;
    this.featuresAndTraits = characterSheet.featuresAndTraits;
    this.description = characterSheet.description;
    this.backstory = characterSheet.backstory;
    this.alliesAndOrganizations = characterSheet.alliesAndOrganizations;
    this.characterAppearance = characterSheet.characterAppearance;
    this.additionalFeaturesAndTraits =
      characterSheet.additionalFeaturesAndTraits;
    this.treasure = characterSheet.treasure;
    this.spellcasting = characterSheet.spellcasting;
  }

  static async getCharacterSheet(filePath: string): Promise<Sheet> {
    const characterData: ICharacter = await import(filePath, {
      with: { type: "json" },
    });

    return new Sheet(characterData);
  }

  // private getDiceString(value: number): string {
  //     return `d20${value >= 0 ? '+' : '-'}${Math.abs(value)}`;
  // }

  // rollInitiative(rollType: RollType = 'standard'): number {
  //     const roll = new Dice(this.getDiceString(this.initiative)).roll(rollType);
  //     console.log(`Initiative Roll: ${roll.rolls.join(' / ')} ${roll.operator} ${roll.modifier} = ${roll.total}`);
  //     return roll.total;
  // }

  // rollSavingThrow(ability: keyof ISavingThrows, rollType: RollType = 'standard'): number {
  //     const dice = this.getDiceString(this.savingThrows[ability].value);
  //     const roll = new Dice(dice).roll(rollType);
  //     console.log(`Saving Throw (${ability}): ${roll.rolls.join(' / ')} ${roll.operator} ${roll.modifier} = ${roll.total}`);
  //     return roll.total;
  // }

  // takeDamage(damage: number): void {
  //     console.log(`Took ${damage} damage.`);
  //     if (this.hitPoints.temporaryHitPoints > 0) {
  //         if (damage >= this.hitPoints.temporaryHitPoints) {
  //             damage -= this.hitPoints.temporaryHitPoints;
  //             this.hitPoints.temporaryHitPoints = 0;
  //         } else {
  //             this.hitPoints.temporaryHitPoints -= damage;
  //             damage = 0;
  //         }
  //     } else {
  //         this.hitPoints.currentHitPoints -= damage;
  //     }
  //     console.log(`Current hit points: ${this.hitPoints.currentHitPoints}`);
  // }

  // heal(amount: number): void {
  //     this.hitPoints.currentHitPoints = Math.min(this.hitPoints.currentHitPoints + amount, this.hitPoints.hitPointMaximum);
  //     console.log(`Healed ${amount} hit points. Current hit points: ${this.hitPoints.currentHitPoints}`);
  // }

  // private noSpellCasting(): boolean {
  //     console.log('Character does not have spellcasting abilities.');
  //     return false;
  // }

  // private useSpellSlot(level: number): boolean {
  //     if (!this.spellcasting) {
  //         return this.noSpellCasting();
  //     }

  //     const spellSlot = this.spellcasting.spellSlots[level];
  //     if (spellSlot && spellSlot.expended < spellSlot.total) {
  //         spellSlot.expended += 1;
  //         console.log(`Used a level ${level} spell slot. ${spellSlot.total - spellSlot.expended} slots remaining.`);
  //         return true;
  //     } else {
  //         console.log(`No available spell slots at level ${level}.`);
  //         return false;
  //     }
  // }

  // recoverSpellSlot(level: number): boolean {
  //     if (!this.spellcasting) {
  //         return this.noSpellCasting();
  //     }

  //     const spellSlot = this.spellcasting.spellSlots[level];
  //     if (spellSlot && spellSlot.expended > 0) {
  //         spellSlot.expended -= 1;
  //         console.log(`Recovered a level ${level} spell slot. ${spellSlot.total - spellSlot.expended} slots remaining.`);
  //         return true;
  //     } else {
  //         console.log(`No expended spell slots at level ${level}.`);
  //         return false;
  //     }
  // }

  // castSpell(spellName: string, slotLevel?: number): boolean {
  //     if (!this.spellcasting) {
  //         return this.noSpellCasting();
  //     }

  //     for (const level in this.spellcasting.spells) {
  //         const spells = this.spellcasting.spells[level];
  //         const spell = spells.find(s => s.name === spellName);
  //         if (!spell) {
  //             console.log(`Spell ${spellName} not found in level ${level} spells.`);
  //             return false;
  //         }
  //         if (spell.level > 0) {
  //             const spellSlotLevel = slotLevel ? slotLevel : parseInt(level);
  //             if (this.useSpellSlot(spellSlotLevel)) {
  //                 console.log(`Cast spell: ${spellName}`);
  //                 return true;
  //             } else {
  //                 console.log(`Failed to cast spell: ${spellName}. No level ${spellSlotLevel} slots available.`);
  //                 return false;
  //             }
  //         }
  //     }
  //     return false;
  // }

  // displayHitPoints(): void {
  //     console.log(`Hit Points: ${this.hitPoints.currentHitPoints}/${this.hitPoints.hitPointMaximum} (+${this.hitPoints.temporaryHitPoints} temporary)`);
  // }
}
