import React, { PureComponent } from 'react';
import cn from 'classnames';

class Panel extends PureComponent {
  static defaultProps = {
    className: '',
    collpasedView: "Collapsed",

    active: false,
    collapsed: false,
    inner: false,
  };

  render() {
    const {
      active,
      className,
      collapsed,
      collpasedView,
      inner,
    } = this.props;

    const modifiers = {
      'tg-panel--inner': inner,
      'tg-panel--collpased': collapsed,
      'active': active,
    };

    // single line view
    if (collapsed) {
      return (
        <div
          className={cn('tg-panel', modifiers, className)}
        >
          { collpasedView }
        </div>
      );
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

export default Panel;
export {
  Panel,
}
