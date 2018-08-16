import React, { PureComponent } from 'react';
import cn from 'classnames';

import { connect } from 'react-redux'

class LayoutComponent extends PureComponent {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <div
        className={cn('tg-layout', className)}
      >
        { this.props.children }
      </div>
    );
  }
};

class PanelComponent extends PureComponent {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    const modifiers = {
    };

    return (
      <div
        className={cn('tg-panel', modifiers, className)}
      >
        { this.props.children }
      </div>
    );
  }
}

class InnerPanelComponent extends PureComponent {
  static defaultProps = {
    isGray: false,
  };

  render() {
    const { className } = this.props;

    return (
      <PanelComponent
        {...this.props}
        className={cn('tg-panel--inner', className)}
      >
        { this.props.children }
      </PanelComponent>
    );
  }
}


// connect component to State
function mapStateToProps(state) {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {};
};

// export component
const Layout = connect(
  mapStateToProps, mapDispatchToProps
)(LayoutComponent)
const Panel = PanelComponent;
const InnerPanel = InnerPanelComponent;

export default Layout;

export {
  Layout,
  Panel,
  InnerPanel,
}
