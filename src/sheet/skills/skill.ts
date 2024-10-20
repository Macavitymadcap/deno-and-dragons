import { ISkill, SkillName } from "./skills.model.ts";
import { D20Check } from "../d20-check/index.ts";
import { RollType } from "../../dice/index.ts";
import { IAbilityScore } from "../abilities/index.ts";
import { DiceRoll } from "../../dice/index.ts";

export class Skill extends D20Check implements ISkill {
  name: SkillName;
  abilityScore: IAbilityScore;
  proficient: boolean;
  proficiencyBonus?: number;
  expertise?: boolean;
  bonus?: number;

  constructor(skill: ISkill) {
    super(skill.value, skill.name as string);
    this.proficient = skill.proficient;
    this.proficiencyBonus = skill.proficiencyBonus;
    this.expertise = skill.expertise;
    this.bonus = skill.bonus;
    this.name = skill.name;
    this.abilityScore = skill.abilityScore;
  }

  roll(rollType?: RollType): DiceRoll {
    const roll = this.rollDice(rollType);
    const seperator = rollType === "advantage" ? " / " : " + ";
    console.log(
      `Rolling ${this.name} Check (${rollType}): ${
        roll.rolls.join(seperator)
      } ${roll.operator} ${roll.modifier} = ${roll.total}`,
    );

    return roll;
  }

  log(): void {
    const ability = this.abilityScore.name.slice(2).toUpperCase();
    const proficiencyBonus = this.proficient
      ? this.proficiencyBonus?.toString()
      : "";
    const expertise = this.expertise ? `${this.proficiencyBonus! * 2}` : "";
    const proficiencyTotal = this.expertise ? expertise : proficiencyBonus;
    const sum = `${this.abilityScore.modifier} ${
      this.proficient ? `+ ${proficiencyTotal}` : ""
    }${this.bonus ? `+ ${this.bonus!}` : ""}`;
    console.log(`${this.name} (${ability}): ${this.value} (${sum})`);
  }
}
