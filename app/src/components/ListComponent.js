import React, { PureComponent } from 'react';

import 'styles/list-component.less';

export class ListItemComponent extends PureComponent {
  render() {

    return (
      <div className="list-item-component">
        { this.props.children }
      </div>
    );
  }
}

export default class ListComponent extends PureComponent {
  static defaultProps = {
    definition: undefined, // required to uniquely identify this from other lists
    label: undefined,
    list: [],
  }

  render() {
    const { definition, label, list } = this.props;

    if (!definition || !list) {
      return null;
    }

    return (
      <div className='list-component'>
        <div className='list-component-label'>{ label }</div>

        <ul className='list-container'>
          { list.map((item, idx) =>
            <ListItemComponent key={`${definition}-list-item-${idx}-key`}>{ item }</ListItemComponent>
          )}
        </ul>
      </div>
    );
  }
}
