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

// redux mappings
function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const ConnectedCampaignSelectPanel = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignSelectPanel extends PureComponent {
    static defaultProps = {
      campaigns: [],
      onCampaignSelect: () => {},
    }
    render() {
      const { campaigns } = this.props;

      return (
        <Panel>
          <h2>Campaigns</h2>

          <Panel inner className='bg-gray'>
            <Link to='/new-campaign'><Icon name='fa-map-marked-alt' /><span>Create a new Campaign</span></Link>
          </Panel>

          <Panel inner className='bg-gray'>
            <ButtonGroup>
              { campaigns.map((campaign) => {
                const { title } = campaign;

                return (
                  <Button
                    key={title}
                    onClick={this.handleOnCampaignClick}
                  >
                    {title}
                  </Button>
                )
              })}
            </ButtonGroup>
          </Panel>

        </Panel>
      )
    }

    handleOnCampaignClick = (campaign) => {
      const { onCampaignSelect } = this.props;
      onCampaignSelect(this.props.campaigns[0]);
    }
  }
);

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

const ConnectedCampaignPage = connect(
  mapStateToProps, mapDispatchToProps
)(
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

          <ConnectedCampaignSelectPanel onCampaignSelect={this.handleOnCampaignSelect} />

          <CampaignDetailsPanel data={selectedCampaign} />

          <Panel className='tg-character-panel'>
            { selectedCharacter &&
              <CharacterComponent character={selectedCharacter} />
            }
          </Panel>

        </Layout>
      );
    }

    handleOnCampaignSelect = (campaign) => {
      this.setState({
        activePanel: 2,
        selectedCampaign: campaign,
      })
    }

    handleSelectCharacter = (character) => {
      this.setState({
        selectedCharacter: character,
      })
    }
  }
);

export default ConnectedCampaignPage;
