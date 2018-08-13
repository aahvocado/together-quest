import React, { Component } from 'react';
import CharacterCard from 'components/CharacterCard';

export default class UserPage extends Component {
  render() {
    return (
      <div className="tg-user-page">
        <CharacterCard />
      </div>
    );
  }
}
