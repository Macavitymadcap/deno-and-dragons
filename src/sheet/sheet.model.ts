import { Cost } from "../lookup/model.ts";
import { ICore } from "./core/index.ts";
import { IHitPoints } from "./hit-points/index.ts";
import { SkillsMap } from "./skills/index.ts";
import { IAbilities } from "./abilities/index.ts";

export interface ICharacter {
    core: ICore;
    inspiration: boolean;
    proficiencyBonus: number;
    armorClass: number;
    initiative: number;
    speed: number;
    hitPoints: IHitPoints;
    abilities: IAbilities;
    skills: SkillsMap;
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
}

export interface IInventoryItem {
    name: string;
    quantity: number;
    weight?: number;
    cost?: Cost;
}

export interface IEquipment {
    platinum: number;
    gold: number;
    electrum: number;
    silver: number;
    copper: number;
    inventory: IInventoryItem[];
}

export interface IPersonality {
    traits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
}

export interface ITable {
    title: string;
    columnLabels: string[];
    rows: { [key: string]: string }[];
}

export interface IFeature {
    name: string;
    description: string;
    tables?: ITable[];
}

export interface IFeaturesAndTraits {
    racial: IFeature[];
    class: IFeature[];
    background: IFeature[];
    personal: IFeature[];
}

export interface IDescription {
    age: string;
    height: string;
    weight: string;
    eyes: string;
    skin: string;
    hair: string;
}

export interface IOtherProficiencies {
    languages: string[];
    armor: string[];
    weapons: string[];
    tools: string[];
    savingThrows: string[];
    skills: string[];
}

export interface IAttack {
    name: string;
    attackBonus: number;
    damageDice: string;
    damageType: string;
}

export interface ISpellcasting {
    spellcastingClass: string;
    spellcastingAbility: string;
    spellSaveDC: number;
    spellAttackBonus: number;
    cantripsKnown: number;
    spellsKnown: number;
    spellsPrepared?: number;
    spellSlots: {
        [level: string]: ISpellSlot;
    };
    spells: {
        [level: string]: ISpell[];
    };
}

export interface ISpellSlot {
    total: number;
    expended: number;
}

export interface ISpell {
    name: string;
    prepared?: boolean;
    level: number;
}