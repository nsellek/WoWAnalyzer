import React from 'react';

import SuggestionsTab from 'Main/SuggestionsTab';

import MainCombatLogParser from 'Parser/Core/CombatLogParser';

import Haste from './Modules/Core/Haste';

import DamageDone from './Modules/Features/DamageDone';
import CastEfficiency from './Modules/Features/CastEfficiency';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';

import Moonfire from './Modules/Spells/Moonfire';
import Sunfire from './Modules/Spells/Sunfire';
import NewMoon from './Modules/Spells/NewMoon';
import HalfMoon from './Modules/Spells/HalfMoon';
import FullMoon from './Modules/Spells/FullMoon';
// import SolarUnemp from './Modules/Spells/Empowerments/SolarUnemp';
// import LunarUnemp from './Modules/Spells/Empowerments/LunarUnemp';
// import LunarOvercap from './Modules/Spells/Empowerments/LunarOvercap';
// import SolarOvercap from './Modules/Spells/Empowerments/SolarOvercap';
import AstralPower from './Modules/Features/AstralPower';
import UnempoweredLs from './Modules/Spells/UnempoweredLs';


class CombatLogParser extends MainCombatLogParser {
  static specModules = {
    haste: Haste,
      // Features
    damageDone: DamageDone,
    castEfficiency: CastEfficiency,
    alwaysBeCasting: AlwaysBeCasting,
      // Modules made but not loaded in the first PR
    moonfire: Moonfire,
    sunfire: Sunfire,
    newmoon: NewMoon,
    halfmoon: HalfMoon,
    fullmoon: FullMoon,
      // solarunemp: SolarUnemp,
      // lunarumep: LunarUnemp,
      // lunarovercap: LunarOvercap,
      // solarovercap: SolarOvercap,
    astralpower: AstralPower,
    unempoweredLS: UnempoweredLs,
  };

  generateResults() {
    const results = super.generateResults();

    results.tabs = [
      {
        title: 'Suggestions',
        url: 'suggestions',
        render: () => (
          <SuggestionsTab issues={results.issues} />
          ),
      },
      ...results.tabs,
    ];

    return results;
  }
}

export default CombatLogParser;
