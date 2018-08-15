import React, { Component } from 'react';

// import ButtonComponent from 'components/ButtonComponent';
import CharacterCard from 'components/CharacterCard';

class NewCharacterPanel extends Component {
  render() {
    return (
      <div className='tg-new-character-panel'>
        <CharacterCard character={{}} />
      </div>
    );
  }
};

export default NewCharacterPanel;
