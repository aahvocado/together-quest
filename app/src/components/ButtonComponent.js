import React, { PureComponent } from 'react';
import cn from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

function ButtonHOC(Wrapper) {
  return class ButtonComponent extends PureComponent {
    static defaultProps = {
      disabled: false,
      isCentered: false,
      isRound: false,
      isFlag: false,
      floatingPosition: undefined,
      title: undefined,
      to: '/',
    };

    render() {
      const { disabled, isCentered, isFlag, isRound, floatingPosition, title, to } = this.props;

      const classnames = cn('tg-button', {
        'disabled': disabled,
        'tg-button--centered': isCentered,
        'tg-button--round tg-button--centered': isRound,
        'tg-button--flag tg-button--centered': isFlag,
        'tg-button--top-left': floatingPosition,
      });

      return (
        <Wrapper
          className={classnames}
          title={title}
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
