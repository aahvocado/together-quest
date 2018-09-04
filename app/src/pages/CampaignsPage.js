import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Link,
  Layout,
  Panel,
  CharacterComponent,
} from 'components';

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
            <Link to='/new-campaign' icon='fa-map-marked-alt'>Create a new Campaign</Link>
          </Panel>

          <Panel inner className='bg-gray'>
            <ButtonGroup>
              { campaigns.map((campaign) => {
                const { title, id } = campaign;

                return (
                  <Link
                    key={title}
                    to={`/campaigns/${id}`}
                    // onClick={this.handleOnCampaignClick}
                  >
                    {title}
                  </Link>
                )
              })}
            </ButtonGroup>
          </Panel>


          <Panel inner className='bg-gray'>
            <ButtonGroup>
              <Button disabled>
                something else
              </Button>
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
    const { data: { id } } = this.props;

    if (!id) {
      return (<Panel></Panel>)
    };

    return (
      <Panel>

      </Panel>
    )
  }

}

const ConnectedCampaignsPage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignsPage extends Component {
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

  }
);

export default ConnectedCampaignsPage;
