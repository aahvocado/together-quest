import React, { Component } from 'react';

import { ButtonGroup, Link } from 'components/ButtonComponent';
import Icon from 'components/IconComponent';
import Layout, { Panel, InnerPanel } from 'components/LayoutComponent';
import NewsPanel from 'panels/NewsPanel';

class HomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>
          <div>What would you like to do?</div>

          <InnerPanel className='bg-gray' >
            <ButtonGroup>
              <Link to='/new-campaign'><Icon name='fa-map-marked-alt' /><span>Create a new Campaign</span></Link>
            </ButtonGroup>
          </InnerPanel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
}

export default HomePage;
