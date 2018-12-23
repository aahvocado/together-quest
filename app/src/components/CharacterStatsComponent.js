import React, { PureComponent } from 'react';
import cn from 'classnames';

import * as catquestLanguageHelper from 'apis/catquest/catquestLanguageHelper';

import Collapsible from 'react-collapsible';

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
    } = this.props;

    return (
      <div className={cn('character-stats-component', baseClassName, className)}>
        { collection.map((model) => (
          <CollapsibleStatComponent
            key={model.id}
            model={model}
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
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      model,
    } = this.props;

    return (
      <Collapsible
        className={cn(baseClassName, className)}
        openedClassName={cn(baseClassName, className)}
        transitionTime={200}
        transitionCloseTime={100}
        trigger={
          <SimpleStatComponent model={model} />
        }
      >
        <DetailedStatComponent model={model} />
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
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      model,
    } = this.props;

    const {
      typeId,
    } = model.attributes;

    const statName = catquestLanguageHelper.getStatName(typeId);

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
    const { model } = this.props;
    const trueValue = model.get('value');

    if (!trueValue) {
      return null;
    }

    return (
      <div className='fsize-6 flex-grow text-right'>
        { trueValue }
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
  }
  /** @override */
  render() {
    const {
      model,
    } = this.props;

    const {
      modifier,
      value,
    } = model.attributes;

    return (
      <div className='pad-2 borradius-2 color-white text-stroke'>
        <div className='grid-cols-2 flex-row align-center'>
          <div className='fsize-4 mar-l-1 text-right'>{value}</div>
          <div className='mar-l-2'>Base Value</div>
        </div>

        <div className='grid-cols-2 flex-row align-center'>
          <div className='fsize-4 mar-l-1 text-right'>{modifier}</div>
          <div className='mar-l-2'>Modifier</div>
        </div>
      </div>
    );
  }
}

