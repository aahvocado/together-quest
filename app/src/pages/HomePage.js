import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Input,
  Form,
  Link,
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

    userApi.createUser(formState); // DEBUGGING

  };
};
/**
 * primary home page
 */
class HomePage extends PureComponent {
  /** @default */
  render() {
    const { user: { userId } } = this.props;

    // different page for not being logged in
    const isLoggedIn = Boolean(userId);
    if (!isLoggedIn) {
      return <UnloggedHomePage />
    };

    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>

          <Panel inner className='bg-green'>
            <span>Please wait for your character data.</span>
            <Loader active />
          </Panel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
};
// redux mappings
function mapStateToProps(state) {
  return {
    user: state.user,
  };
};
function mapDispatchToProps(dispatch) {
  return {};
};

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default ConnectedHomePage;
