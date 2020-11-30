import app from '@/main';

const i18nCookieKey = 'i18n_cookie_key';

const state = {
  locale: localStorage.getItem(i18nCookieKey) ? localStorage.getItem(i18nCookieKey) : 'zh-CN',
  langItem: [
    {
      key: 'zh-CN',
      value: '简体中文',
    },
    {
      key: 'en',
      value: 'English',
    },
  ],
};

const mutations = {
  SET_LOCALE(state, payload) {
    state.locale = payload;
    app.$i18n.locale = payload;
    localStorage.setItem(i18nCookieKey, payload);
    // moment.locale(payload);
  },
};

const getters = {
  locale: state => state.locale,
  langItem: state => state.langItem,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
