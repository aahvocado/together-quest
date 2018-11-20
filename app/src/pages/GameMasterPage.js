import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { updatePermissions } from 'data/actions';

import {
  Button,
  // ButtonGroup,
  // Link,
  // Loader,
  Layout,
  Panel,
} from 'components';

import eventClient from 'services/eventClient';

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
  /** @type {Object} */
  user: state.user,
  /** @type {Array} */
  permissions: state.permissions,
  /** @type {Array} */
  otherUsers: state.otherUsers,
}))(
  class GameMasterPage extends PureComponent {
    static defaultProps = {
    };
    /** @default */
    // constructor(props) {
    //   super(props);
    // };
    /** @default */
    componentWillMount() {
      updatePermissions('GAME_MASTER'); // temporarily just give game master permission if they come here

      // tell server we joined
      eventClient.emit('join', {
        username: 'GAME_MASTER',
      });
    };
    /** @default */
    render() {
      const { permissions, otherUsers } = this.props;

      //
      if (!permissions.includes('GAME_MASTER')) {
        return <GameMaster404Page />
      }

      return (
        <Layout className='tg-gamemaster-page width-full'>
          <Panel>
            <h2>Game Master Page</h2>

            <Panel inner className='bg-blue'>
              <h3>Currently Connected Players</h3>

              { otherUsers.map((user, idx) => (
                <Button
                  key={`userBtn-${idx}-key`}
                >
                  {user.username}
                </Button>
              ))}
            </Panel>
          </Panel>

        </Layout>
      )
    };
  }
);

export default ConnectedGameMasterPage;
