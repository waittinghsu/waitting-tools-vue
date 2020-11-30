/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得支付帳戶列表
 * @path /v1/system/payment-account
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getPaymentAccountList = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付帳戶列表",
  "method": "GET",
  "path": "/v1/system/payment-account",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f7d976b3fe32784cd85b8eb",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f7d976b3fe3272c8a85b8ea",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f7d976b3fe32712ad85b8e9",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f7d976b3fe327781485b8e8",
      "name": "sortOrder",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增支付帳戶
 * @path /v1/system/payment-account
 * 
 */
export const addPaymentAccount = (params, options = {}) => {
  const interfaceData={
  "title": "新增支付帳戶",
  "method": "POST",
  "path": "/v1/system/payment-account",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "paymentSettingUUID": {
      "type": "string",
      "title": "银行/支付接口名称",
      "description": "银行/支付接口名称(下拉選單代碼:)",
      "mock": {
        "mock": "7eee75f8-e820-4d24-9238-6f2be151e93d"
      }
    },
    "paymentType": {
      "type": "number",
      "description": "支付类型(下拉選單代碼:payment_type)",
      "title": "支付类型",
      "mock": {
        "mock": "1"
      }
    },
    "gatewayType": {
      "type": "number",
      "description": "支付通道类型(下拉選單代碼:payment_gateway_type)",
      "title": "支付通道类型",
      "mock": {
        "mock": "1"
      }
    },
    "accountName": {
      "type": "string",
      "title": "账户名字",
      "description": "账户名字",
      "mock": {
        "mock": "omega001"
      }
    },
    "accountNumber": {
      "type": "string",
      "title": "账号",
      "description": "账号",
      "mock": {
        "mock": "403432773912"
      }
    },
    "bankBranchName": {
      "type": "string",
      "title": "支行名",
      "description": "支行名",
      "mock": {
        "mock": "呀曼達"
      }
    },
    "accountOrder": {
      "type": "number",
      "title": " 收款账户顺序",
      "description": " 收款账户顺序",
      "mock": {
        "mock": "1"
      }
    },
    "minDepositPerTransaction": {
      "type": "number",
      "title": "每笔存款最低金额",
      "description": "每笔存款最低金额",
      "mock": {
        "mock": "123"
      }
    },
    "maxDepositPerTransaction": {
      "type": "number",
      "title": "每笔存款最高金额",
      "description": "每笔存款最高金额",
      "mock": {
        "mock": "123"
      }
    },
    "operatorDepositFeePercentage": {
      "type": "number",
      "title": "运营商承担手续费-存款手续费百分比 %",
      "description": "运营商承担手续费-存款手续费百分比 %",
      "mock": {
        "mock": "123"
      }
    },
    "operatorMinDepositFee": {
      "type": "number",
      "title": "运营商承担手续费-最小存款手续费",
      "description": "运营商承担手续费-最小存款手续费",
      "mock": {
        "mock": "123"
      }
    },
    "operatorMaxDepositFee": {
      "type": "number",
      "title": "运营商承担手续费-最大存款手续费",
      "description": "运营商承担手续费-最大存款手续费",
      "mock": {
        "mock": "123"
      }
    },
    "playerDepositFeePercentage": {
      "type": "number",
      "title": "玩家承担手续费-存款手续费百分比 %",
      "description": "玩家承担手续费-存款手续费百分比 %",
      "mock": {
        "mock": "132"
      }
    },
    "playerMinDepositFee": {
      "type": "number",
      "title": "玩家承担手续费-最小存款手续费",
      "description": "玩家承担手续费-最小存款手续费",
      "mock": {
        "mock": "123"
      }
    },
    "playerMaxDepositFee": {
      "type": "number",
      "title": "玩家承担手续费-最大存款手续费",
      "description": "玩家承担手续费-最大存款手续费",
      "mock": {
        "mock": "123"
      }
    },
    "note": {
      "type": "string",
      "title": "備註",
      "description": "備註",
      "mock": {
        "mock": "renarks"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除支付帳戶
 * @path /v1/system/payment-account
 * 
 */
export const deletePaymentAccount = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除支付帳戶",
  "method": "DELETE",
  "path": "/v1/system/payment-account",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
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
 * @title 更新默認收款帳戶
 * @path /v1/system/payment-account/update-default-account
 * 
 */
export const updateDefaultAccount = (params, options = {}) => {
  const interfaceData={
  "title": "更新默認收款帳戶",
  "method": "PATCH",
  "path": "/v1/system/payment-account/update-default-account",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account/update-default-account",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "paymentTypeList": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "description": "支付清單id"
    },
    "pcIDList": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "description": "支援pc支付id"
    },
    "mobileIDList": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "description": "支援mobile支付id"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付帳戶
 * @path /v1/system/payment-account/:uuid
 * @param uuid  
 * 
 */
export const updatePaymentAccount = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付帳戶",
  "method": "PUT",
  "path": "/v1/system/payment-account/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d981b3fe327680685b8f3",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "paymentSettingUUID": {
      "type": "string"
    },
    "paymentType": {
      "type": "number"
    },
    "gatewayType": {
      "type": "number"
    },
    "accountName": {
      "type": "string"
    },
    "accountNumber": {
      "type": "string"
    },
    "bankBranchName": {
      "type": "string"
    },
    "accountOrder": {
      "type": "number"
    },
    "minDepositPerTransaction": {
      "type": "number"
    },
    "maxDepositPerTransaction": {
      "type": "number"
    },
    "operatorDepositFeePercentage": {
      "type": "number"
    },
    "operatorMinDepositFee": {
      "type": "number"
    },
    "operatorMaxDepositFee": {
      "type": "number"
    },
    "playerDepositFeePercentage": {
      "type": "number"
    },
    "playerMinDepositFee": {
      "type": "number"
    },
    "playerMaxDepositFee": {
      "type": "number"
    },
    "note": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付帳戶狀態
 * @path /v1/system/payment-account/:uuid/status
 * @param uuid  
 * 
 */
export const updatePaymentAccountStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付帳戶狀態",
  "method": "PATCH",
  "path": "/v1/system/payment-account/:uuid/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account/:uuid/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d98aa3fe327f26f85b8f8",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "integer",
      "description": "状态(1:啟用/2:停用)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得默認收款帳戶列表
 * @path /v1/system/payment-account/default-list
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getDefaultList = (params, options = {}) => {
  const interfaceData={
  "title": "取得默認收款帳戶列表",
  "method": "GET",
  "path": "/v1/system/payment-account/default-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account/default-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f0d4981bca62a770d71e887",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0d4981bca62afd6b71e886",
      "name": "sortOrder",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得支付帳戶明細
 * @path /v1/system/payment-account/:uuid
 * @param uuid  
 * 
 */
export const getPaymentAccount = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付帳戶明細",
  "method": "GET",
  "path": "/v1/system/payment-account/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-account/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7d98593fe327718685b8f6",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  