<template>
 <body>
  <main>
   <section class="Dash">
    <div class="container">
     <div class="flex">
      <div class="head">
       Cadastro TCC
       <button class="btn-action">+</button>
      </div>
      <div class="input-container">
       <input type="number" class="input-preencher1" />
       <input type="text" class="input-preencher2" />
       <input type="text" class="input-preencher3" />
       <textarea class="textarea"></textarea> 
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

.container {
 width: 100%;
 height: 100vh;
 background: #f8f8f8;
 display: flex;
 align-items: center;
 justify-content: center;
}

.flex {
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

.head {
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

.input-container {
 display: flex;
 flex-direction: column; 
 align-items: center; 
 justify-content: center; 
 width: 100%;
 height: 100%; 
}

.input-preencher1,
.input-preencher2,
.input-preencher3 {
 width: 80%; 
 margin: 10px 0; 
}

.textarea {
 width: 80%; 
 height: 100px; 
 margin: 10px 0; 
 resize: none;
}
</style>
