import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Layout,
  Panel,
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

const ConnectedCampaignOverviewPage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignOverviewPage extends Component {
    render() {
      // const { campaign: { title, id, players, modules } } = this.props;
      const { match: { params: { campaignId } } } = this.props;

      return (
        <Layout className='tg-campaign-overview tg-page'>
          <Panel>
            <h2>{`Campaign Specific Page for ${campaignId}`}</h2>
          </Panel>
        </Layout>
      );
    }
  }
);

export default ConnectedCampaignOverviewPage;
