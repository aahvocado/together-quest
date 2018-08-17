import React, { Component } from 'react';

import { ButtonGroup, Link, Button } from 'components/ButtonComponent';
import Icon from 'components/IconComponent';
import Layout from 'components/LayoutComponent';
import Panel from 'components/PanelComponent';
import { CharacterComponent, CharacterBlurb } from 'components/CharacterComponent';

import CharacterData from 'data/CharacterData';

class CampaignPage extends Component {
  state = {
    activePanel: 1,
    selectedCharacter: undefined,
  }

  render() {
    const { activePanel, selectedCharacter } = this.state;

    return (
      <Layout multi activePanel={activePanel} className='tg-campaign tg-page'>
        <Panel>
          <h2>Campaigns</h2>

          <Panel inner className='bg-gray'>
            <Link to='/new-campaign'><Icon name='fa-map-marked-alt' /><span>Create a new Campaign</span></Link>
          </Panel>

          <Panel inner className='bg-gray'>
            <ButtonGroup>
              <Button>Cat Campaign</Button>
            </ButtonGroup>
          </Panel>

        </Panel>

        <Panel>

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
