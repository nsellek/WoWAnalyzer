import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import Module from 'Parser/Core/Module';

import { formatPercentage } from 'common/format';

class SpiritBomb extends Module {

suggestions(when) {

  if(this.owner.selectedCombatant.hasTalent(SPELLS.SPIRIT_BOMB_TALENT.id))
  {
    const spiritBombUptimePercentage = this.owner.modules.enemies.getBuffUptime(SPELLS.FRAILTY_SPIRIT_BOMB_DEBUFF.id) / this.owner.fightDuration;

    when(spiritBombUptimePercentage).isLessThan(0.95)
      .addSuggestion((suggest, actual, recommended) =>{
        return suggest(<span>Try to cast <SpellLink id={SPELLS.SPIRIT_BOMB_TALENT.id} /> more often. This is your core healing ability by applying <SpellLink id={SPELLS.FRAILTY_SPIRIT_BOMB_DEBUFF.id} /> debuff. Try to refresh it even if you have just one <SpellLink id={SPELLS.SOUL_FRAGMENT.id} /> available.</span>)
          .icon('inv_icon_shadowcouncilorb_purple')
          .actual(`${formatPercentage(spiritBombUptimePercentage)}% debuff total uptime.`)
          .recommended(`>${formatPercentage(recommended)}% is recommended`)
          .regular(recommended + 0.05).major(recommended + 0.15);
      });
    }
  }
}

export default SpiritBomb;