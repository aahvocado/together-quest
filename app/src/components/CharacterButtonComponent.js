import React, { PureComponent } from 'react';

import {
  Button,
  Icon,
} from 'components';

class CharacterButtonComponent extends PureComponent {
  static defaultProps = {
    /** @type {Function} */
    onClick: () => {},
  };
  /** @default */
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  /** @default */
  render() {
    return (
      <Button
        baseClassName='pad-0 mar-1'
        className='tg-character-button flex-col justify-center'
        onClick={this.handleOnClick}
      >
        <div className='tg-character-button--name fsize-base flex-none pad-1'>Character Name</div>
        <div className='tg-character-button--username fsize-small flex-none pad-hor-1'>username</div>
        <div className='tg-character-button--image flex-grow flex-centered width-full bg-pink'>
          <Icon name='fa-id-card' />
        </div>
      </Button>
    );
  }
  /**
   *
   */
  handleOnClick(...args) {
    this.props.onClick(...args);
  }
};

export default CharacterButtonComponent;
