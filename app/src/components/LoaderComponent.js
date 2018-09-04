import React, { PureComponent } from 'react';
import cn from 'classnames';

class LoaderComponent extends PureComponent {
  static defaultProps = {
    className: '',

    active: false,
    overlay: false,
    centered: false,
  };

  render() {
    const { className, active, centered, overlay } = this.props;

    const modifiers = {
      'disabled': !active,
      'tg-loader--centered': centered,
      'tg-loader--overlay': overlay,
    };

    return (
      <div className={cn('tg-loader', modifiers, className)}>
        <span>Loading</span>
      </div>
    );
  };
}

// function attachLoader(container) {
//   const element = ReactDOM.findDOMNode(container);
//   ReactDOM.render(<LoaderComponent centered overlay />, element);
//   const removeLoader = () => {
//     ReactDOM.unmountComponentAtNode(element);
//   };
//   return removeLoader;
// };

export default LoaderComponent;

export {
  LoaderComponent,
}
