import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import {
  // Button,
  Icon,
  ModalComponent,
  Panel,
} from 'components';

import { InventoryItemDisplayComponent, InventoryItemDetailsComponent } from 'components/CharacterInventoryComponent';

export class CharacterEquipmentsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1',
    /** @type {string} */
    className: '',
    /** @type {Collection<ItemModel>} */
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
            itemModel={item}
          />
        ))}
      </div>
    );
  }
}

export class EquipmentItemComponent extends PureComponent {
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

        <Panel
          className={cn('equipment-component', baseClassName, className)}
        >
          {/* slot */}
          <div></div>

          {/* item */}
          <InventoryItemDisplayComponent
            itemModel={itemModel}
            onClick={this.toggleDetails}
          />
        </Panel>
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
