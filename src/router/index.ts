import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landing-page',
    component: ()=> import('../views/LandingPage.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
