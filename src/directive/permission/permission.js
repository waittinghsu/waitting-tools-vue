import { find } from 'lodash';
import router from '../../router';
import store from '../../store';

const getPermission = (key) => {
  const appMenus = store.getters?.menus || [];
  return find(appMenus, { key })?.permissions || [];
};

const checkPermission = (checkValue) => {
  const { currentRoute: { name: routerMenuKey } } = router;
  const permissions = getPermission(routerMenuKey);
  // console.log(permissions);
  return permissions.includes(checkValue);
};

export default {
  inserted(el, binding) {
    const { value } = binding;
    if (value && Object.prototype.toString.call(value) === '[object String]') {
      const hasPermission = checkPermission(value);
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('need roles! Like v-permission="\'delete\'"');
    }
  },
  check(checkValue = '') {
    return checkPermission(checkValue);
  },
  checkList(checkValue = []) {
    const validate = [];
    checkValue.forEach((string) => {
      checkPermission(string) && validate.push(string);
    });
    return validate;
  },
  getRouterPermission() {
    const { currentRoute: { name: routerMenuKey } } = router;
    return getPermission(routerMenuKey);
  },
};
