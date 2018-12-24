import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { isLoggedIn } from 'utils/sessionUtils';

import CharacterComponent from 'components/CharacterComponent';

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

      // todo this needs to fetch model
      const currentCharacter = _.find(props.user.characters, {id: characterId});

      this.state = {
        characterModel: currentCharacter,
      };
    };
    /** @default */
    render() {
      const { characterModel } = this.state;

      // go back to homepage if not logged in or if character is not found
      if (!isLoggedIn() || _.isUndefined(characterModel)) {
        return <Redirect to='/' />
      };

      return (
        <div className='tg-character-details-page flex-col width-full'>
          <CharacterComponent
            character={characterModel}
          />
        </div>
      );
    };
  }
);

export default ConnectedCharacterDetailsPage;
