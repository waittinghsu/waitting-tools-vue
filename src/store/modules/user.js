import api from '@/api';

const state = {
  user: { name: '游客' },
  modalBox: '',
  token: null,
  snackbar: { show: false, color: '', text: '' },
  dialog: { show: false, text: '', okFn: false, cancelFn: false },
  mp3Withdraw: false,
  mp3Deposit: false,
  mp3WithdrawOnOff: false,
  mp3DepositOnOff: false,
  playerId: 0,
  financialTick: 0,
  timestamp: 0,
  affiliateId: 0,
};

const actions = {
  CheckUserLogin: ({ dispatch, commit }) => {
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    const token = window.sessionStorage.getItem('token');
    clearInterval(state.financialTick);
    if (user != null && token != null) {
      user.token = token;
      commit('onUserLogin', user);
      state.timestamp = Date.parse(new Date());
      dispatch('CheckFinancialTick', state.timestamp / 1000);
      // console.log('CheckFinancialTick');
    }
  },
  ShowGlobal({ commit }, b) {
    commit('modalBox', b);
  },
  CheckFinancial({ dispatch, commit }, b) {
    api
      .get('/finance/check', { b })
      .then(rs => {
        state.timestamp = rs.result.b;
        if (rs.result) {
          if (rs.result.n > 0) {
            commit('Mp3Withdraw', true);
          }
          if (rs.result.d > 0) {
            commit('Mp3Deposit', true);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  CheckFinancialTick({ dispatch, commit }, b) {
    state.timestamp = b;
    clearInterval(state.financialTick);
    state.financialTick = setInterval(() => {
      commit('Mp3Withdraw', false);
      commit('Mp3Deposit', false);
      dispatch('CheckFinancial', state.timestamp);
    }, 10000);
  },
};
const mutations = {
  LOGOUT(state) {
    state.token = '';
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    }
  },
  onUserLogin(state, user) {
    const token = user.token;
    state.token = token;
    sessionStorage.setItem('token', token);
    state.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  },
  ShowGlobal(state, b) {
    state.modalBox = b;
  },
  MsgOk(state, b) {
    state.snackbar = { show: true, color: 'success', text: b };
  },
  MsgError(state, b) {
    state.snackbar = { show: true, color: 'error', text: b };
  },
  Confirm(state, confirm) {
    state.dialog = { show: true, text: confirm.text, okTxt: confirm.okTxt, okFn: confirm.ok, cancelFn: confirm.cancel };
  },
  Mp3Withdraw(state, b) {
    state.mp3Withdraw = b;
  },
  Mp3Deposit(state, b) {
    state.mp3Deposit = b;
  },
  setMp3WithdrawOnOff(state, b) {
    localStorage.setItem('mp3WithdrawOnOff', b);
    state.mp3WithdrawOnOff = b;
  },
  setMp3DepositOnOff(state, b) {
    localStorage.setItem('mp3DepositOnOff', b);
    state.mp3DepositOnOff = b;
  },
  PLAYER(state, b) {
    state.playerId = b;
  },
  AFFILIATE(state, b) {
    state.affiliateId = b;
  },
};

const getters = {
  user(state) {
    return state.user;
  },
  token(state) {
    return state.token;
  },
  modalBox(state) {
    return state.modalBox;
  },
  snackbar(state) {
    return state.snackbar;
  },
  dialog(state) {
    return state.dialog;
  },
  mp3Withdraw(state) {
    return state.mp3Withdraw;
  },
  mp3Deposit(state) {
    return state.mp3Deposit;
  },
  mp3WithdrawOnOff(state) {
    if (localStorage.getItem('mp3WithdrawOnOff') != null) {
      state.mp3WithdrawOnOff = JSON.parse(localStorage.getItem('mp3WithdrawOnOff'));
    } else {
      state.mp3WithdrawOnOff = false;
    }
    return state.mp3WithdrawOnOff;
  },
  mp3DepositOnOff(state) {
    if (localStorage.getItem('mp3DepositOnOff') != null) {
      state.mp3DepositOnOff = JSON.parse(localStorage.getItem('mp3DepositOnOff'));
    } else {
      state.mp3DepositOnOff = false;
    }
    return state.mp3DepositOnOff;
  },
  playerId(state) {
    return state.playerId;
  },
  affiliateId(state) {
    return state.affiliateId;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
