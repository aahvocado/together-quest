import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  Icon,
  ModalComponent,
  Panel,
} from 'components';

/**
 * inventory list
 */
export class CharacterInventoryComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1 grid-cols-2',
    /** @type {string} */
    className: '',
    /** @type {Collection<ItemModel>} */
    inventory: undefined,
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
/**
 * list item that combines the basic display and the detailed modal
 */
export class InventoryItemComponent extends PureComponent {
  static defaultProps = {
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
      itemModel,
    } = this.props;

    const { isDetailsOpen } = this.state;

    return (
      <Fragment>
        <ModalComponent
          className='flex-centered width-full mar-2'
          active={isDetailsOpen}
          onOverlayClick={this.toggleDetails}
        >
          <InventoryItemDetailsComponent
            itemModel={itemModel}
          />
        </ModalComponent>

        <InventoryItemDisplayComponent
          itemModel={itemModel}
          onClick={this.toggleDetails}
        />
      </Fragment>
    );
  }
  /**
   *
   */
  toggleDetails() {
    const { isDetailsOpen } = this.state;
    this.setState({ isDetailsOpen: !isDetailsOpen });
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
/**
 * simple graphical display of an Item
 */
export class InventoryItemDisplayComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'borradius-2 mar-1 flex-col position-relative bg-navy cursor-pointer',
    /** @type {string} */
    className: '',
    /** @type {ItemModel} */
    itemModel: [],
    /** @type {function} */
    onClick: () => {},
  };
  /** @override */
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
    } = this.props;

    return (
      <div
        className={cn('item-display-component', baseClassName, className)}
        onClick={this.handleOnClick}
        style={{
          height: '70px',
        }}
      >
        <div className='position-absolute pos-0 flex-centered opacity-2 mar-b-1'>
          {this.getBackgroundIcon()}
        </div>

        <div className='flex-centered flex-grow flex-wrap pad-1 color-white text-stroke text-center wordbreak-break zindex-1'>
          {this.getDisplayText()}
        </div>
      </div>
    );
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
  /**
   *
   */
  handleOnClick() {
    this.props.onClick()
  }
}
/**
 * more details of an ItemModel
 */
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
        <h2 className='bor-b-1 borcolor-litegray pad-b-2 sibling-mar-t-2 flex-grow'>{name}</h2>

        {this.renderQuantityText()}

        <p className='sibling-mar-t-2'>{description}</p>

        { this.renderFlavorText() }
      </Panel>
    );
  }
  /**
   * @returns {React.Element}
   */
  renderQuantityText() {
    const { itemModel: { attributes }} = this.props;
    const {
      isStackable,
      quantity,
    } = attributes;

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
  renderFlavorText() {
    const { itemModel: { attributes }} = this.props;
    const { flavorText } = attributes;

    if (flavorText && flavorText.length > 0) {
      return (
        <i className='sibling-mar-t-2 color-darkgray f-italic f-thin'>{flavorText}</i>
      )
    }

    return null;
  }
}
