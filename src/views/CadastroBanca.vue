<template>
  <div class="container">
    <!-- Cadastro da Banca -->
    <div class="workspace">
      <div class="head">
        CADASTRO DA BANCA
        <button @click="$router.push('/')" class="btn-action"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
          </svg></button>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="forms">
          <div>
            <label for="agenda">Selecione:</label>
            <select v-model="selectedAgenda" id="agenda">
              <option value="">Agenda</option>
              <option v-for="agenda in agendas" :key="agenda.id" :value="agenda.id">
                {{ `${formatDate(agenda.date)} - ${formatTime(agenda.horasComeco, agenda.horasFim)}` }}
              </option>
            </select>
          </div>

          <div>
            <label for="tcc">Selecione:</label>
            <select v-model="selectedTcc" id="tcc">
              <option value="">TCC</option>
              <option v-for="tcc in tccs" :key="tcc.id" :value="tcc.id">
                {{ tcc.title }} -  {{ tcc.orientador?.name }}
              </option>
            </select>
          </div>

          <div>
            <label for="member1">Selecione:</label>
            <div>
              <select v-model="selectedMember1" id="member1">
              <option value="">Membro 1</option>
              <option v-for="prof in professores" :key="prof.id" :value="prof.id">
                {{ prof.name }}
              </option>
            </select>
            
            <select v-model="selectedMember2" id="member2">
              <option value="">Membro 2</option>
              <option v-for="prof in professores" :key="prof.id" :value="prof.id">
                {{ prof.name }}
              </option>
            </select>
            </div>
          </div>
        </div>
      </form>
      
      <div>
          <button type="submit" class="btn-cadastro-agenda">Cadastrar Banca</button>
      </div>

      <table class="custom-table">
        <thead>
          <tr class="table-title">
            <th>Data - Horário</th>
            <th>TCC</th>
            <!-- <th>Orientador TCC</th> -->
            <th>Membro 1</th>
            <th>Membro 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="bancas.length === 0">
            <td colspan="5" style="text-align: center">Nenhuma banca cadastrada.</td>
          </tr>
          <tr v-else v-for="banca in bancas" :key="banca.id">
            <td>{{ `${formatDate(banca.agendaDate)} - ${formatTime(banca.horasComeco, banca.horasFim)}` }}</td>
            <td>{{ banca.tccTitle }}</td>
            <!-- <td>{{ banca.orientadorName }}</td> -->
            <td>{{ banca.member1?.name || '' }}</td>
            <td>{{ banca.member2?.name || '' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BancaService from '@/services/BancaService';
import TccService from '@/services/TccService';
import AgendaService from '@/services/AgendaService';

export default {
  data() {
    return {
      professores: [],
      agendas: [],
      tccs: [],
      bancas: [],
      selectedMember1: '',
      selectedMember2: '',
      selectedAgenda: '',
      selectedTcc: '',
    };
  },
  mounted() {
    this.fetchData();
    this.fetchBancas();
  },
  methods: {
    async fetchData() {
      try {
        this.professores = await BancaService.getProfessores();
        this.agendas = await BancaService.getAgendasLivres();
        console.log("Agendas : " ,this.agendas);
        this.tccs = await TccService.getTccsSemApresentacao();
      } catch (error) {
        alert('Erro ao buscar dados: ' + error.message);
      }
    },
    async fetchBancas() {
      try {
        const responseBancas = await BancaService.getApresentacoes();
        const responseTccs = await TccService.getTccs();
        const responseAgendas = await AgendaService.getAgendas();

        this.bancas = responseBancas.map(banca => {
          const tcc = responseTccs.find(tcc => tcc.id === banca.idTcc);
          const agenda = responseAgendas.find(agenda => agenda.id === banca.idAgenda);

          return {
            ...banca,
            tccTitle: tcc ? tcc.title : '',
            orientadorName: tcc && tcc.orientador ? tcc.orientador.name : '',
            agendaDate: agenda ? agenda.date : '',
            horasComeco: agenda ? agenda.horasComeco : '',
            horasFim: agenda ? agenda.horasFim : ''
          };
        });
      } catch (error) {
        alert('Erro ao buscar bancas: ' + error.message);
      }
    },
    async handleSubmit() {
      const banca = {
        idAgenda: this.selectedAgenda,
        idTcc: this.selectedTcc,
        member1: this.professores.find((prof) => prof.id === this.selectedMember1),
        member2: this.professores.find((prof) => prof.id === this.selectedMember2),
      };

      try {
        await BancaService.createBanca(banca);
        alert('Banca cadastrada com sucesso!');
        this.fetchBancas();
      } catch (error) {
        alert('Erro ao cadastrar banca: ' + error.message);
      }
    },
    formatDate(dateArray) {
      console.log("Raw date string:", dateArray); 

      const year = dateArray[0];
      const month = String(dateArray[1]).padStart(2, '0');
      const day = String(dateArray[2]).padStart(2, '0');
      
      return `${day}-${month}-${year}`;
    },
    formatTime(horaComeco, horaFim) {
      let _horaComeco = horaComeco.toString();
      let _horaFim = horaFim.toString();

      _horaComeco = _horaComeco.split(',');
      _horaFim = _horaFim.split(',');

      let horas = `${_horaComeco[0]}.${_horaComeco[1]} : ${_horaFim[0]}.${_horaFim[1]}`;
      return horas;
    },
  },
};
</script>
<style scoped>
.container {
  padding: 20px;
}
.workspace {
  margin-top: 20px;
}
.head {
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.forms {
  display: flex;
  gap: 10px;
}
.form-banca{
  display: grid;
  align-items: center;
  justify-content: center;
}
label {
  margin-bottom: 5px;
}
select {
  padding: 5px;
  margin-bottom: 10px;
}

.btn-cadastro-agenda{
  background-color: #09a6a3;
  border-top-left-radius: 0px;
  font-weight: bold;
  border: #087270 solid 1px;
  color:#f1f1f1;
}
.btn-cadastro-agenda:hover {
  background-color: #087270;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.table-title {
  background-color: #09a6a3;
  color: white;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
tbody tr:hover {
  background-color: #f1f1f1;
}
.workspace {
    justify-items: center;
    padding: 2px;
}
.btn-action{
  margin-top: 40px;
    position: relative;
    margin-right: 100px;
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

@media (max-width: 768px) {
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
    margin: 2px;
    padding: 2px;
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