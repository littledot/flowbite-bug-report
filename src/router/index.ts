import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/navbar',
      component: () => import('../views/NavbarBug.vue')
    },
    {
      path: '/modal',
      component: () => import('../views/ModalBug.vue')
    },
  ]
})

export default router
