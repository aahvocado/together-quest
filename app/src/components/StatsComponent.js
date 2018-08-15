import React, { PureComponent } from 'react';

export class StatComponent extends PureComponent {
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

export default class CharacterCard extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {


    return (
      <div className='character-stats'>
        <StatComponent label={'strength'} shortLabel={'STR'} value={5} />
        <StatComponent label={'agility'} shortLabel={'AGI'} value={5} />
        <StatComponent label={'wisdom'} shortLabel={'WIS'} value={5} />
        <StatComponent label={'charisma'} shortLabel={'CHR'} value={5} />
        <StatComponent label={'magic'} shortLabel={'MAG'} value={5} />
      </div>
    );
  }
}
