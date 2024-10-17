import { ICore } from './core.model.ts';

export class Core implements ICore {
    characterName: string;
    class: string;
    level: number;
    background: string;
    playerName: string;
    race: string;
    alignment: string;
    experiencePoints: number;

    constructor(data: ICore) {
        this.characterName = data.characterName;
        this.class = data.class;
        this.level = data.level;
        this.background = data.background;
        this.playerName = data.playerName;
        this.race = data.race;
        this.alignment = data.alignment;
        this.experiencePoints = data.experiencePoints;
    }

    public log(): void {
        console.log(`${this.characterName}`);
        console.log(`${this.class} ${this.level} ${this.background} ${this.playerName}`);
        console.log(`${this.race} ${this.alignment} ${this.experiencePoints}`);
    } 
}