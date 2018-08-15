import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import ButtonComponent from 'components/ButtonComponent';
import LinkButtonComponent from 'components/LinkButtonComponent';

export default class MasterPage extends Component {
  render() {
    return (
      <div className="overview-page tg-centered-container">
        <div className='tg-container'>
          <LinkButtonComponent icon='arrow-alt-circle-left' variant='corner' />

          <div className="tg-card">
            <div>
              <ButtonComponent>
                create new character
              </ButtonComponent>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
