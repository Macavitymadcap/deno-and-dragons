const ROLL_TYPE = {
    STANDARD: 'standard',
    ADVANTAGE: 'advantage',
    DISADVANTAGE: 'disadvantage',
    CRITICAL: 'critical'
} as const;

export type Operator = '+' | '-' | '*' | '/';

export type RollType = typeof ROLL_TYPE[keyof typeof ROLL_TYPE];

export type Dice = {
    quantity: number;
    faces: number;
};

export type ParsedDice = Dice & {
    modifier?: string;
};

export type RollsAndModifier = { 
    rolls: number[], 
    modifier?: string
    isCriticalHit: boolean;
};

export type DiceRoll = {
    rolls: number[];
    sum: number;
    total: number;
    isCriticalHit: boolean;
    operator?: Operator;
    modifier?: number;
};