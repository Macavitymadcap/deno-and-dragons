import { ISkill, SkillName } from './skills.model.ts';
import { D20Check } from '../d20-check/d20-check.ts';
import { RollType } from "../../dice/dice.model.ts";
import { IAbilityScore } from "../sheet.model.ts";

export class Skill extends D20Check implements ISkill {
    proficient: boolean;
    proficiencyBonus?: number;
    expertise?: boolean;
    bonus?: number | undefined;;
    name: SkillName;
    abilityScore: IAbilityScore;

    constructor(data: ISkill) {
        super(data.value, data.name);
        this.proficient = data.proficient;
        this.proficiencyBonus = data.proficiencyBonus;
        this.expertise = data.expertise;
        this.bonus = data.bonus;
        this.name = data.name;
        this.abilityScore = data.abilityScore;
    }

    roll(rollType?: RollType): number {
      const roll = this.rollDice(rollType);
      console.log(`Rolling ${this.name} (${rollType}): ${roll.rolls.join(' / ')} ${roll.operator} ${roll.modifier} = ${roll.total}`);

      return roll.total;
    }

    log(): void {
        const ability = this.abilityScore.name.slice(2).toUpperCase();
        const proficiencyBonus = this.proficient ? this.proficiencyBonus?.toString() : '';
        const expertise = this.expertise ? `${this.proficiencyBonus! * 2}` : '';
        const proficiencyTotal = this.expertise ? expertise : proficiencyBonus;
        const sum = `${this.abilityScore.modifier} ${ this.proficient ? `+ ${proficiencyTotal}` : ''}${this.bonus ? `+ ${this.bonus!}` : ''}`;   
        console.log(`${this.name} (${ability}): ${this.value} (${sum})`);
    }
}