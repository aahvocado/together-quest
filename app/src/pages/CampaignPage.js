import React, { Component } from 'react';

import { ButtonGroup, Link } from 'components/ButtonComponent';
import Icon from 'components/IconComponent';
import Layout from 'components/LayoutComponent';
import Panel from 'components/PanelComponent';
import { CharacterComponent, CharacterBlurb } from 'components/CharacterComponent';

import CharacterData from 'data/CharacterData';

import NewsPanel from 'panels/NewsPanel';

class CampaignPage extends Component {
  state = {
    selectedCharacter: undefined,
  }

  render() {
    const {selectedCharacter} = this.state;

    return (
      <Layout className='tg-campaign tg-page'>

        <Panel>
          <h2>Campaigns</h2>
          <div>Cat Quest</div>

          <Panel inner className='bg-blue'>
            <div><Icon name='ra-double-team'/><span>Current Players</span></div>

            <ul>
              { CharacterData.characters.map((character) => {
                return <CharacterBlurb key={character.name} character={character} onClick={this.handleSelectCharacter} />
              })}
            </ul>
          </Panel>
        </Panel>

        <Panel className='tg-character-panel'>
          { selectedCharacter &&
            <CharacterComponent character={selectedCharacter} />
          }
        </Panel>

      </Layout>
    );
  }

  handleSelectCharacter = (character) => {
    this.setState({
      selectedCharacter: character,
    })
  }
}

export default CampaignPage;
