import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage/WelcomePage'
import ResultsPage from '@/components/ResultsPage/ResultsPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/results',
      name: 'ResultsPage',
      component: ResultsPage
    }
  ]
})
