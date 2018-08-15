import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import LinkButtonComponent from 'components/LinkButtonComponent';

export default class MasterPage extends Component {
  render() {
    return (
      <div className="overview-page tg-centered-container">


        <div className="tg-card">
          <LinkButtonComponent icon='arrow-alt-circle-left' />
          overview page
        </div>
      </div>
    );
  }
}
