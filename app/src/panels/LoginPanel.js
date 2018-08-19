import React, { PureComponent } from 'react';
import userApi from 'apis/userApi';

import {
  Button,
  Form,
  Input,
  Panel,
} from 'components';

class RegisterPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-green'>
        <Form onSubmit={this.handleRegisterSubmit}>
          <Input label='email'/>

          <Input label='username'/>

          <Input label='password' disabled />

          <Button type='submit'>Register</Button>
        </Form>

      </Panel>
    );
  };

  handleRegisterSubmit = async (data) => {
    const test = { username: 'first', email: 'first@test.com' }
    const resp = await userApi.createUser(test);
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
