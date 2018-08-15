import React, { Component } from 'react';
import dynamoDB from 'services/dynamoDB';

import CharacterCard from 'components/CharacterCard';

export default class PlayerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    // await dynamoDB.create('BLINKS-ID');
    const resp = await dynamoDB.get('BLINKS-ID');

    this.setState({
      data: resp.Item
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="tg-player-page tg-centered-container">
        <CharacterCard character={ data } />
      </div>
    );
  }
}
