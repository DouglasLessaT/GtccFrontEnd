<template>
 <body>
  <main>
   <section class="Dash-cadastroaluno">
    <div class="container-cadastroaluno">
     <div class="flex-cadastroaluno">
      <div class="head">
       Cadastro de aluno
       <button class="btn-action-cadastroaluno">+</button>
      </div>
      <div class="input-table-container">
       <div class="input-container-cadastroaluno">
        <input
         v-model="nome"
         class="input-addaluno"
         type="text"
         placeholder="Nome Completo"
        />
        <input
         v-model="matricula"
         class="input-addaluno"
         type="text"
         placeholder="Matricula"
        />
        <input
         v-model="dataNascimento"
         class="input-addaluno"
         type="date"
         placeholder="Data de Nascimento"
        />
        <input
         v-model="contato"
         class="input-addaluno"
         type="tel"
         placeholder="Contato"
        />
        <section id="botoes-group">
         <input
          class="btn-default btn-search"
          type="button"
          value="ADD"
          @click="adicionarAluno"
          :disabled="limiteAlcancado"
         />
         <input
          class="btn-default btn-search"
          type="button"
          value="ATUALIZAR"
          @click="atualizarAluno"
          :disabled="!alunoSelecionado"
         />
         <input
          class="btn-default btn-search"
          type="button"
          value="EXCLUIR"
          @click="excluirAluno"
          :disabled="!alunoSelecionado"
         />
        </section>
       </div>
       <div class="container-form-table-aluno">
        <table class="custom-table">
         <tr class="table-title">
          <td>Nome</td>
          <td>Matricula</td>
          <td>Data de nascimento</td>
          <td>Contato</td>
         </tr>
         <tr v-if="alunos.length === 0">
          <td colspan="4" style="text-align: center">
           Nenhum aluno cadastrado.
          </td>
         </tr>
         <tr
          v-else
          v-for="(aluno, index) in alunos"
          :key="index"
          @click="selecionarAlunoParaAtualizar(aluno)"
         >
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.matricula }}</td>
          <td>{{ aluno.dataNascimento }}</td>
          <td>{{ aluno.contato }}</td>
         </tr>
        </table>
       </div>
      </div>
     </div>
    </div>
   </section>
  </main>
 </body>
</template>

<script>
export default {
 name: "CadastroAluno",
 data() {
  return {
   nome: "",
   matricula: "",
   dataNascimento: "",
   contato: "",
   alunos: [],
   proximoId: 1,
   limiteAlcancado: false,
   alunoSelecionado: null,
  };
 },
 methods: {
  adicionarAluno() {
   if (this.alunos.length < 10) {
    this.alunos.push({
     id: this.proximoId++,
     nome: this.nome,
     matricula: this.matricula,
     dataNascimento: this.dataNascimento,
     contato: this.contato,
    });
    this.nome = "";
    this.matricula = "";
    this.dataNascimento = "";
    this.contato = "";
    this.limiteAlcancado = this.alunos.length >= 10;
   } else {
    alert("Limite de alunos atingido!");
   }
  },
  atualizarAluno() {
   if (this.alunoSelecionado) {
    const index = this.alunos.findIndex(
     (aluno) => aluno === this.alunoSelecionado
    );
    this.alunos[index] = {
     id: this.alunoSelecionado.id,
     nome: this.nome,
     matricula: this.matricula,
     dataNascimento: this.dataNascimento,
     contato: this.contato,
    };
    this.limparCampos();
   }
  },
  excluirAluno() {
   if (this.alunoSelecionado) {
    this.alunos = this.alunos.filter(
     (aluno) => aluno.id !== this.alunoSelecionado.id
    );
    this.limparCampos();
   }
  },
  selecionarAlunoParaAtualizar(aluno) {
   this.alunoSelecionado = aluno;
   this.nome = aluno.nome;
   this.matricula = aluno.matricula;
   this.dataNascimento = aluno.dataNascimento;
   this.contato = aluno.contato;
  },
  limparCampos() {
   this.nome = "";
   this.matricula = "";
   this.dataNascimento = "";
   this.contato = "";
   this.alunoSelecionado = null;
  },
 },
};
</script>
 
 <style>
body {
 margin: 0;
 padding: 0;
}

.container-cadastroaluno {
 width: 100%;
 height: 100vh;
 background: #f8f8f8;
 display: flex;
 align-items: center;
 justify-content: center;
}

.flex-cadastroaluno {
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

.btn-action-cadastroaluno {
 position: absolute;
 top: 50%;
 transform: translateY(-0%);
 right: 10px; 
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
 margin-right: 70px;
}
.btn-action-cadastroaluno:hover {
 background-color: #09a6a3;
 color: #ffffff;
 border-style: solid;
 border-color: #ffffff;
 border-width: 2px;
}

.input-table-container { 
 display: flex;
 width: 100%;
 height: 100%;
}

.input-container-cadastroaluno {
 display: flex;
 flex-direction: column;
 justify-content: left;
 width: 40%;
 margin-top: 20px;
 margin-bottom: 0;
 height: 100%;
}

.container-form-table-aluno {
 display: flex;
 justify-content: right;
 align-items: right;
 width: 70%;
 height: 100%;
}

.custom-table {
 text-align: center;
 width: 100%;
 table-layout: fixed;
 border-collapse: collapse;
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

.input-addaluno {
 margin: 2px 0;
 width: 90%;
 margin-left: 10px;
}

.btn-search {
 width: calc(100% - 10px);
 text-align: center;
 margin-left: 5px;
 margin-top: 10px;
 margin-bottom: 10px;
}

.textarea-tcc {
 width: 80%;
 height: 100px;
 margin: 10px 0;
 resize: none;
}

@media screen and (max-width: 600px) {
 .container-cadastroaluno {
  width: 98%;
  margin-left: 3.5px;
 }
 .input-table-container {
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  width: 100%;
  overflow-y: auto; 
 }

 .container-form-table-aluno {
  order: 2;
  margin-top: 0px;
  width: 100%;
  overflow-x: auto; 
  display: block; 
  margin-left: 0; 
  margin-right: 0; 
  max-height: 50vh; 
  height: 100px;
 }

 .input-container-cadastroaluno {
  width: 100%;
  height: 35vh;
  margin-left: 20px;
  margin-top: 19px;
 }

 .custom-table td {
  min-width: 80px; 
  white-space: nowrap; 
 }

 .custom-table {
  width: 100%;
 }

 .head {
  justify-content: center; 
 }

 .flex-cadastroaluno {
  overflow: hidden; 
 }

 .btn-search:active {
  background-color: #000; 
  color: #fff;
 }
 .btn-search {
  width: 80%;
  align-items: center;
  margin-left: 35px;
 }
 .btn-action-cadastroaluno {
  position: static;
  margin-left: auto; 
  margin-right: 10px; 
  margin-top: 35px;
 }
}
</style>
