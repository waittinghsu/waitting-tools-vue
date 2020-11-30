/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得單筆vip群組
 * @path /v1/player/vip/vip-group/get
 * @param uuid  required
 * 
 */
export const getVipGroup = (params, options = {}) => {
  const interfaceData={
  "title": "取得單筆vip群組",
  "method": "GET",
  "path": "/v1/player/vip/vip-group/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/get",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0fb7babca62ae38571eb97",
      "name": "uuid",
      "example": "f0729c46-4166-485c-958a-abcb09dd0ce2",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip群組狀態
 * @path /v1/player/vip/vip-group/status-list
 * 
 */
export const getVipGroupStatusList = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip群組狀態",
  "method": "GET",
  "path": "/v1/player/vip/vip-group/status-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/status-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 激活vip群組
 * @path /v1/player/vip/vip-group/update-status
 * 
 */
export const updateVipGroupStatus = (params, options = {}) => {
  const interfaceData={
  "title": "激活vip群組",
  "method": "PATCH",
  "path": "/v1/player/vip/vip-group/update-status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/update-status",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    },
    "status": {
      "type": "number",
      "description": "狀態(參照status-list)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增vip群組
 * @path /v1/player/vip/vip-group/add
 * 
 */
export const addVipGroup = (params, options = {}) => {
  const interfaceData={
  "title": "新增vip群組",
  "method": "POST",
  "path": "/v1/player/vip/vip-group/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "groupName": {
      "type": "string",
      "description": "群組名稱"
    },
    "groupLevelCount": {
      "type": "number",
      "description": "群組等級數"
    },
    "description": {
      "type": "string",
      "description": "描述"
    },
    "canUserJoin": {
      "type": "boolean",
      "description": "是否玩家可以加入"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得vip群組列表
 * @path /v1/player/vip/vip-group/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param keyword 關鍵字會用來查詢組名稱與描述 required
 * 
 */
export const getVipGroupList = (params, options = {}) => {
  const interfaceData={
  "title": "取得vip群組列表",
  "method": "GET",
  "path": "/v1/player/vip/vip-group/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6311923fe327d7f585b4d8",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6311923fe32782d985b4d7",
      "name": "rows",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6311923fe327232885b4d6",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6311923fe327c6d285b4d5",
      "name": "sortOrder",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6311923fe32702b585b4d4",
      "name": "keyword",
      "example": "",
      "desc": "關鍵字會用來查詢組名稱與描述"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新vip群組
 * @path /v1/player/vip/vip-group/update
 * 
 */
export const updateVipGroup = (params, options = {}) => {
  const interfaceData={
  "title": "更新vip群組",
  "method": "PATCH",
  "path": "/v1/player/vip/vip-group/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/vip/vip-group/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string"
    },
    "groupName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "canUserJoin": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  