import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';


function ButtonComponent({ clickFunction, childrenText, width, height, background}) {
  const buttonStyle = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  };
  // coloquei o backgrouds direto porque ele não estava pegando pela props
  return (
    <ButtonStyle onClick={clickFunction} className="button"  background = {background} style={buttonStyle} >
      {childrenText}
    </ButtonStyle>
  );
}

ButtonComponent.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  childrenText: PropTypes.string.isRequired,
  width: PropTypes.number, // width é agora opcional
  height: PropTypes.number, // height é agora opcional
  background: PropTypes.string
};
// quando não requerido é necessário passar um padrão por prevenção somente para não dar erro no slint, porque já está sendo tratado no estilo
ButtonComponent.defaultProps = {
  width: '150px',
  height: '35px',
  background: ''
};
export default ButtonComponent;
