import { IHitPoints } from './hit-points.model.ts';

export class HitPoints implements IHitPoints {
    hitPointMaximum: number;
    currentHitPoints: number;
    temporaryHitPoints: number;
    hitDiceTotal: string;
    hitDiceCurrent: string;
    deathSaves: {
        successes: number;
        failures: number;
    };

    constructor(data: IHitPoints) {
        this.hitPointMaximum = data.hitPointMaximum;
        this.currentHitPoints = data.currentHitPoints;
        this.temporaryHitPoints = data.temporaryHitPoints;
        this.hitDiceTotal = data.hitDiceTotal;
        this.hitDiceCurrent = data.hitDiceCurrent;
        this.deathSaves = data.deathSaves;
    }

    takeDamage(damage: number): void {
        console.log(`Took ${damage} damage.`);
        if (this.temporaryHitPoints > 0) {
            if (damage >= this.temporaryHitPoints) {
                damage -= this.temporaryHitPoints;
                this.temporaryHitPoints = 0;
            } else {
                this.temporaryHitPoints -= damage;
                damage = 0;
            }
        }
        this.currentHitPoints = Math.max(0, this.currentHitPoints - damage);
        console.log(`Current hit points: ${this.currentHitPoints}`);
    }

    heal(amount: number): void {
        this.currentHitPoints = Math.min(this.currentHitPoints + amount, this.hitPointMaximum);
        console.log(`Healed ${amount} hit points. Current hit points: ${this.currentHitPoints}`);
    }

    display(): void {
        console.log(`Hit Points: ${this.currentHitPoints}/${this.hitPointMaximum} (+${this.temporaryHitPoints} temporary)`);
    }
}