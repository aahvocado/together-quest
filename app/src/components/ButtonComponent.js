import React, { PureComponent } from 'react';
import cn from 'classnames';

import AppData, { actions } from 'data/AppData';

import { Link as RouterLink } from 'react-router-dom';

class ButtonGroup extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={cn('tg-button-group', className)}>{ this.props.children }</div>
    )
  }
}

function ButtonHOC(Wrapper) {
  return class ButtonComponent extends PureComponent {
    static defaultProps = {
      disabled: false,
      isCentered: false,
      isFlag: false,
      isLink: false,
      isRound: false,
      floatingPosition: undefined,
      onClick: () => {},
      title: undefined,
      to: '/',
    };

    render() {
      const {
        disabled,
        isCentered,
        isFlag,
        // isLink,
        isRound,
        floatingPosition,
        title,
        to,
      } = this.props;

      const classnames = cn('tg-button', {
        'disabled': disabled,
        'tg-button--centered': isCentered,
        'tg-button--round tg-button--centered': isRound,
        'tg-button--flag tg-button--centered': isFlag,
        'tg-button--top-left': floatingPosition,
      });

      // hack a little bit to check if this is a Link
      const isLink = Wrapper === RouterLink;

      return (
        <Wrapper
          className={classnames}
          title={title}
          onClick={this.handleClick}
          to={isLink ? to : undefined}
        >
          { this.props.children }
        </Wrapper>
      );
    };

    handleClick = () => {
      const { onClick } = this.props;
      onClick();
    }
  };
}

// we just need to extend the RouterLink with a dispatch() action
class ReduxRouterLink extends ButtonHOC(RouterLink) {
  handleClick = () => {
    const { onClick, to } = this.props;
    AppData.dispatch(actions.changeUrl(to));
    onClick();
  }
}

// export the HOC
const Button = ButtonHOC('button');
const Link = ReduxRouterLink;

export default Button;

export {
  ButtonGroup,
  Button,
  Link,
}
