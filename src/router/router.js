/*global Vue*/
import Vue from 'vue'
import Router from 'vue-router'
import todoTask from '@/views/home/todo-task.vue'
import App from 'src/views/home/app.vue'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/todo-task',
      component: todoTask
    }
  ]
})
export default router
