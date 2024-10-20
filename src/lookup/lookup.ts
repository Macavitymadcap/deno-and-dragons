import {
  EquipmentData,
  EquipmentResponse,
  FeatureData,
  FeatureResponse,
  SpellData,
  SpellResponse,
  TraitData,
  TraitResponse,
} from "./model.ts";

export class Lookup {
  private baseURL = "https://www.dnd5eapi.co/api";
  private headers = { "Accept": "application/json" };

  constructor() {}

  private convertToKebabCase(text: string): string {
    return text.toLowerCase().replace(/'/, "").replace(/\s+/g, "-");
  }

  private async fetchResponse<T>(root: string, name: string): Promise<T> {
    const index = this.convertToKebabCase(name);
    const response = await fetch(`${this.baseURL}/${root}/${index}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  }

  async fetchFeature(featureName: string): Promise<FeatureData> {
    const data: FeatureResponse = await this.fetchResponse(
      "features",
      featureName,
    );

    return {
      name: data.name,
      level: data.level,
      description: data.desc,
      className: data.class.name,
    };
  }

  async fetchTrait(traitName: string): Promise<TraitData> {
    const data: TraitResponse = await this.fetchResponse("traits", traitName);

    return {
      name: data.name,
      description: data.desc,
      proficiencies: data.proficiencies,
    };
  }

  async fetchEquipment(equipmentName: string): Promise<EquipmentData> {
    const data: EquipmentResponse = await this.fetchResponse(
      "equipment",
      equipmentName,
    );

    return {
      name: data.name,
      cost: data.cost,
      weight: data.weight,
      description: data.desc,
      special: data.special,
      contents: data.contents,
      properties: data.properties,
    };
  }

  async fetchSpell(spellName: string): Promise<SpellData> {
    const data: SpellResponse = await this.fetchResponse("spells", spellName);

    return {
      name: data.name,
      level: data.level,
      description: data.desc,
      higherLevel: data.higher_level,
      range: data.range,
      components: data.components,
      material: data.material,
      ritual: data.ritual,
      duration: data.duration,
      concentration: data.concentration,
      castingTime: data.casting_time,
      school: data.school.name,
      damage: {
        damageType: data.damage?.damage_type.name,
        damageAtSlotLevel: data.damage?.damage_at_slot_level,
        damageAtCharacterLevel: data.damage?.damage_at_character_level,
      },
    };
  }
}
