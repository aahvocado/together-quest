import React, { Component } from 'react';

import { Link } from 'components/ButtonComponent';
import Layout, { Panel, InnerPanel } from 'components/LayoutComponent';
import NewsPanel from 'panels/NewsPanel';

class HomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          test
        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
}

export default HomePage;
