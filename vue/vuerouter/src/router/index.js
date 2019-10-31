import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import H1 from '../components/multiple/H1'
import H2 from '../components/multiple/H2'
import H from '../views/H'


Vue.use(VueRouter)

const routes = [
  // 单页面多路由应用
  {
    path: '/mul1',
    name: 'mul1',
    components:{
      default: H,
      left: H1,
      right: H2
    }
  },
   {
    path: '/mul2',
    name: 'mul2',
    components:{
      default: H,
      left: H2,
    }
  },
  {
    path:'/more',
    name: 'more',
    components:{
      default: H,
      left: H1,
      right: H2,
      more1: H2,
      more2: H2,
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // rename Page
  {
    path: '/rename',
    name: 'rename',
    component: ()=>import('../views/Rename'),
    alias: '/othername'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
