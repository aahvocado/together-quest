import React, { PureComponent } from 'react';
import userApi from 'apis/userApi';

import {
  Button,
  Form,
  Input,
  Loader,
  Panel,
} from 'components';

class RegisterPanel extends PureComponent {
  state = {
    isLoading: false,
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Panel inner className='bg-green'>

        <Form onSubmit={this.handleRegisterSubmit}>

          <Loader active={isLoading} overlay centered />

          <Input name='email' disabled />

          <Input name='username'/>

          <Input name='password' disabled />

          <Button type='submit'>Register</Button>

        </Form>

      </Panel>
    );
  };

  handleRegisterSubmit = async (data) => {
    this.setState({ isLoading: true }, async () => {
      const createUserPromise = await userApi.createUser(data);

      this.setState({ isLoading: false });
    })
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
