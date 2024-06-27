
<template>
  <body>
    <div class="container">
      <!-- Cadastro da Banca -->
      <div class="workspace">
        <div class="head">
          CADASTRO DA BANCA
          <button class="btn-action" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg></button>
        </div>

        <div class="forms">
          <input v-model="nome" class="input-text_banca" type="text" placeholder="Adicionar Tutores"/>
          <input v-model="registro" class="input-text_banca" type="text" placeholder="Nº de registro do professor"/>
          
          <input class="btn-default btn-banca" type="button" value="+" @click="adicionarTutor" :disabled="limiteAlcancado"/>
          <input class="btn-default btn-banca" type="button" value="-" @click="excluirTutor" :disabled="limiteAlcancado" style="background-color: #ff0000;">

        </div>
        <table>
          <tr class="table-title">
            <td>Nome do Tutor</td>
            <td>Numero de registro</td>
          </tr>

            <tr v-if="tutores.length === 0">
                <td colspan="4" style="text-align: center">Nenhum tutor selecionado.</td>
              </tr>

             <tr v-else v-for="(tutor, index) in tutores" :key="index" @click="selecionarTutor(tutor) ">  
                <td>{{ tutor.nome }}</td>
                <td>{{ tutor.registro }}</td>
          </tr>
        </table>
      </div>

          <!-- Agendamento -->
      <div class="workspace work-schedule">
        <div class="head">AGENDAMENTO</div>

        <div class="forms-schedule">
          <input v-model="dtAgenda" class="input-text_banca input-schedule " type="date"/>
          <input v-model="hrAgenda" class="input-text_banca input-schedule " type="time"/>

          <input class="btn-default btn-banca" type="button" value="+" @click="adicionarAgenda" :disabled="limiteAlcancado"/>
          <input class="btn-default btn-banca" type="button" value="-" @click="excluirAgenda" :disabled="limiteAlcancado" style="background-color: #ff0000;">
        </div>
        <table>
          <tr class="table-title">
            <td>Data agendada</td>
            <td>Horario agendado</td>
          </tr>

            <tr v-if="agendas.length === 0">
                <td colspan="4" style="text-align: center">Nenhum agenda selecionado.</td>
              </tr>

             <tr v-else v-for="(agenda, index) in agendas" :key="index" @click="selecionarAgenda(agenda) ">  
                <td>{{ agenda.dtAgenda }}</td>
                <td>{{ agenda.hrAgenda }}</td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
export default {
    name: "CadastroBanca",
    data() {
      return {
          nome: "",
          tutores: [],
          proximoId: 1,
          limiteAlcancado: false,
          tutorSelecionado: null,
          dtAgenda: "",
          agendas: [],
          agendaSelecionado: null,
          };
  },
  methods: {
      adicionarTutor() {
          if (this.tutores.length < 2) {
              this.tutores.push({
                  id: this.proximoId++,
                  nome: this.nome,
                  registro: this.registro,
                });
              this.nome = "";
              this.registro = "";
              this.limiteAlcancado = this.tutores.length >= 3;
          } else {
              alert("Limite de tutores atingido!");
          }
    },

    selecionarTutor(tutor) {
         this.tutorSelecionado = tutor;
         this.nome = tutor.nome;
         this.registro = tutor.registro;
     },

    excluirTutor() {
         if (this.tutorSelecionado) {
             this.tutores = this.tutores.filter(tutor => tutor.id !== this.tutorSelecionado.id);
             this.limparCampos();
         }
     },

     limparCampos() {
         this.nome = "";
         this.registro = "";
         this.tutorSelecionado = null;
     },

    //  Agendamento
    adicionarAgenda() {
          if (this.agendas.length < 1) {
              this.agendas.push({
                  id: this.proximoId++,
                  dtAgenda: this.dtAgenda,
                  hrAgenda: this.hrAgenda,
                });
              this.dtAgenda = "";
              this.hrAgenda = "";
              this.limiteAlcancado = this.agendas.length >= 2;
          } else {
              alert("Limite de agendas atingido!");
          }
        },

        selecionarAgenda(agenda) {
         this.agendaSelecionado = agenda;
         this.dtAgenda = agenda.dtAgenda;
         this.hrAgenda = agenda.hrAgenda;
        },

        excluirAgenda() {
         if (this.agendaSelecionado) {
             this.agendas = this.agendas.filter(agenda => agenda.id !== this.agendaSelecionado.id);
             this.limparCampos();
         }
       },

  },
};
</script>

<style scoped>
/* Layout Cadastro da banca */
.btn-banca {
  font-weight: bold;
  width: 35px;
}

.input-text_banca {
  height: 25px;
}

.btn-action_banca {
  background-color: #ff0000b9;
  color: #ffffff;
  width: 35px;
  padding: 5px;
  margin: 0;
}
.btn-action_banca:hover {
  background-color: #000000;
  color: #ffffff;
  border: none;
}
input{
  margin: 5px;
}

/* Layout Agendamento */
.work-schedule {
  margin-left: 15px;
  display: grid;
  align-items: center;
  justify-content: center;
}
.forms-schedule {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-schedule {
  margin: 5px;
  width: 130px;
  height: 25px;
}
.btn-schedule {
  font-weight: bold;
  width: 35px;
  margin: 5px;
}
</style>

