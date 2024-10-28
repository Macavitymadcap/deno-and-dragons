import type { RollTable } from "../roll-table/index.ts";

type Ability = {
  name: string;
  description: string;
};

export type NonPlayerCharacter = {
  occupation: string;
  history: string;
  appearance: string;
  abilities: {
    high: Ability[];
    low: Ability[];
  };
  talent: string;
  mannerism: string;
  interaction: string;
  usefulKnowledge: string;
  ideal: string;
  bond: string;
  flawSecret: string;
};

export const NPC_APPEARANCE: RollTable<string> = {
  dice: "d20",
  rows: [
    {
      range: 1,
      value: "Distinctive jewelry: earrings, necklace, circlet, bracelets",
    },
    { range: 2, value: "Piercings" },
    { range: 3, value: "Flamboyant or outlandish clothes" },
    { range: 4, value: "Formal, clean clothes" },
    { range: 5, value: "Ragged, dirty clothes" },
    { range: 6, value: "Pronounced scar" },
    { range: 7, value: "Missing teeth" },
    { range: 8, value: "Missing fingers" },
    { range: 9, value: "Unusual eye color (or two different colors)" },
    { range: 10, value: "Tattoos" },
    { range: 11, value: "Birthmark" },
    { range: 12, value: "Unusual skin color" },
    { range: 13, value: "Bald" },
    { range: 14, value: "Braided beard or hair" },
    { range: 15, value: "Unusual hair color" },
    { range: 16, value: "Nervous eye twitch" },
    { range: 17, value: "Distinctive nose" },
    { range: 18, value: "Distinctive posture (crooked or rigid)" },
    { range: 19, value: "Exceptionally beautiful" },
    { range: 20, value: "Exceptionally ugly" },
  ],
} as const;

export const NPC_LOW_ABILITIES: RollTable<Ability> = {
  dice: "d6",
  rows: [
    { range: 1, value: { name: "Strength", description: "feeble, scrawny" } },
    { range: 2, value: { name: "Dexterity", description: "clumsy, fumbling" } },
    { range: 3, value: { name: "Constitution", description: "sickly, pale" } },
    {
      range: 4,
      value: { name: "Intelligence", description: "dim-witted, slow" },
    },
    {
      range: 5,
      value: { name: "Wisdom", description: "oblivious, absentminded" },
    },
    { range: 6, value: { name: "Charisma", description: "dull, boring" } },
  ],
} as const;

export const NPC_HIGH_ABILITIES: RollTable<Ability> = {
  dice: "d6",
  rows: [
    {
      range: 1,
      value: {
        name: "Strength",
        description: "powerful, brawny, strong as an ox",
      },
    },
    {
      range: 2,
      value: { name: "Dexterity", description: "lithe, agile, graceful" },
    },
    {
      range: 3,
      value: { name: "Constitution", description: "hardy, hale, healthy" },
    },
    {
      range: 4,
      value: {
        name: "Intelligence",
        description: "studious, learned, inquisitive",
      },
    },
    {
      range: 5,
      value: {
        name: "Wisdom",
        description: "perceptive, spiritual, insightful",
      },
    },
    {
      range: 6,
      value: {
        name: "Charisma",
        description: "persuasive, forceful, born leader",
      },
    },
  ],
} as const;

export const NPC_TALENTS: RollTable<string> = {
  dice: "d20",
  rows: [
    { range: 1, value: "Plays a musical instrument" },
    { range: 2, value: "Speaks several languages fluently" },
    { range: 3, value: "Unbelievably lucky" },
    { range: 4, value: "Perfect memory" },
    { range: 5, value: "Great with animals" },
    { range: 6, value: "Great with children" },
    { range: 7, value: "Great at solving puzzles" },
    { range: 8, value: "Great at one game" },
    { range: 9, value: "Great at impersonations" },
    { range: 10, value: "Draws beautifully" },
    { range: 11, value: "Paints beautifully" },
    { range: 12, value: "Sings beautifully" },
    { range: 13, value: "Drinks everyone under the table" },
    { range: 14, value: "Expert carpenter" },
    { range: 15, value: "Expert cook" },
    { range: 16, value: "Expert dart thrower and rock skipper" },
    { range: 17, value: "Expert juggler" },
    { range: 18, value: "Skilled actor and master of disguise" },
    { range: 19, value: "Skilled dancer" },
    { range: 20, value: "Knows thieves' cant" },
  ],
} as const;

export const NPC_MANNERISMS: RollTable<string> = {
  dice: "d20",
  rows: [
    { range: 1, value: "Prone to singing, whistling, or humming quietly" },
    { range: 2, value: "Speaks in rhyme or some other peculiar way" },
    { range: 3, value: "Particularly low or high voice" },
    { range: 4, value: "Speaks in an unusually formal manner" },
    { range: 5, value: "Enunciates overly clearly" },
    { range: 6, value: "Speaks loudly" },
    { range: 7, value: "Whispers" },
    { range: 8, value: "Uses flowery speech or long words" },
    { range: 9, value: "Frequently uses the wrong word" },
    { range: 10, value: "Uses colorful oaths and exclamations" },
    { range: 11, value: "Makes constant jokes or puns" },
    { range: 12, value: "Prone to predictions of doom" },
    { range: 13, value: "Fidgets" },
    { range: 14, value: "Squints" },
    { range: 15, value: "Stares into the distance" },
    { range: 16, value: "Chews something" },
    { range: 17, value: "Paces" },
    { range: 18, value: "Taps fingers" },
    { range: 19, value: "Bites fingernails" },
    { range: 20, value: "Twirls hair or tugs beard" },
  ],
} as const;

export const NPC_INTERACTIONS: RollTable<string> = {
  dice: "d12",
  rows: [
    { range: 1, value: "Argumentative" },
    { range: 2, value: "Arrogant" },
    { range: 3, value: "Blustering" },
    { range: 4, value: "Rude" },
    { range: 5, value: "Curious" },
    { range: 6, value: "Friendly" },
    { range: 7, value: "Honest" },
    { range: 8, value: "Hot tempered" },
    { range: 9, value: "Irritable" },
    { range: 10, value: "Ponderous" },
    { range: 11, value: "Quiet" },
    { range: 12, value: "Suspicious" },
  ],
} as const;

export const NPC_GOOD_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Beauty" },
    { range: 2, value: "Charity" },
    { range: 3, value: "Greater good" },
    { range: 4, value: "Life" },
    { range: 5, value: "Respect" },
    { range: 6, value: "Self-sacrifice" },
  ],
} as const;

export const NPC_EVIL_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Domination" },
    { range: 2, value: "Greed" },
    { range: 3, value: "Might" },
    { range: 4, value: "Pain" },
    { range: 5, value: "Retribution" },
    { range: 6, value: "Slaughter" },
  ],
} as const;

export const NPC_LAWFUL_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Community" },
    { range: 2, value: "Fairness" },
    { range: 3, value: "Honor" },
    { range: 4, value: "Logic" },
    { range: 5, value: "Responsibility" },
    { range: 6, value: "Tradition" },
  ],
} as const;

export const NPC_CHAOTIC_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Change" },
    { range: 2, value: "Creativity" },
    { range: 3, value: "Freedom" },
    { range: 4, value: "Independence" },
    { range: 5, value: "No limits" },
    { range: 6, value: "Whimsy" },
  ],
} as const;

export const NPC_NEUTRAL_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Balance" },
    { range: 2, value: "Knowledge" },
    { range: 3, value: "Live and let live" },
    { range: 4, value: "Moderation" },
    { range: 5, value: "Neutrality" },
    { range: 6, value: "People" },
  ],
} as const;

export const NPC_OTHER_IDEALS: RollTable<string> = {
  dice: "d6",
  rows: [
    { range: 1, value: "Aspiration" },
    { range: 2, value: "Discovery" },
    { range: 3, value: "Glory" },
    { range: 4, value: "Nation" },
    { range: 5, value: "Redemption" },
    { range: 6, value: "Self-knowledge" },
  ],
} as const;

export const NPC_BONDS: RollTable<string> = {
  dice: "d10",
  rows: [
    { range: 1, value: "Dedicated to fulfilling a personal life goal" },
    { range: 2, value: "Protective of close family members" },
    { range: 3, value: "Protective of colleagues or compatriots" },
    { range: 4, value: "Loyal to a benefactor, patron, or employer" },
    { range: 5, value: "Captivated by a romantic interest" },
    { range: 6, value: "Drawn to a special place" },
    { range: 7, value: "Protective of a sentimental keepsake" },
    { range: 8, value: "Protective of a valuable possession" },
    { range: 9, value: "Out for revenge" },
    { range: 10, value: "Roll twice, re-roll any additional 10s" },
  ],
} as const;

export const NPC_FLAWS_SECRETS: RollTable<string> = {
  dice: "d12",
  rows: [
    { range: 1, value: "Forbidden love or susceptibility to romance" },
    { range: 2, value: "Enjoys decadent pleasures" },
    { range: 3, value: "Arrogance" },
    { range: 4, value: "Envies another creature's possessions or station" },
    { range: 5, value: "Overpowering greed" },
    { range: 6, value: "Prone to rage" },
    { range: 7, value: "Has a powerful enemy" },
    { range: 8, value: "Specific phobia" },
    { range: 9, value: "Shameful or scandalous history" },
    { range: 10, value: "Secret crime or misdeed" },
    { range: 11, value: "Possession of forbidden lore" },
    { range: 12, value: "Foolhardy bravery" },
  ],
} as const;
