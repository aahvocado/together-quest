import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'data';

import Header from 'components/HeaderComponent';
import Footer from 'components/FooterComponent';

import CampaignsPage from 'pages/CampaignsPage';
import CampaignDetailsPage from 'pages/CampaignDetailsPage';
import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';

import CharactersListPanel from 'panels/CharactersListPanel';
// import CharacterDetailsPage from 'pages/CharacterDetailsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Fragment>
            <Header />

            <Route exact path="/" component={HomePage} />

            <Route path="/overview" component={OverviewPage} />

            <Route exact path="/campaigns" component={CampaignsPage} />
            {/*<Route path="/campaigns/new" component={CampaignDetailsPage} />*/}
            <Route path="/campaigns/:campaignId" component={CampaignDetailsPage} />

            <Route path="/catquest" component={CharactersListPanel} />
            {/*<Route path="/characters/:characterId" component={CharacterDetailsPage} />*/}

            <Footer />

          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
