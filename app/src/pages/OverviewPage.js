import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import { Button, Link } from 'components/ButtonComponent';

import NewCharacterPanel from 'panels/NewCharacterPanel';

export default class MasterPage extends Component {
  render() {
    return (
      <div className='overview-page tg-centered-container'>
        <div className='tg-container'>
          <Link to='/' isRound
            floatingPosition='top-left'
          >
            <i className='fas fa-arrow-alt-circle-left fa-fw' />
          </Link>

          <div className='tg-card'>
            <Link to='/overview/new-character'>
              create new character
            </Link>

            <Button>
              settings
            </Button>
          </div>

          <div>
            <Route path='/overview/new-character' component={NewCharacterPanel} />
          </div>

        </div>
      </div>
    );
  }
}
