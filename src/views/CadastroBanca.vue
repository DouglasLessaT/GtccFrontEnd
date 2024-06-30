<template>
  <div class="container">
    <!-- Cadastro da Banca -->
    <div class="workspace">
      <div class="head">
        CADASTRO DA BANCA
        <button @click="$router.push('/cadastrobanca')" class="btn-action">></button>
      </div>

      <div class="forms">
        <div>
          <label for="agenda">Selecione a Agenda:</label>
          <select v-model="selectedAgenda" id="agenda">
            <option value="">Selecione</option>
            <option v-for="agenda in agendas" :key="agenda.id" :value="agenda.id">
              {{ formatDate(agenda.data) }}
            </option>
          </select>
        </div>

        <div>
          <label for="tcc">Selecione o TCC:</label>
          <select v-model="selectedTcc" id="tcc">
            <option value="">Selecione</option>
            <option v-for="tcc in tccs" :key="tcc.id" :value="tcc.id">
              {{ tcc.title }} - Orientador: {{ tcc.orientador?.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="member1">Selecione o Membro 1:</label>
          <select v-model="selectedMember1" id="member1">
            <option value="">Selecione</option>
            <option v-for="prof in professores" :key="prof.id" :value="prof.id">
              {{ prof.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="member2">Selecione o Membro 2:</label>
          <select v-model="selectedMember2" id="member2">
            <option value="">Selecione</option>
            <option v-for="prof in professores" :key="prof.id" :value="prof.id">
              {{ prof.name }}
            </option>
          </select>
        </div>

        <div>
          <button @click="handleSubmit" class="btn-cadastro-agenda">Cadastrar Banca</button>
        </div>
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
  flex-direction: column;
  gap: 10px;
}
label {
  margin-bottom: 5px;
}
select {
  padding: 5px;
  margin-bottom: 10px;
}
.btn-action {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
.btn-action:hover {
  background-color: #0056b3;
}
</style>
