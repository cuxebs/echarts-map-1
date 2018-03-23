import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tool from './views/Tool.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tool',
      name: 'tool',
      component: Tool
    }
  ]
})
