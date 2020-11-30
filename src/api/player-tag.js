/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 新增標籤
 * @path /v1/player/tag-management-list
 * 
 */
export const postPlayerTagManagementList = (params, options = {}) => {
  const interfaceData={
  "title": "新增標籤",
  "method": "POST",
  "path": "/v1/player/tag-management-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tag-management-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "color": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新標籤
 * @path /v1/player/tag-management-list/{uuid}
 * @param uuid 標籤uuid 
 * 
 */
export const putPlayerTagManagementList = (params, options = {}) => {
  const interfaceData={
  "title": "更新標籤",
  "method": "PUT",
  "path": "/v1/player/tag-management-list/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tag-management-list/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17c95cbca62a564571f166",
      "name": "uuid",
      "desc": "標籤uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "color": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除標籤
 * @path /v1/player/tag-management-list
 * 
 */
export const deletePlayerTagManagementList = (params, options = {}) => {
  const interfaceData={
  "title": "刪除標籤",
  "method": "DELETE",
  "path": "/v1/player/tag-management-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tag-management-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "tag_uuids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得單一標籤內容
 * @path /v1/player/tag-management-list/{uuid}
 * @param uuid tag uuid 
 * 
 */
export const getPlayerTagManagementList = (params, options = {}) => {
  const interfaceData={
  "title": "取得單一標籤內容",
  "method": "GET",
  "path": "/v1/player/tag-management-list/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tag-management-list/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17c949bca62a241371f163",
      "name": "uuid",
      "desc": "tag uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得標籤列表
 * @path /v1/player/tag-management-list
 * @param page  required
 * @param rows  required
 * @param query 搜尋關鍵字 required
 * 
 */
export const getTagManagements = (params, options = {}) => {
  const interfaceData={
  "title": "取得標籤列表",
  "method": "GET",
  "path": "/v1/player/tag-management-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tag-management-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17c971bca62a0c7771f16d",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17c971bca62a288471f16c",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f17c971bca62a790f71f16b",
      "name": "query",
      "example": "",
      "desc": "搜尋關鍵字"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  