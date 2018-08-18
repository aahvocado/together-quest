import React, { Fragment, PureComponent } from 'react';
import cn from 'classnames';

import { Icon } from 'components';

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
      icon: undefined, // pass it an icon name
      isCentered: false,
      isFlag: false,
      isRound: false,
      isWide: false,
      floatingPosition: undefined,
      onClick: () => {},
      title: undefined,
      to: '/',
    };

    render() {
      const {
        disabled,
        icon,
        isCentered,
        isFlag,
        isRound,
        isWide,
        floatingPosition,
        title,
        to,
      } = this.props;

      const classnames = cn('tg-button', {
        'disabled': disabled,
        'tg-button--centered': isCentered,
        'tg-button--round tg-button--centered': isRound,
        'tg-button--flag tg-button--centered': isFlag && !isWide,
        'tg-button--wide-flag tg-button--flag tg-button--centered': isWide,
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
          { icon &&
            <Fragment>
              <Icon name={icon} />
              <span>{this.props.children}</span>
            </Fragment>
          }

          { !icon &&
            this.props.children
          }
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
