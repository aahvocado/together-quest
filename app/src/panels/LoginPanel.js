import React, { PureComponent } from 'react';

import {
  Button,
  ButtonGroup,
  Link,
  Icon,
  Layout,
  Panel,
  CharacterComponent,
} from 'components';

class RegisterPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-green'>
        <form>
          <label>
            email
            <input></input>
          </label>

          <label>
            username
            <input></input>
          </label>

          <label>
            password
            <input disabled></input>
          </label>

          <Button type='submit'>Register</Button>
        </form>

      </Panel>
    );
  }
}

class LoginPanel extends PureComponent {
  render() {
    return (
      <Panel inner className='bg-green'>
        <form>
          <label>
            email
            <input></input>
          </label>

          <label>
            password
            <input></input>
          </label>
        </form>

        <Button type='submit'>Login</Button>
      </Panel>
    );
  }
};

export default LoginPanel;
export {
  RegisterPanel,
}
