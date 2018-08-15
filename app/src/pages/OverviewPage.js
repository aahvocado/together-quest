import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import ButtonComponent from 'components/ButtonComponent';
import LinkButtonComponent from 'components/LinkButtonComponent';

import NewCharacterPanel from 'panels/NewCharacterPanel';

export default class MasterPage extends Component {
  render() {
    return (
      <div className='overview-page tg-centered-container'>
        <div className='tg-container'>
          <LinkButtonComponent icon='arrow-alt-circle-left' variant='corner' to='/' />

          <div className='tg-card'>
            <LinkButtonComponent to='/overview/new-character'>
            create new character
            </LinkButtonComponent>

            <ButtonComponent>
              settings
            </ButtonComponent>
          </div>

          <div>
            <Route path='/overview/new-character' component={NewCharacterPanel} />
          </div>

        </div>
      </div>
    );
  }
}
