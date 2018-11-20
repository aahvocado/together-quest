import React, { PureComponent } from 'react';
import cn from 'classnames';

/**
 * temporary no permission page
 */
class ModalComponent extends PureComponent {
  static defaultProps = {
    /** @type {Boolean} */
    active: false,
    /** @type {String} */
    baseClassName: 'width-full height-full flex-centered',
    /** @type {String} */
    className: '',
    /** @type {Function} */
    onOverlayClick: () => {},
  };
  /** @default */
  constructor(props) {
    super(props);

    this.handleOverlayClick = this.handleOverlayClick.bind(this);

    this.state = {
      /** @type {Boolean} */
      isActive: props.active,
    }
  };
  /** @default */
  render() {
    const {
      baseClassName,
      className,
    } = this.props;

    return (
      <div
        className='modal-overlay position-fixed pos-0 zindex-10'
        onClick={this.handleOverlayClick}
      >
        <div className={cn('modal-component', baseClassName, className)}>
          {this.props.children}
        </div>
      </div>
    )
  };
  /**
   *
   */
  handleOverlayClick(e) {
    this.props.onOverlayClick();
  }
}

export default ModalComponent;
