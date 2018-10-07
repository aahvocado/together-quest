import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import campaignApi from 'apis/campaignApi';

import {
  Button,
  Form,
  Input,
  Layout,
  Loader,
  Panel,
} from 'components';

/**
* Panel for creating a New Campaign
*/
class NewCampaignPage extends PureComponent {
  constructor(props) {
    super(props);

    this.handleNewCampaignSubmit = this.handleNewCampaignSubmit.bind(this);
  };

  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Layout className='tg-campaign-overview tg-page'>
        <Panel>
          <h2>Start a New Campaign</h2>

          <Form onSubmit={this.handleNewCampaignSubmit}>

            <Loader active={isLoading} overlay centered />

            <Input name='title' label='campaign name' />

            <Input name='modules' disabled />

            <Button type='submit'>Create</Button>

          </Form>
        </Panel>
      </Layout>
    );
  }

  async handleNewCampaignSubmit(data) {
    // required values
    if (!data.title) return;

    // save to db and update the store
    this.setState({ isLoading: true }, async () => {
      const campaign = await campaignApi.createCampaign(data);

      // successful
      if (campaign) {
        return this.props.history.push('/campaigns');
      };

      // error
      this.setState({ isLoading: false });
    });
  }
};
// use component with router so we can change page after adding the new page
const ConnectedNewCampaignPage = withRouter(({history, props}) => {
  return ( <NewCampaignPage history={history} {...props} />)
});

// redux mappings
function mapStateToProps(state) {
  return {
    // campaigns: state.user.campaigns,
    sessionCampaigns: state.sessionCampaigns,
  };
};
function mapDispatchToProps(dispatch) {
  return {};
};
/**
* Page for viewing a user's campaigns
*/
const ConnectedCampaignDetailsPage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignDetailsPage extends Component {
    // constructor(props) {
    //   super(props);
    // };

    componentWillMount() {
      const { match: { params: { campaignId } } } = this.props; // from route
      const { sessionCampaigns = [] } = this.props;

      // if on the 'new' page or id is undefined
      if (!campaignId || campaignId === 'new') {
        return this.setState({ campaign: 'new' });
      };

      // see if we've already fetched some of the basic data
      let campaignMatch = undefined;
      sessionCampaigns.forEach((sessionCampaign) => {
        if (sessionCampaign.campaignId === campaignId) {
          campaignMatch = sessionCampaign;
        };
      });

      // if found a match, we don't need to fetch
      if (campaignMatch) {
        return this.setState({ campaign: campaignMatch });
      };

      // otherwise fetch new data
      this.setState({ isLoading: true }, async () => {
        const sessionCampaign = await campaignApi.fetchCampaign(campaignId);
        this.setState({ sessionCampaign: sessionCampaign, isLoading: false });
      });
    };

    render() {
      const { campaign } = this.state;

      // if no campaign was determined, render the create new campaign page
      if (!campaign || campaign === 'new') return <ConnectedNewCampaignPage {...this.props} />;

      // otherwise we can render the details
      const { title } = campaign;

      return (
        <Layout className='tg-campaign-overview tg-page'>
          <Panel>
            <h2>{`Campaign Specific Page for ${title}`}</h2>
          </Panel>
        </Layout>
      );
    }
  }
);

export default ConnectedCampaignDetailsPage;
