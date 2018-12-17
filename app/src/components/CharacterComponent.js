import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  Icon
} from 'components';

export class CharacterNameComponent extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    baseClassName: 'flex-col bg-white borradius-1 pad-2',
    /** @type {String} */
    className: '',
    /** @type {string} */
    name: '',
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      name,
      title,
    } = this.props;

    return (
      <div className={cn('character-name-component', baseClassName, className)}>
        <div className='flex-none fsize-5'>{name}</div>
        <div className='flex-none'>{title}</div>
      </div>
    );
  }
}

class StatComponent extends PureComponent{
  render() {
    const {iconName, type, value, modValue} = this.props;

    const finalValue = value + modValue;
    const hasStatMod = modValue !== 0;

    return (
      <span className={`stat ${type}-stat`}>
        <div className='stat-value-container'>
          <span className='stat-name'>{finalValue}</span>
          <span className='stat-mod'>{hasStatMod ? (modValue > 0 ? '+' : '-') : null}</span>
        </div>
        <Icon name={iconName} />
      </span>
    );
  }
}
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
      statMods,
    } = character;

    const {
      strength,
      agility,
      wisdom,
      charisma,
      magic,
    } = stats;

    const {
      strength: strengthMod,
      agility: agilityMod,
      wisdom: wisdomMod,
      charisma: charismaMod,
      magic: magicMod,
    } = statMods;

    return (
      <div className='character-component'>
        {/* name */}
        <div className='character-name'>{name}</div>

        {/* title */}
        <div className='character-title'>{title}</div>

        {/* stats */}
        <div className='character-stats'>
          <StatComponent
            iconName='ra-muscle-up'
            type='strength'
            value={strength}
            modValue={strengthMod}
          />

          <StatComponent
            iconName='fa-running'
            type='agility'
            value={agility}
            modValue={agilityMod}
          />

          <StatComponent
            iconName='fa-brain'
            type='wisdom'
            value={wisdom}
            modValue={wisdomMod}
          />

          <StatComponent
            iconName='fa-smile-wink'
            type='charisma'
            value={charisma}
            modValue={charismaMod}
          />

          <StatComponent
            iconName='ra-fairy-wand'
            type='magic'
            value={magic}
            modValue={magicMod}
          />
        </div>

        {/* equipment */}
        <div className='character-equipments'>
          <div>[equipments]</div>
          { equipments.map((equipment, idx) =>
            <div className='equipment' key={`${idx}`}>
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
          { stuff.map((item, idx) =>
            <div className='item' key={`${idx}`}>
              <Icon name='fa-box' />
              <span className='item-name'>{item}</span>
            </div>
          )}
        </div>

        {/* traits */}
        <div className='character-traits'>
          <div>[traits]</div>
          { traits.map((trait, idx) =>
            <div className='trait' key={`${idx}`}>
              <Icon name='fa-tag' />
              <span className='trait-name'>{trait}</span>
            </div>
          )}
        </div>

        {/* honors */}
        <div className='character-honors'>
          <div>[honors]</div>
          { honors.map((honor, idx) =>
            <div className='honor' key={`${idx}`}>
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
}
