import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

function ButtonHOC(Wrapper) {
  return class ButtonComponent extends PureComponent {
    static propTypes = {
      /** use round styles */
      isRound: PropTypes.boolean,
      /** is defined, will position absolute in a corner */
      floatingPosition: PropTypes.string,
      /** route if using Link */
      to: PropTypes.string,
    };

    static defaultProps = {
      isRound: false,
      floatingPosition: undefined,
      to: '/',
    };

    render() {
      const { isRound, floatingPosition, to } = this.props;

      const classnames = cn('tg-button', {
        'tg-button--round': isRound,
        'tg-button--top-left': floatingPosition,
      });

      return (
        <Wrapper
          className={classnames}
          to={Wrapper === RouterLink ? to : undefined}
        >
          { this.props.children }
        </Wrapper>
      );
    }
  };
}

const Button = ButtonHOC('button');
const Link = ButtonHOC(RouterLink);

export default Button;

export {
  Button,
  Link,
}
