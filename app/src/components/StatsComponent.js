import React, { PureComponent } from 'react';

class StatComponent extends PureComponent {
  render() {
    const { label, shortLabel, value } = this.props;

    return (
      <div className="stat-component">
        <div className="stat-value">{ value }</div>
        <div className="stat-label">{ shortLabel || label }</div>
      </div>
    );
  }
}

class StatsComponent extends PureComponent {
  static defaultProps = {
    character: {
      stats: {},
      statMods: {},
    },
  }

  render() {
    const { character: { stats, statMods } } = this.props;

    const totalStr = stats.strength + statMods.strength;
    const totalAgi = stats.agility + statMods.agility;
    const totalWis = stats.wisdom + statMods.wisdom;
    const totalChr = stats.charisma + statMods.charisma;
    const totalMag = stats.magic + statMods.magic;

    return (
      <div className='character-stats'>
        <StatComponent label={'strength'} shortLabel={'STR'} value={totalStr} />
        <StatComponent label={'agility'} shortLabel={'AGI'} value={totalAgi} />
        <StatComponent label={'wisdom'} shortLabel={'WIS'} value={totalWis} />
        <StatComponent label={'charisma'} shortLabel={'CHR'} value={totalChr} />
        <StatComponent label={'magic'} shortLabel={'MAG'} value={totalMag} />
      </div>
    );
  }
}

export default StatsComponent;

export {
  StatsComponent,
  StatComponent,
}
