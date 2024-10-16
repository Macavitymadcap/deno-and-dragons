import { IAbilityScore } from "../sheet.model.ts";

export interface ISkill {
    name: string;
    abilityScore: IAbilityScore;
    proficient: boolean;
    proficiencyBonus?: number;
    expertise?: boolean;
    bonus?: number;
    value: number;
}

export interface ISkills {
    acrobatics: ISkill;
    animalHandling: ISkill;
    arcana: ISkill;
    athletics: ISkill;
    deception: ISkill;
    history: ISkill;
    insight: ISkill;
    intimidation: ISkill;
    investigation: ISkill;
    medicine: ISkill;
    nature: ISkill;
    perception: ISkill;
    persuasion: ISkill;
    religion: ISkill;
    sleightOfHand: ISkill;
    stealth: ISkill;
    survival: ISkill;
}