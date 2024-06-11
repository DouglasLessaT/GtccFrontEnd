import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '../views/DashBoard.vue';
import CadastroTcc from '../views/CadastroTcc.vue';
import CadastroAluno from '../views/CadastroAluno.vue';
import CadastroBanca from '../views/CadastroBanca.vue';
import ConfirmaRelatorio from '../views/ConfirmaRelatorio.vue';
import NaoAutorizado from '../views/NaoAutorizadoView.vue'

import LoginService from '../services/LoginService'
import AuthService from '@/services/AuthService'

const routes = [
    { 
    path: "/login", 
    name: 'login',
    component: LoginForm
    },

    {
      path: "/",
      name: 'dashboard',
      component: DashBoard
    },

    {
      path: "/cadastroaluno",
      name: 'cadastroaluno',
      component: CadastroAluno
    },
   
    {
      path: "/cadastrotcc",
      name: 'cadastrotcc',
      component: CadastroTcc
    },

    {
      path: "/cadastrobanca",
      name: 'cadastrobanca',
      component: CadastroBanca
    },

    {
      path: "/confirmarelatorio",
      name: 'confirmarelatorio',
      component: ConfirmaRelatorio
    },

    {
      path: '/nao-autorizado',
      name: 'nao-autorizado',
      component: NaoAutorizado
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    LoginService.router = router;
  
    console.log(`de ${from.name} para ${to.name}`);
  
  
    if (!LoginService.estaAutenticado() && to.name != 'login') {
      return { name: 'login' }
    }
  
    if (!AuthService.validaPermissao(to.path)) {
      router.push('/nao-autorizado')
      return false;
    }
  
    return true;
  })

export default router;