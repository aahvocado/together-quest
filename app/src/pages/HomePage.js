import React, { Component } from 'react';

import { Link } from 'components/ButtonComponent';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page tg-page tg-centered-container">
        <div className="tg-card">
          <Link to="/overview">Game Master</Link>
          <Link to="/player">Player</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
