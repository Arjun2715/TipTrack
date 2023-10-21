import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signup from '../views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})

export default router
