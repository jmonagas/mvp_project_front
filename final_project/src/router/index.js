import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Benefits',
    name: 'Benefits',
    component: () => import('../views/Benefits.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Resources',
    name: 'Resources',
    component: () => import('../views/Resources.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
