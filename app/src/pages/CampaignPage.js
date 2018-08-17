import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Link,
  Icon,
  Layout,
  Panel,
  CharacterComponent,
  CharacterBlurb,
} from 'components';

import CharacterData from 'data/CharacterData';

class CampaignSelectPanel extends PureComponent {
  render() {
    return (
      <Panel>
        <h2>Campaigns</h2>

        <Panel inner className='bg-gray'>
          <Link to='/new-campaign'><Icon name='fa-map-marked-alt' /><span>Create a new Campaign</span></Link>
        </Panel>

        <Panel inner className='bg-gray'>
          <ButtonGroup>
            <Button>Cat Quest</Button>
          </ButtonGroup>
        </Panel>

      </Panel>
    )
  }
};

class CampaignDetailsPanel extends PureComponent {
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
            { CharacterData.characters.map((character) => {
              return <CharacterBlurb key={character.name} character={character} onClick={this.handleSelectCharacter} />
            })}
          </ul>
        </Panel>
      </Panel>
    )
  }
}

class CampaignPage extends Component {
  state = {
    activePanel: 1,
    selectedCharacter: undefined,
    selectedCampaign: undefined,
  }

  render() {
    const { activePanel, selectedCampaign, selectedCharacter } = this.state;

    return (
      <Layout multi activePanel={activePanel} className='tg-campaign tg-page'>

        <CampaignSelectPanel />

        <CampaignDetailsPanel data={selectedCampaign} />

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


// connect component to State
function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

// export component
const CampaignPageConnected = connect(
  mapStateToProps, mapDispatchToProps
)(CampaignPage)

export default CampaignPageConnected;
