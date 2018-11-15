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
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
            <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                    <animate attributeName="r"
                        begin="0s" dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                        begin="0s" dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="22" cy="22" r="1">
                    <animate attributeName="r"
                        begin="-0.9s" dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                        begin="-0.9s" dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
      </div>
    );
  };
}

export default LoaderComponent;

export {
  LoaderComponent,
}
