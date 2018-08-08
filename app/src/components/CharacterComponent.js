import React, { Component } from 'react';

import dynamoDB from '../services/dynamoDB';

export default class CharacterComponent extends Component {

  async componentDidMount() {
    await dynamoDB.init();
    await dynamoDB.create('BLINKS-ID');
    const data = await dynamoDB.get('BLINKS-ID');
    console.log(data);
    this.setState({ data });
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
