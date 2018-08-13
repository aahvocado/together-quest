import React, { Component } from 'react';

import 'styles/character_card.less';

import dynamoDB from 'services/dynamoDB';

export default class CharacterCard extends Component {
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
    const { data = {} } = this.state;

    return (
      <div className="character-card">
        <div>{data.name}</div>
        <div>{data.title}</div>
      </div>
    );
  }
}
