<template>
    <body>
        <header class="head">
            <div id="Logo">
        <p1 @click="$router.push('/')">
          <img id="logoApp" src="@\assets\unisalesLogo.svg">
        </p1>
      </div>
        </header>
    </body>
    
</template>

<script>

    export default{
        name: 'NavBarComponents'
    }
    
</script>

<style>
  body{
      margin: 0;
      padding: 0;
  }

  header{
      position: fixed;
  }
  #logoApp{
  height: 40px;
}
  .head{
      background-color: #09a6a3;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 35px;
      font-size: 30px;
      color: white; 
      font-family: "Poiret One", sans-serif;
      top: 0px;
  }
</style>