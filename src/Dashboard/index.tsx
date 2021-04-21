import React from "react";

import { Container, Footer, Header, Menu, Content } from './style';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu>menu</Menu>
      <Content>
        <Header>header</Header>
        <Footer>Footer</Footer>
      </Content>
    </Container>
  )
}

export default Dashboard;