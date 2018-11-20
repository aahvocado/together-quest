import React, { PureComponent } from 'react';
import cn from 'classnames';

import {
  Button,
  ButtonGroup,
  Icon,
} from 'components';

// import { connect } from 'react-redux'

class PlayerInteractionComponent extends PureComponent {
  static defaultProps = {
    /** @type {String} */
    className: '',
    /** @type {Object} */
    username: {},
  };

  render() {
    const { className, username } = this.props;

    return (
      <div
        className={cn('flex-row bg-white align-center mar-1 pad-2', className)}
      >
        <span className='flex-grow'>{username}</span>

        <ButtonGroup className='flex-none'>
          <Button
            title='Send Character Data'
          >
            <Icon name='fa-address-card' />
          </Button>

          <Button
            title='Message'
          >
            <Icon name='fa-envelope' />
          </Button>

          <Button
            title='Kick Player'
          >
            <Icon name='fa-minus-circle' />
          </Button>
        </ButtonGroup>
      </div>
    );
  }
};

// connect component to State
// function mapStateToProps(state) {
//   return state;
// };
// export component
// const ConnectedLayoutComponent = connect(mapStateToProps)(LayoutComponent);
export default PlayerInteractionComponent;
