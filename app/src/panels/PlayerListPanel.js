import React, { PureComponent } from 'react';
import characterData from 'data/characterData';

import {
  Panel,
  CharacterBlurb,
} from 'components';

class PlayerListPanel extends PureComponent {
  static defaultProps = {
    data: {},
  };

  render() {
    const { data: { id, title, players } } = this.props;

    if (!id) {
      return (<Panel></Panel>)
    };

    return (
      <Panel>
        <h2>{title}</h2>
        <Panel inner className='bg-blue'>
          <div><Icon name='ra-double-team'/><span>{`contains ${players.length} Players`}</span></div>

          <ul>
            { characterData.characters.map((character) => {
              return <CharacterBlurb key={character.name} character={character} onClick={this.handleSelectCharacter} />
            })}
          </ul>
        </Panel>
      </Panel>
    )
  }

  handleSelectCharacter = (character) => {
    this.setState({
      selectedCharacter: character,
    })
  }
}

export default PlayerListPanel;
