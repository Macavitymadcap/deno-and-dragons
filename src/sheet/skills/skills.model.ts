import { IAbilityScore } from "../abilities/index.ts";

const SKILLS = {
  acrobatics: "acrobatics",
  animalHandling: "animalHandling",
  arcana: "arcana",
  athletics: "athletics",
  deception: "deception",
  history: "history",
  insight: "insight",
  intimidation: "intimidation",
  investigation: "investigation",
  medicine: "medicine",
  nature: "nature",
  perception: "perception",
  persuasion: "persuasion",
  religion: "religion",
  sleightOfHand: "sleightOfHand",
  stealth: "stealth",
  survival: "survival",
} as const;

export type SkillName = typeof SKILLS[keyof typeof SKILLS];

export interface ISkill {
  name: SkillName;
  abilityScore: IAbilityScore;
  proficient: boolean;
  proficiencyBonus?: number;
  expertise?: boolean;
  bonus?: number;
  value: number;
}

export type SkillsMap = {
  [key in SkillName]: ISkill;
};
