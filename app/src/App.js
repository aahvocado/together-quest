import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'data';

import Header from 'components/HeaderComponent';
import Footer from 'components/FooterComponent';

import HomePage from 'pages/HomePage';
import CatQuestPage from 'pages/CatQuestPage';
import CharactersPage from 'pages/CharactersPage';
import CharactersListPanel from 'panels/CharactersListPanel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Fragment>
            <Header />

            <Route exact path="/" component={HomePage} />

            <Route path="/catquest" component={CatQuestPage} />
            <Route path="/catquest-players" component={CharactersListPanel} />

            <Route path="/characters" component={CharactersPage} />
            {/*<Route path="/characters/:characterId" component={CharacterDetailsPage} />*/}

            <Footer />

          </Fragment>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
