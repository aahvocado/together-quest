import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  Icon,
  ModalComponent,
  Panel,
} from 'components';

export class InventoryComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1 grid-cols-2',
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
      <div className={cn('inventory-component', baseClassName, className)}>
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
    baseClassName: 'borradius-2 mar-1 flex-col position-relative bg-navy cursor-pointer',
    /** @type {string} */
    className: '',
    /** @type {ItemModel} */
    itemModel: [],
  };
  /** @override */
  constructor(props) {
    super(props);

    this.toggleDetails = this.toggleDetails.bind(this);

    this.state = {
      isDetailsOpen: false,
    }
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      itemModel,
    } = this.props;

    // const {

    // } = itemModel.attributes;

    const { isDetailsOpen } = this.state;

    return (
      <Fragment>
        <ModalComponent
          className='flex-centered width-full mar-2'
          active={isDetailsOpen}
          onOverlayClick={this.toggleDetails}
        >
          <InventoryItemDetailsComponent
            className='item-details-component--modal'
            itemModel={itemModel}
          />
        </ModalComponent>

        <div
          className={cn('item-component', baseClassName, className)}
          onClick={this.toggleDetails}
        >
          <div className='position-absolute pos-0 flex-centered opacity-2 mar-b-1'>
            {this.getBackgroundIcon()}
          </div>

          <div className='flex-centered flex-grow flex-wrap pad-1 color-white text-stroke text-center zindex-1'>
            {this.getDisplayText()}
          </div>
        </div>
      </Fragment>
    );
  }
  /**
   *
   */
  toggleDetails() {
    const { isDetailsOpen } = this.state;
    this.setState({isDetailsOpen: !isDetailsOpen});
  }
  /**
   * @returns {string}
   */
  getDisplayText() {
    const { itemModel: { attributes }} = this.props;
    const {
      isStackable,
      name,
      quantity,
    } = attributes;

    if (isStackable) {
      return `${quantity} ${name}`;
    }

    return name;
  }
  /**
   * @returns {React.Element}
   */
  getBackgroundIcon() {
    const { itemModel: { attributes }} = this.props;
    const {
      icon,
    } = attributes;

    return (
      <Icon
        name={icon}
        className='fsize-8'
      />
    )
  }
}

export class InventoryItemDetailsComponent extends PureComponent {
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
      description,
      name,
    } = itemModel.attributes;

    return (
      <Panel className={cn('item-details-component', baseClassName, className)}>
        <h2 className='bor-b-1 borcolor-litegray pad-b-1 mar-b-1 flex-grow'>{name}</h2>

        <div className=''>
          {this.getQuantityText()}
        </div>

        <p className='mar-t-2'>{description}</p>

        { this.renderFlavorText() }
      </Panel>
    );
  }
  /**
   * @returns {string}
   */
  getQuantityText() {
    const { itemModel: { attributes }} = this.props;
    const {
      isStackable,
      quantity,
    } = attributes;

    if (!isStackable) {
      return null;
    }

    if (quantity <= 0) {
      return 'There are none in your possession.';
    }

    if (quantity === 1) {
      return 'You possess 1 of this item.'
    }

    return `You possess ${quantity} of this item.`;
  }
  /**
   * @returns {React.Element}
   */
  renderFlavorText() {
    const { itemModel: { attributes }} = this.props;
    const { flavorText } = attributes;

    if (flavorText && flavorText.length > 0) {
      return (
        <i className='mar-t-2 color-darkgray f-italic f-thin'>{flavorText}</i>
      )
    }

    return null;
  }
}
