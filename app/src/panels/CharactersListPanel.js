import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  // Button,
  // ButtonGroup,
  // Link,
  // Loader,
  Panel,
  CharacterComponent,
} from 'components';
import {
  BLINKS,
  NOOK,
  PEARL,
  DOUGLAS,
  // PALLY,
} from 'apis/CatQuestApi';

// redux mappings
function mapStateToProps(state) {
  return {
    characters: state.user.characters,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const ConnectedCharactersListPanel = connect(mapStateToProps, mapDispatchToProps)(
  class CharactersListPanel extends PureComponent {
    // constructor(props) {
    //   super(props);
    // };

    static defaultProps = {
      characters: [],
    };

    render() {
      // const { characters } = this.props;

      return (
        <Panel className='character-list'>
          <CharacterComponent character={BLINKS} />
          <CharacterComponent character={NOOK} />
          <CharacterComponent character={PEARL} />
          <CharacterComponent character={DOUGLAS} />
          {/*<CharacterComponent character={PALLY} />*/}
        </Panel>
      )
    };
  }
);

export default ConnectedCharactersListPanel;
