import React, { PureComponent } from 'react';

import {
  Link,
  Icon,
} from 'components';

export class CharacterButtonComponent extends PureComponent {
  static defaultProps = {
    /** @type {CharacterModel} */
    model: undefined,
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
    const { model } = this.props;

    const id = model.id;
    const name = model.get('name');

    return (
      <Link
        baseClassName='pad-0 mar-1'
        className='tg-character-button flex-col justify-center'
        // onClick={this.handleOnClick}
        to={`/characters/${id}`}
      >
        <div className='tg-character-button--name fsize-base flex-none pad-1'>{name}</div>
        <div className='tg-character-button--image flex-grow flex-centered width-full bg-pink'>
          <Icon name='fa-id-card' />
        </div>
      </Link>
    );
  }
  /**
   * @param {SyntheticEvent} e
   */
  handleOnClick(e) {
    this.props.onClick({...this.props});
  }
};

export default CharacterButtonComponent;
