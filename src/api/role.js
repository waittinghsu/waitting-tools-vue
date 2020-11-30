/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 角色 - 新增
 * @path /v1/system/role/add
 * 
 */
export const addRole = (params, options = {}) => {
  const interfaceData={
  "title": "角色 - 新增",
  "method": "POST",
  "path": "/v1/system/role/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "description": "角色名"
    },
    "permissionIdList": {
      "type": "array",
      "items": {
        "type": "number"
      },
      "description": "權限id清單"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 角色列表 - 取得
 * @path /v1/system/role/list
 * @param page  required
 * @param rows  required
 * @param sortColumn 參考列表欄位名稱 required
 * @param sortOrder  required
 * 
 */
export const getRoleList = (params, options = {}) => {
  const interfaceData={
  "title": "角色列表 - 取得",
  "method": "GET",
  "path": "/v1/system/role/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2372c0bca62a52f571f8b1",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2372c0bca62af0c771f8b0",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f2372c0bca62a1c7c71f8af",
      "name": "sortColumn",
      "example": "name",
      "desc": "參考列表欄位名稱"
    },
    {
      "required": "0",
      "_id": "5f2372c0bca62aaa1571f8ae",
      "name": "sortOrder",
      "example": "ascending",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 角色狀態清單 - 取得
 * @path /v1/system/role/status-list
 * 
 */
export const getRoleStatusLits = (params, options = {}) => {
  const interfaceData={
  "title": "角色狀態清單 - 取得",
  "method": "GET",
  "path": "/v1/system/role/status-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/status-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 角色及權限 - 更新
 * @path /v1/system/role/update
 * 
 */
export const updateRoleAndAuth = (params, options = {}) => {
  const interfaceData={
  "title": "角色及權限 - 更新",
  "method": "PATCH",
  "path": "/v1/system/role/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "roleUUID": {
      "type": "string",
      "description": "角色uuid"
    },
    "name": {
      "type": "string",
      "description": "角色名"
    },
    "permissionIdList": {
      "type": "array",
      "items": {
        "type": "number"
      },
      "description": "權限id清單"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除角色 - 刪除
 * @path /v1/system/role/batch-delete
 * 
 */
export const batchDeleteRole = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除角色 - 刪除",
  "method": "DELETE",
  "path": "/v1/system/role/batch-delete",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/batch-delete",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "roleUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "角色uuid清單"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得新增角色資料
 * @path /v1/system/role/new
 * 
 */
export const getSystemRoleNew = (params, options = {}) => {
  const interfaceData={
  "title": "取得新增角色資料",
  "method": "GET",
  "path": "/v1/system/role/new",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/new",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次變更角色狀態 - 更新
 * @path /v1/system/role/batch-update
 * 
 */
export const batchUpdateStatus = (params, options = {}) => {
  const interfaceData={
  "title": "批次變更角色狀態 - 更新",
  "method": "PATCH",
  "path": "/v1/system/role/batch-update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/batch-update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "roleUUIDList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "角色uuid清單"
    },
    "status": {
      "type": "number",
      "description": "角色狀態"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 角色資料 - 取得
 * @path /v1/system/role/get
 * @param roleUUID  required
 * 
 */
export const getRoleData = (params, options = {}) => {
  const interfaceData={
  "title": "角色資料 - 取得",
  "method": "GET",
  "path": "/v1/system/role/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/role/get",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2372d7bca62a167e71f8b5",
      "name": "roleUUID",
      "example": "495afc4a-b776-41d2-a86b-e313d8659f80",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  