import React, { PureComponent } from 'react';
import cn from 'classnames';

import Collapsible from 'react-collapsible';

import {
  Icon,
} from 'components';

import { CharacterStatsComponent } from 'components/CharacterStatsComponent';
import { InventoryComponent } from 'components/InventoryComponent';

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
 * section that the trigger is clickable on
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
 * since collapsible is reused in the same way, this combines it
 */
class CharacterSectionCollapsible extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'bg-white borradius-1 pad-2 sibling-mar-t-2 simple-shadow',
    /** @type {string} */
    className: '',
    /** @type {string} */
    title: '',
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      title,
    } = this.props;

    return (
      <Collapsible
        className={cn(baseClassName, className)}
        openedClassName={cn(baseClassName, className)}
        transitionTime={200}
        transitionCloseTime={200}
        trigger={<CharacterSectionTrigger title={title} open={false} />}
        triggerWhenOpen={<CharacterSectionTrigger title={title} open={true} />}
      >
        { this.props.children }
      </Collapsible>
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
        {/* name */}
        <CharacterNameComponent
          className='sibling-mar-t-2'
          name={name}
          title={title}
        />

        {/* stats */}
        <CharacterSectionCollapsible title='Stats'>
          <CharacterStatsComponent
            className='mar-t-1'
            stats={stats}
          />
        </CharacterSectionCollapsible>

        {/* equipment */}
        <CharacterSectionCollapsible title='Equipment'>
          { equipments.map((equipment, idx) =>
            <div className='equipment' key={`${idx}`}>
              <div className='equipment-main'>
                <Icon name='fa-puzzle-piece' />
                <span className='equipment-name'>{equipment.name}</span>
              </div>
            </div>
          )}
        </CharacterSectionCollapsible>

        {/* Inventory */}
        <CharacterSectionCollapsible title='Inventory'>
          <InventoryComponent inventory={stuff} />
        </CharacterSectionCollapsible>

        {/* traits */}
        <CharacterSectionCollapsible title='Traits'>
          { traits.map((trait, idx) =>
            <div className='trait' key={`${idx}`}>
              <Icon name='fa-tag' />
              <span className='trait-name'>{trait}</span>
            </div>
          )}
        </CharacterSectionCollapsible>

        {/* honors */}
        <CharacterSectionCollapsible title='Honors'>
          { honors.map((honor, idx) =>
            <div className='honor' key={`${idx}`}>
              <Icon name='fa-certificate' />
              <span className='honor-name'>{honor}</span>
            </div>
          )}
        </CharacterSectionCollapsible>

      </div>
    )
  }
}

export default CharacterComponent;

