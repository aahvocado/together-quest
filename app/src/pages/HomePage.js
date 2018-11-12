import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Input,
  Link,
  Layout,
  Panel,
} from 'components';

import NewsPanel from 'panels/NewsPanel';

/**
 * empty log in page
 */
class UnloggedHomePage extends Component {
  /** @default */
  constructor(props) {
    super(props);

    this.handleOnJoinClick = this.handleOnJoinClick.bind(this);
  };
  /** @default */
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Joining CatQuest? Tell me your name!</h2>
          <Panel inner className='bg-green'>
            <Input placeholder='name' />
            <Button onClick={this.handleOnJoinClick}>Join</Button>
          </Panel>
        </Panel>

        <NewsPanel />
      </Layout>
    );
  };
  /**
   *
   */
  handleOnJoinClick() {

  };
};
/**
 * primary home page here
 */
class HomePage extends Component {
  render() {
    const { user: { userId, campaigns = [], characters = [] } } = this.props;

    // different page for not being logged in
    const isLoggedIn = Boolean(userId);
    if (!isLoggedIn) {
      return <UnloggedHomePage />
    };

    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>

          <Panel inner className='bg-gray'>
            <ButtonGroup>
              <Link to='/campaigns'>{`View your ${campaigns.length} campaigns`}</Link>
              <Link to='/characters'>{`View your ${characters.length} characters`}</Link>
            </ButtonGroup>
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
