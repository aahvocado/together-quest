import React, { Component } from 'react';
import CharacterCard from 'components/CharacterCard';

export default class PlayerPage extends Component {
  render() {
    const { character } = this.props;

    return (
      <div className="tg-new-character-page">
        <CharacterCard character={ character } />
      </div>
    );
  }
}
