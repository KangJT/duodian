import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import toHome from '@/views/toHome/index.vue'
import foodType from '@/views/foodType/index.vue'
import vipFood from '@/views/vipFood/index.vue'
import shopCar from '@/views/shopCar/index.vue'
import mySelf from '@/views/mySelf/index.vue'
import Location from '@/views/location/index.vue'
import Selectlocation from '@/views/selectlocation/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/tohome',
      children: [
        {
          path: '/tohome',
          name: 'toHome',
          component: toHome
        },
        {
          path: '/foodtype',
          name: 'foodType',
          component: foodType
        },
        {
          path: '/vipfood',
          name: 'vipFood',
          component: vipFood
        },
        {
          path: '/shopcar',
          name: 'shopCar',
          component: shopCar
        },
        {
          path: '/myself',
          name: 'mySelf',
          component: mySelf
        }
      ]
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/selectlocation',
      name: 'Selectlocation',
      component: Selectlocation
    }
  ]
})

const loginPath = ['/user','/shopcar']
const gpsPath = ['/location', '/selectlocation']
// 导航守卫  路由拦截
Router.beforeEach((to, from, next) => {
 //定位 判断
 if (gpsPath.indexOf(to.path) !== -1) {
   
 } else {
    
 }
 // if (loginPath.indexOf('token') !== -1) {

 // } else {

 // }
})
