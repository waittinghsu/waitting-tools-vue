/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得优惠类型设置列表
 * @path /v1/marking/promo-category-settings/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param keyword  required
 * @param status  required
 * 
 */
export const getPromoCategorySettingsList = (params, options = {}) => {
  const interfaceData={
  "title": "取得优惠类型设置列表",
  "method": "GET",
  "path": "/v1/marking/promo-category-settings/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marking/promo-category-settings/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f15284abca62a6daf71eec7",
      "name": "page",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f15284abca62a385d71eec6",
      "name": "rows",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f15284abca62aaa9d71eec5",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f15284abca62ab00f71eec4",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f15284abca62a195571eec3",
      "name": "keyword",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f15284abca62a07be71eec2",
      "name": "status",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次更新優惠類型
 * @path /v1/marketing/promo-category
 * 
 */
export const updatePromoCategoryStatus = (params, options = {}) => {
  const interfaceData={
  "title": "批次更新優惠類型",
  "method": "PUT",
  "path": "/v1/marketing/promo-category",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "uuid列表"
    },
    "status": {
      "type": "number",
      "description": "狀態(1:顯示/2:隱藏)",
      "enum": [
        1,
        2
      ]
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除優惠類型
 * @path /v1/marketing/promo-category/:uuid
 * @param uuid  
 * 
 */
export const deletePromoCategoryOne = (params, options = {}) => {
  const interfaceData={
  "title": "刪除優惠類型",
  "method": "DELETE",
  "path": "/v1/marketing/promo-category/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f23c156bca62ae51f71f973",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得優惠類型
 * @path /v1/marketing/promo-category/:uuid
 * @param uuid  
 * 
 */
export const getPromoCategory = (params, options = {}) => {
  const interfaceData={
  "title": "取得優惠類型",
  "method": "GET",
  "path": "/v1/marketing/promo-category/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f23bed7bca62a6e9a71f955",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 取得列表
 * @path /v1/marketing/promo-rule
 * @param page  required
 * @param rows  required
 * @param name 用戶名 (模糊查詢) required
 * @param promoRuleConditionType 活動規則條件類型 (1:存款條件;2:非存款條件) required
 * 
 */
export const getPromoRuleList = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 取得列表",
  "method": "GET",
  "path": "/v1/marketing/promo-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f92699e3fe3271fbb85bb28",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f92699e3fe327c3a285bb27",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f92699e3fe327cd3185bb26",
      "name": "name",
      "desc": "用戶名 (模糊查詢)"
    },
    {
      "required": "0",
      "_id": "5f92699e3fe327279a85bb25",
      "name": "promoRuleConditionType",
      "example": "",
      "desc": "活動規則條件類型 (1:存款條件;2:非存款條件)"
    }
  ],
  "req_body": {
    "rule": {
      "type": "object",
      "properties": {
        "promoRuleConditionType": {
          "type": "number",
          "description": "條件類型 (1:存款2:非存款)"
        },
        "languageCode": {
          "type": "string",
          "description": "語言代碼"
        },
        "promoCategoryUUID": {
          "type": "string",
          "description": "優惠類型 uuid"
        },
        "name": {
          "type": "string",
          "description": "名稱"
        },
        "isAlwaysDisplay": {
          "type": "boolean",
          "description": "是否無視時間展示"
        },
        "startTime": {
          "type": "string",
          "description": "起始時間"
        },
        "endTime": {
          "type": "string",
          "description": "結束時間"
        },
        "description": {
          "type": "string",
          "description": "描述"
        },
        "bonusReleaseType": {
          "type": "number",
          "description": "獎金發放 - 類型(1:固定 2:%數)"
        },
        "bonusReleaseAmount": {
          "type": "number",
          "description": "獎金發放 - 發放金額 (固定金額與％數共用同個欄位)"
        },
        "bonusReleaseAmountMaxLimit": {
          "type": "number",
          "description": "獎金發放 - 發放金額上限"
        },
        "bonusReleaseWalletType": {
          "type": "number",
          "description": "獎金發放 - 發放錢包類型 (1:主錢包)"
        },
        "withdrawConditionRequiredBetAmountType": {
          "type": "number",
          "description": "取款条件 - 存款要求 - 類型 (1:無存款要求;2:最低存款;3:生涯總存款;)"
        },
        "withdrawConditionRequiredBetAmountTimes": {
          "type": "number",
          "description": "生成取款条件 - 投注條件 - 金額倍數"
        },
        "withdrawConditionRequiredDepositAmountType": {
          "type": "number",
          "description": "取款条件 - 投注額要求 - 類型  (1:無投注要求;2:存款;3:獎金;4:存款+獎金)"
        },
        "withdrawConditionRequiredDepositAmount": {
          "type": "number",
          "description": "取款條件 - 投注額要求 - 金額"
        }
      },
      "description": "優惠規則",
      "required": []
    },
    "targetUserUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制玩家 uuid 清單"
    },
    "targetVipUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制 vip uuid 清單"
    },
    "depositCondition": {
      "type": "object",
      "properties": {
        "depositConditionType": {
          "type": "number",
          "description": "存款條件類型(金額) (1:額度限制;2:無額度限制)"
        },
        "depositConditionAccountMin": {
          "type": "number",
          "description": "存款條件 - 最低存款金額限制"
        },
        "depositConditionAccountMax": {
          "type": "number",
          "description": "存款條件 - 最高存款金額限制"
        },
        "bonusConditionDepositSuccessionType": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 類型 (次數) (1:首次存款;2: 第 n 次存款;3:除了首次存款以外，所有存款;4.每次存款)"
        },
        "bonusConditionDepositCount": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 第 n 次存款 (用於 deposit_count_condition_type，2:第 n 次存款)"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        },
        "bonusConditionLimitDateType": {
          "type": "number",
          "description": "獎金發放條件 - 限制時間區間 (1:無;2:每日;3:每月;4:每月;5:每年)"
        },
        "bonusConditionLimitCountType": {
          "type": "number",
          "description": "獎金發放條件 - 限定次數類型"
        },
        "bonusConditionLimitCount": {
          "type": "number"
        }
      },
      "description": "存款條件"
    },
    "noDepositCondition": {
      "type": "object",
      "properties": {
        "bonusConditionNoDepositConditionType": {
          "type": "number",
          "description": "非存款條件類型。flag。(1:郵件 [需驗證]; 2.註冊帳戶 [完成註冊資訊]; 4.綁定手機號 [需驗證]; 8:完成註冊資料 [ 完成帳戶資訊 ])"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        }
      },
      "description": "非存款條件",
      "required": []
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 取得
 * @path /v1/marketing/promo-rule/:uuid
 * @param uuid 活動規則 uuid 
 * 
 */
export const getPromoRule = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 取得",
  "method": "GET",
  "path": "/v1/marketing/promo-rule/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2a4246bca62a47d471fb32",
      "name": "uuid",
      "desc": "活動規則 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "rule": {
      "type": "object",
      "properties": {
        "promoRuleConditionType": {
          "type": "number",
          "description": "條件類型 (1:存款2:非存款)"
        },
        "languageCode": {
          "type": "string",
          "description": "語言代碼"
        },
        "promoCategoryUUID": {
          "type": "string",
          "description": "優惠類型 uuid"
        },
        "name": {
          "type": "string",
          "description": "名稱"
        },
        "isAlwaysDisplay": {
          "type": "boolean",
          "description": "是否無視時間展示"
        },
        "startTime": {
          "type": "string",
          "description": "起始時間"
        },
        "endTime": {
          "type": "string",
          "description": "結束時間"
        },
        "description": {
          "type": "string",
          "description": "描述"
        },
        "bonusReleaseType": {
          "type": "number",
          "description": "獎金發放 - 類型(1:固定 2:%數)"
        },
        "bonusReleaseAmount": {
          "type": "number",
          "description": "獎金發放 - 發放金額 (固定金額與％數共用同個欄位)"
        },
        "bonusReleaseAmountMaxLimit": {
          "type": "number",
          "description": "獎金發放 - 發放金額上限"
        },
        "bonusReleaseWalletType": {
          "type": "number",
          "description": "獎金發放 - 發放錢包類型 (1:主錢包)"
        },
        "withdrawConditionRequiredBetAmountType": {
          "type": "number",
          "description": "取款条件 - 存款要求 - 類型 (1:無存款要求;2:最低存款;3:生涯總存款;)"
        },
        "withdrawConditionRequiredBetAmountTimes": {
          "type": "number",
          "description": "生成取款条件 - 投注條件 - 金額倍數"
        },
        "withdrawConditionRequiredDepositAmountType": {
          "type": "number",
          "description": "取款条件 - 投注額要求 - 類型  (1:無投注要求;2:存款;3:獎金;4:存款+獎金)"
        },
        "withdrawConditionRequiredDepositAmount": {
          "type": "number",
          "description": "取款條件 - 投注額要求 - 金額"
        }
      },
      "description": "優惠規則",
      "required": []
    },
    "targetUserUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制玩家 uuid 清單"
    },
    "targetVipUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制 vip uuid 清單"
    },
    "depositCondition": {
      "type": "object",
      "properties": {
        "depositConditionType": {
          "type": "number",
          "description": "存款條件類型(金額) (1:額度限制;2:無額度限制)"
        },
        "depositConditionAccountMin": {
          "type": "number",
          "description": "存款條件 - 最低存款金額限制"
        },
        "depositConditionAccountMax": {
          "type": "number",
          "description": "存款條件 - 最高存款金額限制"
        },
        "bonusConditionDepositSuccessionType": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 類型 (次數) (1:首次存款;2: 第 n 次存款;3:除了首次存款以外，所有存款;4.每次存款)"
        },
        "bonusConditionDepositCount": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 第 n 次存款 (用於 deposit_count_condition_type，2:第 n 次存款)"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        },
        "bonusConditionLimitDateType": {
          "type": "number",
          "description": "獎金發放條件 - 限制時間區間 (1:無;2:每日;3:每月;4:每月;5:每年)"
        },
        "bonusConditionLimitCountType": {
          "type": "number",
          "description": "獎金發放條件 - 限定次數類型"
        },
        "bonusConditionLimitCount": {
          "type": "number"
        }
      },
      "description": "存款條件"
    },
    "noDepositCondition": {
      "type": "object",
      "properties": {
        "bonusConditionNoDepositConditionType": {
          "type": "number",
          "description": "非存款條件類型。flag。(1:郵件 [需驗證]; 2.註冊帳戶 [完成註冊資訊]; 4.綁定手機號 [需驗證]; 8:完成註冊資料 [ 完成帳戶資訊 ])"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        }
      },
      "description": "非存款條件",
      "required": []
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 新增
 * @path /v1/marketing/promo-rule
 * 
 */
export const addPromoRule = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 新增",
  "method": "POST",
  "path": "/v1/marketing/promo-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "rule": {
      "type": "object",
      "properties": {
        "promoRuleConditionType": {
          "type": "number",
          "description": "條件類型 (1:存款2:非存款)"
        },
        "languageCode": {
          "type": "string",
          "description": "語言代碼"
        },
        "promoCategoryUUID": {
          "type": "string",
          "description": "優惠類型 uuid"
        },
        "name": {
          "type": "string",
          "description": "名稱"
        },
        "isAlwaysDisplay": {
          "type": "boolean",
          "description": "是否無視時間展示"
        },
        "startTime": {
          "type": "string",
          "description": "起始時間"
        },
        "endTime": {
          "type": "string",
          "description": "結束時間"
        },
        "description": {
          "type": "string",
          "description": "描述"
        },
        "bonusReleaseType": {
          "type": "number",
          "description": "獎金發放 - 類型(1:固定 2:%數)"
        },
        "bonusReleaseAmount": {
          "type": "number",
          "description": "獎金發放 - 發放金額 (固定金額與％數共用同個欄位)"
        },
        "bonusReleaseAmountMaxLimit": {
          "type": "number",
          "description": "獎金發放 - 發放金額上限"
        },
        "bonusReleaseWalletType": {
          "type": "number",
          "description": "獎金發放 - 發放錢包類型 (1:主錢包)"
        },
        "withdrawConditionRequiredBetAmountType": {
          "type": "number",
          "description": "取款条件 - 存款要求 - 類型 (1:無存款要求;2:最低存款;3:生涯總存款;)"
        },
        "withdrawConditionRequiredBetAmountTimes": {
          "type": "number",
          "description": "生成取款条件 - 投注條件 - 金額倍數"
        },
        "withdrawConditionRequiredDepositTimesType": {
          "type": "number",
          "description": "取款条件 - 投注額要求 - 類型  (1:無投注要求;2:存款;3:獎金;4:存款+獎金)"
        },
        "withdrawConditionRequiredDeposittimes": {
          "type": "number",
          "description": "取款條件 - 投注額要求 - 金額倍數"
        }
      },
      "description": "優惠規則",
      "required": []
    },
    "targetUserUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制玩家 uuid 清單"
    },
    "targetVipUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制 vip uuid 清單"
    },
    "depositCondition": {
      "type": "object",
      "properties": {
        "depositConditionType": {
          "type": "number",
          "description": "存款條件類型(金額) (1:額度限制;2:無額度限制)"
        },
        "depositConditionAccountMin": {
          "type": "number",
          "description": "存款條件 - 最低存款金額限制"
        },
        "depositConditionAccountMax": {
          "type": "number",
          "description": "存款條件 - 最高存款金額限制"
        },
        "bonusConditionDepositSuccessionType": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 類型 (次數) (1:首次存款;2: 第 n 次存款;3:除了首次存款以外，所有存款;4.每次存款)"
        },
        "bonusConditionDepositCount": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 第 n 次存款 (用於 deposit_count_condition_type，2:第 n 次存款)"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        },
        "bonusConditionLimitDateType": {
          "type": "number",
          "description": "獎金發放條件 - 限制時間區間 (1:無;2:每日;3:每月;4:每月;5:每年)"
        },
        "bonusConditionLimitCountType": {
          "type": "number",
          "description": "獎金發放條件 - 限定次數類型"
        },
        "bonusConditionLimitCount": {
          "type": "number"
        }
      },
      "description": "存款條件"
    },
    "noDepositCondition": {
      "type": "object",
      "properties": {
        "bonusConditionNoDepositConditionType": {
          "type": "number",
          "description": "非存款條件類型。flag。(1:郵件 [需驗證]; 2.註冊帳戶 [完成註冊資訊]; 4.綁定手機號 [需驗證]; 8:完成註冊資料 [ 完成帳戶資訊 ])"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        }
      },
      "description": "非存款條件",
      "required": []
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得優惠活動管理列表
 * @path /v1/marketing/promo
 * @param page 現在第幾頁 required
 * @param rows 一頁幾筆 required
 * @param title 標題 required
 * @param categoryUUID 分類 UUID(promo_category) required
 * @param isNew 是否新的 (0、1) required
 * @param status 狀態(common_status) required
 * 
 */
export const getPromoManagerList = (params, options = {}) => {
  const interfaceData={
  "title": "取得優惠活動管理列表",
  "method": "GET",
  "path": "/v1/marketing/promo",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f8fc6953fe327003d85ba80",
      "name": "page",
      "example": "1",
      "desc": "現在第幾頁"
    },
    {
      "required": "0",
      "_id": "5f8fc6953fe3276dc185ba7f",
      "name": "rows",
      "example": "10",
      "desc": "一頁幾筆"
    },
    {
      "required": "0",
      "_id": "5f8fc6953fe32757dd85ba7e",
      "name": "title",
      "example": "title",
      "desc": "標題"
    },
    {
      "required": "0",
      "_id": "5f8fc6953fe327c97585ba7d",
      "name": "categoryUUID",
      "example": "25f2318b-13b4-40e0-a99b-dc6e9d4281d7",
      "desc": "分類 UUID(promo_category)"
    },
    {
      "required": "0",
      "_id": "5f8fc6953fe32726f785ba7c",
      "name": "isNew",
      "example": "1",
      "desc": "是否新的 (0、1)"
    },
    {
      "required": "0",
      "_id": "5f8fc6953fe327823b85ba7b",
      "name": "status",
      "example": "0",
      "desc": "狀態(common_status)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得優惠類型設置列表
 * @path /v1/marketing/promo-category
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending"  required
 * @param name 優惠類型 required
 * @param status 狀態(1:顯示/2:隱藏) required
 * 
 */
export const getPromoCategoryList = (params, options = {}) => {
  const interfaceData={
  "title": "取得優惠類型設置列表",
  "method": "GET",
  "path": "/v1/marketing/promo-category",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f23bec0bca62a2dbb71f950",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f23bec0bca62a07f571f94f",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f23bec0bca62a070671f94e",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f23bec0bca62ac25171f94d",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" "
    },
    {
      "required": "0",
      "_id": "5f23bec0bca62a4afd71f94c",
      "name": "name",
      "example": "123",
      "desc": "優惠類型"
    },
    {
      "required": "0",
      "_id": "5f23bec0bca62aa32771f94b",
      "name": "status",
      "example": "1",
      "desc": "狀態(1:顯示/2:隱藏)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新優惠類型
 * @path /v1/marketing/promo-category/:uuid
 * @param uuid  
 * 
 */
export const updatePromoCategory = (params, options = {}) => {
  const interfaceData={
  "title": "更新優惠類型",
  "method": "PUT",
  "path": "/v1/marketing/promo-category/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f23bf53bca62a55ff71f961",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "description": "優惠類型名稱"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "status": {
      "type": "number",
      "description": "狀態(1:顯示/2:隱藏)",
      "enum": [
        1,
        2
      ]
    },
    "sort": {
      "type": "number",
      "description": "排序"
    },
    "iconURL": {
      "type": "string",
      "description": "icon路徑"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增優惠類型
 * @path /v1/marketing/promo-category
 * @param page  required
 * @param rows  required
 * 
 */
export const addPromoCategory = (params, options = {}) => {
  const interfaceData={
  "title": "新增優惠類型",
  "method": "POST",
  "path": "/v1/marketing/promo-category",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f23bee6bca62ab17671f959",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f23bee6bca62a756b71f958",
      "name": "rows",
      "example": "10",
      "desc": ""
    }
  ],
  "req_body": {
    "name": {
      "type": "string",
      "description": "優惠類型名稱"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "status": {
      "type": "number",
      "description": "狀態(1:顯示/2:隱藏)"
    },
    "sort": {
      "type": "number",
      "description": "排序"
    },
    "iconURL": {
      "type": "string",
      "description": "icon路徑"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 更新狀態
 * @path /v1/marketing/promo-rule/:uuid/status
 * @param uuid 活動規則 uuid 
 * 
 */
export const updatePromoRuleStatus = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 更新狀態",
  "method": "PATCH",
  "path": "/v1/marketing/promo-rule/:uuid/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule/:uuid/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2b68afbca62a7b44720080",
      "name": "uuid",
      "desc": "活動規則 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "description": "狀態 (1:啟用;2:不啟用)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新優惠活動管理
 * @path /v1/marketing/promo/:uuid
 * @param uuid promo uuid 
 * 
 */
export const updatePromoManager = (params, options = {}) => {
  const interfaceData={
  "title": "更新優惠活動管理",
  "method": "PUT",
  "path": "/v1/marketing/promo/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f8e8a4e3fe327003e85ba65",
      "name": "uuid",
      "example": "5867770c-3733-49fa-92d3-9e61e354fb18",
      "desc": "promo uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "title": {
      "type": "string",
      "description": "標題"
    },
    "ruleUUID": {
      "type": "string",
      "description": "規則 UUID"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "detail": {
      "type": "string",
      "description": "細節"
    },
    "code": {
      "type": "string",
      "description": "代碼"
    },
    "isNew": {
      "type": "number",
      "description": "是否新的(0,1)"
    },
    "status": {
      "type": "number",
      "description": "狀態(1:啟用/2:停用)"
    },
    "promoThumbnailPC": {
      "type": "string",
      "description": "優惠縮圖路徑 PC"
    },
    "promoThumbnailMobile": {
      "type": "string",
      "description": "優惠縮圖路徑 Mobile"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 更新
 * @path /v1/marketing/promo-rule/:uuid
 * @param uuid 活動規則 uuid 
 * 
 */
export const putMarketingPromoRuleUuid = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 更新",
  "method": "PUT",
  "path": "/v1/marketing/promo-rule/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f27ade6bca62a4b0471fa46",
      "name": "uuid",
      "desc": "活動規則 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "rule": {
      "type": "object",
      "properties": {
        "promoRuleConditionType": {
          "type": "number",
          "description": "條件類型 (1:存款2:非存款)"
        },
        "languageCode": {
          "type": "string",
          "description": "語言代碼"
        },
        "promoCategoryUUID": {
          "type": "string",
          "description": "優惠類型 uuid"
        },
        "name": {
          "type": "string",
          "description": "名稱"
        },
        "isAlwaysDisplay": {
          "type": "boolean",
          "description": "是否無視時間展示"
        },
        "startTime": {
          "type": "string",
          "description": "起始時間"
        },
        "endTime": {
          "type": "string",
          "description": "結束時間"
        },
        "description": {
          "type": "string",
          "description": "描述"
        },
        "bonusReleaseType": {
          "type": "number",
          "description": "獎金發放 - 類型(1:固定 2:%數)"
        },
        "bonusReleaseAmount": {
          "type": "number",
          "description": "獎金發放 - 發放金額 (固定金額與％數共用同個欄位)"
        },
        "bonusReleaseAmountMaxLimit": {
          "type": "number",
          "description": "獎金發放 - 發放金額上限"
        },
        "bonusReleaseWalletType": {
          "type": "number",
          "description": "獎金發放 - 發放錢包類型 (1:主錢包)"
        },
        "withdrawConditionRequiredBetAmountType": {
          "type": "number",
          "description": "取款条件 - 存款要求 - 類型 (1:無存款要求;2:最低存款;3:生涯總存款;)"
        },
        "withdrawConditionRequiredBetAmountTimes": {
          "type": "number",
          "description": "生成取款条件 - 投注條件 - 金額倍數"
        },
        "withdrawConditionRequiredDepositAmountType": {
          "type": "number",
          "description": "取款条件 - 投注額要求 - 類型  (1:無投注要求;2:存款;3:獎金;4:存款+獎金)"
        },
        "withdrawConditionRequiredDepositAmount": {
          "type": "number",
          "description": "取款條件 - 投注額要求 - 金額"
        }
      },
      "description": "優惠規則",
      "required": []
    },
    "targetUserUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制玩家 uuid 清單"
    },
    "targetVipUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "限制 vip uuid 清單"
    },
    "depositCondition": {
      "type": "object",
      "properties": {
        "depositConditionType": {
          "type": "number",
          "description": "存款條件類型(金額) (1:額度限制;2:無額度限制)"
        },
        "depositConditionAccountMin": {
          "type": "number",
          "description": "存款條件 - 最低存款金額限制"
        },
        "depositConditionAccountMax": {
          "type": "number",
          "description": "存款條件 - 最高存款金額限制"
        },
        "bonusConditionDepositSuccessionType": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 類型 (次數) (1:首次存款;2: 第 n 次存款;3:除了首次存款以外，所有存款;4.每次存款)"
        },
        "bonusConditionDepositCount": {
          "type": "number",
          "description": "獎金發放條件 - 存款條件 - 第 n 次存款 (用於 deposit_count_condition_type，2:第 n 次存款)"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        },
        "bonusConditionLimitDateType": {
          "type": "number",
          "description": "獎金發放條件 - 限制時間區間 (1:無;2:每日;3:每月;4:每月;5:每年)"
        },
        "bonusConditionLimitCountType": {
          "type": "number",
          "description": "獎金發放條件 - 限定次數類型"
        },
        "bonusConditionLimitCount": {
          "type": "number"
        }
      },
      "description": "存款條件"
    },
    "noDepositCondition": {
      "type": "object",
      "properties": {
        "bonusConditionNoDepositConditionType": {
          "type": "number",
          "description": "非存款條件類型。flag。(1:郵件 [需驗證]; 2.註冊帳戶 [完成註冊資訊]; 4.綁定手機號 [需驗證]; 8:完成註冊資料 [ 完成帳戶資訊 ])"
        },
        "bonusConditionEffectiveStartTimeType": {
          "type": "number",
          "description": "獎金發放條件 - 有效起始時間類型 (1:user 註冊時間;2:優惠有效時間)"
        }
      },
      "description": "非存款條件",
      "required": []
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得優惠規則列表
 * @path /v1/marking/promo-rules/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param promoName  優惠名稱 required
 * @param promoCategory  遊戲類型 required
 * 
 */
export const getPromoRulesList = (params, options = {}) => {
  const interfaceData={
  "title": "取得優惠規則列表",
  "method": "GET",
  "path": "/v1/marking/promo-rules/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marking/promo-rules/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f225633bca62a25b071f807",
      "name": "page",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f225633bca62a896d71f806",
      "name": "rows",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f225633bca62a576571f805",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f225633bca62a935771f804",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f225633bca62ab87471f803",
      "name": "promoName ",
      "example": "",
      "desc": "優惠名稱"
    },
    {
      "required": "0",
      "_id": "5f225633bca62a263f71f802",
      "name": "promoCategory ",
      "example": "",
      "desc": "遊戲類型"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新優惠類型狀態
 * @path /v1/marketing/promo-category/:uuid/status
 * @param uuid  
 * 
 */
export const updatePromoCategoryStatusOne = (params, options = {}) => {
  const interfaceData={
  "title": "更新優惠類型狀態",
  "method": "PATCH",
  "path": "/v1/marketing/promo-category/:uuid/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category/:uuid/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f23c146bca62a480671f970",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "description": "狀態(1:顯示/2:隱藏)",
      "enum": [
        1,
        2
      ]
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除優惠類型
 * @path /v1/marketing/promo-category
 * 
 */
export const deletePromoCategory = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除優惠類型",
  "method": "DELETE",
  "path": "/v1/marketing/promo-category",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-category",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "uuid列表"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得優惠活動管理
 * @path /v1/marketing/promo/:uuid
 * @param uuid promo uuid 
 * 
 */
export const getMarketingPromoUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得優惠活動管理",
  "method": "GET",
  "path": "/v1/marketing/promo/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo/:uuid",
  "status": "undone",
  "req_params": [
    {
      "_id": "5f2294aabca62a69bd71f885",
      "name": "uuid",
      "example": "25f2318b-13b4-40e0-a99b-dc6e9d4281d7",
      "desc": "promo uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 優惠規則 - 刪除
 * @path /v1/marketing/promo-rule/:uuid
 * @param uuid 活動規則 uuid 
 * 
 */
export const deletePromoRule = (params, options = {}) => {
  const interfaceData={
  "title": "優惠規則 - 刪除",
  "method": "DELETE",
  "path": "/v1/marketing/promo-rule/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo-rule/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2b6c63bca62af2c5720088",
      "name": "uuid",
      "desc": "活動規則 uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除優惠活動管理
 * @path /v1/marketing/promo/:uuid
 * @param uuid promo uuid 
 * 
 */
export const deletePromoManager = (params, options = {}) => {
  const interfaceData={
  "title": "刪除優惠活動管理",
  "method": "DELETE",
  "path": "/v1/marketing/promo/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f8e8a7c3fe327017185ba68",
      "name": "uuid",
      "example": "5867770c-3733-49fa-92d3-9e61e354fb18",
      "desc": "promo uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增優惠活動管理
 * @path /v1/marketing/promo
 * 
 */
export const addPromoManager = (params, options = {}) => {
  const interfaceData={
  "title": "新增優惠活動管理",
  "method": "POST",
  "path": "/v1/marketing/promo",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/marketing/promo",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "title": {
      "type": "string",
      "description": "標題"
    },
    "ruleUUID": {
      "type": "string",
      "description": "規則 UUID"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "detail": {
      "type": "string",
      "description": "詳情"
    },
    "code": {
      "type": "string",
      "description": "活動編碼"
    },
    "isNew": {
      "type": "number",
      "description": "是否新的 (0,1)"
    },
    "promoThumbnailPC": {
      "type": "string",
      "description": "活動縮圖連結 PC"
    },
    "promoThumbnailMobile": {
      "type": "string",
      "description": "活動縮圖連結 Mobile"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  