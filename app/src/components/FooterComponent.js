import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class FooterComponent extends PureComponent {
  render() {
    const { user: { userId }} = this.props;

    return (
      <div className='tg-footer flex-none width-full flex-row justify-center' >
        <span>{`ID: ${userId}`}</span>
        <span>"Together Quest" is made by Daniel Xiao</span>
        <a href='mailto:dan.dan.makes.stuff@gmail.com' className='tg-text-link'>Contact</a>
        <a href='https://github.com/neonwednesdays/together-quest' className='tg-text-link'>Source</a>
      </div>
    );
  }
};

const ConnectedFooterComponent = connect((state) => ({
  user: state.user,
}))(FooterComponent);

export default ConnectedFooterComponent;
