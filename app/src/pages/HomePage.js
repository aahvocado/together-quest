import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  ButtonGroup,
  Link,
  Layout,
  Panel,
} from 'components';

import NewsPanel from 'panels/NewsPanel';
import { RegisterPanel } from 'panels/LoginPanel';

// redux mappings
function mapStateToProps(state) {
  return {
    user: state.user,
  };
};
function mapDispatchToProps(dispatch) {
  return {};
};

class UnloggedHomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Please log in or register for Together Quest!</h2>
          <RegisterPanel />
        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
};

const ConnectedHomePage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class HomePage extends Component {
    render() {
      const { user: { userId, campaigns = [], characters = [] } } = this.props;

      const isLoggedIn = Boolean(userId);

      // different page for not being logged in
      if (!isLoggedIn) {
        return <UnloggedHomePage />
      };

      return (
        <Layout className='tg-home tg-page'>
          <Panel>
            <h2>Welcome to Together Quest!</h2>

            <Panel
              className='bg-gray'
              inner
            >
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
  }
);

export default ConnectedHomePage;
