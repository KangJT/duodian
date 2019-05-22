import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/tohome',
      children: [
        {
          path: '/tohome',
          name: 'Home',
          component: () => import('@/views/Home'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/foodtype',
          name: 'foodType',
          component: () => import('@/views/foodType'),
          meta: {
            title: '分类'
          }
        },
        {
          path: '/vipfood',
          name: 'vipFood',
          component: () => import('@/views/vipFood'),
          meta: {
            title: '会员'
          }
        },
        {
          path: '/shopcar',
          name: 'shopCar',
          component: () => import('@/views/shopCar'),
          meta: {
            title: '购物车'
          }
        },
        {
          path: '/myself',
          name: 'mySelf',
          component: () => import('@/views/mySelf'),
          meta: {
            title: '我的'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('@/views/location'),
      meta: {
        title: '地图'
      }
    },
    {
      path: '/selectlocation',
      name: 'Selectlocation',
      component: () => import('@/views/selectlocation'),
      meta: {
        title: '地图'
      }
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: () => import('@/views/addaddress'),
      meta: {
        title: '添加地址地图'
      }
    },
    {
      path: '/okodder',
      name: 'okodder',
      component: () => import('@/views/okodder'),
      meta: {
        title: '确定订单'
      }
    }
  ]
})

// handleGetSite () {
//   this.$message.info('正在定位')
//   map.geolocation().then(res => {
//     this.$store.commit('site/set_local', res.aois[0])
//     this.$router.replace({
//       path: this.$route.query.callback
//     })
//     this.show = res
//     this.showSite = true
//   }).catch(() => {
//     this.$message.error('定位失败，请重试')
//   })
// },

//  getCity (city, keyword) {
//       map.search(city, keyword).then(res => {
//         this.show = res
//       })
//     }

const loginPath = ['/myself', '/shopcar', 'vipfood']

const gpsPath = ['/location', '/selectlocation']

// // 导航守卫  路由拦截
router.beforeEach((to, from, next) => {
  // 定位 判断
  if (gpsPath.indexOf(to.path) !== -1) {
    next()
  } else {
    next()
  }
  if (document.cookie.indexOf('token')) {
    next()
  } else {
    if (loginPath.indexOf(to.name) !== -1) {
      console.log(loginPath, 'payh')
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    } else {
      next()
    }
  }
})
router.afterEach((to, from, next) => {
  document.title = to.meta.title
})
export default router
