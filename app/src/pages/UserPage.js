import React, { Component } from 'react';
import CharacterComponent from 'components/CharacterComponent';

export default class UserPage extends Component {
  render() {
    return (
      <div className="user-page">
        <CharacterComponent />
      </div>
    );
  }
}
