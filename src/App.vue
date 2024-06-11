<template>
  <div>
    <!-- Utilize a propriedade computada para decidir qual componente de barra de navegação renderizar -->
    <!-- <component :is="barradeNavegacao"></component> -->
    <component :is="barradeNavegacao"></component>
    <router-view />
    <FooterComponents />
  </div>
</template>

<script>
import NavBarComponents from './components/NavBarComponents.vue';
import NavBarComponentsLogin from "@/components/NavBarComponentsLogin.vue";
import FooterComponents from './components/FooterComponents.vue';

export default {
  name: 'App',
  components: {
    NavBarComponents,
    FooterComponents,
    NavBarComponentsLogin,
  },
  computed: {
    barradeNavegacao() {
      // Verifica se a rota atual é '/login'
      return this.$route.path === '/login'? NavBarComponentsLogin : NavBarComponents;
    }
  }
}
</script>