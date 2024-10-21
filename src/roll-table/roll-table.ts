import { Dice } from "../dice/dice.ts";
import type { RollTable } from "./roll-table.model.ts";

export const rollTable = <T>(table: RollTable<T>): T => {
  return table[new Dice(table.dice).roll().total];
};
