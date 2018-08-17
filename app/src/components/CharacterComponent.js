import React, { PureComponent } from 'react';

import StatsComponent from 'components/StatsComponent';
import ListComponent from 'components/ListComponent';

class CharacterInfoContainer extends PureComponent {
  render() {
    const { character } = this.props;
    return (
      <div className='character-info-container'>
        <div className='character-info-person'>
          <div className='character-name'>{ character.name }</div>
          <div className='character-title'>{ `"${character.title}"` }</div>
        </div>

        <StatsComponent character={character} />
      </div>
    );
  }
}

class CharacterBlurb extends PureComponent {
  render() {
    const { character } = this.props;

    return (
      <div className='tg-character-blurb character-info-container' onClick={this.handleOnClick}>
        <div className='character-info-person'>
          <div className='character-name'>{ character.name }</div>
          <div className='character-title'>{ `"${character.title}"` }</div>
        </div>
      </div>
    );
  }

  handleOnClick = () => {
    const { onClick, character } = this.props;
    onClick(character);
  }
}

class CharacterComponent extends PureComponent {
  static defaultProps = {
    character: {},
  }
  render() {
    const { character: { name, title, stuff, traits, honors }, character } = this.props;

    return (
      <div className='character-card variant-full tg-card'>

        <div className='character-card-content-container'>
          <div className='character-icon'></div>

          <CharacterInfoContainer
            character={character}
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-stuff'}
            label={'Stuff'}
            list={ stuff }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-traits'}
            label={'Traits'}
            list={ traits }
          />
        </div>

        <div className='character-card-content-container'>
          <ListComponent
            definition={'character-card-honors'}
            label={'Honors'}
            list={ honors }
          />
        </div>

      </div>
    );
  }
}

export default CharacterComponent;

export {
  CharacterComponent,
  CharacterInfoContainer,
  CharacterBlurb,
}
