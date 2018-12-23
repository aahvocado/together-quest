import React, { PureComponent } from 'react';
import cn from 'classnames';

import Collapsible from 'react-collapsible';

import * as characterStatsHelper from 'utils/characterStatsHelper';

import {
  Icon,
} from 'components';

export class CharacterStatsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-col',
    /** @type {string} */
    className: '',
    /** @type {Collection<StatModel>} */
    collection: undefined,
    /** @type {Array} */
    statModifiers: [],
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      collection,
      statModifiers,
    } = this.props;

    return (
      <div className={cn('character-stats-component', baseClassName, className)}>
        { collection.map((model) => (
          <CollapsibleStatComponent
            key={model.id}
            model={model}
            modifiers={statModifiers[model.get('typeId')]}
          />
        ))}
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
    /** @type {StatModel} */
    model: undefined,
    /** @type {Array} */
    modifiers: undefined,
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      model,
      modifiers,
    } = this.props;

    return (
      <Collapsible
        className={cn(baseClassName, className)}
        openedClassName={cn(baseClassName, className)}
        transitionTime={200}
        transitionCloseTime={100}
        trigger={
          <SimpleStatComponent
            model={model}
            modifiers={modifiers}
          />
        }
      >
        <DetailedStatComponent
          model={model}
          modifiers={modifiers}
        />
      </Collapsible>
    );
  }
}

export class SimpleStatComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'position-relative grid-cols-2 flex-row align-center bg-white borradius-1 pad-2 bor-1 borcolor-litegray',
    /** @type {string} */
    className: '',
    /** @type {StatModel} */
    model: undefined,
    /** @type {Array} */
    modifiers: [],
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      model,
    } = this.props;

    const statName = model.getName();

    return (
      <div
        className={cn('stat-component', baseClassName, className)}
      >
        { this.renderStatIcon() }

        { this.renderValueElement() }

        <div className='mar-l-2'>{ statName }</div>

      </div>
    );
  }
  /**
   * value
   *
   * @returns {React.Element}
   */
  renderValueElement() {
    const {
      model,
      modifiers,
    } = this.props;

    const modifiedValue = characterStatsHelper.calculateModifiedStatValue(model, modifiers);

    if (!modifiedValue) {
      return null;
    }

    return (
      <div className='fsize-6 flex-grow text-right'>
        { modifiedValue }
      </div>
    )
  }
  /**
   * stat icon
   *
   * @returns {React.Element}
   */
  renderStatIcon() {
    const { model } = this.props;
    const icon = model.get('icon');

    if (!icon) {
      return null;
    }

    return (
      <Icon className='position-absolute pos-l-0 opacity-2 mar-l-2 fsize-4' name={icon} />
    )
  }
}

export class DetailedStatComponent extends PureComponent {
  static defaultProps = {
    /** @type {StatModel} */
    model: undefined,
    /** @type {Array} */
    modifiers: [],
  }
  /** @override */
  render() {
    const {
      model,
      modifiers,
    } = this.props;

    const statTypeId = model.get('typeId');

    return (
      <div className='pad-2 borradius-2 color-white text-stroke'>
        <StatLineComponent
          label='Base'
          value={model.get('value')}
        />

        <div
          className='mar-t-1'
        >
          { modifiers.map((effectModel, idx) => {
            return (
              <StatLineComponent
                key={`${effectModel.get('name')}-stat-line-${idx}-key`}
                label={effectModel.get('name')}
                value={effectModel.getModifierValueByType(statTypeId)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

class StatLineComponent extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    label: '',
    /** @type {String} */
    value: '',
  }
  /** @override */
  render() {
    const { label, value } = this.props;

    const displayValue = value < 0 ? value : `+${value}`;

    return (
      <div className='grid-cols-2 flex-row align-center'>
        <div className='fsize-4 mar-l-1 text-right'>{displayValue}</div>
        <div className='mar-l-2'>{label}</div>
      </div>
    )
  }
}

