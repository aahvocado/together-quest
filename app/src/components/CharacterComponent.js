import React, { PureComponent } from 'react';

import {
  Icon
} from 'components';

class CharacterEyecatchComponent extends PureComponent {
  render() {
    // const { character } = this.props;

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
      equipments,
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
        {/* name */}
        <div className='character-name'>{name}</div>

        {/* title */}
        <div className='character-title'>{title}</div>

        {/* stats */}
        <div className='character-stats'>
          <span className='stat strength-stat'>
            <span className='stat-name'>{strength}</span>
            <Icon name='ra-muscle-up' />
          </span>

          <span className='stat agility-stat'>
            <span className='stat-name'>{agility}</span>
            <Icon name='fa-running' />
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

        {/* equipment */}
        <div className='character-equipments'>
          <div>[equipments]</div>
          { equipments.map((equipment) =>
            <div className='equipment'>
              <div className='equipment-main'>
                <Icon name='fa-puzzle-piece' />
                <span className='equipment-name'>{equipment.name}</span>
              </div>
              {/*
              <span className='equipment-slot'>{equipment.slot}</span>
              <span className='equipment-mod'>{equipment.statMods.toString()}</span>
              */}
            </div>
          )}
        </div>

        {/* stuff */}
        <div className='character-stuff'>
          <div>[stuff]</div>
          { stuff.map((item) =>
            <div className='item'>
              <Icon name='fa-box' />
              <span className='item-name'>{item}</span>
            </div>
          )}
        </div>

        {/* traits */}
        <div className='character-traits'>
          <div>[traits]</div>
          { traits.map((trait) =>
            <div className='trait'>
              <Icon name='fa-tag' />
              <span className='trait-name'>{trait}</span>
            </div>
          )}
        </div>

        {/* honors */}
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
