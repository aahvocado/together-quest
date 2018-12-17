import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { isLoggedIn } from 'utils/sessionUtils';

import {
  CharacterComponent,
  Panel,
} from 'components';

import { BLINKS } from 'apis/catQuestApi';

/**
 *
 */
const ConnectedCharacterDetailsPage = connect((state) => ({
  /** @type {Object} */
  user: state.user,
}))(
  class CharacterDetailsPage extends PureComponent {
    /** @default */
    constructor(props) {
      super(props);

      const { match: { params: { characterId } } } = props; // from route

      const currentCharacter = _.find(props.user.characters, {id: characterId});

      this.state = {
        currentCharacter: currentCharacter,
      };
    };
    /** @default */
    render() {
      // const { currentCharacter } = this.state;
      const currentCharacter = BLINKS;

      // go back to homepage if not logged in or if character is not found
      if (!isLoggedIn() || _.isUndefined(currentCharacter)) {
        return <Redirect to='/' />
      };

      return (
        <Panel className='tg-character-details-page bg-white width-full'>
          <CharacterComponent character={currentCharacter} />
        </Panel>
      );
    };
  }
);

export default ConnectedCharacterDetailsPage;
