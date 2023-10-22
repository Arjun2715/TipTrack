import { createRouter, createWebHistory } from 'vue-router' 
import signup from '../views/Signup.vue'
import login from '../views/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'signup' }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
     {
       path: '/login',
       name: 'login',
      component: login
     }
  ]
})

export default router
