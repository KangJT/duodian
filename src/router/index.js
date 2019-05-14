import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

// const loginPath = ['/user']
// const gdpsPath = ['/location', '/selectlocation']
// // 导航守卫  路由拦截
// Router.beforeEach((to, from, next) => {
//   if (gdpsPath.indexOf(to.path) === -1) {

//   }
// })
