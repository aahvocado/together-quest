import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends PureComponent {
  static propTypes = {
    /** style of */
    variant: PropTypes.string,
  };

  static defaultProps = {
    variant: 'default',
  };

  render() {
    const { variant } = this.props;

    const variantStyles = 'tg-button--round';

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
