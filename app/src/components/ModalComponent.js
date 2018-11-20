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
    baseClassName: '',
    /** @type {String} */
    className: '',
    /** @type {Function} */
    onOverlayClick: () => {},
    /** @type {Boolean} */
    useStandardSize: false,
  };
  /** @default */
  constructor(props) {
    super(props);

    this.handleModalContentClick = this.handleModalContentClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  };
  /** @default */
  render() {
    const {
      active,
      baseClassName,
      className,
      useStandardSize,
    } = this.props;

    // active means no show
    if (!active) {
      return null;
    }

    const modifiers = {
      'modal-component--standard': useStandardSize,
    };

    return (
      <div
        className='modal-overlay position-fixed flex-centered pos-0 zindex-10'
        onClick={this.handleOverlayClick}
      >
        <div
          className={cn('modal-component', baseClassName, className, modifiers)}
          onClick={this.handleModalContentClick}
        >
          {this.props.children}
        </div>
      </div>
    )
  };
  /**
   *
   * @param {Event} e
   */
  handleOverlayClick(e) {
    this.props.onOverlayClick();
  }
  /**
   * catches the clicking inside to prevent it from triggering `handleOverlayClick()`
   * @param {Event} e
   */
  handleModalContentClick(e) {
    e.stopPropagation();
  }
}

export default ModalComponent;
