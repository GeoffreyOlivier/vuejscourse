import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListProduct from '../views/ListProduct'
import DetailProduct from "@/views/DetailProduct";
import Register from "@/views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list/:item',
    name: 'list',
    component: ListProduct
  },
  {
    path: 'item',
    name: 'item-detail',
    component: DetailProduct
  },
  {
    path: 'register',
    name: 'register',
    component: Register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
