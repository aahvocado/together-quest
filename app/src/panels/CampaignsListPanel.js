import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Link,
  Panel,
  // CharacterComponent,
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

const ConnectedCampaignSelectPanel = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CampaignsListPanel extends PureComponent {
    static defaultProps = {
      campaigns: [],
      onCampaignSelect: () => {},
    };

    render() {
      const { campaigns } = this.props;

      return (
        <Panel>
          <h2>Campaigns</h2>

          <Panel inner className='bg-gray'>
            <Link to='/campaigns/new' icon='fa-map-marked-alt'>Create a new Campaign</Link>
          </Panel>

          <Panel inner className='bg-gray'>
            <ButtonGroup>
              { campaigns.map((campaign) => {
                const { title, id } = campaign;

                return (
                  <Link
                    key={title}
                    to={`/campaigns/${id}`}
                    onClick={this.handleOnCampaignClick}
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
      onCampaignSelect();
    }
  }
);

export default ConnectedCampaignSelectPanel;
