import styled from "styled-components";

export const Format = styled.div`

  .title {
    background: black;
    color: white;
    width: 100%;
    font-size: 17px;
    text-align: center;
  }

  #title-info {
    margin-top: 10px;
  }

  .procedures {
    list-style: none;
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para a linha seguinte se necessário */
    margin-top: -20px;
    justify-content: center;
    max-height: 40vh;

    li {
      list-style: none;
      padding: 4px;
      border: 1.8px dotted #000;
      margin: 4px 4px 0 0;
      font-size: 17px;
      background-color: blue;
      color: white;
      font-weight: bold;
      border-radius: 10px;
      
    }
  }

  .bottom-info {
    padding: 0px;

    .serviceInfo {
      display: flex; 
      flex-direction: column;
      margin: 5px;
      align-items: center; 
      justify-content: center;
      max-height: 30vh;
      padding: 0px;

        h4 {
            margin: 0; /* Remove a margem padrão */
            padding: 0px; /* Remove qualquer padding se necessário */
            text-align: center;
        }

        .headerInfo {
            display: inline-flex; /* Usa flex para ajuste mais preciso */
            color: white;
            background: #666;
            padding: 5px; /* Ajusta o padding conforme necessário */
            border-radius: 5px 5px 0 0; /* Arredonda somente as bordas superiores */
        }

        .bodyInfo {
            display: inline-flex; /* Ajusta o display para inline-flex */
            padding: 5px;
            color: white;
            background: #32CD32;
            border-radius: 5px;
        }
    }
   
}
`;
export default Format;
