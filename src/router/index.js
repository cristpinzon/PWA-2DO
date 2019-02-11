import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Tasks from '@/components/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },

    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
})
