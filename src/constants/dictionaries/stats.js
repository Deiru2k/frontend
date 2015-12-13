const statNames = {
  health: `HP`,
  armor: `Armor`,
  evasion: `Evasion`,
  aircraft: `Capacity`,
  line_of_sight: `LOS`,
  range: `Range`,
  accuracy: `Accuracy`,
  firepower: `Firepower`,
  torpedo: `Torpedo`,
  anti_air: `AA`,
  anti_sub: `ASW`,
  speed: `Speed`,
  luck: `Luck`,
};

const statValues = {
  speed: {
    10: `Fast`,
    5: `Slow`,
  },
  range: {
    1: `Short`,
    2: `Medium`,
    3: `Long`,
    4: `Very Long`,
  },
};

export {statNames, statValues};
