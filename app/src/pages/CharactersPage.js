import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { isLoggedIn } from 'utils/sessionUtils';

import {
  // Button,
  // ButtonGroup,
  CharacterButton,
  // Link,
  Layout,
  Loader,
  Panel,
} from 'components';

/**
 *
 */
class CharactersPage extends PureComponent {
  /** @default */
  render() {
    const { user: { characters = [] } } = this.props;

    // go back to homepage if not logged in
    if (!isLoggedIn()) {
      return <Redirect to='/' />
    };

    const hasCharacters = !_.isEmpty(characters);

    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Characters Page</h2>

          <Panel inner className='bg-limegreen'>
            <span>Please wait for your game master to send you character data.</span>
            <Loader active={!hasCharacters} />

            <div className='flex-row flex-none'>
              { characters.map((char, idx) => (
                <CharacterButton
                  key={`char-list-item#${idx}-key`}
                  {...char}
                />
              ))}
            </div>
          </Panel>

        </Panel>
      </Layout>
    );
  };
};
// redux mappings
const mapStateToProps = (state) => ({
  user: state.user,
});
const ConnectedCharactersPage = connect(mapStateToProps)(CharactersPage);
export default ConnectedCharactersPage;
