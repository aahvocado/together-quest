import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
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

const ConnectedHomePage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class HomePage extends Component {
    render() {
      const { user } = this.props;

      return (
        <Layout className='tg-home tg-page'>
          <Panel>
            <h2>Welcome to Together Quest!</h2>

            <RegisterPanel collapsed={Boolean(user.userId)} />

            <Panel inner className='bg-gray' >
              ...
            </Panel>

          </Panel>

          <NewsPanel />
        </Layout>
      );
    }
  }
);

export default ConnectedHomePage;
