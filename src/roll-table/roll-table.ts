import { Dice } from "../dice/dice.ts";
import type { RollTable } from "./roll-table.model.ts";

export const rollTable = <T>(table: RollTable<T>): T | undefined => {
  const result = new Dice(table.dice).roll().total;
  const row = table.rows.find((row) =>
    typeof row.range === "number"
      ? row.range === result
      : row.range.lower <= result && row.range.upper >= result
  );

  if (!row) {
    console.error(`No row found for result ${result}`);
  } else {
    return row.value;
  }
};
