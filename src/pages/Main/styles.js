import styled from 'styled-components';

export const Container = styled.div`
  * {
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(180deg, #d3d3da 0%, #d4d9e7 100%);
  }

  .main {
    width: 80%;
    height: 90%;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px black, -2px -2px 0.4em black;
    background: linear-gradient(180deg, #ffffff 0%, #c8c8d9 100%);
    max-width: 400px;
  }

  .main-higher {
    height: 40%;
    margin-top: 10px;
    background-image: url('./images/logogg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }

  .main-bottom {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-bottom-form {
    margin-top: 40px;
    height: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  #inputCPF {
    border-radius: 10px;
    text-align: center;
    font-size: large;
  }
`;

export default Container;
