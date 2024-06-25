<template>
  <div class="container-login">
    <section class="sec-login">
      <form class="form-login">
        <h1>ENTRAR</h1>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário"
            v-model="login"
          /><br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Senha"
            v-model="senha"
          />
          <p v-if="erro" :class="{ erro: erro }">{{ erro }}</p>
        </div>
        <input
          class="btn-default"
          type="button"
          value="Acessar"
          @click="logar"
        />
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
        () => {
          // Callback de sucesso
          this.erro = ""; // Limpa a mensagem de erro
        },
        (err) => {
          // Callback de erro
          this.erro = err; // Define a mensagem de erro
        }
      );
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 870px) {
  .sec-login {
    margin-right: auto;
  }
}

@media screen and (max-width: 420px) {
  .sec-login {
    width: 270px;
    height: 300px;
    margin: 30px;
    padding: 30px;
  }

  .form-login input {
    margin-bottom: 30px;
    padding: 5px;
    width: 240px;
    height: 25px;
  }
  .form-login .btn-default {
    width: 250px;
    height: 30px;
    text-align: center;
    font-size: 18px;
  }
}
.erro {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: bold;
  margin-top: 0px;
  text-align: center;
}
</style>