import React, { PureComponent } from 'react';
import cn from 'classnames';

// import store from 'data';
import { updateUrl } from 'data/actions';

import { Icon } from 'components';

import { Link as RouterLink } from 'react-router-dom';

class ButtonGroup extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    baseClassName: 'pad-1',
    /** @type {String} */
    className: '',
  };
  /** @default */
  render() {
    const { baseClassName, className } = this.props;

    return (
      <div className={cn('button-component-group', baseClassName, className)}>
        { this.props.children }
      </div>
    )
  }
}

function ButtonHOC(Wrapper) {
  return class ButtonComponent extends PureComponent {
    static defaultProps = {
      /** @type {String} */
      baseClassName: 'pad-1',
      /** @type {String} */
      className: '',
      /** @type {Boolean} */
      disabled: false,
      /** @type {Boolean} */
      floatingPosition: undefined,
      /** @type {String} */
      title: undefined,
      /** @type {String} */
      type: 'text',
      /** @type {Boolean} */
      isCentered: false,
      /** @type {Boolean} */
      isFlag: false,
      /** @type {Boolean} */
      isRound: false,
      /** @type {Boolean} */
      isWide: false,
      /** @type {String} */
      icon: undefined, // pass it an icon name
      /** @type {Function} */
      onClick: () => {},
      /** @type {String} */
      to: '/',
    };
    /** @default */
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }
    /** @default */
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

      const modifiers = {
        'disabled': disabled,
        'button-component--centered': isCentered,
        'button-component--round button-component--centered': isRound,
        'button-component--flag button-component--centered': isFlag && !isWide,
        'button-component--wide-flag button-component--flag button-component--centered': isWide,
        'button-component--top-left': floatingPosition,
      };

      // hack a little bit to check if this is a Link
      const isLink = Wrapper === RouterLink;

      return (
        <Wrapper
          className={cn('button-component', modifiers, baseClassName, className)}
          title={title}
          onClick={this.handleClick}
          to={isLink ? to : undefined}
          type={type}
        >
          { icon &&
            <Icon name={icon} />
          }

          { this.props.children }
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
    updateUrl(to);
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
