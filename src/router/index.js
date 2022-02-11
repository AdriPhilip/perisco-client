import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/Login.vue')
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: function () {
      return import('../views/Logout.vue')
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: function () {
      return import('../views/Register.vue')
    }
  },
  {
    path: '/enfant/:idChild',
    name: 'Enfant',
    component: function () {
      return import('../views/Enfant.vue')
    }
  },
  {
    path: '/enfants',
    name: 'Enfants',
    component: function () {
      return import('../views/Enfants.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
