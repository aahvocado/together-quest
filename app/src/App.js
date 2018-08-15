import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import PlayerPage from './pages/PlayerPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="tg-app">
          <Route exact path="/" component={HomePage} />
          <Route path="/overview" component={OverviewPage} />
          <Route path="/player" component={PlayerPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
