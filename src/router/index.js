import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import DashBoard from '../views/DashBoard.vue';


const routes = [
    { 
    path: "/", 
    component: LoginForm
    },

    {
    path: "/dashboard",
    component: DashBoard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;