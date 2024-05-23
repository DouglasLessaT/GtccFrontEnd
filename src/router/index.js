import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '../views/DashBoard.vue';
import CadastroTcc from '../views/CadastroTcc.vue';


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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;