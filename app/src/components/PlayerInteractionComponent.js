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
    /** @type {String} */
    userId: '',
    /** @type {String} */
    username: '',
    /** @type {String} */
    socketId: '',
    /** @type {Function} */
    onSendDataClick: () => {},
  };
  /** @default */
  constructor(props) {
    super(props);

    this.handleSendDataClick = this.handleSendDataClick.bind(this);
  };
  /** @default */
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
            className='pad-2'
            icon='fa-address-card'
            onClick={this.handleSendDataClick}
          />

          <Button
            title='Message'
            className='pad-2'
            icon='fa-envelope'
            disabled
          >
          </Button>

          <Button
            title='Kick Player'
            className='pad-2'
            icon='fa-minus-circle'
            disabled
          >
          </Button>
        </ButtonGroup>
      </div>
    );
  }
  /**
   *
   */
  handleSendDataClick() {
    const { onSendDataClick, userId, username, socketId } = this.props;

    onSendDataClick({
      userId,
      username,
      socketId,
    });
  }
};

export default PlayerInteractionComponent;
