import React, { Component } from 'react';

import { Button, Link } from 'components/ButtonComponent';
import Layout, { Panel, InnerPanel } from 'components/LayoutComponent';
import NewsPanel from 'panels/NewsPanel';

class HomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>

          <div>What would you like to do?</div>

          <InnerPanel className='bg-gray'>
            <Button>Test</Button>
            <Link>Test</Link>
          </InnerPanel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
}

export default HomePage;
