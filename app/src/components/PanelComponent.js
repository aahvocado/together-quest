import React, { PureComponent } from 'react';
import cn from 'classnames';

class PanelComponent extends PureComponent {
  static defaultProps = {
    baseClassName: 'tg-panel bg-white flex-col',
    className: '',
    collpasedView: "Collapsed",

    active: false,
    collapsed: false,
    inner: false,
  };

  render() {
    const {
      active,
      baseClassName,
      className,
      collapsed,
      collpasedView,
      inner,
    } = this.props;

    const modifiers = {
      'pad-4 flex-grow': !inner,
      'tg-panel--inner pad-2 mar-2 flex-none': inner,
      'tg-panel--collpased': collapsed,
      'active': active,
    };

    const combinedClassName = cn(modifiers, baseClassName, className);

    // single line view
    if (collapsed) {
      return (
        <div
          className={combinedClassName}
        >
          { collpasedView }
        </div>
      );
    };

    // regular panel
    return (
      <div
        className={combinedClassName}
      >
        { this.props.children }
      </div>
    );
  }
}

export default PanelComponent;
export {
  PanelComponent,
}
