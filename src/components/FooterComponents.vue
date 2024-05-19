<template>
    <body>
        <footer>
            <img
                src="../assets/logo_VixBay-LogoMarca BRANCA.png"
                width="70"
                alt="log-vitória"
                />
        </footer>
    </body>
    
</template>

<script>
    export default{
        name: 'FooterComponents'
    }
</script>

<style>
    body{
      margin: 0;
      padding: 0;
  }

    footer{
      position: fixed;
      background-color: rgba(9, 166, 163, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 35px;
      bottom: 0px;
  }

</style>