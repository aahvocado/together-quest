import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

const ConnectedFooterComponent = connect((state) => ({
  user: state.user,
}))(
  class FooterComponent extends PureComponent {
    render() {
      const { user: { userId }} = this.props;

      return (
        <div className='tg-footer flex-none width-full flex-col align-center fsize-small pad-2'>
          <span className='color-litegray'>{`User ID: ${userId}`}</span>
          <span className='mar-t-1'>"Together Quest" is made by Daniel Xiao</span>
          <div className='flex-none mar-t-1'>
            <a href='mailto:dan.dan.makes.stuff@gmail.com' className='tg-text-link sibling-mar-l-1'>Contact</a>
            <a href='https://github.com/neonwednesdays/together-quest' className='tg-text-link sibling-mar-l-1'>Source</a>
          </div>
        </div>
      );
    }
  }
);

export default ConnectedFooterComponent;
