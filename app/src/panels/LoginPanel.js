import React, { PureComponent } from 'react';

import {
  Button,
  // ButtonGroup,
  Form,
  Input,
  // Layout,
  Panel,
  // CharacterComponent,
} from 'components';

class RegisterPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-green'>
        <Form>
          <Input label='email'/>

          <Input label='username'/>

          <Input label='password' disabled />

          <Button type='submit'>Register</Button>
        </Form>

      </Panel>
    );
  }
}

class LoginPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-green'>
        <Form>
          <label>
            email
            <input></input>
          </label>

          <label>
            password
            <input></input>
          </label>
        </Form>

        <Button type='submit'>Login</Button>
      </Panel>
    );
  }
};

export default LoginPanel;
export {
  RegisterPanel,
}
