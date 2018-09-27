import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from './views/Play.vue'
import Scores from './views/Scores.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import(/* webpackChunkName: "guide" */ './views/Guide.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/scores',
      name: 'scores',
      component: Scores
    }
  ],
  mode: 'history'
})
