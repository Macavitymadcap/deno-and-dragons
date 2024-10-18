
import { Encounter, XpThresholds, Level, Difficulty, XP_THRESHOLDS_BY_LEVEL, EncounterMultiplier, ENCOUNTER_MULTIPLIERS, Evaluation } from "./encounter-evaluator.model.ts";

export class EncounterEvaluator implements Evaluation {
    party: number[];
    opponents: number[];
    actualXp: number;
    adjustedXp: number;
    partyXpThresholds: XpThresholds;
    multiplier: EncounterMultiplier;
    difficulty: Difficulty;

    constructor(encounter: Encounter) {
        this.party = encounter.party;
        this.opponents = encounter.opponents;

        this.actualXp = this.getActualXP();
        this.partyXpThresholds = this.getPartyXPThresholds();
        this.multiplier = this.getMultiplier();
        this.adjustedXp = this.getAdjustedXP();
        this.difficulty = this.getDifficulty();
    }

    /**
     * Return the sum of alll opponent's XP values.
     * 
     * @returns {number} The combined XP of all opponents.
     */
    private getActualXP(): number {
        return this.opponents.reduce((acc, level) => acc + level, 0);
    }

    /**
     * Returns the XP thresholds for a given character level.
     * @param level The level of the character.
     * @returns {XpThresholds} The XP thresholds for the character based on their level.
     */
    private getCharacterXPThresholds(level: Level): XpThresholds {
        return XP_THRESHOLDS_BY_LEVEL[level]
    };

    /**
     * Returns the total XP thresholds for the party.
     * @returns {XpThresholds} The total XP thresholds for the party.
     */
    private getPartyXPThresholds(): XpThresholds {
        const initialThresholds: XpThresholds = { Easy: 0, Medium: 0, Hard: 0, Deadly: 0 };
        const party = this.party.map((level) => this.getCharacterXPThresholds(level as Level));
        return party.reduce((acc, level) => {
            Object.keys(level).forEach((key) => {
                acc[key as Difficulty] += level[key as Difficulty];
            });
            return acc;
        }, initialThresholds);
    }

    /**
     * Returns the set of multipliers to apply to the encounter based on the number of monsters and party size.
     * 
     * @param numberOfMonsters The number of monsters in the encounter.
     * @returns {EncounterMultiplier} The set of multipliers by party size to apply to the encounter based on the number of monsters.
     */
    private getMultiplier(): EncounterMultiplier {
        const numberOfOpponents = this.opponents.length;
        if (numberOfOpponents >= 15) {
            return ENCOUNTER_MULTIPLIERS[5];
        }
        return ENCOUNTER_MULTIPLIERS.find((multiplier, index) => {
            return numberOfOpponents >= multiplier.numberOfMonsters &&
                numberOfOpponents < ENCOUNTER_MULTIPLIERS[index + 1].numberOfMonsters
        })!;
    }

    /**
     * Return the adjusted XP based on the party size and the multiplier set.
     * @returns {number} The adjusted Xp value.
     */
    private getAdjustedXP(): number {
        const partySize = this.party.length;

        if (partySize < 3) {
            return this.actualXp * this.multiplier.fewerThanThree;
        }

        if (partySize > 3 && partySize < 6) {
            return this.actualXp * this.multiplier.threeToFive;
        }

        return this.actualXp * this.multiplier.sixOrMore;
    }

    private getDifficulty(): Difficulty {
        return Object.keys(this.partyXpThresholds).find((key) => {
            return this.partyXpThresholds[key as Difficulty] >= this.adjustedXp
        }) as Difficulty;
    }
}