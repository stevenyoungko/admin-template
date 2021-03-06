import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'

/* Module */
import Demo from './demo'

Vue.use(Router)

/* 路由模组 */
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                  當設置 true 的時候該路由不會SideBar出現 如401，login等頁面，或者如一些編輯頁面/edit/1
 * alwaysShow: true              當你一個路由下面的 children 聲明的路由大於1個時，自動會變成嵌套的模式--如組件頁面
 *                               只有一個時，會將那個子路由當做根路由顯示在側邊欄--如引導頁面
 *                               若你想不管路由下面的 children 聲明的個數都顯示你的根路由
 *                               你可以設置 alwaysShow: true，這樣它就會忽略之前定義的規則，一直顯示根路由if set true, will always show the root menu
 * redirect: noRedirect          當設置 noRedirect 的時候該路由在麵包屑導航中不可被點擊
 * name:'router-name'            設定路由的名字，一定要填寫不然使用<keep-alive>時會出現各種問題，SideBar下方快速搜尋是需要name (必填)
 * meta : {
    roles: ['admin','editor']    設置該路由進入的權限，支持多個權限疊加 (目前無使用)
    title: 'title'               設置該路由在 SideBar,breadcrumb 和 tagViews 中展示的名字 (必填)
    icon: 'svg-name'             SideBar Icon 的 Svg樣式
    breadcrumb: false,           如果設置為false，則不會在breadcrumb麵包屑中顯示
    noTagViews: true,            如果設置為true，不會生成tagViews 也不會被 <keep-alive> 緩存 (默認 false) ， 該設置大於noCache
    noCache: true,               如果設置為true，則不會被 <keep-alive> 緩存(默認 false) <keep-alive>組件在 @/layout/components/AppMain.vue
    affix: true                  如果設置為true，則會釘選在tagViews上 (默認 false)
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '仪表板', icon: 'dashboard', affix: true }
      }
    ]
  },
  Demo,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = []
const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
