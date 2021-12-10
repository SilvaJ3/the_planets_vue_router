import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    redirect: "/mercury/overview"
  },
  {
    path: '/:slug',
    name: 'Planet',
    component: () => import(/* webpackChunkName: "planet" */ '../views/Planet.vue'),
    props: true,
    redirect: "/:slug/overview",
    children: [
      {
        path: ":name",
        name: "Info",
        props: true,
        component: () => import(/* webpackChunkName: "infos" */ '../views/Info.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
