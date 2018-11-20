import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import { updatePermissions } from 'data/actions';

import {
  Button,
  ButtonGroup,
  Icon,
  ListComponent,
  Loader,
  Layout,
  Modal,
  Panel,
  TextArea,
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
class AttachDataModal extends PureComponent {
  static defaultProps = {
    /** @type {Boolean} */
    active: false,
    /** @type {String} */
    username: '',
    /** @type {Function} */
    onOverlayClick: () => {},
    /** @type {Function} */
    onSendClick: () => {},
  };
  /** @default */
  render() {
    const {
      active,
      onOverlayClick,
      onSendClick,
      username,
    } = this.props;

    return (
      <Modal
        className='flex-centered'
        useStandardSize
        active={active}
        onOverlayClick={(...args) => { onOverlayClick(...args) }}
      >
        <Panel
          className='bg-white height-full width-full flex-col'
          inner
        >
          <h3 className='flex-none'>{`Send Character Data to ${username}`}</h3>

          <TextArea
            className='flex-grow mar-ver-1 border-gray'
            placeholder='Attach Character Data'
          />

          <ButtonGroup className='flex-none justify-end'>
            <Button
              className='pad-2'
              onClick={(...args) => { onSendClick(...args) }}
            >
              <Icon name='fa-paper-plane'/>
              <span>Send</span>
            </Button>
          </ButtonGroup>
        </Panel>
      </Modal>
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
    constructor(props) {
      super(props);

      this.onOverlayClick = this.onOverlayClick.bind(this);
      this.onSendClick = this.onSendClick.bind(this);

      this.state = {
        /** @type {Object} */
        focusedUser: null,
      }
    };
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
      const {
        permissions,
        otherUsers,
      } = this.props;

      const { focusedUser } = this.state;

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

            <AttachDataModal
              active={!_.isNil(focusedUser)}
              username={_.get(focusedUser, 'username')}
              onOverlayClick={this.onOverlayClick}
              onSendClick={this.onSendClick}
            />

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
    /**
     *
     */
    onOverlayClick() {
      this.setState({focusedUser: null});
    }
    /**
     *
     */
    onSendClick() {
      console.log('onSendClick');
    }
  }
);

export default ConnectedGameMasterPage;
