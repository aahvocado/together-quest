import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { updatePermissions } from 'data/actions';

import {
  // Button,
  // ButtonGroup,
  // Link,
  // Loader,
  Layout,
  Panel,
} from 'components';

/**
 * temporary no permission page
 */
class GameMaster404Page extends PureComponent {
  /** @default */
  render() {
    return (
      <Panel>
        Whoops, you don't have permission.
      </Panel>
    )
  };
}
/**
 * temporary no permission page
 */
const ConnectedGameMasterPage = connect((state) => ({
  user: state.user,
  permissions: state.permissions,
}))(
  class GameMasterPage extends PureComponent {
    static defaultProps = {
      campaigns: [],
      onCampaignSelect: () => {},
    };
    /** @default */
    // constructor(props) {
    //   super(props);
    // };
    /** @default */
    componentWillMount() {
      updatePermissions('GAME_MASTER'); // temporarily just give game master permission if they come here
    };
    /** @default */
    render() {
      const { permissions } = this.props;

      //
      if (!permissions.includes('GAME_MASTER')) {
        return <GameMaster404Page />
      }

      return (
        <Layout className='tg-gamemaster-page width-full'>
          <Panel>
            <h2>Game Master Page</h2>
          </Panel>
        </Layout>
      )
    };
  }
);

export default ConnectedGameMasterPage;
