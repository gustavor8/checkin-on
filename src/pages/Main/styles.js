import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px black, -2px -2px 0.4em black;
  background: linear-gradient(180deg, #ffffff 0%, #c8c8d9 100%);
  min-height: 550px;
  min-width: 300px;
  
  .main-higher {
    height:50%;
    min-height: 275px;
    background-image: url('./logogg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    opacity:0.50;
  }

  .main-bottom {
    margin-top: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-bottom-form{
      height: 70%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      #inputCPF {
        width: 100%;
        border-radius: 10px;
        text-align: center;
        font-size: large;
        margin-bottom: 20px;
      }
    }
      .main-bottom-bottom {
        text-align: center;

        p{
          text-decoration: none;
          color: grey;

          a{
            text-decoration:none;
            color: grey;
          }
          a:hover{
            color: blue;
          }
        }
      }
  }
`;

export default Container;
