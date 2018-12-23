import React, { PureComponent } from 'react';
import cn from 'classnames';

import * as catquestLanguageHelper from 'apis/catquest/catquestLanguageHelper';

import Collapsible from 'react-collapsible';

import {
  Icon,
  ListComponent,
} from 'components';

export class CharacterStatsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
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
          ItemComponent={CollapsibleStatComponent}
        />
      </div>
    );
  }
}

export class CollapsibleStatComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'sibling-mar-t-1 bg-navy borradius-1',
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

    return (
      <Collapsible
        className={cn(baseClassName, className)}
        openedClassName={cn(baseClassName, className)}
        transitionTime={200}
        transitionCloseTime={100}
        trigger={
          <SimpleStatComponent attributes={attributes} />
        }
      >
        <DetailedStatComponent attributes={attributes} />
      </Collapsible>
    );
  }
}

export class SimpleStatComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-row bg-white borradius-1 pad-2 align-center bor-1 borcolor-litegray',
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
      modifier,
      typeId,
      value,
    } = attributes;

    const statName = catquestLanguageHelper.getStatName(typeId);

    const displayValue = Math.max(value + modifier, 0);

    return (
      <div className={cn('stat-component', baseClassName, className)}>
        <div className='flex-row'>
          <div className='fsize-6'>{displayValue}</div>
          { this.renderModifiedIcon() }
        </div>

        <div className='flex-centered flex-row flex-grow borcolor-litegray bor-l-1 pad-l-1 mar-l-1'>
          <div className='flex-grow'>{statName}</div>
          <Icon className='flex-none fsize-4' name={icon} />
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

export class DetailedStatComponent extends PureComponent {
  static defaultProps = {
    /** @type {StatModel.attributes} */
    attributes: {},
  }
  /** @override */
  render() {
    const {
      attributes,
    } = this.props;

    const {
      modifier,
      value,
    } = attributes;

    return (
      <div className='pad-2 borradius-2 color-white text-stroke'>
        <div className='flex-row align-center'>
          <div>Current Value</div>
          <div className='fsize-4 mar-l-1'>{value}</div>
        </div>

        <div className='flex-row align-center'>
          <div>Modifier</div>
          <div className='fsize-4 mar-l-1'>{modifier}</div>
        </div>
      </div>
    );
  }
}

