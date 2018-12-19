import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  Icon,
  ListComponent,
} from 'components';

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

export class CharacterStatsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'bg-white borradius-1 pad-2',
    /** @type {string} */
    className: '',
    /** @type {array<StatModel>} */
    stats: [],
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      stats,
    } = this.props;

    return (
      <div className={cn('character-stats-component', baseClassName, className)}>
        <ListComponent
          baseClassName='flex-col'
          className=''
          list={stats}
          getKey={(props) => (props.attributes.id)}
          ItemComponent={StatComponent}
        />
      </div>
    );
  }
}

export class StatComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-row bg-white borradius-1 pad-2 align-center',
    /** @type {string} */
    className: '',
    /** @type {StatModel.attributes} */
    attributes: {},
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      attributes,
    } = this.props;

    const {
      icon,
      name,
      modifier,
      value,
    } = attributes;

    const displayValue = Math.max(value + modifier, 0);

    return (
      <div className={cn('stat-component', baseClassName, className)}>
        <div className='flex-row'>
          <div className='fsize-6'>{displayValue}</div>
          { this.renderModifiedIcon() }
        </div>

        <div className='flex-row borcolor-litegray bor-l-1 pad-l-1 mar-l-1'>
          <div>{name}</div>
        </div>
      </div>
    );
  }
  /**
   * icon that shows which direction stat was modified by
   *
   * @returns {React.Element | null}
   */
  renderModifiedIcon() {
    const { attributes } = this.props;
    const { modifier } = attributes;

    // guard clause - if not modifier then we don't need to show an icon
    if (modifier === 0) {
      return null;
    }

    // less than zero is down, greater than zero is up
    const modIcon = modifier < 0 ? 'fa-arrow-down' : 'fa-arrow-up';
    return (
      <Icon name={modIcon} />
    )
  }
}

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

        <CharacterStatsComponent
          className='sibling-mar-t-2'
          stats={stats}
        />

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

