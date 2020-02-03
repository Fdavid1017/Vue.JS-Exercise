import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AddRide from '@/views/AddRide.vue'
import SearchRide from '@/views/SearchRide.vue'
import LogOut from '@/views/LogOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/AddRide',
    name: 'addRide',
    component: AddRide
  },
  {
    path: '/SearchRide',
    name: 'searchRide',
    component: SearchRide
  },
  {
    path: '/LogOut',
    name: 'logOut',
    component: LogOut
  }
]

const router = new VueRouter({
  routes
})

export default router
