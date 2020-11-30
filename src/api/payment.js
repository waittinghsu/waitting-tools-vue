/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 轉帳請求列表
 * @path /v1/payment/transfer-request
 * @param page  required
 * @param rows  required
 * @param sortOrder 降序: "descending", 升序: "ascending" required
 * @param sortColumn 要排序的column required
 * @param transferTimeStart 交易時間起 required
 * @param transferTimeEnd 交易時間迄 required
 * @param userName 用戶名稱 required
 * @param creatorName 操作人員 required
 * @param status 訂單狀態 required
 * @param supplierUUID 遊戲平台 required
 * @param uuid 轉帳ID required
 * @param responseID 回傳ID required
 * @param amountStart 轉帳金額起 required
 * @param amountEnd 轉帳金額迄 required
 * @param transferType 轉帳類型(1:轉入/2:轉出) required
 * @param suspiciousTransfer 可疑交易 required
 * @param isOnlyTimeOut 是否僅查詢超时(true:是/false:否) required
 * 
 */
export const getPaymentTransferRequest = (params, options = {}) => {
  const interfaceData={
  "title": "轉帳請求列表",
  "method": "GET",
  "path": "/v1/payment/transfer-request",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/transfer-request",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2b655fbca62a852072007f",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2b655fbca62a651a72007e",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a953c72007d",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\""
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a434172007c",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a4c7772007b",
      "name": "transferTimeStart",
      "example": "",
      "desc": "交易時間起"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62add0672007a",
      "name": "transferTimeEnd",
      "example": "",
      "desc": "交易時間迄"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a43a6720079",
      "name": "userName",
      "example": "",
      "desc": "用戶名稱"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a82d3720078",
      "name": "creatorName",
      "example": "",
      "desc": "操作人員"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a8798720077",
      "name": "status",
      "example": "",
      "desc": "訂單狀態"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62ab6db720076",
      "name": "supplierUUID",
      "example": "",
      "desc": "遊戲平台"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a009c720075",
      "name": "uuid",
      "example": "",
      "desc": "轉帳ID"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a5136720074",
      "name": "responseID",
      "example": "",
      "desc": "回傳ID"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62ae996720073",
      "name": "amountStart",
      "example": "",
      "desc": "轉帳金額起"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a9531720072",
      "name": "amountEnd",
      "example": "",
      "desc": "轉帳金額迄"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a8c27720071",
      "name": "transferType",
      "example": "",
      "desc": "轉帳類型(1:轉入/2:轉出)"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62a0488720070",
      "name": "suspiciousTransfer",
      "example": "",
      "desc": "可疑交易"
    },
    {
      "required": "0",
      "_id": "5f2b655fbca62aa8ad72006f",
      "name": "isOnlyTimeOut",
      "example": "",
      "desc": "是否僅查詢超时(true:是/false:否)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新存款
 * @path /v1/payment/deposit/add
 * 
 */
export const postPaymentDepositAdd = (params, options = {}) => {
  const interfaceData={
  "title": "新存款",
  "method": "POST",
  "path": "/v1/payment/deposit/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "depositTime": {
      "type": "string",
      "description": "到帳時間"
    },
    "userUUID": {
      "type": "string",
      "description": "用戶UUID"
    },
    "amount": {
      "type": "string",
      "description": "金額"
    },
    "paymentAccountUUID": {
      "type": "string",
      "description": "支付UUID"
    },
    "internalRemark": {
      "type": "string",
      "description": "內部備註"
    },
    "externalRemark": {
      "type": "string",
      "description": "外部備註"
    },
    "status": {
      "type": "number",
      "description": "狀態 (1:等待 2:完成)"
    },
    "bankAccountOwnerName": {
      "type": "string",
      "description": "銀行帳戶姓名"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新取款
 * @path /v1/payment/withdrawal-order/add
 * 
 */
export const postPaymentWithdrawalOrderAdd = (params, options = {}) => {
  const interfaceData={
  "title": "新取款",
  "method": "POST",
  "path": "/v1/payment/withdrawal-order/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "time": {
      "type": "string",
      "description": "日期",
      "mock": {
        "mock": "2020-07-13T00:00:00+08:00"
      }
    },
    "userUUID": {
      "type": "string",
      "mock": {
        "mock": "38b148d8-b13e-11ea-8525-42010a1ff102"
      },
      "description": "玩家用户UUID"
    },
    "amount": {
      "type": "string",
      "mock": {
        "mock": "10000"
      },
      "description": "金额"
    },
    "userBankUUID": {
      "type": "string",
      "mock": {
        "mock": "0d75183b-3349-4bd9-bed2-ea3eeb51e052"
      },
      "description": "玩家銀行UUID"
    },
    "externalNote": {
      "type": "string",
      "mock": {
        "mock": "安安"
      },
      "description": "内部备注"
    },
    "internalNote": {
      "type": "string",
      "mock": {
        "mock": "你好"
      },
      "description": "内部备注"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 存款列表
 * @path /payment/deposit/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getDepositList = (params, options = {}) => {
  const interfaceData={
  "title": "存款列表",
  "method": "GET",
  "path": "/payment/deposit/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/payment/deposit/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17da9cbca62af03071f1b1",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17da9cbca62a2a0f71f1b0",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17da9cbca62af13171f1af",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17da9cbca62a694971f1ae",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得支付api列表
 * @path /v1/system/payment-api/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param status 狀態 (0, 1, null) required
 * @param isLive 真實模式 (true, false, null) required
 * @param uuid  required
 * 
 */
export const getSystemPaymentApiList = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付api列表",
  "method": "GET",
  "path": "/v1/system/payment-api/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f192205bca62a1c9a71f2d3",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f192205bca62a3a7d71f2d2",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f192205bca62a9cd571f2d1",
      "name": "sortColumn",
      "example": "name",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f192205bca62a553a71f2d0",
      "name": "sortOrder",
      "example": "descending",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f192205bca62a7bd771f2cf",
      "name": "status",
      "example": "0",
      "desc": "狀態 (0, 1, null)"
    },
    {
      "required": "0",
      "_id": "5f192205bca62a35e571f2ce",
      "name": "isLive",
      "example": "true",
      "desc": "真實模式 (true, false, null)"
    },
    {
      "required": "0",
      "_id": "5f192205bca62a3ae071f2cd",
      "name": "uuid",
      "example": "6d64b338-853b-456a-a473-9f206211d186",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得取款列表
 * @path /v1/payment/withdrawal-order
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param tradeTimeStart 交易时间起 required
 * @param tradeTimeEnd 交易时间迄 required
 * @param tradeTimeType 交易时间查詢類型(1:請求時間;2:更新時間) required
 * @param status 訂單狀態(下拉選單代碼:user_withdrawal_order_status) required
 * @param orderNo 取款编码 required
 * @param username 用户名 required
 * @param realName 姓名 required
 * @param amountGreaterAndEqualAt 取款金额 required
 * @param processedByUserName 處理人Username required
 * 
 */
export const getPaymentWithdrawalOrder = (params, options = {}) => {
  const interfaceData={
  "title": "取得取款列表",
  "method": "GET",
  "path": "/v1/payment/withdrawal-order",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6b0f8c3fe3275f1885b6fb",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6b0f8c3fe327419f85b6fa",
      "name": "rows",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe3278c0785b6f9",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe327795a85b6f8",
      "name": "sortOrder",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe327c1a185b6f7",
      "name": "tradeTimeStart",
      "example": "2020-07-05T20%3A58%3A50%2B08%3A00",
      "desc": "交易时间起"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe3270e8e85b6f6",
      "name": "tradeTimeEnd",
      "example": "2020-07-10T20%3A58%3A50%2B08%3A00",
      "desc": "交易时间迄"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe327449485b6f5",
      "name": "tradeTimeType",
      "example": "1",
      "desc": "交易时间查詢類型(1:請求時間;2:更新時間)"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe3274cf385b6f4",
      "name": "status",
      "example": "1",
      "desc": "訂單狀態(下拉選單代碼:user_withdrawal_order_status)"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe327089385b6f3",
      "name": "orderNo",
      "example": "W200921171858",
      "desc": "取款编码"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe32743a085b6f2",
      "name": "username",
      "example": "test1",
      "desc": "用户名"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe3270b1f85b6f1",
      "name": "realName",
      "example": "test",
      "desc": "姓名"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe32729f785b6f0",
      "name": "amountGreaterAndEqualAt",
      "example": "100",
      "desc": "取款金额"
    },
    {
      "required": "0",
      "_id": "5f6b0f8c3fe3276d0185b6ef",
      "name": "processedByUserName",
      "example": "george",
      "desc": "處理人Username"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得存款列表
 * @path /v1/payment/deposit
 * @param page  required
 * @param rows  required
 * @param tradeTimeStart 交易时间起 required
 * @param tradeTimeEnd 交易时间迄 required
 * @param tradeTimeType 交易时间查詢類型(1:請求時間;2:更新時間) required
 * @param status 状态 required
 * @param sn 存款单号 required
 * @param userName 用户名 required
 * @param realName 姓名 required
 * @param bankOrderID 銀行訂單號 required
 * 
 */
export const getPaymentDeposit = (params, options = {}) => {
  const interfaceData={
  "title": "取得存款列表",
  "method": "GET",
  "path": "/v1/payment/deposit",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6970a53fe327148785b5d7",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6970a53fe3277eae85b5d6",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327408c85b5d5",
      "name": "tradeTimeStart",
      "example": "2020-07-05T20%3A58%3A50%2B08%3A00",
      "desc": "交易时间起"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327154985b5d4",
      "name": "tradeTimeEnd",
      "example": "2020-07-07T20%3A58%3A50%2B08%3A00",
      "desc": "交易时间迄"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe32784aa85b5d3",
      "name": "tradeTimeType",
      "example": "request",
      "desc": "交易时间查詢類型(1:請求時間;2:更新時間)"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe3277be385b5d2",
      "name": "status",
      "example": "3",
      "desc": "状态"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327d09985b5d1",
      "name": "sn",
      "example": "e767623f-9ad3-4d48-adfd-910a20ce2e5b",
      "desc": "存款单号"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327702585b5d0",
      "name": "userName",
      "example": "test11",
      "desc": "用户名"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327d4cc85b5cf",
      "name": "realName",
      "example": "hi hi",
      "desc": "姓名"
    },
    {
      "required": "0",
      "_id": "5f6970a53fe327a68285b5ce",
      "name": "bankOrderID",
      "example": "1",
      "desc": "銀行訂單號"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 資金流水
 * @path /v1/payment/transaction
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param transactionTimeStart 交易时间起 required
 * @param transactionTimeEnd 交易时间迄 required
 * @param userName 用户名 required
 * @param userNameQueryMode 用户名查詢模式(fuzzy:模糊/空值:精準) required
 * @param uuid 交易流水UUID required
 * @param promoCategoryUUID 优惠类型(下拉選單代碼:promo_category) required
 * @param flag 标志(下拉選單代碼:transaction_flag) required
 * @param creatorType 帳變用戶type(下拉選單代碼:user_type) required
 * @param creatorUUID 操作人員UUID required
 * @param userType 操作人員type(下拉選單代碼:user_type) required
 * @param userUUID 帳變用戶UUID required
 * @param transactionAmountStart 交易金额起 required
 * @param transactionAmountEnd 交易金額迄 required
 * @param userTag 玩家标签(下拉選單代碼:tag) required
 * @param transactionType[] 交易类型(陣列)(下拉選單代碼:transaction_type) required
 * @param collectionAccName[] 收款賬戶(持有人)名稱(陣列) required
 * 
 */
export const getPaymentTransaction = (params, options = {}) => {
  const interfaceData={
  "title": "資金流水",
  "method": "GET",
  "path": "/v1/payment/transaction",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/transaction",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6ad8f53fe3273e1485b6be",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f6ad8f53fe327a60e85b6bd",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3271ac285b6bc",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3270ae085b6bb",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3271eb285b6ba",
      "name": "transactionTimeStart",
      "example": "2020-07-17T12%3A11%3A38%2B08%3A00",
      "desc": "交易时间起"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327278885b6b9",
      "name": "transactionTimeEnd",
      "example": "2020-07-17T18%3A11%3A38%2B08%3A00",
      "desc": "交易时间迄"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327b42585b6b8",
      "name": "userName",
      "example": "test1",
      "desc": "用户名"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327ca2085b6b7",
      "name": "userNameQueryMode",
      "example": "",
      "desc": "用户名查詢模式(fuzzy:模糊/空值:精準)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327325f85b6b6",
      "name": "uuid",
      "example": "b7e705ca-9bfb-4eb2-a99c-86d5c8908bdc",
      "desc": "交易流水UUID"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327c3d785b6b5",
      "name": "promoCategoryUUID",
      "example": "",
      "desc": "优惠类型(下拉選單代碼:promo_category)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe32755b185b6b4",
      "name": "flag",
      "example": "1",
      "desc": "标志(下拉選單代碼:transaction_flag)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327259c85b6b3",
      "name": "creatorType",
      "example": "",
      "desc": "帳變用戶type(下拉選單代碼:user_type)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe32745ee85b6b2",
      "name": "creatorUUID",
      "example": "0d75183b-3349-4bd9-bed2-ea3eeb51e04d",
      "desc": "操作人員UUID"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3271b1885b6b1",
      "name": "userType",
      "example": "",
      "desc": "操作人員type(下拉選單代碼:user_type)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327046585b6b0",
      "name": "userUUID",
      "example": "0d75183b-3349-4bd9-bed2-ea3eeb51e04d",
      "desc": "帳變用戶UUID"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327829e85b6af",
      "name": "transactionAmountStart",
      "example": "100000",
      "desc": "交易金额起"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3275f9585b6ae",
      "name": "transactionAmountEnd",
      "example": "200000",
      "desc": "交易金額迄"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe327de4f85b6ad",
      "name": "userTag",
      "example": "755dfd87-033c-4316-9bff-7090e19c404e",
      "desc": "玩家标签(下拉選單代碼:tag)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe32781de85b6ac",
      "name": "transactionType[]",
      "example": "1",
      "desc": "交易类型(陣列)(下拉選單代碼:transaction_type)"
    },
    {
      "required": "0",
      "_id": "5f6ad8f53fe3277d9285b6ab",
      "name": "collectionAccName[]",
      "example": "",
      "desc": "收款賬戶(持有人)名稱(陣列)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得鎖定存款訂單列表 (new)
 * @path /v1/payment/locked-deposit/list
 * @param page undefined required
 * @param rows undefined required
 * @param sortColumn undefined required
 * @param sortOrder undefined required
 * @param userName undefined required
 * @param realName undefined required
 * @param amountStart undefined required
 * @param amountEnd undefined required
 * @param tradeTimeStart undefined required
 * @param tradeTimeEnd undefined required
 * 
 */
export const getPaymentLockedDepositList = (params, options = {}) => {
  const interfaceData={
  "title": "取得鎖定存款訂單列表 (new)",
  "method": "GET",
  "path": "/v1/payment/locked-deposit/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/locked-deposit/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f2bb147bca62aa5fe720150",
      "name": "page",
      "value": "1"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a959172014f",
      "name": "rows",
      "value": "10"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a88a972014e",
      "name": "sortColumn",
      "value": "amount"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a2cbe72014d",
      "name": "sortOrder",
      "value": "descending"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a460472014c",
      "name": "userName",
      "value": "test01"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a820172014b",
      "name": "realName",
      "value": "張大大"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a544672014a",
      "name": "amountStart",
      "value": "2"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a5155720149",
      "name": "amountEnd",
      "value": "50"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62a6f08720148",
      "name": "tradeTimeStart",
      "value": "2020-07-14T07:13:43Z"
    },
    {
      "required": "0",
      "_id": "5f2bb147bca62abf03720147",
      "name": "tradeTimeEnd",
      "value": "2020-07-14T16:13:43Z"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得提款訂單明細
 * @path /v1/payment/withdrawal-order/detail/:uuid
 * @param uuid  
 * 
 */
export const getPaymentWithdrawalOrderDetailUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得提款訂單明細",
  "method": "GET",
  "path": "/v1/payment/withdrawal-order/detail/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/detail/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6c3a063fe327839e85b74d",
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
 * @title 更新支付api狀態
 * @path /v1/system/payment-api/update-status/:uuid
 * @param uuid  
 * 
 */
export const patchSystemPaymentApiUpdateStatusUuid = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付api狀態",
  "method": "PATCH",
  "path": "/v1/system/payment-api/update-status/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/update-status/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1935dbbca62a518e71f329",
      "name": "uuid",
      "example": "d4110cc8-544b-4175-818e-1bf38b845d89",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "integer",
      "title": "狀態",
      "description": "0:active, 1:inactive"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 同意存款單
 * @path /v1/payment/deposit/paid/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentDepositPaidUuid = (params, options = {}) => {
  const interfaceData={
  "title": "\b同意存款單",
  "method": "PATCH",
  "path": "/v1/payment/deposit/paid/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/paid/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69b4783fe327157785b63c",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "externalRemark": {
      "type": "string",
      "description": "外部備註"
    },
    "internalRemark": {
      "type": "string",
      "description": "內部備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得下拉支付api列表
 * @path /v1/system/payment-api/simplify-list
 * 
 */
export const getPaymentApiSimplifyList = (params, options = {}) => {
  const interfaceData={
  "title": "取得下拉支付api列表",
  "method": "GET",
  "path": "/v1/system/payment-api/simplify-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/simplify-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 解鎖存款單 (new)
 * @path /v1/payment/locked-deposit/unlock/
 * 
 */
export const patchPaymentLockedDepositUnlock = (params, options = {}) => {
  const interfaceData={
  "title": "解鎖存款單 (new)",
  "method": "PATCH",
  "path": "/v1/payment/locked-deposit/unlock/",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/locked-deposit/unlock/",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增外部備註
 * @path /v1/payment/deposit/external-note/:uuid
 * @param uuid  
 * 
 */
export const postPaymentDepositExternalNoteUuid = (params, options = {}) => {
  const interfaceData={
  "title": "新增外部備註",
  "method": "POST",
  "path": "/v1/payment/deposit/external-note/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/external-note/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1ea1edbca62ae1bc71f619",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "externalRemark": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 已鎖定存款
 * @path /v1/payment/deposit/lockList
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getDepositLockList = (params, options = {}) => {
  const interfaceData={
  "title": "已鎖定存款",
  "method": "GET",
  "path": "/v1/payment/deposit/lockList",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/lockList",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f154012bca62a6b5b71eee3",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f154012bca62ac78571eee2",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f154012bca62afd3f71eee1",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f154012bca62a209571eee0",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 手動處理訂單
 * @path /v1/payment/withdrawal-order/process-manually/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentWithdrawalOrderProcessManuallyUuid = (params, options = {}) => {
  const interfaceData={
  "title": "手動處理訂單",
  "method": "PATCH",
  "path": "/v1/payment/withdrawal-order/process-manually/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/process-manually/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f19566bbca62a8de571f344",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "canIgnoredVipDailyMaxAmountSetting": {
      "type": "boolean"
    },
    "canIgnoredVipDailyMaxTimesSetting": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新支付api
 * @path /v1/system/payment-api/update/:uuid
 * @param uuid  
 * 
 */
export const patchSystemPaymentApiUpdateUuid = (params, options = {}) => {
  const interfaceData={
  "title": "更新支付api",
  "method": "PATCH",
  "path": "/v1/system/payment-api/update/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/update/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f192bfdbca62a394471f31a",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string"
    },
    "note": {
      "type": "string"
    },
    "systemType": {
      "type": "number"
    },
    "systemCode": {
      "type": "string"
    },
    "category": {
      "type": "string"
    },
    "lastSyncTime": {
      "type": "string"
    },
    "lastSyncId": {
      "type": "integer"
    },
    "lastSyncDetails": {
      "type": "string"
    },
    "amountType": {
      "type": "integer"
    },
    "liveUrl": {
      "type": "string"
    },
    "sandboxUrl": {
      "type": "string"
    },
    "liveKey": {
      "type": "string"
    },
    "liveSecret": {
      "type": "string"
    },
    "sandboxKey": {
      "type": "string"
    },
    "sandboxSecret": {
      "type": "string"
    },
    "isLive": {
      "type": "boolean"
    },
    "secondUrl": {
      "type": "string"
    },
    "liveAccount": {
      "type": "string"
    },
    "sandboxAccount": {
      "type": "string"
    },
    "className": {
      "type": "string"
    },
    "localPath": {
      "type": "string"
    },
    "manager": {
      "type": "string"
    },
    "extraInfo": {
      "type": "string"
    },
    "sandboxExtraInfo": {
      "type": "string"
    },
    "type": {
      "type": "integer"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得鎖定提款訂單列表 (new)
 * @path /v1/payment/locked-withdrawal/list
 * @param page undefined required
 * @param rows undefined required
 * @param sortColumn undefined required
 * @param sortOrder undefined required
 * @param username undefined required
 * @param realName undefined required
 * @param amountLessAndEqualAt undefined required
 * @param amountGreaterAndEqualAt undefined required
 * @param requestBeginTime undefined required
 * @param requestEndTime undefined required
 * 
 */
export const getPaymentLockedWithdrawalList = (params, options = {}) => {
  const interfaceData={
  "title": "取得鎖定提款訂單列表 (new)",
  "method": "GET",
  "path": "/v1/payment/locked-withdrawal/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/locked-withdrawal/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f2bb11dbca62a37e57200f9",
      "name": "page",
      "value": "1"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62afdba7200f8",
      "name": "rows",
      "value": "10"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a261d7200f7",
      "name": "sortColumn",
      "value": "amount"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a73ad7200f6",
      "name": "sortOrder",
      "value": "descending"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a66137200f5",
      "name": "username",
      "value": "test01"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a0b717200f4",
      "name": "realName",
      "value": "張大大"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62ac1777200f3",
      "name": "amountLessAndEqualAt",
      "value": "2"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a727d7200f2",
      "name": "amountGreaterAndEqualAt",
      "value": "50"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a6a327200f1",
      "name": "requestBeginTime",
      "value": "2020-07-14T07:13:43Z"
    },
    {
      "required": "0",
      "_id": "5f2bb11dbca62a2b137200f0",
      "name": "requestEndTime",
      "value": "2020-07-14T16:13:43Z"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得取款列表Dashboard
 * @path /v1/payment/withdrawal-order/dashboard
 * @param tradeTimeEnd 交易時間結束 (帶入當下時間) required
 * 
 */
export const getPaymentWithdrawalOrderDashboard = (params, options = {}) => {
  const interfaceData={
  "title": "取得取款列表Dashboard",
  "method": "GET",
  "path": "/v1/payment/withdrawal-order/dashboard",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/dashboard",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f6b135e3fe3271df985b6fd",
      "name": "tradeTimeEnd",
      "desc": "交易時間結束 (帶入當下時間)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得支付api明細
 * @path /v1/system/payment-api/get/:uuid
 * @param uuid  
 * 
 */
export const getSystemPaymentApiGetUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得支付api明細",
  "method": "GET",
  "path": "/v1/system/payment-api/get/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/get/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f19293dbca62a17ce71f30b",
      "name": "uuid",
      "example": "d4110cc8-544b-4175-818e-1bf38b845d89",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增外部備註
 * @path /v1/payment/withdrawal-order/external-note/:uuid
 * @param uuid  
 * 
 */
export const postPaymentWithdrawalOrderExternalNoteUuid = (params, options = {}) => {
  const interfaceData={
  "title": "新增外部備註",
  "method": "POST",
  "path": "/v1/payment/withdrawal-order/external-note/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/external-note/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1956a7bca62ae4f971f35f",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "externalNote": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 三方處理訂單
 * @path /v1/payment/withdrawal-order/process/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentWithdrawalOrderProcessUuid = (params, options = {}) => {
  const interfaceData={
  "title": "\b三方處理訂單",
  "method": "PATCH",
  "path": "/v1/payment/withdrawal-order/process/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/process/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f19563abca62a4bcd71f33d",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "paymentApiUUID": {
      "type": "string",
      "description": "支付api uuid"
    },
    "canIgnoredVipDailyMaxAmountSetting": {
      "type": "boolean"
    },
    "canIgnoredVipDailyMaxTimesSetting": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 拒絕取款
 * @path /v1/payment/withdrawal-order/decline/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentWithdrawalOrderDeclineUuid = (params, options = {}) => {
  const interfaceData={
  "title": "拒絕取款",
  "method": "PATCH",
  "path": "/v1/payment/withdrawal-order/decline/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/decline/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f680c853fe327c63085b535",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "internalNote": {
      "type": "string",
      "title": "新增內部備註",
      "description": "新增內部備註",
      "mock": {
        "mock": "test1"
      }
    },
    "externalNote": {
      "type": "string",
      "mock": {
        "mock": "test2"
      },
      "title": "新增外部備註",
      "description": "新增外部備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 存款列表_存款处理时间记录
 * @path /payment/deposit/list_1594792804245
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param requestTime  required
 * @param userName  required
 * @param status  required
 * @param handler  required
 * 
 */
export const getTimeRecordList = (params, options = {}) => {
  const interfaceData={
  "title": "存款列表_存款处理时间记录",
  "method": "GET",
  "path": "/payment/deposit/list_1594792804245",
  "mock_path": "https://wyapi.hw.codes/mock/73/payment/deposit/list_1594792804245",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0e9e28bca62a72d971ead3",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0e9e28bca62a1cbc71ead2",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0e9e28bca62a095f71ead1",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0e9e28bca62a8c7571ead0",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0e9e28bca62ab67a71eacf",
      "name": "requestTime",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0e9e28bca62a916671eace",
      "name": "userName",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0e9e28bca62a3e8b71eacd",
      "name": "status",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0e9e28bca62aa14671eacc",
      "name": "handler",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 解鎖提款單 (new)
 * @path /v1/payment/locked-withdrawal/unlock/
 * 
 */
export const patchPaymentLockedWithdrawalUnlock = (params, options = {}) => {
  const interfaceData={
  "title": "解鎖提款單 (new)",
  "method": "PATCH",
  "path": "/v1/payment/locked-withdrawal/unlock/",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/locked-withdrawal/unlock/",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取款列表
 * @path /v1/payment/withdrawal/list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getWithdrawalList = (params, options = {}) => {
  const interfaceData={
  "title": "取款列表",
  "method": "GET",
  "path": "/v1/payment/withdrawal/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal/list",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17a567bca62a490f71f0d0",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17a567bca62aa2ce71f0cf",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17a567bca62a8c2771f0ce",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17a567bca62a55a471f0cd",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增內部備註
 * @path /v1/payment/deposit/internal-note/:uuid
 * @param uuid  
 * 
 */
export const postPaymentDepositInternalNoteUuid = (params, options = {}) => {
  const interfaceData={
  "title": "新增內部備註",
  "method": "POST",
  "path": "/v1/payment/deposit/internal-note/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/internal-note/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1ea1f2bca62a8a9971f61c",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "internalRemark": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 備註存款單
 * @path /v1/payment/deposit/note/:uuid
 * @param uuid 存款單 uuid 
 * 
 */
export const patchPaymentDepositNoteUuid = (params, options = {}) => {
  const interfaceData={
  "title": "備註存款單",
  "method": "PATCH",
  "path": "/v1/payment/deposit/note/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/note/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69b4c33fe32707f985b646",
      "name": "uuid",
      "desc": "存款單 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "externalRemark": {
      "type": "string",
      "description": "外部備註"
    },
    "internalRemark": {
      "type": "string",
      "description": "內部備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得存款處理時間列表
 * @path /v1/payment/deposit/process-time-list
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * @param requestTimeStart 請求起始時間 required
 * @param requestTimeEnd 請求結束時間 required
 * @param username 用戶帳號 required
 * @param status 訂單狀態 required
 * @param processedBy 處理者 required
 * 
 */
export const getPaymentDepositProcessTimeList = (params, options = {}) => {
  const interfaceData={
  "title": "取得存款處理時間列表",
  "method": "GET",
  "path": "/v1/payment/deposit/process-time-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/process-time-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f1fda05bca62a21bc71f6d7",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f1fda05bca62ab84e71f6d6",
      "name": "rows",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62a6f8d71f6d5",
      "name": "sortColumn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62a9c3a71f6d4",
      "name": "sortOrder",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62a969d71f6d3",
      "name": "requestTimeStart",
      "desc": "請求起始時間"
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62aae9971f6d2",
      "name": "requestTimeEnd",
      "desc": "請求結束時間"
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62a81ac71f6d1",
      "name": "username",
      "desc": "用戶帳號"
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62a7e3571f6d0",
      "name": "status",
      "desc": "訂單狀態"
    },
    {
      "required": "0",
      "_id": "5f1fda05bca62adc7671f6cf",
      "name": "processedBy",
      "desc": "處理者"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得存款訂單明細
 * @path /v1/payment/deposit/details/:uuid
 * @param uuid 存款單 uuid 
 * 
 */
export const getPaymentDepositDetailsUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得存款訂單明細",
  "method": "GET",
  "path": "/v1/payment/deposit/details/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/details/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f699fa63fe327703585b607",
      "name": "uuid",
      "desc": "存款單 uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增支付api
 * @path /v1/system/payment-api/add
 * 
 */
export const postSystemPaymentApiAdd = (params, options = {}) => {
  const interfaceData={
  "title": "新增支付api",
  "method": "POST",
  "path": "/v1/system/payment-api/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "title": "支付API名稱"
    },
    "note": {
      "type": "string",
      "title": "備註"
    },
    "systemType": {
      "type": "integer",
      "title": "系統類型",
      "description": "0:Game, 1:Payment"
    },
    "systemCode": {
      "type": "string",
      "title": "系統代碼"
    },
    "category": {
      "type": "string",
      "title": "分類"
    },
    "lastSyncTime": {
      "type": "string",
      "title": "-"
    },
    "lastSyncId": {
      "type": "integer",
      "title": "-"
    },
    "lastSyncDetails": {
      "type": "string",
      "title": "-"
    },
    "amountType": {
      "type": "integer",
      "title": "金額類型",
      "description": "0:Integer, 1:0.1, 2:0.01"
    },
    "liveUrl": {
      "type": "string",
      "title": "真實URL"
    },
    "sandboxUrl": {
      "type": "string",
      "title": "模擬URL"
    },
    "liveKey": {
      "type": "string",
      "title": "真實Key"
    },
    "liveSecret": {
      "type": "string",
      "title": "真實密鑰"
    },
    "sandboxKey": {
      "type": "string",
      "title": "模擬Key"
    },
    "sandboxSecret": {
      "type": "string",
      "title": "模擬密鑰"
    },
    "isLive": {
      "type": "boolean",
      "title": "真實模式"
    },
    "secondUrl": {
      "type": "string",
      "title": "第二URL"
    },
    "liveAccount": {
      "type": "string",
      "title": "真實商戶號"
    },
    "sandboxAccount": {
      "type": "string",
      "title": "模擬商戶號"
    },
    "className": {
      "type": "string",
      "title": "-"
    },
    "localPath": {
      "type": "string",
      "title": "-"
    },
    "manager": {
      "type": "string",
      "title": "-"
    },
    "extraInfo": {
      "type": "string",
      "title": "其他參數"
    },
    "sandboxExtraInfo": {
      "type": "string",
      "title": "模擬其他參數"
    },
    "type": {
      "type": "integer",
      "title": "類型",
      "description": "0:Both, 1:Deposit, 2:Withdrawal"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 已鎖定取款
 * @path /v1/payment/withdrawal/lockList
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getLockList = (params, options = {}) => {
  const interfaceData={
  "title": "已鎖定取款",
  "method": "GET",
  "path": "/v1/payment/withdrawal/lockList",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal/lockList",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f113ad7bca62a450d71ed6a",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f113ad7bca62aba5171ed69",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f113ad7bca62a4b3a71ed68",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f113ad7bca62a3f8371ed67",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除支付api
 * @path /v1/system/payment-api/delete
 * 
 */
export const deleteSystemPaymentApiDelete = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除支付api",
  "method": "DELETE",
  "path": "/v1/system/payment-api/delete",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/delete",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "idList": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "title": "id"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 儀表版
 * @path /v1/payment/deposit/dashboard
 * @param tradeTimeEnd 交易時間結束 (帶入當下時間) required
 * 
 */
export const getPaymentDepositDashboard = (params, options = {}) => {
  const interfaceData={
  "title": "儀表版",
  "method": "GET",
  "path": "/v1/payment/deposit/dashboard",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/dashboard",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f631e573fe3278c4485b4e5",
      "name": "tradeTimeEnd",
      "desc": "交易時間結束 (帶入當下時間)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 確認取款
 * @path /v1/payment/withdrawal-order/paid/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentWithdrawalOrderPaidUuid = (params, options = {}) => {
  const interfaceData={
  "title": "確認取款",
  "method": "PATCH",
  "path": "/v1/payment/withdrawal-order/paid/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/paid/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6c3e563fe327b90c85b752",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "internalNote": {
      "type": "string",
      "mock": {
        "mock": "test1"
      },
      "title": "新增內部備註",
      "description": "新增內部備註"
    },
    "externalNote": {
      "type": "string",
      "mock": {
        "mock": "test2"
      },
      "title": "新增外部備註",
      "description": "新增外部備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取款支付api列表
 * @path /v1/system/payment-api/withdrawal-list
 * 
 */
export const getSystemPaymentApiWithdrawalList = (params, options = {}) => {
  const interfaceData={
  "title": "取款支付api列表",
  "method": "GET",
  "path": "/v1/system/payment-api/withdrawal-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-api/withdrawal-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 異常訂單
 * @path /api/v1/payment/exceptionOrders
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getExceptionOrders = (params, options = {}) => {
  const interfaceData={
  "title": "異常訂單",
  "method": "GET",
  "path": "/api/v1/payment/exceptionOrders",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/payment/exceptionOrders",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2400debca62ab8cd71f9d3",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2400debca62a2a4c71f9d2",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2400debca62aee1171f9d1",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2400debca62a504d71f9d0",
      "name": "sortOrder",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 拒絕存款單
 * @path /v1/payment/deposit/decline/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentDepositDeclineUuid = (params, options = {}) => {
  const interfaceData={
  "title": "拒絕存款單",
  "method": "PATCH",
  "path": "/v1/payment/deposit/decline/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/deposit/decline/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69b45f3fe327672f85b639",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "externalRemark": {
      "type": "string",
      "description": "外部備註"
    },
    "internalRemark": {
      "type": "string",
      "description": "內部備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 備註取款
 * @path /v1/payment/withdrawal-order/note/:uuid
 * @param uuid  
 * 
 */
export const patchPaymentWithdrawalOrderNoteUuid = (params, options = {}) => {
  const interfaceData={
  "title": "備註取款",
  "method": "PATCH",
  "path": "/v1/payment/withdrawal-order/note/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/payment/withdrawal-order/note/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f680d1e3fe327dcfd85b558",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "internalNote": {
      "type": "string",
      "mock": {
        "mock": "test1"
      },
      "title": "新增內部備註",
      "description": "新增內部備註"
    },
    "externalNote": {
      "type": "string",
      "title": "新增外部備註",
      "description": "新增外部備註",
      "mock": {
        "mock": "test2"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  