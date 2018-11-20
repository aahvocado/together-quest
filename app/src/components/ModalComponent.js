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

    this.state = {
      /** @type {Boolean} */
      isHidden: true, // we want this to be completely hidden when this is first rendered
    }
  };
  /** @default */
  componentDidUpdate() {
    // if we were hidden, but now we are active, we can not worry about being hidden anymore
    if (this.state.isHidden && this.props.active) {
      this.setState({ isHidden: false });
    }
  };
  /** @default */
  render() {
    const {
      active,
      baseClassName,
      className,
      useStandardSize,
    } = this.props;

    const { isHidden } = this.state;

    const modifiers = {
      'active': active,
      'hidden': isHidden,
      'modal-component--standard': useStandardSize,
    };

    return (
      <div
        className={cn('modal-component modal-overlay position-fixed flex-centered pos-0 zindex-10', modifiers)}
        onClick={this.handleOverlayClick}
      >
        <div
          className={cn('modal-container', baseClassName, className)}
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
