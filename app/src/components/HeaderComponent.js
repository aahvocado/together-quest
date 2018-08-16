import React, { PureComponent } from 'react';
// import cn from 'classnames';

import { Link } from 'components/ButtonComponent';
import Icon from 'components/IconComponent';

class HeaderComponent extends PureComponent {
  static defaultProps = {

  };

  render() {

    return (
      <div
        className='tg-header'
      >
        <Link isFlag title='Campaigns'>
          <Icon name='fa-map'/>
        </Link>

        <Link isFlag title='Modules'>
          <Icon name='fa-atlas'/>
        </Link>

        <Link isFlag title='Settings'>
          <Icon name='fa-cog'/>
        </Link>
      </div>
    );
  }
};

export default HeaderComponent;

export {
  HeaderComponent,
}
