import React, { Component } from 'react';

import StatsComponent from 'components/StatsComponent';
import ListComponent from 'components/ListComponent';

export class CharacterInfoContainer extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className='character-info-container'>
        <div className='character-name'>{name}</div>
        <div className='character-title'>{`"${title}"`}</div>
        <StatsComponent />
      </div>
    );
  }
}

export default class CharacterCard extends Component {

  render() {
    const { character: { name, title, stuff, traits, honors } } = this.props;

    return (
      <div className='character-card variant-full tg-card'>

        <div className='character-card-content-container'>
          <div className='character-icon'></div>

          <CharacterInfoContainer
            name={ name }
            title={ title }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-stuff'}
            label={'Stuff'}
            list={ stuff }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-traits'}
            label={'Traits'}
            list={ traits }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-honors'}
            label={'Honors'}
            list={ honors }
          />
        </div>

      </div>
    );
  }
}
