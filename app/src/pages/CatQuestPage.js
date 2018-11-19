import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import campaignApi from 'apis/campaignApi';

import {
  Button,
  ButtonGroup,
  Link,
  Loader,
  Panel,
} from 'components';

// redux mappings
function mapStateToProps(state) {
  return {
    campaigns: state.campaigns,
    currentCampaign: state.currentCampaign,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const ConnectedCatQuestPage = connect(mapStateToProps, mapDispatchToProps)(
  class CatQuestPage extends PureComponent {
    constructor(props) {
      super(props);

      this.handleOnCampaignClick = this.handleOnCampaignClick.bind(this);
    };

    static defaultProps = {
      campaigns: [],
      onCampaignSelect: () => {},
    };

    state = {
      sessionCampaigns: [],
    };

    componentWillMount() {
      this.setState({ isLoading: true }, async () => {
        const sessionCampaigns = await campaignApi.fetchSessionCampaigns();
        this.setState({ sessionCampaigns: sessionCampaigns, isLoading: false });
      });
    };

    render() {
      // const { campaigns } = this.props;
      const { isLoading, sessionCampaigns } = this.state;

      return (
        <Panel>
          <h2>Campaigns</h2>

          <Panel inner className='bg-gray'>
            <Link to='/campaigns/new' icon='fa-map-marked-alt'>Create a new Campaign</Link>
          </Panel>

          <Panel inner className='bg-gray'>
            <Loader active={isLoading} />

            <ButtonGroup>
              { sessionCampaigns.map((campaign) => {
                const { title, campaignId } = campaign;

                return (
                  <Link
                    key={`campaigns-list-${campaignId}-key`}
                    to={`/campaigns/${campaignId}`}
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
    };

    handleOnCampaignClick(campaign) {
      const { onCampaignSelect } = this.props;
      onCampaignSelect();
    };
  }
);

export default ConnectedCatQuestPage;
