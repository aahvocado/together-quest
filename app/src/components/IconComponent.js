import React, { PureComponent } from 'react';
import cn from 'classnames';

class IconComponent extends PureComponent {
  static defaultProps = {
    name: 'fa-play',
  };

  render() {
    const { name } = this.props;

    const type = name.split('-')[0];

    const classnames = cn('tg-icon', {
      [`fas fa-fw ${name}`]: type === 'fa',
      [`ra ra-fw ${name}`]: type === 'ra',
    });

    return (
      <i className={(classnames)} />
    );
  }
};

export default IconComponent;
