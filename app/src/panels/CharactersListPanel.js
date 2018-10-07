import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  // Button,
  // ButtonGroup,
  // Link,
  // Loader,
  Panel,
  // CharacterComponent,
} from 'components';

// redux mappings
function mapStateToProps(state) {
  return {
    characters: state.user.characters,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const ConnectedCharactersListPanel = connect(
  mapStateToProps, mapDispatchToProps
)(
  class CharactersListPanel extends PureComponent {
    constructor(props) {
      super(props);
    };

    static defaultProps = {
      characters: [],
    };

    render() {
      const { characters } = this.props;

      return (
        <Panel>

        </Panel>
      )
    };
  }
);

export default ConnectedCharactersListPanel;
