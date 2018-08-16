import React, { PureComponent } from 'react';

class FooterComponent extends PureComponent {
  render() {
    return (
      <div
        className='tg-footer'
      >
        <span>Together-Quest is made by Daniel Xiao!</span>
        <a href='mailto:dan.dan.makes.stuff@gmail.com' className='tg-text-link'>Contact</a>
        <a href='https://github.com/neonwednesdays/together-quest' className='tg-text-link'>Source</a>
      </div>
    );
  }
};

export default FooterComponent;

