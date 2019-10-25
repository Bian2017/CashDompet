import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('./pages/home/Index')
const Detail = () => import('./pages/detail/Index')
const News = () => import('./pages/news/Index')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})

export default router
