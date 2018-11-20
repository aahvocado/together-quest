import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import { updatePermissions } from 'data/actions';

import {
  ListComponent,
  Loader,
  Layout,
  Modal,
  Panel,
} from 'components';
import PlayerInteractionComponent from 'components/PlayerInteractionComponent';

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

      //
      const hasOtherPlayers = !_.isEmpty(otherUsers);

      return (
        <Layout className='tg-gamemaster-page width-full'>
          <Panel>
            <h2>Game Master Page</h2>

            <Modal>
              <Panel
                className='bg-white'
                inner
              >
                gib data
              </Panel>
            </Modal>

            <Panel inner className='bg-blue'>
              { !hasOtherPlayers &&
                <h3>Waiting for Players...</h3>
              }
              { hasOtherPlayers &&
                <h3>Currently Connected Players</h3>
              }

              <Loader active={!hasOtherPlayers} />

              <ListComponent
                className='flex-col flex-grow'
                getKey={(item) => (item.userId)}
                list={otherUsers}
                ItemComponent={PlayerInteractionComponent}
              />

            </Panel>
          </Panel>

        </Layout>
      )
    };
  }
);

export default ConnectedGameMasterPage;
