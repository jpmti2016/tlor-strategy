export const heroes = [{}];

export const armies = [
  {
    name: "Dunedain III",
    attack_type: "Melee",
    race: "Men",
    habilities: [
      {
        name: "Bullseye",
        description: "Damage +30% against ranged targets",
      },
      {
        name: "Gracefulness",
        description: "Damage -30% from ranged units",
      },
    ],
  },
  {
    name: "Guard of the Tower III",
    attack_type: "Melee",
    race: "Men",
    habilities: [
      {
        name: "Bullseye",
        description: "Damage +30% against ranged targets",
      },
      {
        name: "Gracefulness",
        description: "Damage -30% from ranged units",
      },
    ],
  },
  {
    name: "Sharpshooter III",
    attack_type: "Ranged",
    race: "Men",
    habilities: [
      {
        name: "Ranged Advantage",
        description: "First 2 rounds dealt +40% Damage",
      },
    ],
  },
  {
    name: "Cavalier III",
    attack_type: "Melee",
    habilities: [
      {
        name: "Mounted",
        description: "-10% damage received",
      },
      {
        name: "Rohirrim Charge",
        description:
          "First 1 instances of damage dealt received in battle +50%",
      },
    ],
  },
  {
    name: "Herald III",
    attack_type: "Melee",
    race: "Elves",
    habilities: [
      {
        name: "Counterattack",
        description: "+30 damage",
      },
    ],
  },
  {
    name: "Marchwarden III",
    attack_type: "Ranged",
    race: "Elves",
    habilities: [
      { name: "Keem Eye", description: "100% to gain Pursuit" },
      {
        name: "Indomitable",
        description: "Unaffected by Stun. Defense +20.0",
      },
    ],
  },
  {
    name: "Spearman II",
    attack_type: "Melee",
    race: "Men",
    habilities: [
      {
        name: "Anti-Cavalry Training",
        description: "+30% damage dealt and -20% damage received",
      },
    ],
  },
  {
    name: "Ranger II",
    attack_type: "Melee",
    race: "Men",
    habilities: [
      {
        name: "Bullseye",
        description: "Damage +30% against ranged targets",
      },
    ],
  },
  {
    name: "Knight II",
    attack_type: "Melee",
    race: "Men",
    habilities: [
      {
        name: "Mounted",
        description: "-10% Damage received",
      },
      {
        name: "Full Protection",
        description: "-15% damage received from melee units",
      },
    ],
  },
  {
    name: "Warden II",
    attack_type: "Melee",
    race: "Elves",
    habilities: [
      {
        name: "Counterattack",
        description:
          "Perform a Counterattack that deals 30% damage. Normal attack damage is -10%",
      },
    ],
  },
  {
    name: "Longbowman II",
    attack_type: "Ranged",
    race: "Men",
    habilities: [
      {
        name: "Ranged Advantage",
        description: "First 2 rounds + 40% Damage dealt",
      },
    ],
  },
  {
    name: "Shieldbearer II",
    attack_type: "Melee",
    race: "Dwarves",
    habilities: [
      {
        name: "Shielding",
        description: "50% chance for -20% Physical Damage Received",
      },
    ],
  },
  {
    name: "Heavy Axe Thrower II",
    attack_type: "Ranged",
    race: "Dwarves",
    habilities: [
      {
        name: "Battlers Bane",
        description: "+20% Damage against melee units",
      },
    ],
  },
  {
    name: "Ram Rider III",
    attack_type: "Melee",
    race: "Dwarves",
    habilities: [
      {
        name: "Mounted",
        description: "-10% Damage received",
      },
      {
        name: "Trample",
        description: "Enemy defense -50% for 1 round",
      },
    ],
  },
  {
    name: "Guardian III",
    attack_type: "Melee",
    race: "Dwarves",
    habilities: [
      {
        name: "Shielding",
        description: "50% chance to receive 20% less of Physical Damage",
      },
      {
        name: "Laceration",
        description: "Additional 20% Physical Damage",
      },
      {
        name: "Heatproof Skin",
        description: "-20% Burn Damage received",
      },
    ],
  },
  {
    name: "Goat Rider II",
    attack_type: "Melee",
    race: "Dwarves",
    habilities: [
      {
        name: "Mounted",
        description: "-10% Damage Received",
      },
    ],
  },
  {
    name: "Master Thrower III",
    attack_type: "Ranged",
    race: "Dwarves",
    habilities: [
      {
        name: "Battlers Bane",
        description: "+20% damage against melee units",
      },
      {
        name: "Giant Slayer",
        description:
          "+50% damage against large units like Mumakil, Entmoot, Beorning, Cave Troll, Ravager Den and War Chariot",
      },
    ],
  },
  {
    name: "Sentinel III",
    attack_type: "Ranged",
    race: "Elves",
    habilities: [
      {
        name: "Swiftness",
        description: "100% change to Evade attack 1",
      },
    ],
  },
];

export const heroesArmies = [
  {
    name: "Faramir",
    armies: [
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 40, armySize: [] }],
        },
      ],
      [
        {
          name: "Guard of the Tower III",
          sizes: [{ heroLevel: 40, armySize: [] }],
        },
        {
          name: "Sharpshooter III",
          sizes: [{ heroLevel: 40, armySize: [] }],
        },
        // TO DO
      ],
    ],
  },
  {
    name: "Theoden",
    armies: [
      [
        {
          name: "Cavalier III",
          sizes: [{ heroLevel: 0, armySize: [] }],
        },
      ],
    ],
  },
  {
    name: "Haldir",
    armies: [
      [
        {
          name: "Herald III",
          sizes: [{ heroLevel: 40, armySize: [2000] }],
        },
        {
          name: "Marchwarden III",
          sizes: [{ heroLevel: 40, armySize: [1000] }],
        },
      ],
    ],
  },
  {
    name: "Aragorn",
    armies: [
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
        {
          name: "Spearman II",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
      ],
      [
        {
          name: "Ranger II",
          sizes: [{ heroLevel: 25, armySize: [1333] }],
        },
        {
          name: "Knight II",
          sizes: [{ heroLevel: 25, armySize: [666] }],
        },
        {
          name: "Spearman II",
          sizes: [{ heroLevel: 25, armySize: 1333 }],
        },
      ],
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 35, armySize: [3000] }],
        },
      ],
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 40, armySize: [2000] }],
        },
        {
          name: "Sharpshooter III",
          sizes: [{ heroLevel: 40, armySize: [2000] }],
        },
      ],
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 35, armySize: [1600] }],
        },
        {
          name: "Warden II",
          sizes: [{ heroLevel: 35, armySize: [1600] }],
        },
      ],
      [
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 35, armySize: [1750] }],
        },
        {
          name: "Longbowman II",
          sizes: [{ heroLevel: 35, armySize: [1750] }],
        },
      ],
    ],
  },
  {
    name: "Gimli",
    armies: [
      [
        {
          name: "Shieldbearer",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
        {
          name: "Heavy Axe Thrower",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
      ],
      [
        {
          name: "Ram Rider III",
          sizes: [{ heroLevel: 35, armySize: [750] }],
        },
        {
          name: "Guardian III",
          sizes: [{ heroLevel: 35, armySize: [1500, 1750] }],
        },
      ],
      [
        {
          name: "Master Thrower III",
          sizes: [{ heroLevel: 0, armySize: [] }],
        },
        {
          name: "Guardian III",
          sizes: [{ heroLevel: 0, armySize: [] }],
        },
      ],
      [
        {
          name: "Goat Rider II",
          sizes: [{ heroLevel: 35, armySize: [800] }],
        },
        {
          name: "Master Thrower III",
          sizes: [{ heroLevel: 35, armySize: [1600] }],
        },
      ],
    ],
  },
  {
    name: "Legolas",
    armies: [
      [
        {
          name: "Sentinel III",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
        {
          name: "Warden II",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
      ],
      [
        {
          name: "Bow Knight",
          sizes: [
            { heroLevel: 35, armySize: [750] },
            { heroLevel: 40, armySize: [1000] },
          ],
        },
        {
          name: "Sentinel III",
          sizes: [
            { heroLevel: 35, armySize: [1500] },
            { heroLevel: 40, armySize: [2000] },
          ],
        },
      ],
      [
        {
          name: "Sentinel III",
          sizes: [{ heroLevel: 35, armySize: [1600] }],
        },
        {
          name: "Marchwarden IV",
          sizes: [{ heroLevel: 35, armySize: [800] }],
        },
      ],
      [
        {
          name: "Herald III",
          sizes: [{ heroLevel: 35, armySize: [1750] }],
        },
        {
          name: "Bow Knight",
          sizes: [{ heroLevel: 35, armySize: [875] }],
        },
      ],
    ],
  },
  {
    name: "Gandalf",
    armies: [
      [
        {
          name: "Sentinel III",
          sizes: [{ heroLevel: 50, armySize: [1250] }],
        },
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 50, armySize: [1250] }],
        },
      ],
      [
        {
          name: "Sharpshooter III",
          sizes: [{ heroLevel: 50, armySize: [1250] }],
        },
        {
          name: "Herald III",
          sizes: [{ heroLevel: 50, armySize: [1250] }],
        },
      ],
      [
        {
          name: "Sharpshooter III",
          sizes: [{ heroLevel: 30, armySize: [1750] }],
        },
        {
          name: "Ranger II",
          sizes: [{ heroLevel: 30, armySize: 1750 }],
        },
      ],
      [
        {
          name: "Cavalier",
          sizes: [{ heroLevel: 40, armySize: [1250] }],
        },
        {
          name: "Dunedain III",
          sizes: [{ heroLevel: 50, armySize: [2500] }],
        },
      ],
    ],
  },
];
