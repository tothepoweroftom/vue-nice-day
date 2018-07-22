import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage/WelcomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    }
  ]
})
