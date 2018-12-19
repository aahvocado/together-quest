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
    baseClassName: 'flex-col bg-white borradius-1 pad-2',
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
          baseClassName='flex-row'
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
    baseClassName: 'flex-col bg-white borradius-1 pad-2',
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

    let bonusIcon;
    if (modifier < 0) {
      bonusIcon = 'fa-arrow-down';
    } else if (modifier > 0) {
      bonusIcon = 'fa-arrow-up';
    }

    return (
      <div className={cn('stat-component', baseClassName, className)}>
        <div className='flex-row'>
          <div className='fsize-6'>{displayValue}</div>

          { bonusIcon &&
            <Icon name={bonusIcon} />
          }
        </div>

        <div className='fsize-1'>{name}</div>

        <Icon name={icon} />

      </div>
    );
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

