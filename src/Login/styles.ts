import styled from 'styled-components';

import { shade } from 'polished';


export const Container = styled.div`

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 500px;
    width: 400px;
    height: 300px;
    background-color: #452;

    input {
      width: 300px;
      height: 30px;

      border-radius: 4px;
      border-style: none;

      margin: 5px 0;
      padding: 0 5px;

    }

    button{
      background: #ff9000;
      height: 30px;
      border-radius: 4px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 300px;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      :hover{
        background: ${shade(0.2, "#ff9000")}
      }
    }
  }

`;