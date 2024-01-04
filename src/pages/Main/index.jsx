/* eslint-disable no-param-reassign */
import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import ButtonComponent from "../../components/Buttons/ButtonComponent";

export default function Main() {
  const navigate = useNavigate();

  function validateCPF(cpf) {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais (caso contrário, o CPF é inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
     // Calcular e verificar os dígitos verificadores
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i +=1) {
      soma += parseInt(cpf[i - 1],10) * (11 - i);
    }
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[9],10)) {
      return false;
    }
  
    soma = 0;
  
    for (let i = 1; i <= 10; i +=1) {
      soma += parseInt(cpf[i - 1], 10) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[10],10)) {
      return false;
    }
  
    // Se passou por todas as verificações, o CPF é válido
    return true;
  }
  
  
  

  const handleButtonClick = () => {
    // eslint-disable-next-line prefer-const
    let cpfForValidate = document.getElementById("inputCPF").value;

    if(validateCPF(cpfForValidate)){
      // Navegar diretamente para a rota desejada
      navigate("../Procedures");

    }
    else(alert("CPF informado não confere com os parâmetros de validação! \n Verifique o CPF digitado e tente novamente!!!")); 
    
  };

  function formatCPF(fieldCPF) {
    let CPF = fieldCPF.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (CPF.length > 11) {
      CPF = CPF.slice(0, 11); // Limita a 11 dígitos
    }
    CPF = CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    fieldCPF.value = CPF;
  }
  return (
    <Container>
      <div className="main-higher" />
      <div className="main-bottom">
        <form className="main-bottom-form">
          <input
            id="inputCPF" type="text" pattern="[0-9]*" name="cpfForvalidate" placeholder="CPF"
            onInput={(e) => formatCPF(e.target)}
          />
          <ButtonComponent clickFunction={handleButtonClick} childrenText="Login" background= "#111"/>

        </form>
        <div className="main-bottom-bottom">
          <p>Problemas para acessar?<br />
            <span>
              <a href="https://api.whatsapp.com/send/?phone=5588999028409&text=Gostaria+de+informar+que+n%C3%A3o+estou+conseguindo+fazer+checkin+na+GG+Software.+Meu+CPF+%C3%A9%3A&type=phone_number&app_absent=0"
                target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>
                Entre em contato!
              </a>
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}
