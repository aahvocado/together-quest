import React, { PureComponent } from 'react';
import cn from 'classnames';

class InputComponent extends PureComponent {
  static defaultProps = {
    className: '',
    disabled: false,
    label: undefined,
    name: undefined, // required for forms
    placeholder: '',

    onChange: () => {},
    validation: undefined, // todo: function that validates the field
  };

  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  };

  render() {
    const { className, disabled, label, name, placeholder } = this.props;

    const modifiers = {
      'disabled': disabled,
    };

    return (
      <label className={cn('tg-input', modifiers, className)}>
        <span className='tg-input-label'>{label || name}</span>
        <input
          className='tg-input-field'
          onChange={this.handleOnChange}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          type='text'
        />
      </label>
    );
  };

  handleOnChange(e) {
    const { onChange } = this.props;
    onChange(e);
  };
}

export default InputComponent;
