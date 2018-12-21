import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  // Button,
  // ButtonGroup,
  // Link,
  // Loader,
  Panel,
} from 'components';
import CharacterComponent from 'components/CharacterComponent';

import {
  BLINKS,
  NOOK,
  PEARL,
  DOUGLAS,
} from 'apis/catquest/catquestCharactersApi';

// redux mappings
function mapStateToProps(state) {
  return {
    characters: state.user.characters,
  };
};
const ConnectedCatQuestPage = connect(mapStateToProps)(
  class CatQuestPage extends PureComponent {
    // constructor(props) {
    //   super(props);
    // };

    static defaultProps = {
      characters: [],
    };

    render() {
      return (
        <Panel baseClassName='flex-col' className='character-list'>
          <CharacterComponent character={BLINKS} />
          <CharacterComponent character={NOOK} />
          <CharacterComponent character={PEARL} />
          <CharacterComponent character={DOUGLAS} />
        </Panel>
      )
    };
  }
);

export default ConnectedCatQuestPage;
