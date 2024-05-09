/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (`${time}`.length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    `{"${decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ')}"}`,
  );
}

/**
 * 深層拷貝
 * @param {Object|Array} value
 * @returns {Object|Array}
 */
export const deepCopy = value => {
  return JSON.parse(JSON.stringify(value));
};

/**
 * 將數字加上千分位符號
 * @param {Number} 需要Format的值
 * @returns {String}
 */
export const thousandsSeparator = number => {
  const result = parseFloat(number).toLocaleString();
  return isNaN(parseFloat(result)) ? number : result;
};

/**
 * 將數字取到小數2位
 * @param {Number} 需要Format的值
 * @returns {Number}
 */
export const decimalMark = number => {
  const result = Math.round(number * 100) / 100;
  return isNaN(result) ? number : result;
};

/**
 * 將金額數字加上千分位符號並取到小數2位
 * @param {Number} 需要Format的值
 * @returns {String}
 */
export const moneyFormat = number => {
  const result = thousandsSeparator(decimalMark(number));
  return isNaN(parseFloat(result)) ? number : result;
};

/**
 * 根據背景色取得對應字體顏色
 * @param {String} hexcolor
 * @returns {String}
 */
export const getForegroundColor = hexcolor => {
  const checkHexFormat = /#[0-9A-Fa-f]{6}/g;
  if (!hexcolor || !checkHexFormat.test(hexcolor)) {
    return '';
  }
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

/**
 * 隨機生成亂數密碼
 * 依據傳入的參數，決定要生成多少長度
 */
export function getRandomPassword(val) {
  const randomText = 'ABCDEFGHIJKLMNOPQRSTUVWSXYZabcdefghijklmnopqrstuvwsxyz0123456789';
  const textLength = randomText.length;
  let randomPassword = '';
  for (let i = 0; i < val; i++) {
    randomPassword += randomText.charAt(Math.floor(Math.random() * textLength));
  }
  return randomPassword;
}

export function pureDebounce(fn, delay = 1000) {
  let timer = null;
  function closure(...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
  return closure;
}


// 域名規則檢測
export function checkDomain(str) {
  const reg = new RegExp('^((?!-)[A-Za-z0-9-\u4e00-\u9fa5]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}');
  return !!str.match(reg);
}

/**
 *  創建密碼亂數
 * @param length 密碼長度
 * @param chart 可產生的字符
 * @returns {string}
 */
const CHART_STRING = 'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
export function makeRandomString(length = 16, chart = CHART_STRING) {
  let res = '';
  for (let count = 0, n = chart.length; count < length; ++count) {
    res += chart.charAt(Math.floor(Math.random() * n));
  }
  return res;
}
/**
 * 遞迴重新產生 menus 結構
 * @param {string} menus 菜單陣列
 * @param {string} id 父節點代號
 * @param {number} level 層級
 * @returns {Array}
 */
export function formatMenus(menus, id, level = 0) {
  const output = [];
  if (menus && menus.length > 0) {
    level += 1;
    menus.forEach((menuInfo) => {
      const key = menuInfo?.key || menuInfo?.key1 || 'menu-error';
      const nowId = `${id}-${key}`;
      // sso全權限的回傳key為 children :::::: 域名系統權限的回傳key為button_children
      const originChildren = menuInfo?.children || menuInfo?.button_children;
      const permission = originChildren?.map((item) => (item?.key || item?.key1)) || [];
      // 遞迴處理 子層菜單
      const children = formatMenus(originChildren, nowId, level);
      // child菜單的權限key （字串分割 pid 根據level 層級組合成 （父－本層） ex: root-mainPage-page-bulletin-button => bulletin-button
      const childPermission = children.map((o) => `${o.pid}-${o.key}`?.split('-')?.splice(level + 1)?.join('-'));
      // console.log(id, level, menuInfo.name, Array.from(new Set([...permission, ...childPermission])));
      // console.log(nowId, key, menuInfo.name, `le:${children.length}`, children);
      /**
       * 判斷是否為按鈕
       * １．檢查 key 是否有 action operational
       * ２．檢查 key 在字首
       * @param {Object} child
       * @param {Object} child.key 唯一值 有些系統 為key1
       * @return {boolean}
       */
      function isButton(child) {
        // console.log(child.name, child.type, child);
        const childKey = child?.key || child?.key1 || 'menu-error';
        const buttonKey = ['action', 'operational'];
        let flag = false;
        buttonKey.forEach((key) => {
          childKey.indexOf(key) === 0 && (flag = true);
        });
        return flag;
      }

      output.push(
        {
          key,
          name: menuInfo.name,
          sort: menuInfo?.sort || 0,
          id: nowId, // 结点ID
          pid: id, // 父结点ID
          level, // 层次
          vueRouterRedirect: false, // 判斷路由是否有轉址
          permissions: Array.from(new Set([...permission, ...childPermission])), // 包含的所有子層次的權限
          childrenLength: originChildren?.length || 0, // 孩子的數量
          childrenPageLength: originChildren?.filter((child) => !isButton(child))?.length || 0, // 子頁面的數量
        },
        ...children,
      );
    });
  }
  return output;
}

/**
 * 遞迴重新產生 route 結構
 * @param {string} routes 路由列表
 * @param {string} id 父節點代號
 * @param {string} parentPath 路由url
 * @returns {Array}
 */
export function formatRoute(routes, id, parentPath) {
  const output = [];
  if (routes && routes.length > 0) {
    routes.forEach((route) => {
      const nId = `${id}-${route.name}`;
      // 父路'尾巴'與子路徑'頭'有無斜線 做路徑串接
      const slash = route.path.startsWith('/') || parentPath.endsWith('/') ? '' : '/';
      const path = `${parentPath}${slash}${route.path}`;
      output.push(
        {
          path,
          id: nId,
          meta: route.meta,
          name: route.name,
          hidden: route.hidden,
          authory: route.authory,
          redirect: !!route?.redirect,
        },
        ...formatRoute(route.children, nId, path),
      );
    });
  }
  return output;
}

/**
 * 遞迴建立菜單２元樹
 * @param {array} topParentList 菜單列表 樹的頂端
 * @param {array} menuList 菜單列表 （水平資料）
 * @param {string} parentKey 父節點代號
 * @param {string} mainId 父節點代號
 * @returns {Array}
 */
export function buildBinaryTree(topParentList = [], menuList = [], parentKey = 'parent_id', mainId = 'id') {
  const temp = [];
  topParentList.forEach((menu) => {
    const getChildren = menuList.filter((item) => item[parentKey] === menu[mainId]);
    temp.push({ ...menu, children: [...buildBinaryTree(getChildren, menuList, parentKey, mainId)] });
  });
  return temp;
}

/**
 * 攤平２元樹
 * 將children 內的物件攤分出來
 * @param menus 菜單
 * @returns {*[]}
 */
export function flattenBinaryTree(menus) {
  const res = [];
  menus.forEach((item) => {
    if (item?.children?.length > 0) {
      res.push({ ...item }, ...flattenBinaryTree(item.children));
    } else {
      res.push({ ...item });
    }
  });
  return res;
}


