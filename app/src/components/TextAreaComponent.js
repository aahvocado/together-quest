import React, { PureComponent } from 'react';
import cn from 'classnames';

/**
 * temporary no permission page
 */
class TextAreaComponent extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    baseClassName: 'fsize-small pad-1 borradius-1',
    /** @type {String} */
    className: '',
    /** @type {Function} */
    onOverlayClick: () => {},
    /** @type {Boolean} */
    isResizable: false,
  };
  /** @default */
  render() {
    const {
      baseClassName,
      className,
      isResizable,
      ...propsToPass,
    } = this.props;

    const modifiers = {
      'textarea--resizable': isResizable,
    };

    // remove unnecessary props
    delete propsToPass.onOverlayClick;

    return (
      <textarea
        {...propsToPass}
        className={cn('textarea-component', modifiers, baseClassName, className)}
      />
    )
  };
  /**
   *
   */
  handleOverlayClick(e) {
    this.props.onOverlayClick();
  }
}

export default TextAreaComponent;
