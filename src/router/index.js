import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/air',
  },
  {
    path: '/air',
    name: 'air',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/air',
        component: () => import('@/views/air/indexFlight')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue')
      }
    ]
  },
  {
    path: '/flights',
    name: 'flights',
    component: () => import('@/views/air/ticketList.vue'),
    meta: {
      isNavbar: true
    },
  },
  {
    path: '/pay/:id',
    name: 'pay',
    component: () => import('@/views/air/pay.vue'),
    meta: {
      isNavbar: true
    },
  },
  {
    path:'/personalcenter',
    name:'personalcenter',
    component:() => import('@/views/user/Personalcenter.vue'),
  },
  {
    path:'/myorder',
    name:'myorder',
    component:() => import('@/views/user/Myorder.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue'),
    meta: {
      isNavbar: true
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/Register.vue'),
    meta: {
      isNavbar: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
