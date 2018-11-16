import React, { PureComponent } from 'react';

import {
  Button,
  Icon,
} from 'components';

class CharacterButtonComponent extends PureComponent {
  render() {
    return (
      <Button className='tg-character-button flex-col justify-center'>
        <div className='tg-character-button--name flex-none pad-1'>name</div>
        {/*<img className='tg-character-button--image flex-grow bg-pink' />*/}
        <div className='tg-character-button--image flex-grow flex-centered width-100 bg-pink'>
          <Icon name='fa-id-card' />
        </div>
      </Button>
    );
  }
};

export default CharacterButtonComponent;
