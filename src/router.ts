import { createWebHashHistory, RouteRecordRaw, createRouter } from 'vue-router'
import { cipher } from './utils/cipher' 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/name'
  },
  {
    path: '/name',
    component: () => import('./pages/Name.vue')
  },
  {
    path: '/wish/:name',
    component: () => import('./pages/Wish.vue')
  },
  {
    path: '/wish/',
    redirect: `/wish/${cipher('No One')}`
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router