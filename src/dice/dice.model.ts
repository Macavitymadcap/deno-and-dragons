const ROLL_TYPE = {
    STANDARD: 'standard',
    ADVANTAGE: 'advantage',
    DISADVANTAGE: 'disadvantage',
    CRITICAL: 'critical'
} as const;

export type RollType = typeof ROLL_TYPE[keyof typeof ROLL_TYPE];

export type DieRoll = {
    quantity: number;
    faces: number;
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
    operator?: string;
    modifier?: number;
};