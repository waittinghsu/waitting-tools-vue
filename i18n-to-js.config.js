const path = require('path');

module.exports = {
  excelProjectToken: '1UlKofs9Tn02u84MQW_gpHsG0eSQl9Is2xct5RCOmUOI',
  useApiKey: 'AIzaSyCIEIcu681TDPkDaJOlaqEAsZ-yVFlRCG4',
  sheet: ['BMS', 'BMS_G'],
  distFile: path.resolve(process.cwd(), 'lang.js'), // 檔案輸出至單一檔案 (moduleMode為true時會自動省略)
  distFolder: 'src/i18n/lang', // 檔案輸出資料夾
};
