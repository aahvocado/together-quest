import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import store from 'data';
import { addCharacter } from 'data/actions';

import {
  Button,
  // ButtonGroup,
  CharacterButton,
  Input,
  Form,
  // Link,
  Layout,
  Loader,
  Panel,
} from 'components';

import userApi from 'apis/userApi';
import eventClient from 'services/eventClient';

import NewsPanel from 'panels/NewsPanel';

/**
 * empty log in page
 */
class UnloggedHomePage extends PureComponent {
  /** @default */
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      formState: {},
    };
  };
  /** @default */
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Joining CatQuest? Tell me your name!</h2>
          <Panel inner className='bg-green'>
            <Form
              onSubmit={this.handleFormSubmit}
            >
              <Input
                name='username'
                placeholder='username'
              />
              <Button>Join</Button>
            </Form>
          </Panel>
        </Panel>

        <NewsPanel />
      </Layout>
    );
  };
  /**
   * tell the server we've signed up
   */
  handleFormSubmit(formState) {
    // do nothing if username is empty
    if (!formState.username || formState.username.length <= 0) return;

    // wait for server to tell us we joined, and once it's confirmed we can update our user data
    eventClient.socket.once('joined', (data) => {
      const joinedUsername = data.messages[0].username;
      if (joinedUsername === formState.username) { // matching username
        userApi.createUser(formState);
      };
    });

    // tell server we joined
    eventClient.emit('join', formState);

    // TESTING
    userApi.createUser(formState);

  };
};
/**
 * primary home page
 */
class HomePage extends PureComponent {
  /** @default */
  render() {
    const { user: { userId, characters } } = this.props;

    // different page for not being logged in
    const isLoggedIn = Boolean(userId);
    if (!isLoggedIn) {
      return <UnloggedHomePage />
    };

    const hasCharacters = !_.isEmpty(characters);

    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>

          <CharacterButton onClick={this.test.bind(this)} />

          <Panel inner className='bg-green'>
            <span>Please wait for your game master to send you character data.</span>
            <Loader active={!hasCharacters} />

            <div className='flex-row flex-none'>
            { characters.map((char, idx) => (
              <CharacterButton
                key={`char-list-item#${idx}-key`}
                {...char}
              />
            ))}
            </div>
          </Panel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  };

  test() {
    store.dispatch(addCharacter({}));
  }
};
// redux mappings
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({

});

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default ConnectedHomePage;
