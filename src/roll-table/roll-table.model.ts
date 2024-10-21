export type RollTable<T> = {
  dice: string;
  [roll: number]: T;
};
