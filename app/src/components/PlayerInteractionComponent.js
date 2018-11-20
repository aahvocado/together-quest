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
            onClick={this.handleSendDataClick}
          >
            <Icon name='fa-address-card' />
          </Button>

          <Button
            title='Message'
            className='pad-2'
            disabled
          >
            <Icon name='fa-envelope' />
          </Button>

          <Button
            title='Kick Player'
            className='pad-2'
            disabled
          >
            <Icon name='fa-minus-circle' />
          </Button>
        </ButtonGroup>
      </div>
    );
  }
  /**
   *
   */
  handleSendDataClick() {
    const { onSendDataClick, userId, username } = this.props;

    onSendDataClick({
      userId,
      username,
    });
  }
};

export default PlayerInteractionComponent;
