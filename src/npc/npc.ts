import { rollTable } from "../roll-table/index.ts";
import * as model from "./npc.model.ts";

export const rollNPC = (): model.NonPlayerCharacter => {
  return {
    occupation: "",
    history: "",
    appearance: rollTable(model.NPC_APPEARANCE)!,
    abilities: {
      high: [],
      low: [],
    },
    talent: rollTable(model.NPC_TALENTS)!,
    mannerism: rollTable(model.NPC_MANNERISMS)!,
    interaction: rollTable(model.NPC_INTERACTIONS)!,
    usefulKnowledge: "",
    ideal: "",
    bond: rollTable(model.NPC_BONDS)!,
    flawSecret: rollTable(model.NPC_FLAWS_SECRETS)!,
  };
};
