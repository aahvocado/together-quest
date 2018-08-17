import React, { Component } from 'react';

import {
  ButtonGroup,
  Link,
  Icon,
  Layout,
  Panel,
} from 'components';

import NewsPanel from 'panels/NewsPanel';

class HomePage extends Component {
  render() {
    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Welcome to Together Quest!</h2>
          <div>What would you like to do?</div>

          <Panel inner className='bg-gray' >
            <ButtonGroup>
              <Link to='/new-campaign'><Icon name='fa-map-marked-alt' /><span>Create a new Campaign</span></Link>
            </ButtonGroup>
          </Panel>

        </Panel>

        <NewsPanel />
      </Layout>
    );
  }
}

export default HomePage;
