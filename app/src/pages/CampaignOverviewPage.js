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
    campaigns: state.campaigns,
  };
};
function mapDispatchToProps(dispatch) {
  return {};
};
/**
* Page for viewing a user's campaigns
*/
const ConnectedCampaignOverviewPage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignOverviewPage extends Component {
    // constructor(props) {
    //   super(props);
    // };

    render() {
      // const { campaign: { title, id, players, modules } } = this.props;
      const { match: { params: { campaignId } } } = this.props; // from route

      if (campaignId === 'new') {
        return <ConnectedNewCampaignPage {...this.props} />;
      };

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
