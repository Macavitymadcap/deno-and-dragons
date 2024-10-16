export interface IHitPoints {
    hitPointMaximum: number;
    currentHitPoints: number;
    temporaryHitPoints: number;
    hitDiceTotal: string;
    hitDiceCurrent: string;
    deathSaves: {
        successes: number;
        failures: number;
    }
}