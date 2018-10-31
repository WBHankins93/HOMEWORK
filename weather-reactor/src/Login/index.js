import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid } from 'semantic-ui-react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    // stop page from refreshing
    e.preventDefault();

    this.props.login(this.state.username);

  }

  render(){
    console.log(this.props, ' props in Login Component')
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input fluid icon='user' iconPosition='left' type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder="username"/>
            <Form.Input fluid icon="lock" iconPosition="left" type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder="password"/>
            <Button color="green" fluid size="large" type="Submit">Login </Button>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Login;
