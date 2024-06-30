<template>
  <div class="container">
    <div class="workspace">
      <div class="head">
        DASHBOARD
        <button @click="$router.push('/cadastroaluno')" class="btn-action">
          +
        </button>
      </div>
      <div class="search">
        <input
          class="input-search"
          type="search"
          placeholder="Buscar dados"
          v-model="termoPesquisa"
        />
        <input
          class="btn-default btn-search"
          type="button"
          value="Buscar"
          @click="BuscaTCC(termoPesquisa)"
        />
      </div>
      <table>
        <tr class="table-title">
          <td>Curso</td>
          <td>Titulo</td>
          <td>Tema</td>
        </tr>
        <tr v-if="tccs.length === 0">
          <td colspan="3" style="text-align: center">Nenhum Tcc cadastrado.</td>
        </tr>
        <tr v-else v-for="(tcc, index) in tccs" :key="index">
          <td>{{ tcc.curse }}</td>
          <td>{{ tcc.title }}</td>
          <td>{{ tcc.theme }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import DashService from "@/services/DashService";

export default {
  name: "DashBoard",
  data() {
    return {
      tccs: [],
      termoPesquisa: "",
    };
  },
  mounted() {
    this.ListarTccs();
  },
  methods: {
    async ListarTccs() {
      try {
        const response = await DashService.buscarTCCs();
        console.log("Teste ", response);
        this.tccs = response;
      } catch (error) {
        console.error("Erro ao lista TCCs:", error);
        alert("Erro ao lista TCCs");
      }
    },
    async BuscaTCC(termoPesquisa = "") {
      try {
        const response = await DashService.buscarTCCs();
        let filteredResults = response;
        // Filtra os resultados apenas se houver um termo de pesquisa
        if (termoPesquisa) {
          filteredResults = response.filter(
            (tcc) =>
              tcc &&
              typeof tcc.title === "string" &&
              (tcc.title.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                tcc.theme.toLowerCase().includes(termoPesquisa.toLowerCase()))
          );
        }
        // Verifica se os resultados filtrados estão vazios
        if (filteredResults.length === 0) {
          alert("Nenhum resultado encontrado.");
        } else {
          this.tccs = filteredResults;
        }
      } catch (error) {
        console.error("Erro ao buscar TCCs:", error);
        alert("Erro ao buscar TCCs");
      }
    },
  },
};
</script>

<style scoped>
.btn-default {
  width: 85px;
}

@media screen and (max-width: 630px) {
  .container {
    width: 100%;
    max-width: 800px;
  }

  .search,
  .forms {
    width: 400px; /* Ajusta para ocupar toda a largura disponível */
  }

  .btn-action {
    left: 60px;
  }
}

@media screen and (max-width: 430px) {
  .container {
    width: 100%;
    max-width: 800px;
  }

  .search,
  .forms {
    width: 300px; /* Ajusta para ocupar toda a largura disponível */
  }

  input.input-search {
    font-family: "Poiret One", sans-serif;
    display: flex;
    align-items: top;
    justify-content: center;
    width: 180px;
    margin: 4px;
    margin-top: 2px;
    font-size: 15px;
  }

  .btn-default {
    cursor: pointer;
    background-color: #000;
    width: 60px;
    height: 35px;
    padding: 0px;
    text-align: center;
    font-size: 15px;
  }

  .btn-action {
    width: 28px;
    height: 28px;
    font-size: 30px;
    left: 30px;
  }

  .workspace {
    margin-top: 90px;
  }
}
</style>