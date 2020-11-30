/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得支付設定列表
 * @path /v1/system/payment-setting
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param bankName 銀行名稱 required
 * @param bankCode 銀行代碼 required
 * 
 */
export const getPaymentSettingList = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付設定列表",
  "method": "GET",
  "path": "/v1/system/payment-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f7d6eea3fe3276d7785b8c9",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f7d6eea3fe3271edd85b8c8",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f7d6eea3fe327515f85b8c7",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f7d6eea3fe32781d485b8c6",
      "name": "sortOrder",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f7d6eea3fe32751c185b8c5",
      "name": "bankName",
      "desc": "銀行名稱"
    },
    {
      "required": "0",
      "_id": "5f7d6eea3fe32713d485b8c4",
      "name": "bankCode",
      "desc": "銀行代碼"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得支付設定明細
 * @path /v1/system/payment-setting/:uuid
 * @param uuid  
 * 
 */
export const getPaymentSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付設定明細",
  "method": "GET",
  "path": "/v1/system/payment-setting/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d6ef23fe327458285b8cb",
      "name": "uuid",
      "example": "d21be6cd-7040-4be2-8bab-dff03e7248d2",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付狀態
 * @path /v1/system/payment-setting/:uuid/status
 * @param uuid  
 * 
 */
export const updatePaymentSettinStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付狀態",
  "method": "PATCH",
  "path": "/v1/system/payment-setting/:uuid/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting/:uuid/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d6f1b3fe327736085b8cf",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "integer",
      "title": "狀態",
      "description": "(1:啟用/2:停用)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付類型
 * @path /v1/system/payment-setting/:uuid/method
 * @param uuid  
 * 
 */
export const updatePaymentSettingMethod = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付類型",
  "method": "PATCH",
  "path": "/v1/system/payment-setting/:uuid/method",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting/:uuid/method",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d6f4d3fe327386585b8da",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "isDeposit": {
      "type": "boolean",
      "description": "擇一帶入即可"
    },
    "isWithdrawal": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付設定
 * @path /v1/system/payment-setting/:uuid
 * @param uuid  
 * 
 */
export const updatePaymentSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付設定",
  "method": "PATCH",
  "path": "/v1/system/payment-setting/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d6f333fe32712c285b8d2",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "bankName": {
      "type": "string"
    },
    "bankCode": {
      "type": "string"
    },
    "paymentAPIUUID": {
      "type": "string",
      "description": "(下拉選單代碼:payment_api)"
    },
    "paymentType": {
      "type": "integer",
      "description": "(下拉選單代碼:payment_setting_type)"
    },
    "bankIconURL": {
      "type": "string"
    },
    "isDefaultBankIcon": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增支付設定
 * @path /v1/system/payment-setting
 * 
 */
export const addPaymentSetting = (params, options = {}) => {
  const interfaceData={
  "title": "新增支付設定",
  "method": "POST",
  "path": "/v1/system/payment-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "bankName": {
      "type": "string"
    },
    "bankCode": {
      "type": "string",
      "enum": [
        "ASF",
        "WER",
        "UJNBGF",
        "VVFD"
      ]
    },
    "paymentAPIUUID": {
      "type": "string",
      "description": "(下拉選單代碼:payment_api)",
      "mock": {
        "mock": "6d64b338-853b-456a-a473-9f206211d186"
      }
    },
    "paymentType": {
      "type": "integer",
      "description": "(下拉選單代碼:payment_setting_type)"
    },
    "bankIconURL": {
      "type": "string"
    },
    "isDefaultBankIcon": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  