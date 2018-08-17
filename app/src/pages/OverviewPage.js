import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import { Button, Link } from 'components/ButtonComponent';

// import NewCharacterPanel from 'panels/NewCharacterPanel';

class MasterPage extends Component {
  render() {
    return (
      <div className='overview-page tg-page tg-centered-container'>
        <div className='tg-container'>

          <div className='tg-card'>
            <Link to='/overview/new-character'>
              create new character
            </Link>

            <Button>
              settings
            </Button>
          </div>

          <div>
            <Route path='/overview/new-character' component={<div/>} />
          </div>

        </div>
      </div>
    );
  }
};

export default MasterPage;
