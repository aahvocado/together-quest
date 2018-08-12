import React, { Component } from 'react';

import dynamoDB from 'services/dynamoDB';

export default class CharacterComponent extends Component {

  async componentDidMount() {
    await dynamoDB.init();
    await dynamoDB.create('BLINKS-ID');
    const resp = await dynamoDB.get('BLINKS-ID');

    this.setState({
      data: resp.Item
    });
  }

  render() {
    return (
      <div className="character-component">
        "character-component"
        <div>Blinks</div>
        <div></div>
      </div>
    );
  }
}
