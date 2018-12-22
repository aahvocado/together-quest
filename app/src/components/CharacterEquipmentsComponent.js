import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  Icon,
  ModalComponent,
} from 'components';

import { InventoryItemDisplayComponent, InventoryItemDetailsComponent } from 'components/CharacterInventoryComponent';

export class CharacterEquipmentsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1',
    /** @type {string} */
    className: '',
    /** @type {Collection<EquipmentModel>} */
    equipments: undefined,
  }
  /** @override */
  render() {
    const {
      baseClassName,
      className,
      equipments,
    } = this.props;

    return (
      <div className={cn('equipments-component', baseClassName, className)}>
        { equipments.map((item) => (
          <EquipmentItemComponent
            key={item.id}
            equipmentModel={item}
          />
        ))}
      </div>
    );
  }
}

export class EquipmentItemComponent extends PureComponent {
  static defaultProps = {
    /** @type {EquipmentModel} */
    equipmentModel: [],
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
      equipmentModel,
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
            itemModel={equipmentModel}
          />
        </ModalComponent>

        <EquipmentItemDisplayComponent
          equipmentModel={equipmentModel}
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
export class EquipmentItemDisplayComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'borradius-2 flex-row flex-centered position-relative mar-1 pad-l-2 bg-darknavy',
    /** @type {string} */
    className: '',
    /** @type {EquipmentModel} */
    equipmentModel: [],
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
      equipmentModel,
    } = this.props;

    return (
       <div
        className={cn('equipment-component', baseClassName, className)}
        onClick={this.handleOnClick}
      >
        {/* slot */}
        <div
          className='flex-none color-white text-stroke'
          style={{
            width: '70px',
          }}
        >
          Slot:
        </div>

        {/* item */}
        <InventoryItemDisplayComponent
          baseClassName='borradius-2 flex-col position-relative bg-navy cursor-pointer'
          className='flex-grow bor-l-2 borcolor-white'
          itemModel={equipmentModel}
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

