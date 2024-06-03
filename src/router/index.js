import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '../views/DashBoard.vue';
import CadastroTcc from '../views/CadastroTcc.vue';
import CadastroAluno from '../views/CadastroAluno.vue';
import CadastroBanca from '../views/CadastroBanca.vue';
import ConfirmaRelatorio from '../views/ConfirmaRelatorio.vue';

const routes = [
    { 
    path: "/", 
    component: LoginForm
    },

    {
    path: "/dashboard",
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
    routes,
});

export default router;