<template>
 <body>
     <div class="container">    
         <div class="workspace workspace-CadAluno">
             <div class="head">Cadastro de Alunos <button class="btn-action">></button></div>
         
             <div class="forms">
                 <form class="form-addaluno">
                     <input v-model="nome" class="input-addaluno" type="text" placeholder="Nome Completo">
                     <input v-model="matricula" class="input-addaluno" type="text" placeholder="Matricula">
                     <input v-model="dataNascimento" class="input-addaluno" type="date" placeholder="Data de Nascimento" @input="limitarAno">
                     <input v-model="contato" class="input-addaluno" type="tel" placeholder="Contato">
                     <div class="button-group">
                         <input class="btn-default btn-search" type="button" value="Adicionar" @click="adicionarAluno" :disabled="limiteAlcancado">
                         <input class="btn-default btn-search" type="button" value="Atualizar" @click="atualizarAluno" :disabled="!alunoSelecionado">
                         <input class="btn-default btn-search" type="button" value="Excluir" @click="excluirAluno" :disabled="!alunoSelecionado">
                     </div>
                 </form>
                 <table class="custom-table">
                     <tr class="table-title">
                         <td>Nome</td>
                         <td>Matricula</td>
                         <td>Data de nascimento</td>
                         <td>Contato</td>
                     </tr>
                     <tr v-if="alunos.length === 0">
                         <td colspan="4" style="text-align: center">Nenhum aluno cadastrado.</td>
                     </tr>
                     <tr v-else v-for="(aluno, index) in alunos" :key="index" @click="selecionarAlunoParaAtualizar(aluno)">
                         <td>{{ aluno.nome }}</td>
                         <td>{{ aluno.matricula }}</td>
                         <td>{{ aluno.dataNascimento }}</td>
                         <td>{{ aluno.contato }}</td>
                     </tr>
                 </table>
             </div> 
         </div>
     </div>
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
             this.limiteAlcancado = this.alunos.length >= 1;
         } else {
             alert("Limite de alunos atingido!");
         }
     },
     atualizarAluno() {
         if (this.alunoSelecionado) {
             const index = this.alunos.findIndex(aluno => aluno === this.alunoSelecionado);
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
             this.alunos = this.alunos.filter(aluno => aluno.id !== this.alunoSelecionado.id);
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
     limitarAno(event) {
         const date = event.target.value;
         const year = date.split("-")[0];
         if (year.length > 4) {
             event.target.value = `${year.slice(0, 4)}-${date.split("-")[1]}-${date.split("-")[2]}`;
         }
     }
 },
};
</script>

<style scoped>
.workspace-CadAluno {
 margin: 200px;
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
