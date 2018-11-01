import React, { PureComponent } from 'react';

import {
  Icon
} from 'components';

class CharacterEyecatchComponent extends PureComponent {
  render() {
    const { character } = this.props;

    return (
      <div className='tg-character tg-character--eyecatch'>
        <div>image</div>
        <div>name</div>
        <div>title</div>
      </div>
    );
  }
};

class CharacterComponent extends PureComponent {
  render() {
    const { character } = this.props;

    const {
      name,
      title,
      stats,
      stuff,
      traits,
      honors,
    } = character;

    const {
      strength,
      agility,
      wisdom,
      charisma,
      magic,
    } = stats;

    return (
      <div className='character-component'>
        <div className='character-name'>{name}</div>

        <div className='character-title'>{title}</div>

        <div className='character-stats'>
          <span className='stat strength-stat'>
            <span className='stat-name'>{strength}</span>
            <Icon name='ra-muscle-up' />
          </span>

          <span className='stat agility-stat'>
            <span className='stat-name'>{agility}</span>
            <Icon name='ra-player-dodge' />
          </span>

          <span className='stat wisdom-stat'>
            <span className='stat-name'>{wisdom}</span>
            <Icon name='fa-brain' />
          </span>

          <span className='stat charisma-stat'>
            <span className='stat-name'>{charisma}</span>
            <Icon name='fa-smile-wink' />
          </span>

          <span className='stat magic-stat'>
            <span className='stat-name'>{magic}</span>
            <Icon name='ra-fairy-wand' />
          </span>
        </div>

        <div className='character-stuff'>
          <div>[stuff]</div>
          { stuff.map((item) =>
            <div className='item'>
              <Icon name='fa-box' />
              <span className='item-name'>{item}</span>
            </div>
          )}
        </div>

        <div className='character-traits'>
          <div>[traits]</div>
          { traits.map((trait) =>
            <div className='trait'>
              <Icon name='fa-tag' />
              <span className='trait-name'>{trait}</span>
            </div>
          )}
        </div>

        <div className='character-honors'>
          <div>[honors]</div>
          { honors.map((honor) =>
            <div className='honor'>
              <Icon name='fa-certificate' />
              <span className='honor-name'>{honor}</span>
            </div>
          )}
        </div>

      </div>
    );
  }
};

export default CharacterComponent;

export {
  CharacterComponent,
  CharacterEyecatchComponent,
}
