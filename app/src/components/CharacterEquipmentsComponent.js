import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  ModalComponent,
} from 'components';

import { InventoryItemBasicComponent, InventoryItemDetailsComponent } from 'components/CharacterInventoryComponent';

/**
 * equipment list
 */
export class CharacterEquipmentsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1',
    /** @type {string} */
    className: '',
    /** @type {Collection<EquipmentModel>} */
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
      <div className={cn('character-equipments-component', baseClassName, className)}>
        { collection.map((item) => (
          <EquipmentItemComponent
            key={item.id}
            model={item}
          />
        ))}
      </div>
    );
  }
}
/**
 * list item that combines the basic display and the detailed modal
 */
export class EquipmentItemComponent extends PureComponent {
  static defaultProps = {
    /** @type {EquipmentModel} */
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
          <EquipmentItemDetailsComponent
            model={model}
          />
        </ModalComponent>

        <EquipmentItemBasicComponent
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
 * simple graphical display of an Equipment
 */
export class EquipmentItemBasicComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'borradius-2 flex-row flex-centered position-relative mar-1 pad-l-2 bg-darknavy',
    /** @type {string} */
    className: '',
    /** @type {EquipmentModel} */
    model: undefined,
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
      model,
    } = this.props;

    return (
       <div
        className={cn('equipment-item-basic-component', baseClassName, className)}
        onClick={this.handleOnClick}
      >
        {/* slot */}
        <div
          className='flex-none color-white text-stroke text-ellipsis'
          style={{
            width: '75px',
          }}
        >
          { this.geSlotName() }
        </div>

        {/* item */}
        <InventoryItemBasicComponent
          baseClassName='flex-centered borradius-2 flex-col position-relative bg-navy cursor-pointer'
          className='flex-grow bor-l-2 borcolor-white'
          model={model}
        />
      </div>
    )
  }
  /**
   *
   */
  geSlotName() {
    const { model: { attributes }} = this.props;
    const { slotName } = attributes;

    return slotName || 'Slot';
  }
  /**
   *
   */
  handleOnClick() {
    this.props.onClick()
  }
}
/**
 * more details of an Equipment
 */
export class EquipmentItemDetailsComponent extends InventoryItemDetailsComponent {
  /** @override */
  renderBody() {
    return (
      <Fragment>
        { this.renderNameElement() }

        { this.renderDescriptionElement() }

        { this.renderEffectsCollection() }

        { this.renderFlavorTextElement() }
      </Fragment>
    )
  }
}
