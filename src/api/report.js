/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 每日餘額
 * @path /v1/report/daily-player-balance-report
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param searchDate 日期 required
 * @param userName 用戶名 required
 * @param isAccurate false 模糊用戶名 true 精準用戶名 required
 * @param minBalance 总馀额 >= required
 * @param maxBalance 总馀额 <= required
 * @param userTagUuid TagUUID 排除具有选定标签的玩家 required
 * 
 */
export const getDailyPlayerBalanceReport = (params, options = {}) => {
  const interfaceData={
  "title": "每日餘額",
  "method": "GET",
  "path": "/v1/report/daily-player-balance-report",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/daily-player-balance-report",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f15537dbca62a3f6b71eef3",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f15537dbca62ad64071eef2",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f15537dbca62a492c71eef1",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f15537dbca62a2b8e71eef0",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f15537dbca62a3af471eeef",
      "name": "searchDate",
      "example": "",
      "desc": "日期"
    },
    {
      "required": "0",
      "_id": "5f15537dbca62a2bec71eeee",
      "name": "userName",
      "example": "",
      "desc": "用戶名"
    },
    {
      "required": "1",
      "_id": "5f15537dbca62a2dae71eeed",
      "name": "isAccurate",
      "example": "",
      "desc": "false 模糊用戶名 true 精準用戶名"
    },
    {
      "required": "1",
      "_id": "5f15537dbca62a7aa971eeec",
      "name": "minBalance",
      "example": "",
      "desc": "总馀额 >="
    },
    {
      "required": "1",
      "_id": "5f15537dbca62a429671eeeb",
      "name": "maxBalance",
      "example": "",
      "desc": "总馀额 <="
    },
    {
      "required": "1",
      "_id": "5f15537dbca62a054c71eeea",
      "name": "userTagUuid",
      "example": "",
      "desc": "TagUUID 排除具有选定标签的玩家"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家報表
 * @path /v1/report/player-report
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param dateStart 開始日期 required
 * @param dateEnd 結束日期 required
 * @param username 用戶名 required
 * @param referrer 推薦人 required
 * @param tag 標籤 required
 * @param vip VIP required
 * @param vipGroup VIP分組 required
 * @param depositMore 存款(大於) required
 * @param depositLess 存款(小於) required
 * @param withdrawalMore 提款(大於) required
 * @param withdrawalLess 提款(小於) required
 * @param agent 信用代理用戶名 required
 * @param underAgent 包括旗下下線 required
 * 
 */
export const getPlayerReport = (params, options = {}) => {
  const interfaceData={
  "title": "玩家報表",
  "method": "GET",
  "path": "/v1/report/player-report",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/player-report",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0ee415bca62ad90f71eb22",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f0ee415bca62a0e3771eb21",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a66b771eb20",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a39aa71eb1f",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a52bd71eb1e",
      "name": "dateStart",
      "example": "",
      "desc": "開始日期"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a6b1a71eb1d",
      "name": "dateEnd",
      "example": "",
      "desc": "結束日期"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62aa5db71eb1c",
      "name": "username",
      "example": "",
      "desc": "用戶名"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a711d71eb1b",
      "name": "referrer",
      "example": "",
      "desc": "推薦人"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a1a8871eb1a",
      "name": "tag",
      "example": "",
      "desc": "標籤"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a5e4571eb19",
      "name": "vip",
      "example": "",
      "desc": "VIP"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a616071eb18",
      "name": "vipGroup",
      "example": "",
      "desc": "VIP分組"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a601171eb17",
      "name": "depositMore",
      "example": "",
      "desc": "存款(大於)"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62ada7c71eb16",
      "name": "depositLess",
      "example": "",
      "desc": "存款(小於)"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a121a71eb15",
      "name": "withdrawalMore",
      "example": "",
      "desc": "提款(大於)"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a11d071eb14",
      "name": "withdrawalLess",
      "example": "",
      "desc": "提款(小於)"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a6fbe71eb13",
      "name": "agent",
      "example": "",
      "desc": "信用代理用戶名"
    },
    {
      "required": "0",
      "_id": "5f0ee415bca62a2e1371eb12",
      "name": "underAgent",
      "example": "",
      "desc": "包括旗下下線"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 活躍玩家
 * @path /v1/report/activePlayerReport
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getActivePlayerReport = (params, options = {}) => {
  const interfaceData={
  "title": "活躍玩家",
  "method": "GET",
  "path": "/v1/report/activePlayerReport",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/activePlayerReport",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafd8e680d17521ae75f13",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5efafd8e680d175d64e75f12",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5efafd8e680d17206de75f11",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafd8e680d178c1be75f10",
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
 * @title 总结报表
 * @path /v1/report/summary
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getSummaryReport = (params, options = {}) => {
  const interfaceData={
  "title": "总结报表",
  "method": "GET",
  "path": "/v1/report/summary",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/summary",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafd65680d17b39ae75edd",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5efafd65680d174e07e75edc",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5efafd65680d173035e75edb",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafd65680d175897e75eda",
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
 * @title 遊戲報表
 * @path /v1/report/gameReport
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getGameReport = (params, options = {}) => {
  const interfaceData={
  "title": "遊戲報表",
  "method": "GET",
  "path": "/v1/report/gameReport",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/gameReport",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efe8791bca62a29af71df65",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efe8791bca62aa27c71df64",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efe8791bca62a27d371df63",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5efe8791bca62ad8a671df62",
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
 * @title 遊戲紀錄
 * @path /v1/report/gameLogs
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getGameLogs = (params, options = {}) => {
  const interfaceData={
  "title": "遊戲紀錄",
  "method": "GET",
  "path": "/v1/report/gameLogs",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/gameLogs",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafd9e680d17c4e3e75f29",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd9e680d174cf5e75f28",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd9e680d17d08ae75f27",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd9e680d1716e9e75f26",
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
 * @title 資金流水
 * @path /v1/report/transaction
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param transactionTimeStart 交易时间起 required
 * @param transactionTimeEnd 交易时间迄 required
 * @param userName 用户名 required
 * @param userNameQueryMode 用户名查詢模式(fuzzy:模糊/空值:精準) required
 * @param uuid 交易流水UUID required
 * @param promoCategory 优惠类型(下拉選單代碼:promo_category) required
 * @param flag 标志(下拉選單代碼:transaction_flag) required
 * @param creatorType 操作人員type(下拉選單代碼:user_type) required
 * @param creatorUUID 操作人員UUID required
 * @param userType 帳變用戶type(下拉選單代碼:user_type) required
 * @param userUUID 帳變用戶UUID required
 * @param transactionAmountStart 交易金额起 required
 * @param transactionAmountEnd 交易金額迄 required
 * @param userTag 玩家标签(下拉選單代碼:tag) required
 * @param transactionType[] 交易类型(陣列)(下拉選單代碼:transaction_type) required
 * @param collectionAccName[] 收款賬戶(持有人)名稱(陣列) required
 * 
 */
export const getTransactions = (params, options = {}) => {
  const interfaceData={
  "title": "資金流水",
  "method": "GET",
  "path": "/v1/report/transaction",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/transaction",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6aba8f3fe327265e85b692",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f6aba8f3fe327d2cb85b691",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe3271a9385b690",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327a86185b68f",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe32763b385b68e",
      "name": "transactionTimeStart",
      "example": "2020-07-17T12%3A11%3A38%2B08%3A00",
      "desc": "交易时间起"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe3271e6b85b68d",
      "name": "transactionTimeEnd",
      "example": "2020-07-17T18%3A11%3A38%2B08%3A00",
      "desc": "交易时间迄"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe32762f585b68c",
      "name": "userName",
      "example": "test1",
      "desc": "用户名"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe32710d685b68b",
      "name": "userNameQueryMode",
      "example": "",
      "desc": "用户名查詢模式(fuzzy:模糊/空值:精準)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327671985b68a",
      "name": "uuid",
      "example": "b7e705ca-9bfb-4eb2-a99c-86d5c8908bdc",
      "desc": "交易流水UUID"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327f14785b689",
      "name": "promoCategory",
      "example": "",
      "desc": "优惠类型(下拉選單代碼:promo_category)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327c55785b688",
      "name": "flag",
      "example": "1",
      "desc": "标志(下拉選單代碼:transaction_flag)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327bff385b687",
      "name": "creatorType",
      "example": "",
      "desc": "操作人員type(下拉選單代碼:user_type)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe32734e685b686",
      "name": "creatorUUID",
      "example": "0d75183b-3349-4bd9-bed2-ea3eeb51e04d",
      "desc": "操作人員UUID"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327879285b685",
      "name": "userType",
      "example": "",
      "desc": "帳變用戶type(下拉選單代碼:user_type)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327de4785b684",
      "name": "userUUID",
      "example": "0d75183b-3349-4bd9-bed2-ea3eeb51e04d",
      "desc": "帳變用戶UUID"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327731085b683",
      "name": "transactionAmountStart",
      "example": "100000",
      "desc": "交易金额起"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327b04985b682",
      "name": "transactionAmountEnd",
      "example": "200000",
      "desc": "交易金額迄"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe327100885b681",
      "name": "userTag",
      "example": "755dfd87-033c-4316-9bff-7090e19c404e",
      "desc": "玩家标签(下拉選單代碼:tag)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe32700cd85b680",
      "name": "transactionType[]",
      "example": "1",
      "desc": "交易类型(陣列)(下拉選單代碼:transaction_type)"
    },
    {
      "required": "0",
      "_id": "5f6aba8f3fe3277e5e85b67f",
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
 * @title 升降級報表
 * @path /api/v1/report/grade-report
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getGradeReport = (params, options = {}) => {
  const interfaceData={
  "title": "升降級報表",
  "method": "GET",
  "path": "/api/v1/report/grade-report",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/report/grade-report",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f155390bca62a26eb71eeff",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f155390bca62a662f71eefe",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f155390bca62a1bcd71eefd",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f155390bca62af1d071eefc",
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
 * @title 玩家餘額
 * @path /v1/report/player-balance
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getPlayerBalance = (params, options = {}) => {
  const interfaceData={
  "title": "玩家餘額",
  "method": "GET",
  "path": "/v1/report/player-balance",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/player-balance",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f155386bca62a0d4371eef9",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f155386bca62a372471eef8",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f155386bca62ad35471eef7",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f155386bca62a722f71eef6",
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
 * @title KYC附件清單
 * @path /v1/report/user-kyc
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param updatedTimeStart 更新时间起 required
 * @param updatedTimeEnd 更新时间迄 required
 * @param userName 用户名 required
 * @param userTag 标签 required
 * @param userRiskScoreLevel 风险评分等级 required
 * @param userKycLevel KYC 等级 required
 * @param idCard 身分证号码 required
 * @param identificationStatus 身分证明文件 required
 * @param addressStatus 地址证明 required
 * @param incomeStatus 财产来源证明 required
 * @param dwStatus 存/取款证明 required
 * 
 */
export const getKycAttachmentList = (params, options = {}) => {
  const interfaceData={
  "title": "KYC附件清單",
  "method": "GET",
  "path": "/v1/report/user-kyc",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/user-kyc",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2b7808bca62a7de37200c1",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f2b7808bca62a9b637200c0",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "1",
      "_id": "5f2b7808bca62a33f57200bf",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5f2b7807bca62a1b207200be",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a7ab27200bd",
      "name": "updatedTimeStart",
      "example": "2020-07-12T14%3A11%3A38%2B08%3A00",
      "desc": "更新时间起"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62adcaf7200bc",
      "name": "updatedTimeEnd",
      "example": "2020-07-13T14%3A11%3A38%2B08%3A00",
      "desc": "更新时间迄"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a08c77200bb",
      "name": "userName",
      "example": "test1",
      "desc": "用户名"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a433c7200ba",
      "name": "userTag",
      "example": "755dfd87-033c-4316-9bff-7090e19c404e",
      "desc": "标签"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62ab7067200b9",
      "name": "userRiskScoreLevel",
      "example": "",
      "desc": "风险评分等级"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a0e0e7200b8",
      "name": "userKycLevel",
      "example": "",
      "desc": "KYC 等级"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62aaf837200b7",
      "name": "idCard",
      "example": "A123456789",
      "desc": "身分证号码"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62ab1157200b6",
      "name": "identificationStatus",
      "example": "3",
      "desc": "身分证明文件"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62afe957200b5",
      "name": "addressStatus",
      "example": "2",
      "desc": "地址证明"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a147a7200b4",
      "name": "incomeStatus",
      "example": "1",
      "desc": "财产来源证明"
    },
    {
      "required": "0",
      "_id": "5f2b7807bca62a031f7200b3",
      "name": "dwStatus",
      "example": "0",
      "desc": "存/取款证明"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 轉換率報表
 * @path /api/v1/report/conversionRate
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getConversionRate = (params, options = {}) => {
  const interfaceData={
  "title": "轉換率報表",
  "method": "GET",
  "path": "/api/v1/report/conversionRate",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/report/conversionRate",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efbfa07680d17456ce760fd",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efbfa07680d1723fee760fc",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efbfa07680d17019ee760fb",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efbfa07680d177472e760fa",
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
 * @title 優惠活動
 * @path /v1/report/promo-application
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending"  required
 * @param updatedStart 奖金发放时间起 required
 * @param updatedEnd 奖金发放时间迄 required
 * @param promoRuleUUID 优惠规则 required
 * @param promoCategoryUUID 优惠类型 required
 * @param status 狀態(1:佇列中/2:已批准/3:已拒絕/4:已完成) required
 * @param userName 玩家用户名 required
 * @param vipLevelSettingUUID 玩家级别 required
 * @param bonusAmountStart 奖金数额起 required
 * @param bonusAmountEnd 奖金数额迄 required
 * 
 */
export const getPromotionReport = (params, options = {}) => {
  const interfaceData={
  "title": "優惠活動",
  "method": "GET",
  "path": "/v1/report/promo-application",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/promo-application",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2b645dbca62a728b720069",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2b645dbca62a4b8b720068",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2b645dbca62a5313720067",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5f2b645dbca62af36a720066",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" "
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a531a720065",
      "name": "updatedStart",
      "example": "2020-08-03T14%3A11%3A38%2B08%3A00",
      "desc": "奖金发放时间起"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a3f81720064",
      "name": "updatedEnd",
      "example": "2020-08-05T14%3A11%3A38%2B08%3A00",
      "desc": "奖金发放时间迄"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62aa1a7720063",
      "name": "promoRuleUUID",
      "example": "c9997803-7b5f-43a7-91fd-4af6bf3859db",
      "desc": "优惠规则"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a11af720062",
      "name": "promoCategoryUUID",
      "example": "40c12961-b3a0-415e-9d19-c26052ab9c85",
      "desc": "优惠类型"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62ad74e720061",
      "name": "status",
      "example": "1",
      "desc": "狀態(1:佇列中/2:已批准/3:已拒絕/4:已完成)"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a1109720060",
      "name": "userName",
      "example": "test1",
      "desc": "玩家用户名"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a79ed72005f",
      "name": "vipLevelSettingUUID",
      "example": "d4dcffaf-1dbd-4822-a7c0-1593c007741c",
      "desc": "玩家级别"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62a434472005e",
      "name": "bonusAmountStart",
      "example": "5000",
      "desc": "奖金数额起"
    },
    {
      "required": "0",
      "_id": "5f2b645dbca62adcae72005d",
      "name": "bonusAmountEnd",
      "example": "6000",
      "desc": "奖金数额迄"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 博彩責任
 * @path /v1/report/responsibleGaming
 * @param page  required
 * @param rows  required
 * @param sortColumn 欄位名稱 required
 * @param sortOrder descending ascending required
 * @param startTime 開始時間 required
 * @param endTime 結束時間 required
 * @param username 用戶名 required
 * @param isLike 0:精確 1:模糊 required
 * @param userTag 標籤 required
 * @param userLevel 玩家級別 required
 * @param diffDayMore 剩餘天數(大於等於) required
 * @param diffDayLess 剩餘天數(小於等於) required
 * @param freezeType 自設門禁類型 -1:全部 0:自設門禁(暫時) 1:自設門禁(永久) 2:冷靜 3:存款限額 4:投注限額 required
 * @param status 狀態 -1:全部 0:等待啟用 1:已啟用 2:期滿 3:已停用 required
 * 
 */
export const getResponsibleGaming = (params, options = {}) => {
  const interfaceData={
  "title": "博彩責任",
  "method": "GET",
  "path": "/v1/report/responsibleGaming",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/responsibleGaming",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0d81a4bca62a497d71ea34",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0d81a4bca62a193671ea33",
      "name": "rows",
      "example": "50",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a133771ea32",
      "name": "sortColumn",
      "example": "startTime",
      "desc": "欄位名稱"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a38b771ea31",
      "name": "sortOrder",
      "example": "descending",
      "desc": "descending ascending"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a289e71ea30",
      "name": "startTime",
      "example": "",
      "desc": "開始時間"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62ab77e71ea2f",
      "name": "endTime",
      "example": "",
      "desc": "結束時間"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a0bac71ea2e",
      "name": "username",
      "example": "",
      "desc": "用戶名"
    },
    {
      "required": "1",
      "_id": "5f0d81a4bca62a615a71ea2d",
      "name": "isLike",
      "example": "0",
      "desc": "0:精確 1:模糊"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a12d971ea2c",
      "name": "userTag",
      "example": "",
      "desc": "標籤"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a250e71ea2b",
      "name": "userLevel",
      "example": "",
      "desc": "玩家級別"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62af5a071ea2a",
      "name": "diffDayMore",
      "example": "",
      "desc": "剩餘天數(大於等於)"
    },
    {
      "required": "0",
      "_id": "5f0d81a4bca62a385771ea29",
      "name": "diffDayLess",
      "example": "",
      "desc": "剩餘天數(小於等於)"
    },
    {
      "required": "1",
      "_id": "5f0d81a4bca62a163871ea28",
      "name": "freezeType",
      "example": "-1",
      "desc": "自設門禁類型 -1:全部 0:自設門禁(暫時) 1:自設門禁(永久) 2:冷靜 3:存款限額 4:投注限額"
    },
    {
      "required": "1",
      "_id": "5f0d81a4bca62af4e271ea27",
      "name": "status",
      "example": "-1",
      "desc": "狀態 -1:全部 0:等待啟用 1:已啟用 2:期滿 3:已停用"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 支付报表
 * @path /v1/report/payment
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getPaymentReport = (params, options = {}) => {
  const interfaceData={
  "title": "支付报表",
  "method": "GET",
  "path": "/v1/report/payment",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/payment",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafd6e680d17bcb8e75ee3",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd6e680d178d7ee75ee2",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd6e680d178226e75ee1",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5efafd6e680d1748d0e75ee0",
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
 * @title 轉帳請求
 * @path /v1/report/transfer-request
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
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
 * @param isOnlyTimeOut 是否僅查詢超时 required
 * 
 */
export const getTransferRequest = (params, options = {}) => {
  const interfaceData={
  "title": "轉帳請求",
  "method": "GET",
  "path": "/v1/report/transfer-request",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/transfer-request",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f102042bca62a5a9d71ecb5",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f102042bca62a30f671ecb4",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f102042bca62ab41a71ecb3",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5f102042bca62ad58f71ecb2",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a806071ecb1",
      "name": "transferTimeStart",
      "example": "",
      "desc": "交易時間起"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a323071ecb0",
      "name": "transferTimeEnd",
      "example": "",
      "desc": "交易時間迄"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a0c4b71ecaf",
      "name": "userName",
      "example": "",
      "desc": "用戶名稱"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a2ebf71ecae",
      "name": "creatorName",
      "example": "",
      "desc": "操作人員"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a428771ecad",
      "name": "status",
      "example": "",
      "desc": "訂單狀態"
    },
    {
      "required": "0",
      "_id": "5f102042bca62ae98871ecac",
      "name": "supplierUUID",
      "example": "",
      "desc": "遊戲平台"
    },
    {
      "required": "0",
      "_id": "5f102042bca62afac871ecab",
      "name": "uuid",
      "example": "",
      "desc": "轉帳ID"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a9fb071ecaa",
      "name": "responseID",
      "example": "",
      "desc": "回傳ID"
    },
    {
      "required": "0",
      "_id": "5f102042bca62abd0a71eca9",
      "name": "amountStart",
      "example": "",
      "desc": "轉帳金額起"
    },
    {
      "required": "0",
      "_id": "5f102042bca62a885f71eca8",
      "name": "amountEnd",
      "example": "",
      "desc": "轉帳金額迄"
    },
    {
      "required": "0",
      "_id": "5f102042bca62aeb8771eca7",
      "name": "isOnlyTimeOut",
      "example": "",
      "desc": "是否僅查詢超时"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家分析
 * @path /api/v1/report/playerAnalysis
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getPlayerAnalysis = (params, options = {}) => {
  const interfaceData={
  "title": "玩家分析",
  "method": "GET",
  "path": "/api/v1/report/playerAnalysis",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/report/playerAnalysis",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efefad5bca62ab67d71dff8",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efefad5bca62a0b1b71dff7",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efefad5bca62a264671dff6",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efefad5bca62a5f7371dff5",
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
 * @title 反水報表
 * @path /v1/report/cash-back-report
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param startTime 開始時間 required
 * @param endTime 結束時間 required
 * @param username 用戶名 required
 * @param isLike 0:精確 1:模糊 required
 * @param paid -1:全部 0:未支付 1:已支付 required
 * @param vipLevel 玩家級別 required
 * @param diffDayMore 反水金額(大於等於) required
 * @param diffDayLess 反水金額(小於等於) required
 * 
 */
export const getCashBackReport = (params, options = {}) => {
  const interfaceData={
  "title": "反水報表",
  "method": "GET",
  "path": "/v1/report/cash-back-report",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/report/cash-back-report",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f1011a6bca62ab74071ec8f",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f1011a6bca62a0d5771ec8e",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f1011a6bca62a59ed71ec8d",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5f1011a6bca62aa14a71ec8c",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a744f71ec8b",
      "name": "startTime",
      "example": "",
      "desc": "開始時間"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a05c771ec8a",
      "name": "endTime",
      "example": "",
      "desc": "結束時間"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a6d0871ec89",
      "name": "username",
      "example": "",
      "desc": "用戶名"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a55e371ec88",
      "name": "isLike",
      "example": "",
      "desc": "0:精確 1:模糊"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a076771ec87",
      "name": "paid",
      "example": "",
      "desc": "-1:全部 0:未支付 1:已支付"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a0b7f71ec86",
      "name": "vipLevel",
      "example": "",
      "desc": "玩家級別"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a4d0f71ec85",
      "name": "diffDayMore",
      "example": "",
      "desc": "反水金額(大於等於)"
    },
    {
      "required": "0",
      "_id": "5f1011a6bca62a300671ec84",
      "name": "diffDayLess",
      "example": "",
      "desc": "反水金額(小於等於)"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  