<template>
  <div class="container">
    <div class="workspace workspace-CadAluno">
      <div class="head">
        Cadastro de Usuário
        <button @click="$router.push('/cadastrotcc')" class="btn-action">></button>
      </div>

      <div class="forms">
        <form class="form-addaluno">
          <input v-model="name" class="input-addaluno" type="text" placeholder="Nome Completo" />
          <input v-model="email" class="input-addaluno" type="email" placeholder="Email" />
          <input v-model="birthday" class="input-addaluno" type="date" placeholder="Data de Aniversário" />
          <input v-model="cellphone" class="input-addaluno" type="tel" placeholder="Contato" />
          <div class="button-group">
            <input class="btn-default btn-search" type="button" value="Adicionar" @click="adicionarUsuario" />
            <input class="btn-default btn-search" type="button" value="Atualizar" @click="atualizarUsuario" :disabled="!usuarioSelecionado" />
            <input class="btn-default btn-search" type="button" value="Excluir" @click="excluirUsuario" :disabled="!usuarioSelecionado" />
          </div>
        </form>
        <table class="custom-table">
          <tr class="table-title">
            <td>Nome</td>
            <td>Email</td>
            <td>Contato</td>
          </tr>
          <tr v-if="usuarios.length === 0">
            <td colspan="3" style="text-align: center">Nenhum usuário cadastrado.</td>
          </tr>
          <tr v-else v-for="(usuario, index) in usuarios" :key="index" @click="selecionarUsuarioParaAtualizar(usuario)">
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.cellphone }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AlunoService from "@/services/AlunoService";

export default {
  name: "CadastroUsuario",
  data() {
    return {
      name: "",
      email: "",
      birthday: "", // Adicionado campo para a data de aniversário
      cellphone: "",
      usuarios: [],
      usuarioSelecionado: null,
    };
  },
  mounted(){
    this.buscaUsuários();
  },
  methods: {
    async buscaUsuários(){
      try{

        const response = await AlunoService.buscarUsuarios();
        console.log('Teste ', response);
        this.usuarios = response ;
      
      }catch (error){
      
        console.error("Erro ao adicionar usuário:", error);
        alert("Erro ao buscar lista de usuários");
     
      }
    },
    async adicionarUsuario() {
      const novoUsuario = {
        name: this.name,
        email: this.email,
        birthday: this.birthday, // Inclui a data de aniversário
        cellphone: this.cellphone
      };
      try {
        const response = await AlunoService.adicionarUsuario(novoUsuario);
        this.usuarios.push(response);
        this.limparCampos();
        alert("Usuário adicionado com sucesso!");
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        alert("Erro ao adicionar usuário");
      }
    },
    async atualizarUsuario() {
      if (this.usuarioSelecionado) {
        const usuarioAtualizado = {
          id: this.usuarioSelecionado.id,
          name: this.name,
          email: this.email,
          cellphone: this.cellphone,
          birthday: this.birthday // Inclui a data de aniversário
        };
        try {
          await AlunoService.atualizarUsuario(usuarioAtualizado);
          //const index = this.usuarios.findIndex(usuario => usuario.id === this.usuarioSelecionado.id);
          //this.$set(this.usuarios, index, usuarioAtualizado);
          this.limparCampos();
          alert("Usuário atualizado com sucesso!");
          window.location.reload();
        } catch (error) {
          console.error("Erro ao atualizar usuário:", error);
          alert("Erro ao atualizar usuário");
        }
      }
    },
    async excluirUsuario() {
      if (this.usuarioSelecionado) {
        try {
          await AlunoService.excluirUsuario(this.usuarioSelecionado.id);
          this.usuarios = this.usuarios.filter(usuario => usuario.id !== this.usuarioSelecionado.id);
          this.limparCampos();
          alert("Usuário excluído com sucesso!");
        } catch (error) {
          console.error("Erro ao excluir usuário:", error);
          alert("Erro ao excluir usuário");
        }
      }
    },
    selecionarUsuarioParaAtualizar(usuario) {
      this.usuarioSelecionado = usuario;
      this.name = usuario.name;
      this.email = usuario.email;
      this.birthday = usuario.birthday; // Preenche a data de aniversário ao selecionar usuário
      this.cellphone = usuario.cellphone;
    },
    limparCampos() {
      this.name = "";
      this.email = "";
      this.birthday = "";
      this.cellphone = "";
      this.usuarioSelecionado = null;
    },
  },
};
</script>

<style scoped>

.workspace-CadAluno {
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-addaluno {
  width: 90%;
}

.input-addaluno {
  margin-bottom: 10px;
  width: 150px;
}

.button-group {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
}

.btn-search {
  width: 160px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
}

.custom-table {
  text-align: center;
  width: 250%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.custom-table .table-title {
  background-color: #009688;
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .workspace-CadAluno {
    margin: 0;
    padding: 10px;
    width: 100%;
  }

  .forms {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-addaluno {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-addaluno {
    width: 80%;
    margin-bottom: 10px;
  }

  .btn-search {
    width: 100%;
    margin-right: 35vw;
  }

  .custom-table {
    width: 100%;
    margin-top: 20px;
  }

  .container {
    width: 100%;
    margin-top: 35%;
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
