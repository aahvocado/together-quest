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
  constructor(props) {
    super(props);

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  };

  state = {
    isLoading: false,
  };

  render() {
    const { collapsed } = this.props;
    const { isLoading } = this.state;

    return (
      <Panel inner className='bg-limegreen' collapsed={collapsed} collpasedView={`Hello!`}>

        <Form onSubmit={this.handleRegisterSubmit}>

          <Loader active={isLoading} overlay centered />

          <Input name='email' disabled />

          <Input name='username' />

          <Input name='password' disabled />

          <Button type='submit'>Register</Button>

        </Form>

      </Panel>
    );
  };

  async handleRegisterSubmit(data) {
    // check if required data is present
    if (!data.username) {
      return console.log('requirements not met'); // todo validation
    }

    // save to db and update the store
    this.setState({ isLoading: true }, async () => {
      await userApi.createUser(data);

      // this.setState({ isLoading: false });
    })
  };
}

class LoginPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-limegreen'>
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
