<template>
 <body>
  <div class="container">    
      <div class="workspace">
        <div class="head">CADASTRO DA BANCA
            <button class="btn-action">></button>
        </div>
          
        <div class="forms">
          <input class="input-text_banca" type="text" placeholder="Adicionar Professor">
          <input class="btn-default btn-banca" type="button" value="+">
        </div>
            <table border="1">
                <tr class="table-title">
                    <td>Nome do Tutor</td>
                    <td>Ação</td>
                    
                </tr>
                <tr>
                    <td>Romulo Douro</td>
                    <td><input class="btn-default btn-action_banca" type="button" value="Excluir">
                    </td>
                    
                </tr>
                <tr>
                    <td>lucas Ventura</td>
                    <td><input class="btn-default btn-action_banca" type="button" value="Excluir">
                    </td>
                    
                </tr>
            </table>
    </div> 
  </div>
 </body>
</template>

<script>
    export default {
     name: 'CadastroBanca'
    };
</script>

<style scoped>
/* Layout Cadastro da banca */
  .btn-banca{
    font-weight: bold;
    width: 35px;
  }

  .input-text_banca{
    height: 25px;
  }

  .btn-action_banca{
    background-color: #ffffff;
    color: #000;
    width: auto;
    padding: 5px;
    margin: 0;
  }
  .btn-action_banca:hover{
    background-color: #ff0000b9;
    color: #ffffff;
    border: none;
    }
</style>