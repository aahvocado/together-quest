import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

import store from 'data';
import { addCharacter } from 'data/actions';

import {
  Button,
  // ButtonGroup,
  CharacterButton,
  Input,
  Form,
  // Link,
  Layout,
  Loader,
  Panel,
} from 'components';

import userApi from 'apis/userApi';
import eventClient from 'services/eventClient';

import NewsPanel from 'panels/NewsPanel';

/**
 *
 */
class CharactersPage extends PureComponent {
  /** @default */
  render() {
    const { user: { username, characters = [] } } = this.props;

    const hasCharacters = !_.isEmpty(characters);

    return (
      <Layout className='tg-home tg-page'>
        <Panel>
          <h2>Characters Page</h2>

          <Panel inner className='bg-green'>
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
const mapDispatchToProps = (dispatch) => ({

});

const ConnectedCharactersPage = connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
export default ConnectedCharactersPage;
