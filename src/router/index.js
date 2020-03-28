import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/Params/:id/:title',
      name: 'Params',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }

    },
    {
      path: '/goHome',
      name: 'goHome',
      redirect: '/'
    },
    {
      path: '/goParams',
      name: 'goParams',
      redirect: '/Params/:id/:title'
    },
    {
      path: '/Hi1',
      name: 'Hi1',
      component: Hi1,
      alias: '/Marco'
    }
  ]
})
