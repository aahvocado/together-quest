import React, { Component } from 'react';
import CharacterCard from 'components/CharacterCard';

import { Link } from 'react-router-dom'

export default class PlayerPage extends Component {
  render() {
    const { character } = this.props;

    return (
      <div className="tg-new-character-page">
        <Link to='/'>
            <ButtonComponent><i className='fas fa-arrow-alt-circle-left fa-fw' /></ButtonComponent>
        </Link>

        <CharacterCard character={ character } />
      </div>
    );
  }
}
