import React, { PureComponent } from 'react';
import cn from 'classnames';

class FormComponent extends PureComponent {
  static defaultProps = {
    className: '',
    disabled: false,
    onSubmit: () => {},
  };

  render() {
    const { className, disabled } = this.props;

    const modifiers = {
      'disabled': disabled,
    };

    return (
      <form className={cn('tg-form', modifiers, className)} onSubmit={this.handleOnSubmit}>
        {this.props.children}
      </form>
    );
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(e);
  };
}

export default FormComponent;
