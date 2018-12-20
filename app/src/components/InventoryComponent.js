import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  // Icon,
} from 'components';

export class InventoryComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
    /** @type {string} */
    className: '',
    /** @type {Collection<ItemModel>} */
    inventory: [],
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      inventory,
    } = this.props;

    return (
      <div className={cn('inventory-component flex-col', baseClassName, className)}>
        { inventory.map((item) => (
          <InventoryItemComponent
            key={item.id}
            itemModel={item}
          />
        ))}
      </div>
    );
  }
}

export class InventoryItemComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
    /** @type {string} */
    className: '',
    /** @type {ItemModel} */
    itemModel: [],
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      itemModel,
    } = this.props;

    const {
      isStackable,
      name,
      quantity,
    } = itemModel.attributes;

    return (
      <div className={cn('item-component', baseClassName, className)}>
        <div className='flex-row'>
          { isStackable && <div className='mar-r-1'>{quantity}</div> }
          <div>{name}</div>
        </div>
      </div>
    );
  }
}
