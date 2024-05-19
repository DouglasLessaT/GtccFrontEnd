<template>
  <div class="app">
    <NavBarComponents />
    <DashBoard />
    <!--<LoginForm />-->
    <FooterComponents />
  </div>
  
</template>

<script>
  //import LoginForm from './views/LoginForm.vue';
  import DashBoard from './views/DashBoard.vue';
  import NavBarComponents from './components/NavBarComponents.vue';
  import FooterComponents from './components/FooterComponents.vue';
  

  

  export default {
    name: 'App',
    components: {
      NavBarComponents,
      DashBoard,
      //LoginForm,
      FooterComponents
    }
  }
</script>
