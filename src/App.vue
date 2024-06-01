<template>
  <NavBarComponents />
  <router-link to="/">
  </router-link>
  <router-link to="/dashboard">
  </router-link>
  <router-link to="/cadastrotcc">
  </router-link>
  <router-link to="/cadastroaluno">
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
