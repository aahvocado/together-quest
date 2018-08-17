import React, { PureComponent } from 'react';
import cn from 'classnames';

import { connect } from 'react-redux'

class LayoutComponent extends PureComponent {
  static defaultProps = {
    activePanel: -1, // which panel is active right now, start from 1
    className: '',
    multi: false,
  };

  render() {
    const { activePanel, className, multi } = this.props;

    const modifiers = {
      [`tg-active-panel-${activePanel}`]: activePanel > 0,
      'tg-layout--multi': multi,
    };

    return (
      <div
        className={cn('tg-layout', modifiers, className)}
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
)(LayoutComponent);

export default Layout;
export {
  Layout,
}
