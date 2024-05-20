<template>
  <body>
    <div class="container container-signin">
      <section class="sec-login">
        <form class="form-login">
          <h1>ENTRAR</h1>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Usuário"
            /><br />
            <input type="password" id="pwd" name="pwd" placeholder="Senha" />
          </div>
          <input class="btn-default" type="button" value="Acessar" @click="login"/>
        </form>
      </section>
    </div>
  </body>
</template>

<script>
import { useRouter } from 'vue-router';
import DashBoard from './DashBoard.vue';

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter();

    const login = () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('pwd').value;

      if (username === 'admin' && password === 'admin') {
        router.push(DashBoard); // Navega para a rota desejada
      } else {
        alert('Usuário ou senha incorretos');
      }
    };

    return { login };
  },
};
</script>

<style>

  body{
    margin: 0;
    padding: 0;
  }

  .container{
    width: 100%;
    height: 100vh;
    background: #FCF9D8;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .container-signin {
    background-image: url(../assets/logintela.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: "Poiret One", sans-serif;
  }

  .sec-login {
      background-color: rgba(9, 166, 163, 1);
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px;
      margin-right: 500px;
      padding: 30px;
      font-family: "Poiret One", sans-serif;
      text-align: center;
  }

  input {
      background-color: rgba(237, 235, 201, 1);
      margin-bottom: 30px;
      padding: 5px;
      width: 300px;
      height: 35px;
      border: none;
      font-family: "Poiret One", sans-serif;
      color: #000000;
      font-size: large;
  }
</style>