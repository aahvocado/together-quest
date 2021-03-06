import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import { updatePermissions } from 'data/actions';

import {
  Button,
  ButtonGroup,
  ListComponent,
  Loader,
  Layout,
  ModalComponent,
  Panel,
  TextArea,
} from 'components';
import PlayerInteractionComponent from 'components/PlayerInteractionComponent';

import eventClient from 'services/eventClient';
import {BLINKS} from 'apis/catquest/catquestCharactersApi';

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
    onAttachClick: () => {},
    /** @type {Function} */
    onCancelClick: () => {},
    /** @type {Function} */
    onOverlayClick: () => {},
  };
  /** @default */
  constructor(props) {
    super(props);

    this.onAttachTextChange = this.onAttachTextChange.bind(this);
    this.handleOnAttachClick = this.handleOnAttachClick.bind(this);

    this.state = {
      /** @type {String} */
      attachText: JSON.stringify(BLINKS),
    }
  };
  /** @default */
  render() {
    const {
      active,
      onCancelClick,
      onOverlayClick,
      username,
    } = this.props;

    const { attachText } = this.state;

    return (
      <ModalComponent
        className='flex-centered'
        useStandardSize
        active={active}
        onOverlayClick={(...args) => { onOverlayClick(...args) }}
      >
        <Panel
          className='bg-white height-full width-full flex-col borradius-2 simple-shadow'
        >
          <h3 className='flex-none'>{`Send Character Data to ${username}`}</h3>

          <TextArea
            className='flex-grow mar-ver-2 border-gray'
            placeholder='Attach Character Data'
            onChange={this.onAttachTextChange}
            value={attachText}
          />

          <ButtonGroup className='flex-none justify-end'>
            <Button
              className='pad-2'
              icon='fa-window-close'
              onClick={(...args) => { onCancelClick(...args) }}
            />

            <Button
              className='pad-2'
              icon='fa-paper-plane'
              onClick={this.handleOnAttachClick}
            >
              <span>Send</span>
            </Button>
          </ButtonGroup>
        </Panel>
      </ModalComponent>
    )
  };
  /**
   * @param {SyntheticEvent}
   */
  onAttachTextChange(e) {
    this.setState({attachText: e.currentTarget.value});
  }
  /**
   *
   */
  handleOnAttachClick() {
    const { attachText } = this.state;
    this.props.onAttachClick(attachText);
  }
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

      this.handleOnCancelModal = this.handleOnCancelModal.bind(this);
      this.handleOnAttachClick = this.handleOnAttachClick.bind(this);
      this.handleOnSendDataClick = this.handleOnSendDataClick.bind(this);

      this.state = {
        /** @type {Object} */
        focusedUser: null,
        /** @type {Boolean} */
        isAttachModalOpen: false,
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

      const { focusedUser, isAttachModalOpen} = this.state;

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
              active={isAttachModalOpen}
              username={_.get(focusedUser, 'username')}
              onAttachClick={this.handleOnAttachClick}
              onCancelClick={this.handleOnCancelModal}
              onOverlayClick={this.handleOnCancelModal}
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
                ItemComponent={(props) => (
                  <PlayerInteractionComponent
                    {...props}
                    onSendDataClick={this.handleOnSendDataClick}
                  />
                )}
              />
            </Panel>
          </Panel>
        </Layout>
      )
    };
    /**
     * cliecked on overlay in the modal
     */
    handleOnCancelModal() {
      this.setState({isAttachModalOpen: false});
    }
    /**
     * clicked on the send attachment in the modal
     *
     */
    handleOnAttachClick(attachText) {
      const { focusedUser: { socketId } } = this.state;

      const attachedData = JSON.parse(attachText);

      // if attached object doesn't have a name or id, then we can't send it
      if (!attachedData.name && !attachedData.id) return;

      eventClient.emit('sendCharacterData', socketId, attachedData);

      this.setState({isAttachModalOpen: false})
    }
    /**
     * clicked on the send data to player button
     *
     * @param {Object} data
     */
    handleOnSendDataClick(data) {
      this.setState({focusedUser: data, isAttachModalOpen: true});
    }
  }
);

export default ConnectedGameMasterPage;
