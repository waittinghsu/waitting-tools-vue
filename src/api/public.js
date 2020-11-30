/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 下拉選單API(多筆)
 * @path /v1/global/selector
 * 
 */
export const getMultipleGlobalSelector = (params, options = {}) => {
  const interfaceData={
  "title": "下拉選單API(多筆)",
  "method": "POST",
  "path": "/v1/global/selector",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/selector",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "parents": {
      "type": "array",
      "enum": [
        [
          "tag",
          "target_function",
          "transaction_type",
          "transaction_flag",
          "transfer_type",
          "transfer_request_status",
          "transfer_request_query_status",
          "currency_status",
          "promo_category_status",
          "payment_account",
          "payment_account_all",
          "promo_category",
          "tag",
          "user_type",
          "game_api",
          "game_api_system_type",
          "game_api_amount_type",
          "system_user_status",
          "role",
          "system_user"
        ]
      ],
      "items": {
        "type": "string"
      },
      "description": "代碼列表"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢 玩家 
 * @path /v1/global/user
 * @param username user 用戶名 required
 * 
 */
export const getGlobalUser = (params, options = {}) => {
  const interfaceData={
  "title": "查詢 玩家 ",
  "method": "GET",
  "path": "/v1/global/user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f69df513fe32759cd85b65e",
      "name": "username",
      "desc": "user 用戶名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢 系統使用者
 * @path /v1/global/system-user
 * @param username user 用戶名 required
 * 
 */
export const getGlobalSystemUser = (params, options = {}) => {
  const interfaceData={
  "title": "查詢 系統使用者",
  "method": "GET",
  "path": "/v1/global/system-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/system-user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f69df493fe32762f285b65d",
      "name": "username",
      "desc": "user 用戶名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title user - Auto Compelte
 * @path /v1/user/auto-complete
 * @param username 查詢 user 用戶名 required
 * 
 */
export const getUserAutoComplete = (params, options = {}) => {
  const interfaceData={
  "title": "user - Auto Compelte",
  "method": "GET",
  "path": "/v1/user/auto-complete",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/user/auto-complete",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f27811bbca62a0e6d71f9e9",
      "name": "username",
      "desc": "查詢 user 用戶名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 下拉選單API(單筆)
 * @path /v1/global/selector/:parent
 * @param parent 代碼清單詳見備註 
 * @param userUUID  required
 * @param bankType  required
 * 
 */
export const getGlobalSelector = (params, options = {}) => {
  const interfaceData={
  "title": "下拉選單API(單筆)",
  "method": "GET",
  "path": "/v1/global/selector/:parent",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/selector/:parent",
  "status": "done",
  "req_params": [
    {
      "_id": "5f869bcb3fe3270f9b85b98a",
      "name": "parent",
      "example": "tag",
      "desc": "代碼清單詳見備註"
    }
  ],
  "req_query": [
    {
      "required": "0",
      "_id": "5f869bcb3fe327471985b98c",
      "name": "userUUID",
      "example": "c022b27e-fc61-42a7-a5e8-726fe6553999",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f869bcb3fe3275e1885b98b",
      "name": "bankType",
      "example": "2",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title vip - 取得 vip 群組與等級設定的樹狀結構資料
 * @path /v1/vip/tree-list
 * 
 */
export const getVipTreeList = (params, options = {}) => {
  const interfaceData={
  "title": "vip - 取得 vip 群組與等級設定的樹狀結構資料",
  "method": "GET",
  "path": "/v1/vip/tree-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/vip/tree-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢 user 錢包餘額
 * @path /v1/global/user/main-wallet-balance
 * @param userUUID user uuid required
 * 
 */
export const getGlobalUserMainWalletBalance = (params, options = {}) => {
  const interfaceData={
  "title": "查詢 user 錢包餘額",
  "method": "GET",
  "path": "/v1/global/user/main-wallet-balance",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/user/main-wallet-balance",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f62f7563fe32788e485b42f",
      "name": "userUUID",
      "example": "0d75183b-3349-4bd9-bed2-ea3eeb51e04d",
      "desc": "user uuid"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 上傳檔案
 * @path /v1/global/upload
 * 
 */
export const uploadFile = (params, options = {}) => {
  const interfaceData={
  "title": "上傳檔案",
  "method": "POST",
  "path": "/v1/global/upload",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/upload",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢 信用代理
 * @path /v1/global/agent-user
 * @param username user 用戶名 required
 * 
 */
export const getGlobalAgentUser = (params, options = {}) => {
  const interfaceData={
  "title": "查詢 信用代理",
  "method": "GET",
  "path": "/v1/global/agent-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/global/agent-user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f69dff03fe32718c885b660",
      "name": "username",
      "desc": "user 用戶名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  