import React, { PureComponent } from 'react';
import cn from 'classnames';

class IconComponent extends PureComponent {
  static defaultProps = {
    className: '',
    name: 'fa-play',
  };

  render() {
    const { className, name } = this.props;

    const type = name.trim().split('-')[0];

    const combinedClassName = cn('tg-icon', className, {
      [`fas fa-fw ${name}`]: type === 'fa',
      [`ra ra-fw ${name}`]: type === 'ra',
    });

    return (
      <i className={(combinedClassName)} />
    );
  }
};

export default IconComponent;
