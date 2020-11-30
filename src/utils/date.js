import {
  format,
  formatRFC3339,
  startOfToday,
  endOfToday,
  startOfYesterday,
  endOfYesterday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subMonths,
  subWeeks,
} from 'date-fns';

/**
 * 轉換時間與日期格式
 */
export const dateTimeFormat = (date, p_format = 'yyyy-MM-dd HH:mm:ss') => {
  return format(new Date(date), p_format);
};

/**
 * 轉換日期格式
 */
export const dateFormat = (date, p_format = 'yyyy-MM-dd') => {
  if (!date) {
    return date;
  }
  return format(new Date(date), p_format);
};

/**
 * 轉換為時間戳記格式
 */
export const formatToTimestamp = date => parseInt(format(new Date(date), 't'));

/**
 * 獲取今日的時間戳記
 */
export const getTodayTimestamp = () => formatToTimestamp(Date.now());

/**
 * 轉換為RFC3339格式
 */
export const formatToRFC3339 = date => formatRFC3339(new Date(date));

/**
 * 獲取今日時間RFC3339格式
 */
export const getTodayRFC3339 = () => formatRFC3339(Date.now());

/**
 * 預設今天為初始值
 */
export const getInitialTimeRange = () => {
  const start = getStartOfToday();
  const end = getEndOfToday();
  return [start, end];
};

/**
 * 獲取今日開始時間RFC3339格式
 */
export const getStartOfToday = () => {
  return formatToRFC3339(startOfToday());
};

/**
 * 獲取今日結束時間RFC3339格式
 */
export const getEndOfToday = () => {
  return formatToRFC3339(endOfToday());
};

/**
 * 獲取昨日開始時間RFC3339格式
 */
export const getStartOfYesterday = () => {
  return formatToRFC3339(startOfYesterday());
};

/**
 * 獲取昨日結束時間RFC3339格式
 */
export const getEndOfYesterday = () => {
  return formatToRFC3339(endOfYesterday());
};

/**
 * 獲取本週開始時間RFC3339格式
 */
export const getStartOfThisWeek = () => {
  const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  return formatToRFC3339(startOfThisWeek);
};

/**
 * 獲取本週結束時間RFC3339格式
 */
export const getEndOfThisWeek = () => {
  const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
  return formatToRFC3339(endOfThisWeek);
};

/**
 * 獲取上週開始時間RFC3339格式
 */
export const getStartOfLastWeek = () => {
  const lastWeekOfToday = subWeeks(new Date(), 1);
  const startOfLastWeek = startOfWeek(lastWeekOfToday, { weekStartsOn: 1 });
  return formatToRFC3339(startOfLastWeek);
};

/**
 * 獲取上週結束時間RFC3339格式
 */
export const getEndOfLastWeek = () => {
  const lastWeekOfToday = subWeeks(new Date(), 1);
  const endOfLastWeek = endOfWeek(lastWeekOfToday, { weekStartsOn: 1 });
  return formatToRFC3339(endOfLastWeek);
};

/**
 * 獲取本月開始時間RFC3339格式
 */
export const getStartOfThisMonth = () => {
  const startOfThisMonth = startOfMonth(new Date());
  return formatToRFC3339(startOfThisMonth);
};

/**
 * 獲取本月結束時間RFC3339格式
 */
export const getEndOfThisMonth = () => {
  const endOfThisMonth = endOfMonth(new Date());
  return formatToRFC3339(endOfThisMonth);
};

/**
 * 獲取上個月開始時間RFC3339格式
 */
export const getStartOfLastMonth = () => {
  const lastMonthOfToday = subMonths(new Date(), 1);
  const startOfLastMonth = startOfMonth(lastMonthOfToday);
  return formatToRFC3339(startOfLastMonth);
};

/**
 * 獲取上個月結束時間RFC3339格式
 */
export const getEndOfLastMonth = () => {
  const lastMonthOfToday = subMonths(new Date(), 1);
  const endOfLastMonth = endOfMonth(lastMonthOfToday);
  return formatToRFC3339(endOfLastMonth);
};
