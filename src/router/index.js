import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 异步引入路由组件, 实现路由懒加载
const msite = () => import('pages/msite/msite')
const search = () => import('pages/search/search')
const order = () => import('pages/order/order')
const profile = () => import('pages/profile/profile')

const shop = () => import('pages/shop/shop')
const foodDetail = () => import('pages/shop/children/foodDetail')
const shopDetail = () => import('pages/shop/children/shopDetail')
const login = () => import('pages/login/login')

// 所有路由的数组
const routes = [
  // 地址为空时跳转msite页面
  {
    path: '/',
    redirect: '/msite'
  },
  // 所有商铺列表页
  {
    path: '/msite',
    component: msite,
    meta: {keepAlive: true, isTop: true},
  },
  //搜索页
  {
    path: '/search/:geohash',
    component: search,
    meta: {keepAlive: true, isTop: true},
  },
  //订单列表页
  {
    path: '/order',
    component: order,
    meta: {isTop: true},
  },
  // 个人中心
  {
    path: '/profile',
    component: profile,
    meta: {isTop: true},
  },

  // 商铺详情页
  {
    path: '/shop',
    component: shop,
    children: [
      {
        path: 'foodDetail', //食品详情页
        component: foodDetail,
      },
      {
        path: 'shopDetail', //商铺详情页
        component: shopDetail
      }
    ]
  },
  // 登录注册页
  {
    path: '/login',
    component: login
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.documentElement.scrollTop
                            || window.pageYOffset || document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
})

