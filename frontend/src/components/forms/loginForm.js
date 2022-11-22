import React from 'react';
import { Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { email: '', password: '' };
  }

  handleValidSubmit = async (event, values) => {
    this.setState({ email: values.email, password: values.password });
    this.props.onLogin(this.state.email, this.state.password);
    console.log(`Login Successful`);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="email"
          label="Correo"
          type="text"
          validate={{
            required: true,
            email: true,
          }}
        />
        <AvField
          name="password"
          label="Contraseña"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: 'Please enter your password',
            },
            /*pattern: {
              value: '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',
              errorMessage:
                'Your password must be composed only with letter and numbers',
            },*/
            minLength: {
              value: 8,
              errorMessage: 'Your password must be between 6 and 16 characters',
            },
            maxLength: {
              value: 16,
              errorMessage: 'Your password must be between 6 and 16 characters',
            },
          }}
        />
        <Button id="submit" className="w-100">
          Iniciar sesión
        </Button>

      </AvForm>
    );
  }
}
