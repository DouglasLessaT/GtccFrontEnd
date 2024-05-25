<template>
    <body>
        <main>
            <section class="Dash">
                <div class="container-dash">
                    <div class="flex-dash">
                        <div class="head-dash"> DashBoard
                            <button class="btn-action-dash">+</button>
                            <div class="input-dash">
                                <input type="text" class="input-pesquisa-dash" placeholder="Pesquisar Tcc">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </body>
</template>
  
<script>
    export default{
        name: 'DashBoard'
    }
</script>

<style>
    body{
      margin: 0;
      padding: 0;
    }

    .flex-dash{
        display: flex;
    }

    .container-dash{
        width: 100%;
        height: 100vh;
        background: #f8f8f8;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex-dash{
        width:750px;
        height: 450px;
        background-color: white;
        display: grid;
        align-items: top;
        justify-content: center;
        box-shadow: 0 0 1000px 0  #09a6a38e;
        display: flex;
        border-style: solid;
        border-color: #09a6a3;
    }

    .head-dash{
        background-color: #09a6a3;
        align-items: center;
        width: 100%;
        height: 35px;
        font-size: 30px;
        color: white; 
        font-family: "Poiret One", sans-serif;
        
        text-align: center;
    }

    .btn-action-dash{
        position: relative;
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
        left: 633px;
        top: -19px;
    }
    .btn-action-dash:hover{
        background-color: #09a6a3;
        color: #ffffff;
        border-style: solid;
        border-color: #ffffff;
        border-width: 2px; 
    }

    .input-pesquisa-dash{
        width: 80%;
        margin: 5px 0;
    }
    
    
</style>