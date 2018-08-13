import React, { Component } from 'react';

import 'styles/character-card.less';

import dynamoDB from 'services/dynamoDB';

import StatsComponent from 'components/StatsComponent';
import ListComponent from 'components/ListComponent';

export class CharacterInfoContainer extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className='character-info-container'>
        <div className='character-name'>{name}</div>
        <div className='character-title'>{`"${title}"`}</div>
        <StatsComponent />
      </div>
    );
  }
}

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
    const { data } = this.state;

    return (
      <div className='character-card variant-full'>

        <div className='character-card-content-container'>
          <div className='character-icon'></div>

          <CharacterInfoContainer
            name={data.name}
            title={data.title}
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-stuff'}
            label={'Stuff'}
            list={ data.stuff }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-traits'}
            label={'Traits'}
            list={ data.traits }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-honors'}
            label={'Honors'}
            list={ data.honors }
          />
        </div>

      </div>
    );
  }
}
