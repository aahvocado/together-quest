import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  // Icon,
  ListComponent,
} from 'components';

export class InventoryComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: '',
    /** @type {string} */
    className: '',
    /** @type {array<ItemModel>} */
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
      <div className={cn('inventory-component', baseClassName, className)}>
        <ListComponent
          baseClassName='flex-col'
          className=''
          list={inventory}
          getKey={(props) => (props.id)}
          ItemComponent={InventoryItemComponent}
        />
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

    console.log('invitem', this.props);

    return (
      <div className={cn('item-component', baseClassName, className)}>
        {itemModel.name}
      </div>
    );
  }
}
