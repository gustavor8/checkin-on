import React from 'react';
import { ButtonBlack } from './styles';

function ButtonBlackComponent({ clickFunction, childrenText }) {
  return <ButtonBlack onClick={clickFunction} className="button"> {childrenText} </ButtonBlack>
}

export default ButtonBlackComponent;
