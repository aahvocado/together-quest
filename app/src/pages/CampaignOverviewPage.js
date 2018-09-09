import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';

import campaignApi from 'apis/campaignApi';

import {
  Button,
  Form,
  Input,
  Layout,
  Loader,
  Panel,
} from 'components';

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
      <Route>
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
      </Route>
    );
  }

  async handleNewCampaignSubmit(data) {
    // save to db and update the store
    this.setState({ isLoading: true }, async () => {
      const campaign = await campaignApi.createCampaign(data);

      // successful
      if (campaign) {
        return this.props.history.replace('/campaigns');
      };

      // error
      this.setState({ isLoading: false });
    });
  }
};

const ConnectedNewCampaignPage = withRouter(({history, props}) => {
  return ( <NewCampaignPage history={history} {...props} />)
})

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
