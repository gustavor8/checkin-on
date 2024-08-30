import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
// Styles
import { Container } from "../../styles/Container";
import { Format } from "./style";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
//teste do teste
export default function Status() {
   const location = useLocation();
   const [selectedProcedures, setSelectedProcedures] = useState([]);

   const testProcedures = [
      { _id: 1, nameProcedure: "Procedimento 1" },
      { _id: 2, nameProcedure: "Procedimento 2" },
      { _id: 3, nameProcedure: "Procedimento 3" },
      { _id: 4, nameProcedure: "Procedimento 4" },
      { _id: 5, nameProcedure: "Procedimento 5" },
      // Adicione mais procedimentos conforme necessário
   ];

   useEffect(() => {
      async function getProceduresByIds(ids) {
         try {
            const response = await api.get('/procedures', {
               params: { ids }
            });
            setSelectedProcedures(response.data);
         } catch (error) {
            // load test procedures
            setSelectedProcedures(testProcedures);
            // eslint-disable-next-line no-alert
            alert(`Erro ao acessar o banco de dados, os dados carregados foram os de teste:\n${error.response?.data?.message || error.message}`);
         }
      }
      getProceduresByIds(location.state.selectedProcedures);

   }, [location.state.selectedProcedures]);

   return (
      <Container>
         <Format>
            <div className="main">
               <div className="title">
                  <h4>Procedimento a serem realizados: </h4>
               </div>
               <div className="procedures">
                  {selectedProcedures.map((procedure) => (
                     // eslint-disable-next-line no-underscore-dangle
                     <li key={procedure._id}>
                        {procedure.nameProcedure || 'Erro ao ler nome!'}
                     </li>
                  ))}
               </div>
            </div>
            <div className="bottom-info">
               <div className="title" id="title-info">
                  <b>INFORMAÇÕES:</b>
               </div>
               
               <div className="serviceInfo">
                  <h4 className="headerInfo">Posição: </h4>
                  <h4 className="bodyInfo">Previsão de Atendimento: </h4>
               </div>
            </div>
            <div className="buttons">
               <ButtonComponent clickFunction={() => alert("Botão Atualizar")} childrenText="Atualizar" background="#111" height="35" width="135" />
               <ButtonComponent clickFunction={() => alert("Botão Cancelar chekin")} childrenText="Cancelar" background="Red" height="35" width="135" />
            </div>

         </Format>
      </Container>
   );
}
