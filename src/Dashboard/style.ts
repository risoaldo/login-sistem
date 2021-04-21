import styled from 'styled-components';

import { shade } from 'polished';


export const Container = styled.div`

  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%; 
  height: 100px;
  background: #869;
`;

export const Menu = styled.div`
  width: 300px; 
  height: 100vh;
  background: #154;
`;

export const Footer = styled.div`
  background: #7654;
`;

