/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title VIP组别列表
 * @path /v1/vip/settingsList
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getVipSettingsList = (params, options = {}) => {
  const interfaceData={
  "title": "VIP组别列表",
  "method": "GET",
  "path": "/v1/vip/settingsList",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/settingsList",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafe81680d172a8ae75ff7",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafe81680d176265e75ff6",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafe81680d177627e75ff5",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5efafe81680d177387e75ff4",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title  VIP 级别匯出execl
 * @path /v1/vip/groupExport/{id}
 * @param id  
 * 
 */
export const getVipGroupRulesExport = (params, options = {}) => {
  const interfaceData={
  "title": " VIP 级别匯出execl",
  "method": "GET",
  "path": "/v1/vip/groupExport/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/groupExport/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "5efafed6680d175afae7600a",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "string",
      "title": "升級/降級",
      "description": "add/delete"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 返水游戏列表目錄
 * @path /v1/vip/cashbackGameTreeList/
 * @param androidEnabled [1,0]1=是;0=否 required
 * @param downloadEnabled [1,0]1=是;0=否 required
 * @param flashEnabled [1,0]1=是;0=否 required
 * @param html5Enabled [1,0]1=是;0=否 required
 * @param iOSEnabled [1,0]1=是;0=否 required
 * @param mobileEnabled [1,0]1=是;0=否 required
 * @param progressive [1,0]1=是;0=否 required
 * 
 */
export const getCashbackGameTreeList = (params, options = {}) => {
  const interfaceData={
  "title": "返水游戏列表目錄",
  "method": "GET",
  "path": "/v1/vip/cashbackGameTreeList/",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/cashbackGameTreeList/",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5efafee0680d1736e5e76016",
      "name": "androidEnabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d176927e76015",
      "name": "downloadEnabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d17cf18e76014",
      "name": "flashEnabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d174925e76013",
      "name": "html5Enabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d17e342e76012",
      "name": "iOSEnabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d17a086e76011",
      "name": "mobileEnabled",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    },
    {
      "required": "0",
      "_id": "5efafee0680d170e4ce76010",
      "name": "progressive",
      "example": "",
      "desc": "[1,0]1=是;0=否"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 允许的返水游戏列表
 * @path /v1/vip/allowedCashbackGameList/{id}
 * @param id  
 * 
 */
export const getVipAllowedCashbackGameList = (params, options = {}) => {
  const interfaceData={
  "title": "允许的返水游戏列表",
  "method": "GET",
  "path": "/v1/vip/allowedCashbackGameList/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/allowedCashbackGameList/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "5efafee5680d170f3be76019",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title VIP级别列表
 * @path /v1/vip/groupRulesList
 * @param page  required
 * @param rows  required
 * @param id rule_id required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getVipGroupRulesList = (params, options = {}) => {
  const interfaceData={
  "title": "VIP级别列表",
  "method": "GET",
  "path": "/v1/vip/groupRulesList",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/groupRulesList",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafeab680d176dfce76007",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafeab680d176aa3e76006",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafeab680d17ce40e76005",
      "name": "id",
      "example": "",
      "desc": "rule_id"
    },
    {
      "required": "0",
      "_id": "5efafeab680d170926e76004",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafeab680d17d86de76003",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title  VIP 级别 升级/降級
 * @path /v1/vip/UpdateGroup/{id}
 * @param id  
 * 
 */
export const updateGroupLevel = (params, options = {}) => {
  const interfaceData={
  "title": " VIP 级别 升级/降級",
  "method": "PUT",
  "path": "/v1/vip/UpdateGroup/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/UpdateGroup/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "5efafedb680d174457e7600d",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "string",
      "title": "升級/降級",
      "description": "add/delete"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title  VIP組别execl匯出
 * @path /v1/vip/settingsExport
 * 
 */
export const getVipSettingsExport = (params, options = {}) => {
  const interfaceData={
  "title": " VIP組别execl匯出",
  "method": "GET",
  "path": "/v1/vip/settingsExport",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/settingsExport",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "string",
      "title": "升級/降級",
      "description": "add/delete"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  