require('es6-promise').polyfill();
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import sys from './modules/sys';
import i18n from './modules/i18n';
Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    user,
    sys,
    i18n,
  },
  // strict: debug
});
