import React, { PureComponent } from 'react';
import cn from 'classnames';

import * as catquestLanguageHelper from 'apis/catquest/catquestLanguageHelper';

/**
 * simple element creator for item details
 */
export class ItemModelDetailsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'pad-4 flex-col width-full',
    /** @type {string} */
    className: '',
    /** @type {ItemModel} */
    model: undefined,
  };
  /** @override */
  render() {
    const {
      baseClassName,
      className,
    } = this.props;

    return (
      <div className={cn('inventory-item-details-component', baseClassName, className)}>
        { this.renderBody() }
      </div>
    );
  }
  /**
   * use this to choose the order of rendering the inner components
   *
   * @abstract
   * @returns {React.Element}
   */
  renderBody() {
    return null;
  }
  /**
   * @returns {React.Element}
   */
  renderNameElement() {
    const { model } = this.props;

    const name = model.get('name');

    if (!name) {
      return null;
    }

    return (
      <h2 className='bor-b-1 borcolor-litegray pad-b-2 sibling-mar-t-2 flex-grow'>{ name }</h2>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderQuantityElement() {
    const { model } = this.props;

    const {
      isStackable,
      quantity,
    } = model.attributes;

    if (!isStackable) {
      return null;
    }

    if (quantity <= 0) {
      return (
        <div className='sibling-mar-t-2'>There are none in your possession.</div>
      )
    }

    if (quantity === 1) {
      return (
        <div className='sibling-mar-t-2'>You possess 1 of this item.</div>
      )
    }

    return (
      <div className='sibling-mar-t-2'>{`You possess ${quantity} of this item.`}</div>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderDescriptionElement() {
    const { model } = this.props;
    const description = model.get('description');

    if (!description) {
      return null;
    }

    return (
      <p className='sibling-mar-t-2'>{ description }</p>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderFlavorTextElement() {
    const { model } = this.props;

    const flavorText = model.get('flavorText');

    if (!flavorText) {
      return null;
    }

    if (flavorText.length <= 0) {
      return null;
    }

    return (
      <i className='sibling-mar-t-2 color-darkgray f-italic f-thin'>{ flavorText }</i>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderStatModifiersElement() {
    const { model } = this.props;
    const modifiers = model.get('modifiers');

    if (!modifiers) {
      return null;
    }

    if (modifiers.length <= 0) {
      return null;
    }

    return (
      <div className='flex-col sibling-mar-t-2'>
        { modifiers.map((model, idx) => (
          <ModifiersDetailsComponent
            key={model.id || `effect-embedded-expanded-${idx}-key`}
            model={model}
          />
        ))}
      </div>
    )
  }
}
/**
 * simplified details of an embedded effect
 */
export class ModifiersDetailsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-row sibling-mar-t-1 f-bold',
    /** @type {string} */
    className: '',
    /** @type {Model} */
    model: undefined, // currently an object, not a Model
  };
  /**
   * @returns {React.Element}
   */
  render() {
    const {
      baseClassName,
      className,
      model,
    } = this.props;

    if (!model) {
      return null;
    }

    const {
      targetTypeId,
      value,
    } = model;

    const statName = catquestLanguageHelper.getStatName(targetTypeId);

    const displayValue = value < 0 ? value : `+${value}`;

    return (
      <div className={cn('modifiers-detail-component', baseClassName, className)}>
        {`${statName} ${displayValue}`}
      </div>
    )
  }
}

export default ItemModelDetailsComponent;
