import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  Icon,
  ModalComponent,
} from 'components';

import { ItemModelDetailsComponent } from 'components/ItemModelDetailsComponent';
import { EffectsCollapsibleComponent } from 'components/CharacterEffectsComponent';

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
    collection: undefined,
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      collection,
    } = this.props;

    return (
      <div className={cn('inventory-component', baseClassName, className)}>
        { collection.map((model) => (
          <InventoryItemComponent
            key={model.id}
            model={model}
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
    model: undefined,
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
      model,
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
            model={model}
          />
        </ModalComponent>

        <InventoryItemBasicComponent
          model={model}
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
}
/**
 * simple graphical display of an Item
 */
export class InventoryItemBasicComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-1 flex-centered borradius-2 flex-col position-relative bg-navy cursor-pointer',
    /** @type {string} */
    className: '',
    /** @type {ItemModel} */
    model: [],
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
        className={cn('inventory-item-basic-component', baseClassName, className)}
        onClick={this.handleOnClick}
        style={{
          height: '70px',
        }}
      >
        { this.renderBackgroundIcon() }

        { this.renderDisplayText() }
      </div>
    );
  }
  /**
   * @returns {React.Element}
   */
  renderDisplayText() {
    const { model } = this.props;
    const {
      isStackable,
      name,
      quantity,
    } = model.attributes;

    if (!name) {
      return null;
    }

    const displayText = isStackable ? `${quantity} ${name}` : name;

    return (
      <div className='flex-wrap pad-1 color-white text-stroke text-center wordbreak-break zindex-1'>
        { displayText }
      </div>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderBackgroundIcon() {
    const { model } = this.props;
    const icon = model.get('icon');

    if (!icon) {
      return null;
    }

    return (
      <div className='position-absolute pos-0 flex-centered opacity-2 mar-b-1'>
        <Icon
          name={icon}
          className='fsize-8'
        />
      </div>
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
export class InventoryItemDetailsComponent extends ItemModelDetailsComponent {
  /** @override */
  renderBody() {
    return (
      <Fragment>
        { this.renderNameElement() }

        { this.renderQuantityElement() }

        { this.renderDescriptionElement() }

        { this.renderEffectsCollection() }

        { this.renderFlavorTextElement() }
      </Fragment>
    )
  }
  /**
   * @returns {React.Element}
   */
  renderEffectsCollection() {
    const { model } = this.props;
    const effects = model.get('effects');

    if (!effects) {
      return null;
    }

    if (effects.length <= 0) {
      return null;
    }

    return (
      <div className='effects-collection borradius-2 sibling-mar-t-2 bg-darknavy pad-1'>
        <h3 className='fsize-small text-center color-white text-stroke pad-1'>Effects</h3>
        <ul
          className='flex-col overflow-auto'
          style={{
            maxHeight: '200px'
          }}
        >
          { effects.map((model) => (
            <EffectsCollapsibleComponent
              key={model.id}
              model={model}
            />
          ))}
        </ul>
      </div>
    )
  }
}
