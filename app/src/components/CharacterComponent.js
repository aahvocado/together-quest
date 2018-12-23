import React, { PureComponent } from 'react';
import cn from 'classnames';

import Collapsible from 'react-collapsible';

import * as characterStatsHelper from 'utils/characterStatsHelper';

import {
  Icon,
} from 'components';

import { CharacterInventoryComponent } from 'components/CharacterInventoryComponent';
import { CharacterEffectsComponent } from 'components/CharacterEffectsComponent';
import { CharacterEquipmentsComponent } from 'components/CharacterEquipmentsComponent';
import { CharacterStatsComponent } from 'components/CharacterStatsComponent';

export class CharacterNameComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-col flex-centered bg-white borradius-4 pad-2',
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
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-col width-full',
    /** @type {string} */
    className: '',
    /** @type {CharacterModel} */
    character: undefined,
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      character,
    } = this.props;

    const {
      name,
      title,
      stats,
      equipments,
      inventory,
      traits,
      honors,
    } = character.attributes;

    const statModifiers = characterStatsHelper.getAllStatModifiers(character);
    console.log('characterStatsHelper', statModifiers);

    return (
      <div className={cn('character-component', baseClassName, className)}>
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
            statModifiers={statModifiers}
          />
        </CharacterSectionCollapsible>

        {/* equipment */}
        <CharacterSectionCollapsible title='Equipment'>
          <CharacterEquipmentsComponent
            collection={equipments}
          />
        </CharacterSectionCollapsible>

        {/* Inventory */}
        <CharacterSectionCollapsible title='Inventory'>
          <CharacterInventoryComponent
            collection={inventory}
          />
        </CharacterSectionCollapsible>

        {/* traits */}
        <CharacterSectionCollapsible title='Traits'>
          <CharacterEffectsComponent
            collection={traits}
          />
        </CharacterSectionCollapsible>

        {/* honors */}
        <CharacterSectionCollapsible title='Honors'>
          <CharacterEffectsComponent
            collection={honors}
          />
        </CharacterSectionCollapsible>

      </div>
    )
  }
}

export default CharacterComponent;

