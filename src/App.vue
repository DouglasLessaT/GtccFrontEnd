<template>
  <NavBarComponents />
  <router-link to="/">
    Login
  </router-link>
  <router-link to="/dashboard">
    DashBoard
  </router-link>
  <router-link to="/cadastrotcc">
    CadastroTcc
  </router-link>
  <FooterComponents />

  <router-view />
</template>

<script>

  import NavBarComponents from './components/NavBarComponents.vue';
  import FooterComponents from './components/FooterComponents.vue';

  export default {
    name: 'App',
    components: {
      NavBarComponents,
      FooterComponents
    }
  }
</script>
