/* eslint-disable no-param-reassign */
import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";


export default function Main() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        // Navegar diretamente para a rota desejada
        navigate("./Procedures");
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
            <div className="main-higher " />

            <div className="main-bottom">
                <form className="main-bottom-form">
                    <input
                        id="inputCPF" type="text" pattern="[0-9]*" name="cpf" placeholder="CPF"
                        onInput={(e) => formatCPF(e.target)}
                    />
                    <button className="button" type="button" onClick={handleButtonClick}>
                        Login
                    </button>
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
