import Vue from 'vue';
import i18n from '@/i18n';
import store from '@/store';

Vue.prototype.$confirmDelete = function confirmDelete(title = i18n.messages[store.getters['i18n/locale']].deleteDefaultConfirmMessage) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(title, i18n.messages[locale].deleteWarnTitle, {
    confirmButtonText: i18n.messages[locale].confirmDelete,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'warning',
    customClass: 'message-delete',
    center: true,
  });
};
Vue.prototype.$confirmLockon = function confirmLockon(title = i18n.messages[store.getters['i18n/locale']].lockConfirmMessage) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(title, i18n.messages[locale].deleteWarnTitle, {
    confirmButtonText: i18n.messages[locale].confirmLockon,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'warning',
    customClass: 'message-delete',
    center: true,
  });
};
Vue.prototype.$confirmUnLock = function confirmUnLock(title = i18n.messages[store.getters['i18n/locale']].unLockConfirmMessage) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(title, i18n.messages[locale].deleteWarnTitle, {
    confirmButtonText: i18n.messages[locale].confirmUnLock,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'warning',
    customClass: 'message-delete',
    center: true,
  });
};
Vue.prototype.$confirmActive = function confirmActive(title = i18n.messages[store.getters['i18n/locale']].activeConfirmMessage) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(title, i18n.messages[locale].deleteWarnTitle, {
    confirmButtonText: i18n.messages[locale].confirmActive,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'warning',
    customClass: 'message-delete',
    center: true,
  });
};
Vue.prototype.$confirmInactive = function confirmInactive(title = i18n.messages[store.getters['i18n/locale']].inactiveConfirmMessage) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(title, i18n.messages[locale].deleteWarnTitle, {
    confirmButtonText: i18n.messages[locale].confirmInactive,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'warning',
    customClass: 'message-delete',
    center: true,
  });
};
/**
 *
 * @param {string} title 標題
 * @param {string} message 內容
 * @param {string} confirmText 確認按鈕
 */
Vue.prototype.$confirmNote = function confirmNote(
  message = i18n.messages[store.getters['i18n/locale']].deleteDefaultConfirmMessage,
  title = i18n.messages[store.getters['i18n/locale']].deleteWarnTitle,
  confirmText = i18n.messages[store.getters['i18n/locale']].confirm,
) {
  const locale = store.getters['i18n/locale'];
  return Vue.prototype.$confirm(message, title, {
    confirmButtonText: confirmText,
    cancelButtonText: i18n.messages[locale].cancel,
    type: 'info',
    customClass: 'message-note',
    center: true,
  });
};

Vue.prototype.$showSuccessMessage = (message, callback) => {
  const locale = store.getters['i18n/locale'];
  if (!message || message === '') {
    message = i18n.messages[locale].success;
  }
  return new Promise(resolve => {
    if (callback) {
      Vue.prototype.$message({
        message,
        type: 'success',
        duration: 2000,
        onClose: () => {
          callback();
          resolve();
        },
      });
    } else {
      Vue.prototype.$message({
        message,
        type: 'success',
        duration: 2000,
      });
      resolve();
    }
  });
};
