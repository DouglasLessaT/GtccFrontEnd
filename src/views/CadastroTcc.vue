<template>
 <div class="container">
  <div class="workspace">
   <div class="head">
    Cadastro de TCC
    <button class="btn-action">></button>
   </div>
   <div class="forms">
    <form @submit.prevent="submitForm" class="form-cadtcc">
     <div class="input-container-cadastrotcc">
      <input
       type="text"
       class="input-preencher2-tcc"
       placeholder="Titulo do TCC"
       v-model="tcc.titulo"
      />
      <input
       type="text"
       class="input-preencher2-tcc"
       placeholder="Curso"
       v-model="tcc.curso"
      />
      <input
       type="text"
       class="input-preencher3-tcc"
       placeholder="Tema"
       v-model="tcc.tema"
      />
      <select class="select-preencher4-tcc" v-model="tcc.aluno">
       <option value="">Selecione um aluno</option>
       <option v-for="aluno in alunos" :key="aluno.id" :value="aluno.id">
        {{ aluno.name }}
       </option>
      </select>
      <input
       type="number"
       class="input-preencher1-tcc"
       placeholder="Número de TCC"
       v-model="tcc.numero"
      />
     </div>
     <button type="submit" class="btn-submit">Enviar</button>
    </form>
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
   },
   alunos: [],
  };
 },
 mounted() {
  //console.log("Componente CadastroTcc montado.");
  this.carregarAlunos();
 },
 methods: {
  carregarAlunos() {
   let self = this;
   try {
    console.log("Buscando alunos...");
    /*let response = await TccService.buscarAlunos();
    console.log(response);
    this.alunos = response;
    console.log(this.alunos);*/

    TccService.buscarAlunos2().then((a) => {
     self.alunos = a.data;
    });
   } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    alert("Erro ao carregar a lista de alunos");
   }
  },

  carregarProfessor() {
   let self = this;
   try {
    console.log("Buscando professor...");
    /*let response = await TccService.buscarAlunos();
    console.log(response);
    this.alunos = response;
    console.log(this.alunos);*/

    TccService.buscarAlunos2().then((a) => {
     self.alunos = a.data;
    });
   } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    alert("Erro ao carregar a lista de alunos");
   }
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
  },
 },
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
