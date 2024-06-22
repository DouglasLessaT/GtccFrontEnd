<template>
  <div class="container">
    <div class="workspace workspace-CadAluno">
      <div class="head">
        Cadastro de Usuário <button class="btn-action">></button>
      </div>
      <div class="forms">
        <form class="form-addaluno" @submit.prevent="submitForm">
          <input
            v-model="name"
            class="input-addaluno"
            type="text"
            placeholder="Nome Completo"
            required
          />
          <input
            v-model="email"
            class="input-addaluno"
            type="email"
            placeholder="Email"
            required
          />
          <input
            v-model="birthdate"
            class="input-addaluno"
            type="date"
            placeholder="Data de Nascimento"
            @input="limitarAno"
            required
          />
          <input
            v-model="cellphone"
            class="input-addaluno"
            type="tel"
            placeholder="Contato"
            required
          />
          <div class="button-group">
            <button type="submit" class="btn-default btn-search">Adicionar</button>
            <button
              type="button"
              class="btn-default btn-search"
              @click="atualizarUsuario"
              :disabled="!usuarioSelecionado"
            >
              Atualizar
            </button>
            <button
              type="button"
              class="btn-default btn-search"
              @click="excluirUsuario"
              :disabled="!usuarioSelecionado"
            >
              Excluir
            </button>
          </div>
        </form>
        <table class="custom-table">
          <tr class="table-title">
            <td>Nome</td>
            <td>Email</td>
            <td>Data de nascimento</td>
            <td>Contato</td>
          </tr>
          <tr v-if="usuarios.length === 0">
            <td colspan="4" style="text-align: center">Nenhum usuário cadastrado.</td>
          </tr>
          <tr
            v-else
            v-for="(usuario, index) in usuarios"
            :key="index"
            @click="selecionarUsuarioParaAtualizar(usuario)"
          >
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.birthdate.split('T')[0] }}</td>
            <td>{{ usuario.cellphone }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import TccService from "@/services/TccService";

export default {
  name: "CadastroTcc",
  data() {
    return {
      tcc: {
        numero: "",
        titulo: "",
        curso: "",
        tema: "",
        aluno: "",
        orientador: ""
      },
      alunos: [],
      usuarioLogado: null
    };
  },
  mounted() {
    this.carregarAlunos();
  },
  methods: {
    async carregarAlunos() {
      try {
        const response = await TccService.buscarAlunos2();
        this.alunos = response.data;
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
        alert("Erro ao carregar a lista de alunos");
      }
    },

    async getIdOrientador() {
      let getIdOrientador = localStorage.getItem(`dado-usuario`);
      console.log(getIdOrientador);
      return getIdOrientador.id
    },

    async submitForm() {
      try {
        console.log("Dados do formulário antes de enviar:", this.tcc);
        const response = await TccService.cadastrarTCC(this.tcc);
        console.log("Resposta do backend:", response);
        alert("Cadastro realizado com sucesso!");
        this.resetarFormulario();
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        alert("Erro ao cadastrar TCC");
      }
    },
    resetarFormulario() {
      this.tcc = {
        numero: "",
        titulo: "",
        curso: "",
        tema: "",
        aluno: "",
        orientador: "",
      };
    }
  }
};
</script>


<style scoped>
.input-preencher1-tcc,
.input-preencher2-tcc,
.input-preencher3-tcc,
.input-preencher4-tcc {
 width: 80%;
 margin: 10px 0;
}

.select-preencher4-tcc {
 border-radius: 2px;
 width: 82%;
 margin: 10px 0;
 height: 40px;
 background-color: rgba(237, 235, 201, 1);
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
