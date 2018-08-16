import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from 'components/HeaderComponent';

import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import PlayerPage from './pages/PlayerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="tg-app">
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route path="/overview" component={OverviewPage} />
          <Route path="/player" component={PlayerPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
