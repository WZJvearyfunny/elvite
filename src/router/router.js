import { createRouter,createWebHistory } from 'vue-router'

const routes = [{
    path:'/login',
    name:'Index',
    component:()=>import('../views/login/loginPage.vue')
}]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router