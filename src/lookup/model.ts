export interface FeatureResponse {
  name: string;
  level: number;
  desc: string[];
  class: {
    name: string;
  };
}

export interface FeatureData {
  name: string;
  level: number;
  description: string[];
  className: string;
}

export interface TraitResponse {
  name: string;
  desc: string[];
  proficiencies?: string[];
}

export interface TraitData {
  name: string;
  description: string[];
  proficiencies?: string[];
}

export interface Cost {
  quantity: number;
  unit: string;
}

export interface EquipmentResponse {
  name: string;
  cost?: Cost;
  weight?: number;
  desc?: string[];
  special?: string[];
  contents?: string[];
  properties?: string[];
}

export interface EquipmentData {
  name: string;
  cost?: Cost;
  weight?: number;
  description?: string[];
  special?: string[];
  contents?: string[];
  properties?: string[];
}

export interface SpellResponse {
  higher_level: string[];
  name: string;
  desc: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  school: {
    name: string;
  };
  damage?: {
    damage_type: {
      name: string;
    };
    damage_at_character_level?: {
      [characterLevel: string]: string;
    };
    damage_at_slot_level?: {
      [slotLevel: string]: string;
    };
  };
}

export interface SpellData {
  higherLevel: string[];
  name: string;
  description: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  castingTime: string;
  level: number;
  school: string;
  damage?: {
    damageType?: string;
    damageAtCharacterLevel?: {
      [characterLevel: string]: string;
    };
    damageAtSlotLevel?: {
      [slotLevel: string]: string;
    };
  };
}
