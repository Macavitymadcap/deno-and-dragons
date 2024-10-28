type Range = {
  lower: number;
  upper: number
}

type RollRow<T> = {
  range: Range | number;
  value: T;
}

export type RollTable<T> = {
  dice: string;
  rows: RollRow<T>[]
};
