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
      name,
      value,
    } = attributes;

    return (
      <div className={cn('stat-component', baseClassName, className)}>
        <div>{name}</div>
        <div>{value}</div>
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
      </div>
    )
  }
}

export default CharacterComponent;

