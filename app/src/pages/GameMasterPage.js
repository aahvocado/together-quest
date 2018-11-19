import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  Button,
  ButtonGroup,
  Link,
  Loader,
  Panel,
} from 'components';

// redux mappings
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
});

const ConnectedGameMasterPage = connect(mapStateToProps, mapDispatchToProps)(
  class GameMasterPage extends PureComponent {
    static defaultProps = {
      campaigns: [],
      onCampaignSelect: () => {},
    };
    /** @default */
    constructor(props) {
      super(props);
    };
    /** @default */
    componentWillMount() {

    };
    /** @default */
    render() {
      return (
        <Panel>

        </Panel>
      )
    };

  }
);

export default ConnectedGameMasterPage;
