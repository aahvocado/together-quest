import React, { PureComponent } from 'react';
import cn from 'classnames';

import Collapsible from 'react-collapsible';

import {
  Icon,
} from 'components';

import { CharacterStatsComponent } from 'components/CharacterStatsComponent';

export class CharacterNameComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-col bg-white borradius-1 pad-2',
    /** @type {string} */
    className: '',
    /** @type {string} */
    name: '',
    /** @type {string} */
    title: '',
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
/**
 * simply creating the section that the trigger is clickable on
 */
class CharacterSectionTrigger extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    title: '',
    /** @type {boolean} */
    open: false,
  }
  /** @override */
  render() {
    const {
      open,
      title,
    } = this.props;

    const toggleIcon = open ? 'fa-toggle-on' : 'fa-toggle-off';

    return (
      <div className='flex-row flex-centered'>
        <h2 className='flex-grow'>{title}</h2>
        <Icon className='flex-none' name={toggleIcon} />
      </div>
    )
  }
}
/**
 * has everything Character Component
 */
export class CharacterComponent extends PureComponent {
  render() {
    const { character: { attributes } } = this.props;

    const {
      name,
      title,
      stats,

      equipments,
      stuff,
      traits,
      honors,
    } = attributes;

    return (
      <div className='character-component flex-col width-full'>
        <CharacterNameComponent
          className='sibling-mar-t-2'
          name={name}
          title={title}
        />

        <Collapsible
          className='bg-white borradius-1 pad-2 sibling-mar-t-2 simple-shadow'
          openedClassName='bg-white borradius-1 pad-2 sibling-mar-t-2'
          transitionTime={200}
          transitionCloseTime={200}
          trigger={<CharacterSectionTrigger title='Stats' open={false} />}
          triggerWhenOpen={<CharacterSectionTrigger title='Stats' open={true} />}
        >
          <CharacterStatsComponent
            className='mar-t-1'
            stats={stats}
          />
        </Collapsible>

        {/* equipment */}
        <div className='character-equipments flex-col bg-white borradius-1 pad-2'>
          <div>[equipments]</div>
          { equipments.map((equipment, idx) =>
            <div className='equipment' key={`${idx}`}>
              <div className='equipment-main'>
                <Icon name='fa-puzzle-piece' />
                <span className='equipment-name'>{equipment.name}</span>
              </div>
            </div>
          )}
        </div>

        {/* stuff */}
        <div className='character-stuff flex-col bg-white borradius-1 pad-2'>
          <div>[stuff]</div>
          { stuff.map((item, idx) =>
            <div className='item' key={`${idx}`}>
              <Icon name='fa-box' />
              <span className='item-name'>{item}</span>
            </div>
          )}
        </div>

        {/* traits */}
        <div className='character-traits flex-col bg-white borradius-1 pad-2'>
          <div>[traits]</div>
          { traits.map((trait, idx) =>
            <div className='trait' key={`${idx}`}>
              <Icon name='fa-tag' />
              <span className='trait-name'>{trait}</span>
            </div>
          )}
        </div>

        {/* honors */}
        <div className='character-honors flex-col bg-white borradius-1 pad-2'>
          <div>[honors]</div>
          { honors.map((honor, idx) =>
            <div className='honor' key={`${idx}`}>
              <Icon name='fa-certificate' />
              <span className='honor-name'>{honor}</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CharacterComponent;

