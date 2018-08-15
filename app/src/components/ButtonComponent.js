import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends PureComponent {
  static propTypes = {
    /** style of the button */
    variant: PropTypes.string,
    /** TODO size */
    size: PropTypes.string,
  };

  static defaultProps = {
    variant: 'default',
    size: 'default',
  };

  render() {
    const { variant } = this.props;

    const variantStyles = variant === 'round' ? 'tg-button--round' : '';

    return (
      <button
        className={`tg-button ${variantStyles}`}
      >
        { this.props.children }
      </button>
    );
  }
}

export default ButtonComponent;

export {
  ButtonComponent,
}
