import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyHome from '@/views/MyHome'

Vue.use(VueRouter)
// import LazyLoad from '@/views/LazyLoad'
const LazyLoad =resolve => require(['@/views/LazyLoad'],resolve)
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/lazyload',
    name:'lazyLoad',
    component: LazyLoad
  },
  {
    path: '/',
    name:'myHome',
    component: MyHome
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: ()=> import ('@/components/comm/Tabbar')
  },
]

const router = new VueRouter({
  routes
})

export default router
