/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 玩家紀錄 -资金流水列表
 * @path /v1/player/record/transaction
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 條件起始時間 required
 * @param end 條件交易結束時間 required
 * 
 */
export const getPlayerRecordTransaction = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 -资金流水列表",
  "method": "GET",
  "path": "/v1/player/record/transaction",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transaction",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafdb9680d17abc7e75f63",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafdb9680d17309ae75f62",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafdb9680d1701c1e75f61",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafdb9680d17b412e75f60",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5efafdb9680d170d23e75f5f",
      "name": "start",
      "example": "",
      "desc": "條件起始時間"
    },
    {
      "required": "1",
      "_id": "5efafdb9680d17e670e75f5e",
      "name": "end",
      "example": "",
      "desc": "條件交易結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 轉帳列表狀態下拉清單
 * @path /v1/player/record/transfer/status/list
 * 
 */
export const getPlayerRecordTransferStatusList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 轉帳列表狀態下拉清單",
  "method": "GET",
  "path": "/v1/player/record/transfer/status/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transfer/status/list",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 遊戲歷史列表
 * @path /api/v1/player/record/game-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 起始時間 required
 * @param end 結束時間 required
 * @param status 狀態 required
 * @param game 遊戲平台 required
 * @param id ID required
 * @param suspiciousTransaction 可疑交易 required
 * @param transferType 轉帳類型 required
 * 
 */
export const getV1PlayerRecordGameHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 遊戲歷史列表",
  "method": "GET",
  "path": "/api/v1/player/record/game-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/game-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f04716ebca62a497371e343",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a900171e342",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f04716ebca62a089071e341",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f04716ebca62a183671e340",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a354e71e33f",
      "name": "start",
      "example": "",
      "desc": "起始時間"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a214471e33e",
      "name": "end",
      "example": "",
      "desc": "結束時間"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a6a0d71e33d",
      "name": "status",
      "example": "",
      "desc": "狀態"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a170371e33c",
      "name": "game",
      "example": "",
      "desc": "遊戲平台"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62acbd571e33b",
      "name": "id",
      "example": "",
      "desc": "ID"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a3f8471e33a",
      "name": "suspiciousTransaction",
      "example": "",
      "desc": "可疑交易"
    },
    {
      "required": "1",
      "_id": "5f04716ebca62a7f2671e339",
      "name": "transferType",
      "example": "",
      "desc": "轉帳類型"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 -资金流水列表-交易詳細
 * @path /v1/player/record/transaction-detail
 * @param id 交易id required
 * 
 */
export const getPlayerRecordTransactionDetail = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 -资金流水列表-交易詳細",
  "method": "GET",
  "path": "/v1/player/record/transaction-detail",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transaction-detail",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafdc0680d177ccbe75f66",
      "name": "id",
      "example": "",
      "desc": "交易id"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 存款列表
 * @path /v1/player/record/deposits
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param status 預設為0 全部 required
 * 
 */
export const getPlayerRecordDeposits = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 存款列表",
  "method": "GET",
  "path": "/v1/player/record/deposits",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/deposits",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafd6f680d177e47e75eea",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafd6f680d174176e75ee9",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafd6f680d17bf92e75ee8",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafd6f680d174503e75ee7",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5efafd6f680d175fe5e75ee6",
      "name": "status",
      "example": "0",
      "desc": "預設為0 全部"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 餘額歷史詳情
 * @path /v1/player/record/balance-history/{id}
 * @param id id 
 * 
 */
export const getPlayerRecordBalanceHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 餘額歷史詳情",
  "method": "GET",
  "path": "/v1/player/record/balance-history/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/balance-history/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f0471dfbca62ab6c971e367",
      "name": "id",
      "desc": "id"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 優惠歷史列表
 * @path /api/v1/player/record/promo-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 起始時間 required
 * @param end 結束時間 required
 * @param status 狀態 required
 * @param type 類型 required
 * 
 */
export const getV1PlayerRecordPromoHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 優惠歷史列表",
  "method": "GET",
  "path": "/api/v1/player/record/promo-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/promo-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f047183bca62a39d471e34d",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f047183bca62a5f6571e34c",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f047183bca62a86a071e34b",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f047183bca62a5c2571e34a",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f047183bca62ade9571e349",
      "name": "start",
      "example": "",
      "desc": "起始時間"
    },
    {
      "required": "1",
      "_id": "5f047183bca62a4e2771e348",
      "name": "end",
      "example": "",
      "desc": "結束時間"
    },
    {
      "required": "1",
      "_id": "5f047183bca62a5a5771e347",
      "name": "status",
      "example": "",
      "desc": "狀態"
    },
    {
      "required": "1",
      "_id": "5f047183bca62aa74271e346",
      "name": "type",
      "example": "",
      "desc": "類型"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 銀行帳戶信息更新的歷史列表
 * @path /api/v1/player/record/bank-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 起始時間 required
 * @param end 結束時間 required
 * 
 */
export const getV1PlayerRecordBankHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 銀行帳戶信息更新的歷史列表",
  "method": "GET",
  "path": "/api/v1/player/record/bank-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/bank-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f047192bca62a2a9271e355",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f047192bca62a076071e354",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f047192bca62acffe71e353",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f047192bca62a42eb71e352",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f047192bca62a0cf171e351",
      "name": "start",
      "example": "",
      "desc": "起始時間"
    },
    {
      "required": "1",
      "_id": "5f047192bca62ada2371e350",
      "name": "end",
      "example": "",
      "desc": "結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 玩家信息变更历史列表
 * @path /api/v1/player/record/player-update-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param keyword 關鍵字 required
 * 
 */
export const getV1PlayerRecordPlayerUpdateHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 玩家信息变更历史列表",
  "method": "GET",
  "path": "/api/v1/player/record/player-update-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/player-update-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0471a5bca62a4ded71e35c",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0471a5bca62ab5c271e35b",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0471a5bca62a279671e35a",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0471a5bca62aaf8a71e359",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0471a5bca62aaebc71e358",
      "name": "keyword",
      "example": "",
      "desc": "關鍵字"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 調整歷史列表
 * @path /v1/player/record/adjustment-history
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 條件起始時間 required
 * @param end 條件交易結束時間 required
 * 
 */
export const getPlayerRecordAdjustmentHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 調整歷史列表",
  "method": "GET",
  "path": "/v1/player/record/adjustment-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/adjustment-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafdd3680d17644de75f7e",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafdd3680d171044e75f7d",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafdd3680d178162e75f7c",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafdd3680d175b7ce75f7b",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5efafdd3680d172ce4e75f7a",
      "name": "start",
      "example": "",
      "desc": "條件起始時間"
    },
    {
      "required": "1",
      "_id": "5efafdd3680d176a15e75f79",
      "name": "end",
      "example": "",
      "desc": "條件交易結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 -好友推荐历史纪录列表
 * @path /api/v1/player/record/friend-referral-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 起始時間 required
 * @param end 結束時間 required
 * 
 */
export const getV1PlayerRecordFriendReferralHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 -好友推荐历史纪录列表",
  "method": "GET",
  "path": "/api/v1/player/record/friend-referral-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/friend-referral-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0470e1bca62a225d71e330",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0470e1bca62a6f9f71e32f",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0470e1bca62ac7ac71e32e",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0470e1bca62a85c871e32d",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0470e1bca62a038f71e32c",
      "name": "start",
      "example": "",
      "desc": "起始時間"
    },
    {
      "required": "1",
      "_id": "5f0470e1bca62a68a971e32b",
      "name": "end",
      "example": "",
      "desc": "結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 轉帳列表轉帳類型拉清單
 * @path /v1/player/record/transfer/type/list
 * 
 */
export const getPlayerRecordTransferTypeList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 轉帳列表轉帳類型拉清單",
  "method": "GET",
  "path": "/v1/player/record/transfer/type/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transfer/type/list",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 餘額歷史列表
 * @path /v1/player/record/balance-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param start 交易起始時間 required
 * @param end 交易結束時間 required
 * 
 */
export const getPlayerRecordBalanceHistorys = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 餘額歷史列表",
  "method": "GET",
  "path": "/v1/player/record/balance-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/balance-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0471d2bca62a4efb71e364",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0471d2bca62a302b71e363",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0471d2bca62a4e8671e362",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0471d2bca62aa88a71e361",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0471d2bca62ab58f71e360",
      "name": "start",
      "example": "",
      "desc": "交易起始時間"
    },
    {
      "required": "1",
      "_id": "5f0471d2bca62a3ff971e35f",
      "name": "end",
      "example": "",
      "desc": "交易結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 轉帳列表遊戲平台下拉清單
 * @path /v1/player/record/transfer/game/list
 * 
 */
export const getPlayerRecordTransferGameList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 轉帳列表遊戲平台下拉清單",
  "method": "GET",
  "path": "/v1/player/record/transfer/game/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transfer/game/list",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 未結算遊戲紀錄
 * @path /api/v1/player/record/unsettled-game-history
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getGameHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 未結算遊戲紀錄",
  "method": "GET",
  "path": "/api/v1/player/record/unsettled-game-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/unsettled-game-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f05632cbca62a845671e420",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f05632cbca62a4e0871e41f",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f05632cbca62a3ff571e41e",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f05632cbca62a8b7871e41d",
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
 * @title 玩家紀錄 - 存款列表狀態下拉清單
 * @path /v1/player/record/deposit-status-list
 * 
 */
export const getPlayerRecordDepositStatusList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 存款列表狀態下拉清單",
  "method": "GET",
  "path": "/v1/player/record/deposit-status-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/deposit-status-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 風險評分記錄表
 * @path /v1/player/record/risk-score-history
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getRiskScoreHistory = (params, options = {}) => {
  const interfaceData={
  "title": "風險評分記錄表",
  "method": "GET",
  "path": "/v1/player/record/risk-score-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/risk-score-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f046d6ebca62a7af171e300",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d6ebca62ad73571e2ff",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d6ebca62a6c1771e2fe",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d6ebca62a854771e2fd",
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
 * @title 玩家紀錄 - 取款列表
 * @path /v1/player/record/withdrawal
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getPlayerRecordWithdrawal = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 取款列表",
  "method": "GET",
  "path": "/v1/player/record/withdrawal",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/withdrawal",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafde0680d179540e75f99",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafde0680d171febe75f98",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafde0680d17d6a4e75f97",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafde0680d172848e75f96",
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
 * @title 重複帳號
 * @path /v1/player/record/duplicate-accountlist
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getDuplicateAccountList = (params, options = {}) => {
  const interfaceData={
  "title": "重複帳號",
  "method": "GET",
  "path": "/v1/player/record/duplicate-accountlist",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/duplicate-accountlist",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f046d16bca62a78db71e2f0",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d16bca62a5b1971e2ef",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d16bca62a8a9f71e2ee",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d16bca62a1c3371e2ed",
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
 * @title 玩家紀錄 - 取款列表狀態下拉清單
 * @path /v1/player/record/withdrawal-status-list
 * 
 */
export const getPlayerRecordWithdrawalStatusList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 取款列表狀態下拉清單",
  "method": "GET",
  "path": "/v1/player/record/withdrawal-status-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/withdrawal-status-list",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 博彩责任历史纪录
 * @path /api/v1/player/record/responsible-gaming-history
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param status 預設為0 全部 required
 * 
 */
export const getResponsibleGamingHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 博彩责任历史纪录",
  "method": "GET",
  "path": "/api/v1/player/record/responsible-gaming-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/api/v1/player/record/responsible-gaming-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0563debca62ace8771e427",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0563debca62a975171e426",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0563debca62af29c71e425",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0563debca62abb0e71e424",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0563debca62a046a71e423",
      "name": "status",
      "example": "0",
      "desc": "預設為0 全部"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - IP历史
 * @path /v1/player/record/ip-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param status 預設為0 全部 required
 * 
 */
export const getIpHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - IP历史",
  "method": "GET",
  "path": "/v1/player/record/ip-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/ip-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0470adbca62af26e71e321",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0470adbca62a7df771e320",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0470adbca62a3f9271e31f",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0470adbca62ab68471e31e",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0470adbca62a3f6171e31d",
      "name": "status",
      "example": "0",
      "desc": "預設為0 全部"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取款條件紀錄
 * @path /v1/player/record/withdrawal-condition-history
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getWithdrawCondition = (params, options = {}) => {
  const interfaceData={
  "title": "取款條件紀錄",
  "method": "GET",
  "path": "/v1/player/record/withdrawal-condition-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/withdrawal-condition-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f046f63bca62af15c71e315",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5f046f63bca62a070971e314",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f046f63bca62a487c71e313",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f046f63bca62a10ea71e312",
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
 * @title 玩家紀錄 - 信息历史纪录
 * @path /v1/player/record/message-historys
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param status 預設為0 全部 required
 * 
 */
export const getMessageHistory = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 信息历史纪录",
  "method": "GET",
  "path": "/v1/player/record/message-historys",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/message-historys",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f0470c7bca62a950271e328",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f0470c7bca62a730271e327",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f0470c7bca62aa9eb71e326",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f0470c7bca62af6fb71e325",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f0470c7bca62a098471e324",
      "name": "status",
      "example": "0",
      "desc": "預設為0 全部"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家紀錄 - 轉帳列表
 * @path /v1/player/record/transfers
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param status 狀態 required
 * @param game 遊戲平台 required
 * @param id ID required
 * @param suspiciousTransaction 可疑交易 required
 * @param transferType 轉帳類型 required
 * @param start 交易起始時間 required
 * @param end 交易結束時間 required
 * 
 */
export const getPlayerRecordTransfers = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 轉帳列表",
  "method": "GET",
  "path": "/v1/player/record/transfers",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transfers",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafde6680d1743cbe75fad",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5efafde6680d173b7fe75fac",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5efafde6680d17f6efe75fab",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafde6680d17b5dee75faa",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5efafde6680d172e58e75fa9",
      "name": "status",
      "example": "0",
      "desc": "狀態"
    },
    {
      "required": "1",
      "_id": "5efafde6680d172f11e75fa8",
      "name": "game",
      "example": "0",
      "desc": "遊戲平台"
    },
    {
      "required": "1",
      "_id": "5efafde6680d173bdde75fa7",
      "name": "id",
      "example": "",
      "desc": "ID"
    },
    {
      "required": "1",
      "_id": "5efafde6680d176d5ee75fa6",
      "name": "suspiciousTransaction",
      "example": "0",
      "desc": "可疑交易"
    },
    {
      "required": "1",
      "_id": "5efafde6680d17c6e7e75fa5",
      "name": "transferType",
      "example": "0",
      "desc": "轉帳類型"
    },
    {
      "required": "1",
      "_id": "5efafde6680d17b48be75fa4",
      "name": "start",
      "example": "",
      "desc": "交易起始時間"
    },
    {
      "required": "1",
      "_id": "5efafde6680d170c1ae75fa3",
      "name": "end",
      "example": "",
      "desc": "交易結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC紀錄
 * @path /v1/player/record/kyc-history
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getKyc = (params, options = {}) => {
  const interfaceData={
  "title": "KYC紀錄",
  "method": "GET",
  "path": "/v1/player/record/kyc-history",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/kyc-history",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f046d5ebca62abf6271e2fa",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d5ebca62a0f0871e2f9",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d5ebca62a5a9171e2f8",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f046d5ebca62a9e7571e2f7",
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
 * @title 玩家紀錄 - 轉帳列表可疑交易下拉清單
 * @path /v1/player/record/transfer/suspicious/list
 * 
 */
export const getPlayerRecordTransferSuspiciousList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家紀錄 - 轉帳列表可疑交易下拉清單",
  "method": "GET",
  "path": "/v1/player/record/transfer/suspicious/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/record/transfer/suspicious/list",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  