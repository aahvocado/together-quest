import React, { PureComponent, Fragment } from 'react';
import cn from 'classnames';

import Collapsible from 'react-collapsible';

import {
  // Button,
  Icon,
  ModalComponent,
} from 'components';

import { ItemModelDetailsComponent } from 'components/ItemModelDetailsComponent';

/**
 * inventory list
 */
export class CharacterEffectsComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'mar-t-1',
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
          <EffectsItemComponent
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
export class EffectsItemComponent extends PureComponent {
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
          <EffectsDetailsComponent
            model={model}
          />
        </ModalComponent>

        <EffectsBasicComponent
          className='mar-ver-1'
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
export class EffectsBasicComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'pad-1 flex-centered borradius-2 flex-col position-relative bg-navy cursor-pointer',
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
        className={cn('effects-basic-component', baseClassName, className)}
        onClick={this.handleOnClick}
      >

        { this.renderBackgroundIcon() }

        { this.renderDisplayText() }

      </div>
    );
  }
  /**
   * @returns {string}
   */
  renderDisplayText() {
    const { model } = this.props;
    const name = model.get('name');

    if (!name) {
      return null;
    }

    return (
      <div className='flex-wrap pad-1 color-white text-stroke text-center wordbreak-break zindex-1'>
        { name }
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
      <div className='position-absolute pos-0 opacity-2 mar-l-2 flex-row align-center'>
        <Icon
          name={icon}
          className='fsize-4'
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
 * more details of an effect
 */
export class EffectsDetailsComponent extends ItemModelDetailsComponent {
  /** @override */
  renderBody() {
    return (
      <Fragment>
        { this.renderNameElement() }

        { this.renderDescriptionElement() }

        { this.renderFlavorTextElement() }
      </Fragment>
    )
  }
}
/**
 * collapsible details of an effect
 */
export class EffectsCollapsiblecomponent extends PureComponent {
  static defaultProps = {
    /** @type {ItemModel} */
    model: [],
  };
  /** @override */
  render() {
    const {
      model,
    } = this.props;

    return (
      <Collapsible
        className='sibling-mar-t-2 overflow-auto'
        openedClassName='bg-navy borradius-2 sibling-mar-t-2 overflow-auto'
        trigger={<EffectsBasicComponent model={model} />}
        transitionTime={200}
        transitionCloseTime={200}
      >
        <EffectsExtendBasicDetailsComponent
          baseClassName='pad-2 flex-col'
          className='bg-white'
          model={model}
        />
      </Collapsible>
    );
  }
}
/**
 * more details of an embedded effect
 */
export class EffectsExtendBasicDetailsComponent extends ItemModelDetailsComponent {
  /** @override */
  renderBody() {
    return (
      <Fragment>
        { this.renderDescriptionElement() }
      </Fragment>
    )
  }
}
