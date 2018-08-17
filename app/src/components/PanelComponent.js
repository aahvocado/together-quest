import React, { PureComponent } from 'react';
import cn from 'classnames';

class Panel extends PureComponent {
  static defaultProps = {
    className: '',

    active: false,
    inner: false,
  };

  render() {
    const {
      active,
      className,
      inner,
    } = this.props;

    const modifiers = {
      'tg-panel--inner': inner,
      'active': active,
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
