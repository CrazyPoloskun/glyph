import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/text',
      component: () => import('../views/TextGenerateView.vue'),
    },
    {
      path: '/image',
      component: () => import('../views/ImageGenerateView.vue'),
    },
    {
      path: '/book',
      component: () => import('../views/BookGenerateView.vue'),
    },
  ],
})

export default router
