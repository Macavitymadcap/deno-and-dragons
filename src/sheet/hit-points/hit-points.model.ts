export interface IDeathSaves {
    successes: number;
    failures: number;
}

export interface IHitPoints {
    hitPointMaximum: number;
    currentHitPoints: number;
    temporaryHitPoints: number;
    hitDiceTotal: string;
    hitDiceCurrent: string;
    deathSaves: IDeathSaves;
}