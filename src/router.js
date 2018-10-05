import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog/:year/:month/:date/:slug',
      name: 'post-detail',
      props: true,
      component: () => import('./pages/post-detail.vue')
    },
    {
      path: '/by/:slug',
      name: 'author-detail',
      props: true,
      component: () => import('./pages/author-detail.vue')
    },
    {
      path: '/go/:slug',
      name: 'activity-detail',
      props: true,
      component: () => import('./pages/activity-detail.vue')
    },
    {
      path: '*',
      component: () => import('./pages/not-found.vue')
    }
  ]
})
