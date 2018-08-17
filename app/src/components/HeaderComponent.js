import React, { PureComponent } from 'react';
// import cn from 'classnames';

import { connect } from 'react-redux'

import { Link } from 'components/ButtonComponent';
import Icon from 'components/IconComponent';


class HeaderComponent extends PureComponent {
  static defaultProps = {
    url: '/',
  };

  render() {
    const { url } = this.props;

    return (
      <div
        className='tg-header'
      >
        <Link
          title='Home'
          disabled={url === '/'}
          isFlag
          to='/'
        >
          <Icon name='fa-home'/>
        </Link>

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
      </div>
    );
  }
};

// connect component to State
function mapStateToProps(state) {
  return {
    url: state.url,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

// export component
const Header = connect(
  mapStateToProps, mapDispatchToProps
)(HeaderComponent)

export default Header;

export {
  Header,
}
