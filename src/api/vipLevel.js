/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 增加vip等級
 * @path /v1/player/vip/vip-level-setting/increase
 * 
 */
export const increaseVipLevelSetting = (params, options = {}) => {
  const interfaceData={
  "title": "增加vip等級",
  "method": "POST",
  "path": "/v1/player/vip/vip-level-setting/increase",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-level-setting/increase",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "vipGroupUUID": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 減少vip等級
 * @path /v1/player/vip/vip-level-setting/decrease
 * 
 */
export const decreaseVipLevelSetting = (params, options = {}) => {
  const interfaceData={
  "title": "減少vip等級",
  "method": "POST",
  "path": "/v1/player/vip/vip-level-setting/decrease",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-level-setting/decrease",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "vipGroupUUID": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip等級設定
 * @path /v1/player/vip/vip-level-setting/get
 * @param uuid uuid required
 * 
 */
export const getVipLevelSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip等級設定",
  "method": "GET",
  "path": "/v1/player/vip/vip-level-setting/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-level-setting/get",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6aad983fe327825785b679",
      "name": "uuid",
      "example": "d4dcffaf-1dbd-4822-a7c0-1593c007741c",
      "desc": "uuid"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新vip等級設定
 * @path /v1/player/vip/vip-level-setting/update
 * 
 */
export const updateVipLevelSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新vip等級設定",
  "method": "PUT",
  "path": "/v1/player/vip/vip-level-setting/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-level-setting/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "VIP 等級設定 UUID"
    },
    "levelName": {
      "type": "string",
      "description": "級別名稱"
    },
    "minDepositAmount": {
      "type": "number",
      "description": "最低存款金額"
    },
    "maxDepositAmount": {
      "type": "number",
      "description": "最高存款金額"
    },
    "minWithdrawalAmount": {
      "type": "number",
      "description": "最低取款金額"
    },
    "maxWithdrawalAmount": {
      "type": "number",
      "description": "最高取款金額"
    },
    "maxWithdrawalAmountUndeposited": {
      "type": "number",
      "description": "未存款玩家最高取款金額"
    },
    "maxDailyWithdrawalAmount": {
      "type": "number",
      "description": "單日最高取款金額"
    },
    "maxDailyWithdrawalTimes": {
      "type": "number",
      "description": "單日最高取款次數"
    },
    "isRealTimeCashback": {
      "type": "boolean",
      "description": "是否啟用即時洗碼"
    },
    "isLimitedSingleWithdrawal": {
      "type": "boolean",
      "description": "是否限制只能單次取款（取款未完成不得再次申請）"
    },
    "badgeImageUrl": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "description": "圖片 URL"
          }
        }
      },
      "description": "徽章網址"
    },
    "bonusMode": {
      "type": "number",
      "description": "獎金模式（ 1: 返水比例 / 2: 存款獎金 / 3: 混合）"
    },
    "cashbackPercentage": {
      "type": "number",
      "description": "預設返水比例"
    },
    "cashbackMaxBonusDaily": {
      "type": "number",
      "description": "每日最大返水值"
    },
    "cashbackMaxBonusDailyPerUser": {
      "type": "number",
      "description": "每人每日最大返水值"
    },
    "depositFirstMode": {
      "type": "number",
      "description": "首存獎金模式（ 1: 固定 / 2: 百分比）"
    },
    "depositFirstBouns": {
      "type": "number",
      "description": "首存獎金，依模式分為固定金額（ Fixed ）與百分比（ Percentage ）"
    },
    "depositFirstMaxBonus": {
      "type": "number",
      "description": "百分比模式才有，限制最高獎勵金額"
    },
    "depositMode": {
      "type": "number",
      "description": "存款獎金模式（ 1: 固定 / 2: 百分比）"
    },
    "depositBonus": {
      "type": "number",
      "description": "存款將金，依模式分為固定金額（ Fixed ）與百分比（ Percentage ）"
    },
    "depositMaxBonus": {
      "type": "number",
      "description": "百分比模式才有，限制最高獎勵金額"
    },
    "upgradeConditionUUID": {
      "type": "string",
      "description": "升級設定 UUID"
    },
    "upgradePeriodMode": {
      "type": "number",
      "description": "升級期間模式（ 1: 每月 / 2: 每週 / 3: 每日）"
    },
    "upgradePeriodMonth": {
      "type": "string",
      "description": "期間模式為每月時有效，值為幾號（ 1 ～ 31 ）"
    },
    "upgradePeriodWeek": {
      "type": "string",
      "description": "期間模式為每週時有效，值為星期幾（ 1 ～ 7 ）"
    },
    "upgradePeriodDay": {
      "type": "string",
      "description": "期間模式為每日時有效，值為 hh:mm:ssZONE"
    },
    "isCheckUpgradeHourly": {
      "type": "boolean",
      "description": "是否每小時檢查升級"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip等級列表
 * @path /v1/player/vip/vip-level-setting/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param vipGroupUUID vip群組uuid required
 * @param levelName 級別名稱 required
 * 
 */
export const getVipLevelSettingList = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip等級列表",
  "method": "GET",
  "path": "/v1/player/vip/vip-level-setting/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-level-setting/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f63086f3fe3275a6985b4ce",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f63086f3fe327430185b4cd",
      "name": "rows",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f63086f3fe327d24c85b4cc",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f63086f3fe327985e85b4cb",
      "name": "sortOrder",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f63086f3fe327258e85b4ca",
      "name": "vipGroupUUID",
      "example": "dc2e5c78-d944-4d67-b7e1-fc4faa1dfea6",
      "desc": "vip群組uuid"
    },
    {
      "required": "0",
      "_id": "5f63086f3fe3275e7585b4c9",
      "name": "levelName",
      "example": "test",
      "desc": "級別名稱"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  