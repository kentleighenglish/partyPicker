import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./components/pages/Home.vue') },
      { path: '/quiz', component: () => import('./components/pages/Quiz.vue') }
    ]
  })
}