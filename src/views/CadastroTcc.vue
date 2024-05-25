<template>
 <body>
  <main>
   <section class="Dash-cadastrotcc">
    <div class="container-cadastrotcc">
     <div class="flex-cadastrotcc">
      <div class="head-cadastro-tcc">
       Cadastro TCC
       <button class="btn-action">+</button>
      </div>
      <div class="input-container-cadastrotcc">
       <input type="number" class="input-preencher1-tcc" placeholder="Número de TCC" />
       <input type="text" class="input-preencher2-tcc" placeholder="Titulo do TCC" />
       <input type="text" class="input-preencher3-tcc" placeholder="Subtitulo do TCC" />
       <textarea class="textarea-tcc" placeholder="Digite um resumo sobre o seu TCC"></textarea> 
      </div>
     </div>
    </div>
   </section>
  </main>
 </body>
</template>

<script>
export default {
 name: "CadastroTcc",
};
</script>

<style>
body {
 margin: 0;
 padding: 0;
}

.container-cadastrotcc {
 width: 100%;
 height: 100vh;
 background: #f8f8f8;
 display: flex;
 align-items: center;
 justify-content: center;
}

.flex-cadastrotcc {
 width: 750px;
 height: 450px; 
 background-color: white;
 display: flex;
 flex-direction: column; 
 align-items: center; 
 box-shadow: 0 0 1000px 0 #09a6a38e;
 border-style: solid;
 border-color: #09a6a3;
}

.head-cadastro-tcc {
 background-color: #09a6a3;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 35px;
 font-size: 30px;
 color: white;
 font-family: "Poiret One", sans-serif;
 position: relative;
}

.btn-action {
 position: relative;
 background-color: #ffffff;
 border: #09a6a3 solid 1px;
 border-radius: 100px;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 35px;
 height: 35px;
 cursor: pointer;
 font-size: xx-large;
 color: #09a6a3;
 left: 180px;
 top: 15px;
}
.btn-action:hover {
 background-color: #09a6a3;
 color: #ffffff;
 border-style: solid;
 border-color: #ffffff;
 border-width: 2px;
}

.input-container-cadastrotcc {
 display: flex;
 flex-direction: column; 
 align-items: center; 
 justify-content: center; 
 width: 100%;
 height: 100%; 
}

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
</style>
