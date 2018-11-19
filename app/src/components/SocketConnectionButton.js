import React, { PureComponent } from 'react';

import {
  Button,
  Icon,
} from 'components';

import eventClient from 'services/eventClient';
import websocketManager from 'services/websocketManager';

class SocketConnectionButton extends PureComponent {
  /** @default */
  constructor(props) {
    super(props);

    this.handleStatusOnClick = this.handleStatusOnClick.bind(this);

    this.state = {
      isConnected: false,
    }
  }
  /** @default */
  componentDidMount() {
    eventClient.listenTo('connect', () => {
      this.setState({isConnected: true});
    });

    eventClient.listenTo('disconnect', () => {
      this.setState({isConnected: false});
    });
  }
  /** @default */
  render() {
    const { isConnected } = this.state;

    return (
      <Button
        title='Websocket Connection Status'
        onClick={this.handleStatusOnClick}
        isFlag
      >
        { !isConnected &&
          <Icon
            className='color-darkred'
            name='fa-angle-down'
          />
        }

        { isConnected &&
          <Icon
            className='color-green'
            name='fa-angle-down'
          />
        }
      </Button>
    );
  };
  /**
   * clicking on this button makes an attempt to reconnect
   */
  handleStatusOnClick() {
    const { isConnected } = this.state;

    if (!isConnected) {
      websocketManager.reconnect();
    }
  }
}

export default SocketConnectionButton;
