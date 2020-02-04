import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AddRide from '@/views/AddRide.vue'
import SearchRide from '@/views/SearchRide.vue'
import LogOut from '@/views/LogOut.vue'
import Profile from '@/views/Profile.vue'
import UserRides from '@/views/UserRides.vue'
import Page404 from '@/views/Page404.vue'

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
    component: Register,
    props: true
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
  },
  {
    path: '/Profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/UserRides',
    name: 'userRides',
    component: UserRides
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

export default router
