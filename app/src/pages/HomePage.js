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

const ConnectedHomePage = connect(
  mapStateToProps, mapDispatchToProps
)(
  class HomePage extends Component {
    render() {
      const { user: { userId, campaigns = [] } } = this.props;

      return (
        <Layout className='tg-home tg-page'>
          <Panel>
            <h2>Welcome to Together Quest!</h2>

            <RegisterPanel collapsed={Boolean(userId)} />

            <Panel
              className='bg-gray'
              inner

              collapsed={!Boolean(userId)}
              collpasedView={`Please log in to see more.`}
            >
              <ButtonGroup>
                <Link to='/campaigns'>{`View your ${campaigns.length} campaigns`}</Link>
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
