import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store';
import ElementLocale from 'element-ui/lib/locale';

/** 自定義語系包 */
import en from './lang/en';
import zhCN from './lang/zh-CN';

/** element-ui 語系包 */
import en_ui from 'element-ui/lib/locale/lang/en';
import zhCN_ui from 'element-ui/lib/locale/lang/zh-CN';

import en_country from './country/en';
import zhCN_country from './country/zh-CN';

import en_dial from './dial/en';
import zhCN_dial from './dial/zh-CN';

generateCountry(en_country);
generateCountry(zhCN_country);

generateDial(en_dial, en_country);
generateDial(zhCN_dial, zhCN_country);

Vue.use(VueI18n);

const locale = store.getters['i18n/locale'];
const i18n = new VueI18n({
  locale,
  fallbackLocale: 'zh-CN',
  messages: {
    en: Object.assign({}, en, en_ui, en_country, en_dial),
    'zh-CN': Object.assign({}, zhCN, zhCN_ui, zhCN_country, zhCN_dial),
  },
});

ElementLocale.i18n((key, value) => i18n.t(key, value));

function generateCountry(countryList) {
  countryList.globalCountry = {};
  countryList.globalCountryList.forEach(c => {
    countryList.globalCountry[c.alpha2] = c;
  });
  delete countryList.globalCountryList;
}

function generateDial(dialList, countryCollection) {
  dialList.globalDial = {};
  dialList.globalDialList.forEach(c => {
    dialList.globalDial[c.countryCode] = c;
    const countryData = countryCollection.globalCountry[c.countryCode.toLowerCase()];
    dialList.globalDial[c.countryCode].countryName = countryData ? countryData.name : '?????';
  });
  delete dialList.globalDialList;
}

export default i18n;
