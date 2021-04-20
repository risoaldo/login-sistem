import React from "react";

import { Form } from '@unform/web';

import Input from '../components/Input';
import Button from '../components/Button';

const Login: React.FC = () => {

  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>Email</label>
        <Input name="email" type="email" />

        <label>Password</label>
        <Input name="password" type="password" />

        <Button> Entrar </Button>
      </Form>
    </>
  );
}

export default Login;