import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { isLoggedIn } from 'utils/sessionUtils';

import {
  Icon,
  Link,
} from 'components';
import SocketConnectionButton from 'components/SocketConnectionButton';

class HeaderComponent extends PureComponent {
  static defaultProps = {
    url: '/',
  };
  /** @default */
  render() {
    const { url } = this.props;

    return (
      <div
        className='tg-header'
      >

        <SocketConnectionButton />

        <Link
          title='Home'
          disabled={ url === '/' }
          isFlag
          to='/'
        >
          <Icon name='fa-home'/>
        </Link>

        <Link
          title='Character'
          disabled={ url === '/characters' || !isLoggedIn() }
          isFlag
          to='/characters'
        >
          <Icon name='fa-user'/>
        </Link>
{/*
        <Link
          title='Campaigns'
          disabled={url === '/campaigns'}
          isFlag
          to='/campaigns'
        >
          <Icon name='fa-map'/>
        </Link>

        <Link
          title='Modules'
          disabled={url === '/modules'}
          isFlag
          to='/'
        >
          <Icon name='fa-atlas'/>
        </Link>

        <Link
          title='Settings'
          disabled={url === '/settings'}
          isFlag
          to='/'
        >
          <Icon name='fa-cog'/>
        </Link>
*/}
      </div>
    );
  }
};

// connect component to State
function mapStateToProps(state) {
  return {
    url: state.url,
    user: state.user,
    permissions: state.permissions,
  };
};
// export component
const ConnectedHeaderComponent = connect(mapStateToProps)(HeaderComponent)
export default ConnectedHeaderComponent;

export {
  ConnectedHeaderComponent,
}
