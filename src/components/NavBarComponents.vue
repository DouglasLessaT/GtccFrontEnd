<template>
  <div>
    <header class="head">GTCC</header>
    <div v-if="isCoordenador" class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu:
      </button>
      <ul class="dropdown-menu">
        <li>
          <a
            class="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            >Cadastra Usuário</a
          >
        </li>
        <li><a class="dropdown-item" href="#">Calendário</a></li>
      </ul>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Cadastro Professor
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Nome:</label>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="novousuario.nome"
                />
              </div>
              <div class="mb-3">
                <label for="contact-number" class="col-form-label"
                  >Número de Celular:</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="contact-number"
                  placeholder="(00) 00000-0000"
                  v-model="novousuario.cll"
                  pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                  title="Insira um número de telefone válido"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="col-form-label">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="exemplo@email.com"
                  v-model="novousuario.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="birthdate" class="col-form-label"
                  >Data de Nascimento:</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="birthdate"
                  v-model="novousuario.dataNascimento"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Categoria:</label
                >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="novousuario.categoria"
                >
                  <option value="PROFESSOR">Professor</option>
                  <option value="COORDENADOR">Coordenador</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Dados para Acesso:</label
                >
                <div>
                  <label for="username">Usuário:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="novousuario.username"
                  />
                  <label for="password">Senha:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="novousuario.password"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="cadastrar"
            >
              Cadastra
            </button>
            <button @click="fechar" type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginService from "../services/CadUser";
import authService from "../services/AuthService";

export default {
  name: "NavBarComponents",
  data() {
    return {
      novousuario: {
        nome: "",
        email: "",
        dataNascimento: "",
        categoria: "",
        username: "",
        password: "",
        cll: "",
        //id: '',
        //tccsManaged: [],
        permissao: "",
      },
    };
  },
  computed: {
    isCoordenador() {
      return authService.PermissaoParaMenu();
    },
  },
  methods: {
    async cadastrar() {
      try {
        if (this.novousuario.categoria === "PROFESSOR") {
          this.novousuario.permissao = ["ROLE_PROFESSOR", "ROLE_USER"];
        } else {
          this.novousuario.permissao = ["ROLE_COORDENADOR", "ROLE_USER"];
        }
        console.log("Dados do formulário antes de enviar:", this.novousuario);
        const response = await LoginService.cadastrarUsuario(this.novousuario);
        console.log("Resposta do backend:", response);
        alert("Cadastro realizado com sucesso!");
        this.LimparFormulario();
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        alert("Erro ao cadastrar Usuario");
      }
    },
    LimparFormulario() {
      this.novousuario = {
        nome: "",
        email: "",
        dataNascimento: "",
        categoria: "",
        username: "",
        password: "",
        cll: "",
        //id: '',
        //tccsManaged: [],
        permissao: "",
      };
    },
    async fechar() {
      this.LimparFormulario();
    },
  },
};
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
.btn {
  background-color: #000000;
  border-top-left-radius: 0px;
  font-weight: bold;
  border: #0000005e solid 1px;
}

.btn:hover {
  background-color: #000000;
}

header {
  position: relative;
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
  top: 0px;
}
</style>