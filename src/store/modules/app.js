import Cookies from 'js-cookie';
import { asyncRoutes, constantRoutes } from '@/platforms/bupSystem/router';
// import router from '@/bupSystem/router'
import { formatMenus, formatRoute } from '@/utils';

const state = {
  sidebar: {
    title: process.env.SYSTEM_TITLE || 'Demo系统',
    opened: true,
    withoutAnimation: true,
  },
  // appMainSub 使用的 tab badge
  tabsBadge: {
    // 範例 低一層根據路由設定 在vue-router meta內增加參數 ‘BadgeKey’
    demo: {
      tab1: 0, // 映射的 tabs 欄位：請根據router Name || menu key
    },
  },
  routes: constantRoutes.concat(asyncRoutes), // 初始化是所有菜单路由
  menus: [], // 菜单信息
  routeInfo: [], // 路由信息
  height: window.innerHeight - (50 + 40 + 32), // 减去外框高度
  currentPageOpers: [], // 当前页面的操作
};

const mutations = {
  MENU_ROUTES: (state, routes) => {
    state.routes = routes;
  },
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.height = window.innerHeight - (50 + 40 + 32);
  },
  REFRESH_ROUTES: (state, data) => {
    state.routes = data;
  },
  SET_PAGE_OPERS: (state, data) => {
    state.currentPageOpers = data;
  },
  SET_MENUS: (state, data) => {
    state.menus = data;
  },
  SET_ROUTE_INFO: (state, data) => {
    state.routeInfo = data;
  },
  SET_TABS_BADGE: (state, data) => {
    state.tabsBadge = { ...state.tabsBadge, ...data };
  },
};

const actions = {
  // 處理菜單與路由表的 映射
  setMenuPath({ commit, dispatch, state }, apiMenus) {
    // api所有菜单
    const menus = formatMenus(apiMenus, 'root', 0);
    // 所有路由 vue-router 清單
    const { routes } = state;
    // 重整路由信息，与menus对应， menu.id 与 route.name 一致 (影響路由 sideBarItem建立
    const routeInfo = formatRoute(routes, 'root', '');
    // menu与route对应上
    menus.forEach((menuItem) => {
      const route = routeInfo.find((routeItem) => routeItem.id.toLowerCase() === menuItem.id.toLowerCase());
      if (route) {
        menuItem.path = route.path;
        menuItem.meta = route.meta;
        menuItem.hidden = route.hidden;// 強制隱藏菜單
        menuItem.vueRouterRedirect = route.redirect;
      }
    });

    commit('SET_MENUS', menus.filter((menu) => menu.path));
    commit('SET_ROUTE_INFO', routeInfo);
    // dispatch('setPageOpers', router.currentRoute.name);
  },
  // 設定 tab 樣式上的 badge數據
  setAppMainSubBadge({ commit, dispatch, state }, object) {
    if (Object.prototype.toString.call(object) === '[object Object]') {
      commit('SET_TABS_BADGE', object);
    }
  },
  logout({ commit, dispatch }) {
    dispatch('user/logout', false, { root: true });
    return false;
  },
  toUpdatePwd({ commit }) {
    return new Promise((resolve, reject) => {
      document.location.href = 'getssourl';
    });
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size);
  },
  // 我問號？？ 意義不明中
  setPageOpers({ commit }, name) {
    // let opers = getOperates(name);
    // if (opers) {
    //   commit("SET_PAGE_OPERS", opers);
    //   //更新界面
    //   setOperationVisible(opers);
    // }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
