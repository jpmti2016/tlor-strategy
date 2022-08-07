export const heroes = [
  {
    name: "Theoden",
    armies: [
      [
        {
          name: "Cavalier III",
          attack_type: "Melee",
          sizes: [{ heroLevel: 0, armySize: [] }],

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
      ],
    ],
  },
  {
    name: "Haldir",
    armies: [
      [
        {
          name: "Herald",
          attack_type: "Melee",
          race: "Elves",
          sizes: [{ heroLevel: 0, armySize: [] }],

          habilities: [
            {
              name: "Counterattack",
              description: "+30 damage",
            },
          ],
        },
        {
          name: "Marchwarden",
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
      ],
    ],
  },
  {
    name: "Aragorn",
    armies: [
      [
        {
          name: "Dunedain III",
          attack_type: "Melee",
          race: "Men",
          sizes: [{ heroLevel: 35, armySize: 3000 }],
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
      ],
      [
        {
          name: "Dunedain III",
          attack_type: "Melee",
          race: "Men",
          sizes: [{ heroLevel: 0, armySize: [] }],

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
          name: "Sharpshooter",
          attack_type: "Ranged",
          race: "Men",
          sizes: [{ heroLevel: 0, armySize: [] }],

          habilities: [
            {
              name: "Ranged Advantage",
              description: "First 2 rounds dealt +40% Damage",
            },
          ],
        },
      ],
      [
        {
          name: "Dunedain III",
          attack_type: "Melee",
          race: "Men",
          sizes: [{ heroLevel: 35, armySize: 1600 }],
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
          name: "Warden",
          attack_type: "Melee",
          race: "Elves",
          sizes: [{ heroLevel: 35, armySize: 1600 }],
          habilities: [
            {
              name: "Counterattack",
              description:
                "Perform a Counterattack that deals 30% damage. Normal attack damage is -10%",
            },
          ],
        },
      ],
      [
        {
          name: "Dunedain III",
          attack_type: "Melee",
          race: "Men",
          sizes: [{ heroLevel: 35, armySize: 1750 }],
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
          name: "Longbowman",
          attack_type: "Ranged",
          sizes: [{ heroLevel: 35, armySize: 1750 }],
          race: "Men",
          habilities: [
            {
              name: "Ranged Advantage",
              description: "First 2 rounds + 40% Damage dealt",
            },
          ],
        },
      ],
    ],
  },
  {
    name: "Gimli",
    armies: [
      [
        {
          name: "Ram Rider III",
          attack_type: "Melee",
          race: "Dwarves",
          sizes: [{ heroLevel: 35, armySize: [750] }],
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
          sizes: [{ heroLevel: 35, armySize: [1500, 1750] }],
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
      ],
      [
        {
          name: "Master Thrower III",
          attack_type: "Ranged",
          race: "Dwarves",
          sizes: [{ heroLevel: 0, armySize: [] }],

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
          name: "Guardian III",
          attack_type: "Melee",
          race: "Dwarves",
          sizes: [{ heroLevel: 0, armySize: [] }],

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
      ],
      [
        {
          name: "Goat Rider II",
          attack_type: "Melee",
          race: "Dwarves",
          sizes: [{ heroLevel: 35, armySize: [800] }],
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
          sizes: [{ heroLevel: 35, armySize: [1600] }],
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
      ],
    ],
  },
  {
    name: "Legolas",
    armies: [
      [
        {
          name: "Bow Knight",
          attack_type: "Ranged",
          sizes: [{ heroLevel: 35, armySize: [750] }],
          habilities: [
            {
              name: "Mounted",
              description: "-10% damage received",
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
          sizes: [{ heroLevel: 35, armySize: [1500] }],
          habilities: [
            {
              name: "Swiftness",
              description: "100% change to Evade attack 1",
            },
          ],
        },
      ],
      [
        {
          name: "Sentinel III",
          attack_type: "Ranged",
          race: "Elves",
          sizes: [{ heroLevel: 35, armySize: [1600] }],
          habilities: [
            {
              name: "Swiftness",
              description: "100% change to Evade attack 1",
            },
          ],
        },
        {
          name: "Marchwarden IV",
          attack_type: "Ranged",
          sizes: [{ heroLevel: 35, armySize: [800] }],
          race: "Elves",
          habilities: [
            { name: "Keem Eye", description: "100% to gain Pursuit" },
            {
              name: "Indomitable",
              description: "Unaffected by Stun. Defense +20.0",
            },
          ],
        },
      ],
      [
        {
          name: "Herald III",
          attack_type: "Melee",
          sizes: [{ heroLevel: 35, armySize: [1750] }],
          race: "Elves",
          habilities: [
            {
              name: "Counterattack",
              description:
                "Counterattacks deal 30% damage. Normal attacks -10% damage",
            },
          ],
        },
        {
          name: "Bow Knight",
          attack_type: "Ranged",
          sizes: [{ heroLevel: 35, armySize: [875] }],
          habilities: [
            {
              name: "Mounted",
              description: "-10% damage received",
            },
            {
              name: "Giant Slayer",
              description:
                "+50% damage against large units like Mumakil, Entmoot, Beorning, Cave Troll, Ravager Den and War Chariot",
            },
          ],
        },
      ],
    ],
  },
  {
    name: "Gandalf",
    armies: [
      [
        {
          name: "Cavalier",
          attack_type: "Melee",
          sizes: [{ heroLevel: 0, armySize: [] }],

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
      ],
    ],
  },
];
