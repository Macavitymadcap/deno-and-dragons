import { ISkill, ISkills } from './skills.model.ts';
import { Skill } from './skill.ts';

export class Skills implements ISkills {
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

    constructor(data: ISkills) {
        this.acrobatics = new Skill(data.acrobatics);
        this.animalHandling = new Skill(data.animalHandling);
        this.arcana = new Skill(data.arcana);
        this.athletics = new Skill(data.athletics);
        this.deception = new Skill(data.deception);
        this.history = new Skill(data.history);
        this.insight = new Skill(data.insight);
        this.intimidation = new Skill(data.intimidation);
        this.investigation = new Skill(data.investigation);
        this.medicine = new Skill(data.medicine);
        this.nature = new Skill(data.nature);
        this.perception = new Skill(data.perception);
        this.persuasion = new Skill(data.persuasion);
        this.religion = new Skill(data.religion);
        this.sleightOfHand = new Skill(data.sleightOfHand);
        this.stealth = new Skill(data.stealth);
        this.survival = new Skill(data.survival);
    }
}