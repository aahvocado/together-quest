import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppStore from 'data/AppStore';

import Header from 'components/HeaderComponent';

import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';
import PlayerPage from 'pages/PlayerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={AppStore}>
          <div className="tg-app">
            <Header />

            <Route exact path="/" component={HomePage} />
            <Route path="/overview" component={OverviewPage} />
            <Route path="/player" component={PlayerPage} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
