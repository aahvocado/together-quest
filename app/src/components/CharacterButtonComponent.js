import React, { PureComponent } from 'react';

import {
  Button,
  Icon,
} from 'components';

class CharacterButtonComponent extends PureComponent {
  render() {
    return (
      <Button
        className='tg-character-button flex-col justify-center'
        onClick={this.handleOnClick}
      >
        <div className='tg-character-button--name flex-none pad-1'>Character Name</div>
        <div className='tg-character-button--username flex-none pad-1'>username</div>
        <div className='tg-character-button--image flex-grow flex-centered width-100 bg-pink'>
          <Icon name='fa-id-card' />
        </div>
      </Button>
    );
  }

  handleOnClick = (...args) => {
    this.props.onClick(...args);
  }
};

export default CharacterButtonComponent;
