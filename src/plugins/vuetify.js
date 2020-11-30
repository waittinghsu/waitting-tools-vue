import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import store from '@/store';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

import zhHans from 'vuetify/es5/locale/zh-Hans';
import en from 'vuetify/es5/locale/en';

// Your own translation file
const current = store.getters['i18n/locale'];
const opts = {
  lang: {
    locales: { 'zh-CN': zhHans, en },
    current,
  },
  theme: {
    themes: {
      light: {
        primary: '#37A8DE',
        // secondary: '#b0bec5',
        // accent: '#8c9eff',
        // error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
};

export default new Vuetify(opts);
