import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LinkButtonComponent extends PureComponent {
  static propTypes = {
    /** name of font-awesome icon */
    icon: PropTypes.string,
    /** link path */
    to: PropTypes.string,
    /** style of the button */
    variant: PropTypes.string,
  };

  static defaultProps = {
    icon: 'play',
    to: '/',
    variant: 'corner',
  };

  render() {
    const { icon, to, variant } = this.props;

    const variantStyles = variant === 'corner' ? 'tg-button--corner' : '';

    return (
      <Link
        to={to}
        className={`tg-button tg-button--round ${variantStyles} tg-centered-container`}
      >
        <span>
          <i className={`fas fa-${icon} fa-fw`} />
          { this.props.children }
        </span>
      </Link>
    );
  }
}

export default LinkButtonComponent;

export {
  LinkButtonComponent,
}
