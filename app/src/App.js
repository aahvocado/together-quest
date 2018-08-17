import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppData from 'data/AppData';

import Header from 'components/HeaderComponent';
import Footer from 'components/FooterComponent';

import CampaignPage from 'pages/CampaignPage';
import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';
import PlayerPage from 'pages/PlayerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={AppData}>
          <Fragment>
            <Header />

            <Route exact path="/" component={HomePage} />
            <Route path="/overview" component={OverviewPage} />
            <Route path="/campaigns" component={CampaignPage} />
            <Route path="/player" component={PlayerPage} />

            <Footer />

          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
