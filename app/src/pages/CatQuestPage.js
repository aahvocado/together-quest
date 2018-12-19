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
} from 'apis/catQuestApi';

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
      // const { characters } = this.props;

      return (
        <Panel baseClassName='flex-col' className='character-list'>
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

export default ConnectedCatQuestPage;
