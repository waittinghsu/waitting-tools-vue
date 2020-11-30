/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 批量创建玩家詳情列表
 * @path /v1/player/batch-create-detail/:uuid
 * @param uuid 批量创建玩家 uuid 
 * @param page  required
 * @param rows  required
 * @param id  required
 * 
 */
export const getBatchCreateDetail = (params, options = {}) => {
  const interfaceData={
  "title": "批量创建玩家詳情列表",
  "method": "GET",
  "path": "/v1/player/batch-create-detail/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/batch-create-detail/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17b5b2bca62a7a1c71f15d",
      "name": "uuid",
      "desc": "批量创建玩家 uuid"
    }
  ],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17b5b2bca62af47171f160",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17b5b2bca62a1a2371f15f",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17b5b2bca62a8e0e71f15e",
      "name": "id",
      "example": "0",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批量创建玩家列表
 * @path /v1/player/batch-create-list
 * @param page 頁數 required
 * @param rows 每頁幾筆 required
 * @param prefixUserUsername (模糊查詢)  使用者用戶名 required
 * 
 */
export const getBatchCreates = (params, options = {}) => {
  const interfaceData={
  "title": "批量创建玩家列表",
  "method": "GET",
  "path": "/v1/player/batch-create-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/batch-create-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17b11cbca62a357771f150",
      "name": "page",
      "example": "1",
      "desc": "頁數"
    },
    {
      "required": "1",
      "_id": "5f17b11cbca62aa77371f14f",
      "name": "rows",
      "example": "10",
      "desc": "每頁幾筆"
    },
    {
      "required": "0",
      "_id": "5f17b11cbca62acac271f14e",
      "name": "prefixUserUsername",
      "example": "",
      "desc": "(模糊查詢)  使用者用戶名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批量创建玩家
 * @path /v1/player/batch-create
 * 
 */
export const postPlayerBatchCreate = (params, options = {}) => {
  const interfaceData={
  "title": "批量创建玩家",
  "method": "POST",
  "path": "/v1/player/batch-create",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/batch-create",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "prefixUserUsername": {
      "type": "string",
      "description": "產生 user 用戶名的前綴"
    },
    "count": {
      "type": "number",
      "description": "產生 user 數量"
    },
    "password": {
      "type": "string",
      "description": "密碼"
    },
    "language": {
      "type": "string",
      "description": "語言"
    },
    "affiliateUsername": {
      "type": "string",
      "description": "代理用戶名"
    },
    "description": {
      "type": "string",
      "description": "描述"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  