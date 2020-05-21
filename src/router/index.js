import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'air',
    component: () => import('@/views/air/indexFlight.vue'),
  },
  {
    path:'/flights',
    name:'flights',
    component:() => import('@/views/air/ticketList.vue'),
    meta:{
      isNavbar:true
    }
  }
 
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
