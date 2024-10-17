const ABILITY_SCORES = {
    STRENGTH: 'strength',
    DEXTERITY: 'dexterity',
    CONSTITUTION: 'constitution',
    INTELLIGENCE: 'intelligence',
    WISDOM: 'wisdom',
    CHARISMA: 'charisma'
} as const;

export type AbilityScoreName = typeof ABILITY_SCORES[keyof typeof ABILITY_SCORES];

export interface ISavingThrow {
    name: string;
    proficient: boolean;
    value: number;
}

export interface IAbilityScore {
    name: AbilityScoreName;
    score: number;
    modifier: number;
    save: ISavingThrow;
}

export type AbilitiesMap = {
    [key in AbilityScoreName]: IAbilityScore;
}

export interface IAbilities {
    strength: IAbilityScore;
    dexterity: IAbilityScore;
    constitution: IAbilityScore;
    intelligence: IAbilityScore;
    wisdom: IAbilityScore;
    charisma: IAbilityScore;
}

