<template>
        <div class="container">    
            <div class="workspace ">
                <div class="head">DASHBOARD
                    <button class="btn-action">+</button>
                </div>
                <div class="search">
                <input class="input-search" type="search" placeholder="Buscar dados">
                    <input class="btn-default btn-search" type="button" value="Buscar">
                </div>
                <table >
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
    export default{
        name: 'DashBoard'
    }
</script>

<style scoped>

.btn-default{
    width: 85px;
}

</style>

