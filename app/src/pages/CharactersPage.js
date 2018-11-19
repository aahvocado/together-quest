import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import {
  // Button,
  // ButtonGroup,
  CharacterButton,
  // Link,
  Layout,
  Loader,
  Panel,
} from 'components';

import NewsPanel from 'panels/NewsPanel';

/**
 *
 */
class CharactersPage extends PureComponent {
  /** @default */
  render() {
    const { user: { characters = [] } } = this.props;

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

        <NewsPanel />
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
