import { createRouter, createWebHistory } from 'vue-router'
import signup from '@/views/SignUp.vue'
import signin from '@/views/SignIn.vue'
import home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'signin' }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})

export default router
