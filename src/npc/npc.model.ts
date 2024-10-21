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
  1: "Distinctive jewelry: earrings, necklace, circlet, bracelets",
  2: "Piercings",
  3: "Flamboyant or outlandish clothes",
  4: "Formal, clean clothes",
  5: "Ragged, dirty clothes",
  6: "Pronounced scar",
  7: "Missing teeth",
  8: "Missing fingers",
  9: "Unusual eye color (or two different colors)",
  10: "Tattoos",
  11: "Birthmark",
  12: "Unusual skin color",
  13: "Bald",
  14: "Braided beard or hair",
  15: "Unusual hair color",
  16: "Nervous eye twitch",
  17: "Distinctive nose",
  18: "Distinctive posture (crooked or rigid)",
  19: "Exceptionally beautiful",
  20: "Exceptionally ugly",
} as const;

export const NPC_LOW_ABILITIES: RollTable<Ability> = {
  dice: "d6",
  1: { name: "Strength", description: "feeble, scrawny" },
  2: { name: "Dexterity", description: "clumsy, fumbling" },
  3: { name: "Constitution", description: "sickly, pale" },
  4: { name: "Intelligence", description: "dim-witted, slow" },
  5: { name: "Wisdom", description: "oblivious, absentminded" },
  6: { name: "Charisma", description: "dull, boring" },
} as const;

export const NPC_HIGH_ABILITIES: RollTable<Ability> = {
  dice: "d6",
  1: { name: "Strength", description: "powerful, brawny, strong as an ox" },
  2: { name: "Dexterity", description: "lithe, agile, graceful" },
  3: { name: "Constitution", description: "hardy, hale, healthy" },
  4: { name: "Intelligence", description: "studious, learned, inquisitive" },
  5: { name: "Wisdom", description: "perceptive, spiritual, insightful" },
  6: { name: "Charisma", description: "persuasive, forceful, born leader" },
} as const;

export const NPC_TALENTS: RollTable<string> = {
  dice: "d20",
  1: "Plays a musical instrument",
  2: "Speaks several languages fluently",
  3: "Unbelievably lucky",
  4: "Perfect memory",
  5: "Great with animals",
  6: "Great with children",
  7: "Great at solving puzzles",
  8: "Great at one game",
  9: "Great at impersonations",
  10: "Draws beautifully",
  11: "Paints beautifully",
  12: "Sings beautifully",
  13: "Drinks everyone under the table",
  14: "Expert carpenter",
  15: "Expert cook",
  16: "Expert dart thrower and rock skipper",
  17: "Expert juggler",
  18: "Skilled actor and master of disguise",
  19: "Skilled dancer",
  20: "Knows thieves' cant",
} as const;

export const NPC_MANNERISMS: RollTable<string> = {
  dice: "d20",
  1: "Prone to singing, whistling, or humming quietly",
  2: "Speaks in rhyme or some other peculiar way",
  3: "Particularly low or high voice",
  4: "Speaks in an unusually formal manner",
  5: "Enunciates overly clearly",
  6: "Speaks loudly",
  7: "Whispers",
  8: "Uses flowery speech or long words",
  9: "Frequently uses the wrong word",
  10: "Uses colorful oaths and exclamations",
  11: "Makes constant jokes or puns",
  12: "Prone to predictions of doom",
  13: "Fidgets",
  14: "Squints",
  15: "Stares into the distance",
  16: "Chews something",
  17: "Paces",
  18: "Taps fingers",
  19: "Bites fingernails",
  20: "Twirls hair or tugs beard",
} as const;

export const NPC_INTERACTIONS: RollTable<string> = {
  dice: "d12",
  1: "Argumentative",
  2: "Arrogant",
  3: "Blustering",
  4: "Rude",
  5: "Curious",
  6: "Friendly",
  7: "Honest",
  8: "Hot tempered",
  9: "Irritable",
  10: "Ponderous",
  11: "Quiet",
  12: "Suspicious",
} as const;

export const NPC_GOOD_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Beauty",
  2: "Charity",
  3: "Greater good",
  4: "Life",
  5: "Respect",
  6: "Self-sacrifice",
} as const;

export const NPC_EVIL_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Domination",
  2: "Greed",
  3: "Might",
  4: "Pain",
  5: "Retribution",
  6: "Slaughter",
} as const;

export const NPC_LAWFUL_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Community",
  2: "Fairness",
  3: "Honor",
  4: "Logic",
  5: "Responsibility",
  6: "Tradition",
} as const;

export const NPC_CHAOTIC_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Change",
  2: "Creativity",
  3: "Freedom",
  4: "Independence",
  5: "No limits",
  6: "Whimsy",
} as const;

export const NPC_NEUTRAL_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Balance",
  2: "Knowledge",
  3: "Live and let live",
  4: "Moderation",
  5: "Neutrality",
  6: "People",
} as const;

export const NPC_OTHER_IDEALS: RollTable<string> = {
  dice: "d6",
  1: "Aspiration",
  2: "Discovery",
  3: "Glory",
  4: "Nation",
  5: "Redemption",
  6: "Self-knowledge",
} as const;

export const NPC_BONDS: RollTable<string> = {
  dice: "d10",
  1: "Dedicated to fulfilling a personal life goal",
  2: "Protective of close family members",
  3: "Protective of colleagues or compatriots",
  4: "Loyal to a benefactor, patron, or employer",
  5: "Captivated by a romantic interest",
  6: "Drawn to a special place",
  7: "Protective of a sentimental keepsake",
  8: "Protective of a valuable possession",
  9: "Out for revenge",
  10: "Roll twice, re-roll any additional 10s",
} as const;

export const NPC_FLAWS_SECRETS: RollTable<string> = {
  dice: "d12",
  1: "Forbidden love or susceptibility to romance",
  2: "Enjoys decadent pleasures",
  3: "Arrogance",
  4: "Envies another creature's possessions or station",
  5: "Overpowering greed",
  6: "Prone to rage",
  7: "Has a powerful enemy",
  8: "Specific phobia",
  9: "Shameful or scandalous history",
  10: "Secret crime or misdeed",
  11: "Possession of forbidden lore",
  12: "Foolhardy bravery",
} as const;
