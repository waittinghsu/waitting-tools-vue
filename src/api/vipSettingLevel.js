/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得簡易vip升降設定列表
 * @path /v1/player/vip/vip-upgrade-condition/simplify-list
 * @param type 0:upgrade, 1:downgrade required
 * 
 */
export const getVipUpgradeConditionSimplifyList = (params, options = {}) => {
  const interfaceData={
  "title": "取得簡易vip升降設定列表",
  "method": "GET",
  "path": "/v1/player/vip/vip-upgrade-condition/simplify-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/simplify-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efec43bbca62a556871dfb7",
      "name": "type",
      "example": "0",
      "desc": "0:upgrade, 1:downgrade"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新vip升降設定狀態
 * @path /v1/player/vip/vip-upgrade-condition/update-status
 * 
 */
export const updateVipUpgradeConditionStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更新vip升降設定狀態",
  "method": "PATCH",
  "path": "/v1/player/vip/vip-upgrade-condition/update-status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/update-status",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string"
    },
    "status": {
      "type": "number",
      "description": "狀態 參考status-list"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 增加vip升降設定
 * @path /v1/player/vip/vip-upgrade-condition/add
 * 
 */
export const addVipUpgradeCondition = (params, options = {}) => {
  const interfaceData={
  "title": "增加vip升降設定",
  "method": "POST",
  "path": "/v1/player/vip/vip-upgrade-condition/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "type": {
      "type": "integer"
    },
    "isAccumulation": {
      "type": "boolean"
    },
    "formula": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option": {
            "type": "integer",
            "description": "0: \"Bet\", \t1: \"Deposit\", \t2: \"Loss\", \t3: \"Win\","
          },
          "operator": {
            "type": "integer",
            "description": "0: \">=\", \t1: \"<=\", \t2: \">\", \t3: \"<\","
          },
          "conjunction": {
            "type": "integer",
            "description": "0: \"AND\", \t1: \"OR\", (第一筆帶null)"
          },
          "amount": {
            "type": "number",
            "description": "金額"
          }
        },
        "required": [
          "option",
          "operator",
          "amount"
        ]
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新vip升降設定
 * @path /v1/player/vip/vip-upgrade-condition/update
 * 
 */
export const updateVipUpgradeCondition = (params, options = {}) => {
  const interfaceData={
  "title": "更新vip升降設定",
  "method": "PUT",
  "path": "/v1/player/vip/vip-upgrade-condition/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "description": "設定名稱"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "type": {
      "type": "integer",
      "description": "類型 (0:Upgrade, 1:Downgrade)"
    },
    "isAccumulation": {
      "type": "boolean",
      "description": "是否累积"
    },
    "formula": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "option": {
            "type": "integer",
            "description": "0: \"Bet\", \t1: \"Deposit\", \t2: \"Loss\", \t3: \"Win\","
          },
          "operator": {
            "type": "integer",
            "description": "0: \">=\", \t1: \"<=\", \t2: \">\", \t3: \"<\","
          },
          "conjunction": {
            "type": "integer",
            "description": "0: \"AND\", \t1: \"OR\", (第一筆帶null)"
          },
          "amount": {
            "type": "number",
            "description": "金額"
          }
        },
        "required": [
          "option",
          "operator",
          "amount"
        ]
      },
      "description": "公式"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip升降設定狀態
 * @path /v1/player/vip/vip-upgrade-condition/status-list
 * 
 */
export const getVipUpgradeConditionStatusList = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip升降設定狀態",
  "method": "GET",
  "path": "/v1/player/vip/vip-upgrade-condition/status-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/status-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip升降設定列表
 * @path /v1/player/vip/vip-upgrade-condition/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getVipUpgradeConditionList = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip升降設定列表",
  "method": "GET",
  "path": "/v1/player/vip/vip-upgrade-condition/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f02e170bca62a3b3071e195",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f02e170bca62a90cf71e194",
      "name": "rows",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f02e170bca62ab10f71e193",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f02e170bca62a746471e192",
      "name": "sortOrder",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除vip升降設定
 * @path /v1/player/vip/vip-upgrade-condition/delete
 * 
 */
export const deleteVipUpgradeCondition = (params, options = {}) => {
  const interfaceData={
  "title": "刪除vip升降設定",
  "method": "DELETE",
  "path": "/v1/player/vip/vip-upgrade-condition/delete",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-upgrade-condition/delete",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  