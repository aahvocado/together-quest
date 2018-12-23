import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  Panel,
} from 'components';

/**
 * simple element creator for item details
 */
export class ItemModelDetailsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
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
      <Panel className={cn('inventory-item-details-component', baseClassName, className)}>
        { this.renderNameElement() }

        { this.renderQuantityElement() }

        { this.renderDescriptionElement() }

        { this.renderFlavorTextElement() }
      </Panel>
    );
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
}

// export default ItemModelDetailsComponent;
