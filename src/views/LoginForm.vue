<template>
  <div class="cont container-login">
    <section class="sec-login">
      <form class="form-login">
        <h1>ENTRAR</h1>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário" v-model="login"
          /><br />
          <input type="password" id="pwd" name="pwd" placeholder="Senha" v-model="senha"/>
          <p v-if="erro">{{ erro }}</p>
        </div>
        <input class="btn-default" type="button" value="Acessar" @click="logar"/>
      </form>
    </section>
  </div>
</template>

<script>
import LoginService from "@/services/LoginService";


export default {
    data() {
     return {
      login: "",
      senha: "",
      erro: "", // Variável para armazenar a mensagem de erro
     };
    },
    methods: {
     logar() {
      LoginService.logar(
       this.login,
       this.senha,
       () => { // Callback de sucesso
         this.erro = ""; // Limpa a mensagem de erro
       },
       (err) => { // Callback de erro
         this.erro = err; // Define a mensagem de erro
       }
      );
     },
    },
};

</script>


<style scoped>

@media screen and (max-width: 870px){
  .sec-login{
  margin-right: auto
  }
}

@media screen and (max-width: 420px){
  .sec-login {
    width: 220px;
    height: 260px;
    margin: 30px;
    padding: 30px;
}

  input {
    margin-bottom: 30px;
    padding: 5px;
    width: 240px;
    height: 25px;
}
  input.btn-default{
    width: 250px;
    height: 30px;
    text-align: center;
    font-size: 21px;
}
}

.btn-default{
  cursor: pointer;
  background-color: #000;
  width: 310px;
  height: 35px;
  padding: 0px;
  padding-right: 10px;
  color: white;
  text-align: right;
  font-size: x-large;
  border-radius: 10px;
}
.btn-default:hover{
  background-color: #ffffff;
  color: #000;
  border: #0000005e solid 1px;
}

h1{
  font-family: "Poiret One", sans-serif;
  font-size: 40px;
  color: white;
}

/* Page Login */
.container-login{
  background-image: url(../assets/logintela.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "Poiret One", sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 }

</style>