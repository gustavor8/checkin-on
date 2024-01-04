import styled, { keyframes } from 'styled-components';

// Define a animação de brilho
const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;
// tambem pode ser usado a props assim, fiz diretamente pegando o backgroud já desmontado
// export const ButtonComponent = styled.button.attrs(props => ({
//   background: props.background || 'green',
// }))`

export const ButtonStyle = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  outline: none;
  color: #fff;
  background: ${({ background }) => (background)};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size:18px;

  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ background }) => (background)};
    left: 0;
    top: 0;
    border-radius: 10px;
    
  }
  
  .btns button {
    margin-right: 10px; /* Adiciona espaçamento à direita de cada botão */
  }
  
 
  
  @media screen and (min-width:390px) {
    width: 200px;
    height: 50px;
    font-size:25px;
  }
  @media screen and (min-width: 900px) {
    width: 230px;
    height: 60px;
    font-size:30px;
  }
`;

export default ButtonStyle;
