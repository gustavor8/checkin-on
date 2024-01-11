import styled from "styled-components";

export const Format = styled.div`
width: 95%;
height: 95%;
margin: 8px;
text-align: center;
justify-content: flex-start;
align-items: center;
 

.search{
  height: 50%;

  #searchProcedures {
    width: 98%;
    border-radius: 10px;
    font-size: large;
    display: flex;
    margin-top: 3px;
    position: relative;
    z-index:0;
    
  }

  .resultSearch {

    align-items: flex-start; /* Ajusta o alinhamento dos itens para a esquerda */ 
    
    .procedure{
      margin-top:4px;
      width: 98%;
      display:flex;
      font-size: 20px;
      
      input[type="checkbox"] {
        width: 15px; /* Ajuste a largura do checkbox conforme necessário */
        margin-right: 5px;
        cursor: pointer;
      }  
      label{
        cursor: pointer;
      }
    }

    height: calc(100% - 46px);
    z-index: -10;
    margin-top:-5px;
    overflow-y: auto;
    text-align: center;
    display: block; 
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ccc;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.2);  
  }

  #title-top {
    border-radius: 11px 11px 0 0;
  }


}

.title{
  background: black;
  color: white;
  width: 106%;
  margin-left: -2.95%;
  font-size: 17px;
}

.proceduresSelected{
  display: flex;
  flex-direction: column;
  max-height: 40%;


  .procedureOnSelect{
    display:flex;
    flex-direction: column; /* Ajusta o layout para ser uma coluna */
    max-height: 10%;
    overflow: auto;
    max-height: 41.5%; /* Defina a altura máxima diretamente na classe procedureOnSelect */

    
    ul{
      list-style: none; /* Remover marcadores de lista padrão (pontos) */
      padding: 0px; /* Remover o preenchimento padrão da lista */
      margin-top 4px; /* Remover a margem padrão da lista */
      flex-wrap: wrap;
      box-sizing: border-box;
      display: flex;
      justify-content: center; /* Centraliza os itens horizontalmente */
      align-items: center; /* Centraliza os itens verticalmente */

      li{
        font-size: 18px;
        color: white;
        display: inline-block;
        
      }
      
      .procedureSelected{
        display:flex;
        background:blue;
        padding: 5px;
        margin-left: 5px;
        margin-bottom: 5px;
        border-radius:10px;
        .button {
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-left: 8px;
        }
        #remove:hover{
          color:red;
        }
      }
    }
  }
}


.btns {
  height:8%;
  margin-top: 3px;
  display:flex;
  justify-content:center;
  flex-wrap: wrap;

  button {
    margin-right: 10px;
    margin-bottom:5px;
  }


}
  


@media screen and (max-height: 714px) {
  .search{
    .resultSearch {
      height: calc(100% - 65px);  
    }
  
  }
}



`;

export default Format;