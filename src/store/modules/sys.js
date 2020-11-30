import api from '@/api';
import { GET_GLOBAL_CONFIGURE, GET_PLAYER_VIP_LIST } from '@/api/Uri';

const state = {
  title: '後臺管理系統',
  config: Object,
  vip: [],
  isComma: false,
  tinymceKey: 'm7h4tk0c546wa3a1jvncs1f7lu6ii7elgxqdklnc6g6x9mna',
  notifications: {},
};
const actions = {
  title: ({ commit }, b) => {
    commit('title', b);
  },
  async CONFIGURE({ commit, state }) {
    if (state.config == Object) {
      const config = await api.get(GET_GLOBAL_CONFIGURE);
      commit('setConfig', config);
    }
  },
  async VIP_CONFIG({ commit, state }) {
    if (state.vip.length === 0) {
      await api
        .get(GET_PLAYER_VIP_LIST)
        .then(data => {
          commit('setVip', data.result);
        })
        .catch(error => {
          commit('MsgError', `VIP_CONFIG ERROR:${error.error}`);
        });
    }
  },
  isComma: ({ commit }, b) => {
    commit('isComma', b);
  },
};

const mutations = {
  setTitle(state, title) {
    state.title = title;
  },
  setConfig(state, b) {
    state.config = b;
  },
  setVip(state, b) {
    state.vip = b;
  },
  setIsComma(state, b) {
    localStorage.setItem('isComma', b);
    state.isComma = b;
  },
  setSystemNotifications(state, paylod) {
    state.notifications = paylod;
  },
};

const getters = {
  title(state) {
    return state.title;
  },
  config(state) {
    return state.config;
  },
  vip(state) {
    return state.config;
  },
  isComma(state) {
    if (localStorage.getItem('isComma') != null) {
      state.isComma = JSON.parse(localStorage.getItem('isComma'));
    } else {
      state.isComma = false;
    }
    return state.isComma;
  },
  tinymceKey(state) {
    return state.tinymceKey;
  },
  notifications(state) {
    return state.notifications;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
