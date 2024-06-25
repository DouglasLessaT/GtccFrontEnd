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
        <input class="input-search" type="search" placeholder="Buscar dados" />
        <input class="btn-default btn-search" type="button" value="Buscar" />
      </div>
      <table>
        <tr class="table-title">
          <td>Nome</td>
          <td>Idade</td>
          <td>Profissão</td>
        </tr>
        <tr>
          <td>Ted</td>
          <td>22</td>
          <td>Estudante</td>
        </tr>
        <tr>
          <td>Ralf</td>
          <td>26</td>
          <td>Designer</td>
        </tr>
        <tr>
          <td>Ralf</td>
          <td>26</td>
          <td>Designer</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
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