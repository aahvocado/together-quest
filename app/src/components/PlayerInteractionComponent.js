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
        <Icon className='flex-none mar-r-1' name='fa-user-circle' />
        <span className='flex-grow fweight-bold'>{username}</span>

        <ButtonGroup className='flex-none'>
          <Button
            title='Send Character Data'
          >
            <Icon name='fa-address-card' />
          </Button>

          <Button
            title='Message'
            disabled
          >
            <Icon name='fa-envelope' />
          </Button>

          <Button
            title='Kick Player'
            disabled
          >
            <Icon name='fa-minus-circle' />
          </Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default PlayerInteractionComponent;
