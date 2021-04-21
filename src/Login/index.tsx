import React from "react";

import { Form } from '@unform/web';

import Input from '../components/Input';
import Button from '../components/Button';

import { Container } from './styles';

const Login: React.FC = () => {

  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>Email</label>
        <Input name="email" type="email" />

        <label>Password</label>
        <Input name="password" type="password" />

          <Button type="submit"> Entrar </Button>
      </Form>
    </Container>
  );
}

export default Login;