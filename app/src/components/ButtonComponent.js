import React, { Fragment, PureComponent } from 'react';
import cn from 'classnames';

import store from 'data';
import { updateUrl } from 'data/actions';

import { Icon } from 'components';

import { Link as RouterLink } from 'react-router-dom';

class ButtonGroup extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={cn('tg-button-group flex-row', className)}>{ this.props.children }</div>
    )
  }
}

function ButtonHOC(Wrapper) {
  return class ButtonComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {
      baseClassName: 'pad-1',
      className: '',
      disabled: false,
      floatingPosition: undefined,
      title: undefined,
      type: 'text',

      isCentered: false,
      isFlag: false,
      isRound: false,
      isWide: false,

      icon: undefined, // pass it an icon name
      onClick: () => {},
      to: '/',
    };

    render() {
      const {
        baseClassName,
        className,
        disabled,
        icon,
        isCentered,
        isFlag,
        isRound,
        isWide,
        floatingPosition,
        title,
        to,
        type,
      } = this.props;

      const combinedClassName = cn('tg-button',
        baseClassName,
        className, {
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
          className={combinedClassName}
          title={title}
          onClick={this.handleClick}
          to={isLink ? to : undefined}
          type={type}
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

    handleClick() {
      const { onClick } = this.props;
      onClick();
    }
  };
}

// we just need to extend the RouterLink with a dispatch() action
class ReduxRouterLink extends ButtonHOC(RouterLink) {
  handleClick() {
    const { onClick, to } = this.props;
    store.dispatch(updateUrl(to));
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
