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

      <div class="forms">
        
        <div class="form-banca">
          <label for="agenda">Selecione a Agenda:</label>
          <select v-model="selectedAgenda" id="agenda">
            <option value="">Selecione</option>
            <option v-for="agenda in agendas" :key="agenda.id" :value="agenda.id">
              {{ formatDate(agenda.data) }}
            </option>
          </select>
        </div>

        <div class="form-banca">
          <label for="tcc">Selecione o TCC:</label>
          <select v-model="selectedTcc" id="tcc">
            <option value="">Selecione</option>
            <option v-for="tcc in tccs" :key="tcc.id" :value="tcc.id">
              {{ tcc.title }} - Orientador: {{ tcc.orientador?.name }}
            </option>
          </select>
        </div>

        <div class="form-banca">
          <label for="member1">Selecione o Membro 1:</label>
          <select v-model="selectedMember1" id="member1">
            <option value="">Selecione</option>
            <option v-for="prof in professores" :key="prof.id" :value="prof.id">
              {{ prof.name }}
            </option>
          </select>
        </div>

        <div class="form-banca">
          <label for="member2">Selecione o Membro 2:</label>
          <select v-model="selectedMember2" id="member2">
            <option value="">Selecione</option>
            <option v-for="prof in professores" :key="prof.id" :value="prof.id">
              {{ prof.name }}
            </option>
          </select>
        </div>
      </div>
      <div>
          <button @click="handleSubmit" class="btn-cadastro-agenda btn-action_banca">Cadastrar Banca</button>
        </div>
    </div>
  </div>
</template>

<script>
import BancaService from '@/services/BancaService';
import TccService from '@/services/TccService';

export default {
  data() {
    return {
      professores: [],
      agendas: [],
      tccs: [],
      selectedMember1: '',
      selectedMember2: '',
      selectedAgenda: '',
      selectedTcc: '',
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.professores = await BancaService.getProfessores();
        this.agendas = await BancaService.getAgendasLivres();
        this.tccs = await TccService.getTccs();
      } catch (error) {
        alert('Erro ao buscar dados: ' + error.message);
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
      } catch (error) {
        alert('Erro ao cadastrar banca: ' + error.message);
      }
    },
    formatDate(dateString) {
      console.log("Raw date string:", dateString);  // Adicionando log para verificar a data recebida
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Data Inválida';
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${day}/${month}/${year} - ${hours}:${minutes}`;
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
/* .btn-action {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
.btn-action:hover {
  background-color: #0056b3;
} */
.btn-action_banca {
  background-color: #09a6a3;
  font-weight: bold;
  border: none;
  margin: 15px;
  color: #ffffff;
  padding: 5px;
}
.btn-action_banca:hover {
  background-color: #ffffff;
  color: #000000;
  border: #000000 solid 1px;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    margin-top: 5%;
    padding: 10px;
    box-sizing: border-box;
  }

  .forms {
    margin-left: 12px;
    display: grid;
    align-items: center;
    width: 100%;
    margin-top: 5px;
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
    display: grid;
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
