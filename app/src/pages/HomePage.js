import React, { Component } from 'react';

import {
  ButtonGroup,
  Link,
  Icon,
  Layout,
  Panel,
} from 'components';

import NewsPanel from 'panels/NewsPanel';
import LoginPanel from 'panels/LoginPanel';

class HomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>

          <LoginPanel />

          <Panel inner className='bg-gray' >
            ...
          </Panel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
}

export default HomePage;
