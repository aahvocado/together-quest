import React, { Component } from 'react';
import './styles/App.css';

import UserPage from './pages/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserPage />
      </div>
    );
  }
}

export default App;
