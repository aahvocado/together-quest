import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import { isLoggedIn } from 'utils/sessionUtils';

import {
  Layout,
  Loader,
  Panel,
} from 'components';
import CharacterButton from 'components/CharacterButtonComponent';

/**
 *
 */
const ConnectedCharactersPage = connect((state) => ({
  /** @type {Object} */
  user: state.user,
}))(
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
              { !hasCharacters &&
                <h3>Please wait for your game master to send you character data.</h3>
              }
              { hasCharacters &&
                <h3>Choose your Character!</h3>
              }
              <Loader active={!hasCharacters} />

              <div className='flex-row flex-none'>
                { characters.map((characterModel, idx) => (
                  <CharacterButton
                    key={`char-list-item#${idx}-key`}
                    model={characterModel}
                  />
                ))}
              </div>
            </Panel>

          </Panel>
        </Layout>
      );
    };
  }
);

export default ConnectedCharactersPage;
