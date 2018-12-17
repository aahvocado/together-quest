import React, { PureComponent } from 'react';
import cn from 'classnames';

/**
 *
 */
class ListItemComponent extends PureComponent {
  /** @default */
  render() {
    return (
      <li className="list-item-component pad-1 flex-none" {...this.props} />
    );
  }
}
/**
 *
 */
class ListComponent extends PureComponent {
  static defaultProps = {
    /** @type {string} */
    baseClassName: 'flex-col',
    /** @type {string} */
    className: '',
    /** @type {Function} */
    getKey: (item) => (item.id),
    /** @type {Array<*>} */
    list: [],
    /** @type {Component} */
    ItemComponent: ListItemComponent,
  };
  /** @default */
  render() {
    const {
      baseClassName,
      className,
      getKey,
      list,
      ItemComponent,
    } = this.props;

    return (
      <ul className={cn('list-component', baseClassName, className)}>
        { list.map((item) =>
          <ItemComponent
            key={`ListItem#${getKey(item)}-key`}
            {...item}
          />
        )}
      </ul>
    );
  }
}

export default ListComponent;
export {
  ListComponent,
  ListItemComponent,
}
