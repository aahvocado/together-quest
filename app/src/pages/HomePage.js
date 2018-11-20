import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import { isLoggedIn } from 'utils/sessionUtils';

import {
  Button,
  // ButtonGroup,
  Input,
  Form,
  // Link,
  Layout,
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
          <h2>Home Page</h2>
          <h3>Joining CatQuest? Tell me your name!</h3>
          <Panel inner className='bg-limegreen'>
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

    // wait for server to tell us we joined
    eventClient.socket.once('usersUpdate', (userDataList) => {
      // search for user list to see if our id is in there
      const serverAccepted = _.find(userDataList, (userData) => {
        return userData.userId === this.props.user.userId;
      });

      // if so we can complete signup
      if (serverAccepted) {
        userApi.createUser(formState);
      };
    });

    // tell server we joined
    eventClient.emit('join', formState);
  };
};
/**
 * primary home page
 */
const ConnectedHomePage = connect((state) => ({
  /** @type {Object} */
  user: state.user,
}))(
  class HomePage extends PureComponent {
    /** @default */
    render() {
      const { user } = this.props;
      const { username } = user;

      // different page for not being logged in
      if (!isLoggedIn()) {
        return <UnloggedHomePage user={user} />
      };

      return (
        <Layout className='tg-home tg-page'>
          <Panel>
            <h2>Home Page</h2>
            <h3>{`Welcome to Together Quest, ${username}!`}</h3>

            <Panel inner className='bg-blue'>
              <span>Take a look at your characters tab</span>
            </Panel>

          </Panel>

          <NewsPanel />
        </Layout>
      );
    };
  }
);

export default ConnectedHomePage;
