import { Skill } from "./skill.ts";
import { SkillsMap } from "./skills.model.ts";
import { SkillName } from "./skills.model.ts";

export class Skills implements SkillsMap {
    acrobatics!: Skill;
    animalHandling!: Skill;
    arcana!: Skill;
    athletics!: Skill;
    deception!: Skill;
    history!: Skill;
    insight!: Skill;
    intimidation!: Skill;
    investigation!: Skill;
    medicine!: Skill;
    nature!: Skill;
    perception!: Skill;
    persuasion!: Skill;
    religion!: Skill;
    sleightOfHand!: Skill;
    stealth!: Skill;
    survival!: Skill;

    constructor(skills: SkillsMap) {
        const skillNames = Object.keys(skills) as SkillName[];

        for (const skillName of skillNames) {
            this[skillName] = new Skill(skills[skillName]);
        }
    }

    log(): void {
        for (const skill in this) {
            if (this[skill] instanceof Skill) {
                this[skill].log();
            }
        }
    }
}