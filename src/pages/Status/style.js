
import styled from "styled-components";

export const Format = styled.div`

.title{
    background: black;
    color: white;
    width: 100%;
    font-size: 17px;
    text-align: center;
  }
#title-info{
    margin-top: 10px;
}
.procedures{
    list-style: none;
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para a linha seguinte se necessário */
    margin-top: -20px;
    justify-content: center;
    max-height: 40vh;

    li{
        list-style: none;
        padding: 4px;
        border: 1.8px dotted #000; 
        margin: 4px 4px 0 0;
        font-size: 17px;
        background-color: blue;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        display: inline-block; 
    }
}
.bottom-info{
    padding: 0px;

    .serviceInfo{  
        display: grid;
        grid-template-columns: 1fr;
        margin: 5px;
        align-items: center; /* Centraliza os itens no eixo vertical (eixo cruzado) */
        justify-content: center; /* Centraliza os itens no eixo horizontal (eixo principal) */
        max-height: 30vh;
        padding: 0px;
       
    
        h4 {
            margin: 0; /* Remove a margem padrão */
            padding: 0px; /* Remove qualquer padding se necessário */
            text-align: center;
        }
            .headerInfo{
                display: inline-block /*Não funcionou*/
                color: white;
                background: pink;
            }
    }

}


`;
export default Format;