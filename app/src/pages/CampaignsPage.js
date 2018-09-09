import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Layout,
  Panel,
  CharacterComponent,
} from 'components';
import CampaignsListPanel from 'panels/CampaignsListPanel';

// redux mappings
function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};


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

          <CampaignsListPanel onCampaignSelect={this.handleOnCampaignSelect} />

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
