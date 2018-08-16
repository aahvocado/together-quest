import React, { PureComponent } from 'react';
import cn from 'classnames';

import { connect } from 'react-redux'

class LayoutComponent extends PureComponent {
  static defaultProps = {
    classNames: '',
  };

  render() {
    const { classNames } = this.props;

    return (
      <div
        className={cn('tg-layout', classNames)}
      >
        { this.props.children }
      </div>
    );
  }
};

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

export default Layout;

export {
  Layout,
}
