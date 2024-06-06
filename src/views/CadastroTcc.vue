<template>
 <body>
    <div class="container">    
  <div class="workspace">
    <div class="head">Cadastro de Alunos
        <button class="btn-action">></button>
    </div>
      <div class="forms">
        <form class="form-cadtcc">
            <div class="input-container-cadastrotcc">
       <input type="number" class="input-preencher1-tcc" placeholder="Número de TCC" />
       <input type="text" class="input-preencher2-tcc" placeholder="Titulo do TCC" />
       <input type="text" class="input-preencher3-tcc" placeholder="Subtitulo do TCC" />
       <textarea class="textarea-tcc" placeholder="Digite um resumo sobre o seu TCC"></textarea> 
      </div>
        </form>
      </div> 
  </div>
</div>

 </body>
</template>

<script>
export default {
 name: "CadastroTcc",
};
</script>'

<style scoped>
.input-preencher1-tcc,
.input-preencher2-tcc,
.input-preencher3-tcc {
 width: 80%; 
 margin: 10px 0; 
}

.textarea-tcc {
 width: 80%; 
 height: 100px; 
 margin: 10px 0; 
 resize: none;
}

@media screen and (max-width: 600px) {
 .forms {
     margin-left: 12px;
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 100%;
     margin-top: 5px;
 }

 .container {
     width: 100%;
     margin-top: 20%;
     padding: 10px;
     box-sizing: border-box;
 }

 .head {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
     box-sizing: border-box;
     background-color: #009688;
     color: white;
     position: relative;
     height: 80px;
 }

 /*.btn-action {
     background-color: #ffffff;
     border: #09a6a3 solid 1px;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 35px;
     height: 35px;
     cursor: pointer;
     font-size: large;
     color: #09a6a3;
     position: absolute;
     right: 10px; 
     top: 50%; 
     margin-left: 180px;
 }*/

 .btn-action {
     background-color: #ffffff;
     border: #09a6a3 solid 1px;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 35px;
     height: 35px;
     cursor: pointer;
     font-size: large;
     color: #09a6a3;
     margin-top: 35px;
     
     position: relative;
     margin-right: 100px;
 }

 .btn-action:hover {
     background-color: #09a6a3;
     color: #ffffff;
     border: 2px solid #ffffff;
 }
}
</style>