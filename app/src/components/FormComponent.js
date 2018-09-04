import React, { Component } from 'react';
import cn from 'classnames';
import uuid from 'uuid/v4';

import {
  Input,
} from 'components';

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
    };

    this.handleChildFormOnChange = this.handleChildFormOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.massageFormChildren = this.massageFormChildren.bind(this);
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!Object.is(this.state.form, nextState.form)) {
      return false;
    };

    return true;
  };

  static defaultProps = {
    className: '',
    disabled: false,
    onChange: () => {},
    onSubmit: () => {},
  };

  render() {
    const { className, disabled } = this.props;

    const modifiers = {
      'disabled': disabled,
    };

    const children = this.massageFormChildren(this.props.children);

    return (
      <form className={cn('tg-form', modifiers, className)} onSubmit={this.handleOnSubmit}>
        { children }
      </form>
    );
  };

  handleOnSubmit(e) {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state.form);
  };

  massageFormChildren(children) {
    return children.map((child) => {
      if (child.type === Input) {
        return React.cloneElement(child, { onChange: this.handleChildFormOnChange, key: uuid() });
      };

      return child;
    })
  };

  handleChildFormOnChange(e) {
    const { name, value } = e.target;
    if (!name || value.length === 0) { return; }; // do nothing if name is not given

    const updatedForm = Object.assign({}, this.state.form, { [name]: value });

    const { onChange } = this.props;
    this.setState({ form: updatedForm }, () => { onChange(updatedForm) } );
  };
}

export default FormComponent;
