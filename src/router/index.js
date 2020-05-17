import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'flight',
    component: () => import('@/views/air/Flight.vue')
  },
 
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
