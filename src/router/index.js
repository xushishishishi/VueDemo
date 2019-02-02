import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import FirstPage from '@/page/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    }
  ]
})
