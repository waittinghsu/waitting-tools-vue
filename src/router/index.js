import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';

// import playerRouter from './modules/player.js';
// import csRouter from './modules/cs.js';
// import paymentRouter from './modules/payment.js';
// import marketingRouter from './modules/marketing.js';
// import cmsRouter from './modules/cms.js';
// import affiliateRouter from './modules/affiliate.js';
// import reportRouter from './modules/report.js';
// import systemRouter from './modules/system.js';
// import agencyRouter from './modules/agency.js';
// import themeRouter from './modules/theme.js';
import devRouter from './modules/dev.js';

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * hiddenSidebar                  隱藏側邊欄, 若設為true, 點擊導覽按鈕後將導向redirect的頁面(defaulf: false)
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: router name       if set router name, the sidebar will highlight the router name you set
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
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
        },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  playerRouter,
  // csRouter,
  paymentRouter,
  marketingRouter,
  cmsRouter,
  // affiliateRouter,
  reportRouter,
  systemRouter,
  agencyRouter,
  // themeRouter,
  devRouter,
];

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
