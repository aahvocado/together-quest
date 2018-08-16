import React, { PureComponent } from 'react';
import cn from 'classnames';

import { actions } from 'data/AppStore';

import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
        isLink,
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
const TestLink = ButtonHOC(RouterLink);

class FancyLink extends PureComponent {
  render() {
    // const { onClick } = this.props;
    return (
      <TestLink
        {...this.props}
        isLink
        onClick={this.props.onClick}
      >
        { this.props.children }
      </TestLink>
    );
  };

  handle = (e) => {
    console.log('test');
    e.preventDefault();
  }
};

function mapStateToProps(state) {
  return state;
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(actions.changeUrl(ownProps.to));
    },
  }
};

// make the HOC
const Button = ButtonHOC('button');
const Link = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FancyLink);

export default Button;

export {
  Button,
  Link,
}
