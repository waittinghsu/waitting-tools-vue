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
