import { RollType, DiceRoll } from "../../dice/dice.model.ts";
import { D20Check } from "../d20-check/index.ts";
import { AbilityScoreName, IAbilityScore } from "./abilities.model.ts";
import { SavingThrow } from "./saving-throw.ts";

export class AbilityScore extends D20Check implements IAbilityScore {
    name: AbilityScoreName;
    score: number;
    modifier: number;
    save: SavingThrow;

    constructor(abilityScore: IAbilityScore) {
        super(abilityScore.modifier, abilityScore.name);
        this.name = abilityScore.name;
        this.score = abilityScore.score;
        this.save = new SavingThrow(abilityScore.save);
        this.modifier = abilityScore.modifier;
    }

    private setModifierAndUpdateValue(): void {
        this.modifier = Math.floor((this.score - 10) / 2);
        this.value = this.modifier;
        this.save.value = this.modifier;
    }

    roll(rollType?: RollType): DiceRoll {
        const roll = this.rollDice(rollType);
        const seperator = rollType === 'advantage' ? ' / ' : ' + ';
        console.log(`Rolling ${this.name} Check (${rollType}): ${roll.rolls.join(seperator)} ${roll.operator} ${roll.modifier} = ${roll.total}`);

        return roll;
    }

    log(): void {
        console.log(`${this.name.slice(3).toUpperCase()}:\t${this.score} (${this.getModifierString()})\tSave: ${this.save.getModifierString()}`);
    }
}