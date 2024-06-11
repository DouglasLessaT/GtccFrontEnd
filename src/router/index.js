import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '../views/DashBoard.vue';
import CadastroTcc from '../views/CadastroTcc.vue';
import CadastroAluno from '../views/CadastroAluno.vue';
import CadastroBanca from '../views/CadastroBanca.vue';
import ConfirmaRelatorio from '../views/ConfirmaRelatorio.vue';

import LoginService from '../services/LoginService'
import AuthService from '@/services/AuthService'

const routes = [
    { 
    path: "/login", 
    name: 'login',
    component: LoginForm
    },

    //{
    //path: '/nao-autorizado',
    //name: 'nao-autorizado',
    //component: NaoAutorizadoView
    //},

    {
    path: "/",
    name: 'dashboard',
    component: DashBoard
    },
   
    {
    path: "/cadastrotcc",
    component: CadastroTcc
    },

    {
    path: "/cadastroAluno",
    component: CadastroAluno
    },

    {
    path: "/CadastroBanca",
    component: CadastroBanca
    },

    {
        path: "/ConfirmaRelatorio",
        component: ConfirmaRelatorio
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