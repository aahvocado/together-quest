import React, { Component } from 'react';

import { Link } from 'components/ButtonComponent';

export default class MasterPage extends Component {
  render() {
    return (
      <div className="overview-page tg-centered-container">
        <div className="tg-card">
          <Link to="/overview">Game Master</Link>
          <Link to="/player">Player</Link>
        </div>
      </div>
    );
  }
}
