import Vue from 'vue';

import { dateFormat, dateTimeFormat } from '@/utils/date';
import { thousandsSeparator, decimalMark, moneyFormat } from '@/utils';

Vue.filter('dateFormat', dateFormat);
Vue.filter('dateTimeFormat', dateTimeFormat);
Vue.filter('thousandsSeparator', thousandsSeparator);
Vue.filter('decimalMark', decimalMark);
Vue.filter('moneyFormat', moneyFormat);
