import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBlack } from './styles';

function ButtonBlackComponent({ clickFunction, childrenText, width, height }) {
  const buttonStyle = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <ButtonBlack onClick={clickFunction} className="button" style={buttonStyle}>
      {childrenText}
    </ButtonBlack>
  );
}

ButtonBlackComponent.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  childrenText: PropTypes.string.isRequired,
  width: PropTypes.number, // width é agora opcional
  height: PropTypes.number // height é agora opcional
};
// quando não requerido é necessário passar um padrão por prevenção somente para não dar erro no slint, porque já está sendo tratado no estilo
ButtonBlackComponent.defaultProps = {
  width: '150px',
  height: '35px'
};
export default ButtonBlackComponent;
