/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 玩家詳情 - 註冊信息
 * @path /v1/player/user-register/{uuid}
 * @param uuid  
 * 
 */
export const getUserRegister = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 註冊信息",
  "method": "GET",
  "path": "/v1/player/user-register/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-register/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e1cc6bca62a5bee7206e1",
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
 * @title 玩家詳情 - 基本資料
 * @path /v1/player/user-profile/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerUserProfile = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 基本資料",
  "method": "GET",
  "path": "/v1/player/user-profile/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-profile/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e1ccdbca62ad0f77206e4",
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
 * @title 玩家詳情 - 更新 vip 等級
 * @path /v1/player/user-vip/:uuid
 * @param uuid user uuid 
 * 
 */
export const putPlayerUserVipUuid = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 更新 vip 等級",
  "method": "PUT",
  "path": "/v1/player/user-vip/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-vip/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f914d213fe327ec0f85bb14",
      "name": "uuid",
      "desc": "user uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "vipLevelSettingUUID": {
      "type": "string",
      "description": "vip 等級 uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 博彩责任資訊
 * @path /v1/player/bet-dutyInfo/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerBetDutyInfo = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 博彩责任資訊",
  "method": "GET",
  "path": "/v1/player/bet-dutyInfo/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/bet-dutyInfo/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e1cd6bca62a9d657206e7",
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
 * @title 查詢玩家身份檢查狀態
 * @path /v1/player/identity-check/{uuid}
 * @param uuid 使用者 UUID 
 * 
 */
export const getPlayerIdentityCheck = (params, options = {}) => {
  const interfaceData={
  "title": "查詢玩家身份檢查狀態",
  "method": "GET",
  "path": "/v1/player/identity-check/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/identity-check/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f698dad3fe327773185b5d8",
      "name": "uuid",
      "desc": "使用者 UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢玩家 KYC 評分
 * @path /v1/player/kyc-status/{uuid}
 * @param uuid 欲查詢的玩家 UUID 
 * 
 */
export const getPlayerKycStatus = (params, options = {}) => {
  const interfaceData={
  "title": "查詢玩家 KYC 評分",
  "method": "GET",
  "path": "/v1/player/kyc-status/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/kyc-status/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f695ff43fe32776bc85b5c8",
      "name": "uuid",
      "desc": "欲查詢的玩家 UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 金融帳戶信息 - 新增金融帳戶信息
 * @path /v1/player/financial-account-information
 * 
 */
export const postPlayerFinancialAccountInformation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 金融帳戶信息 - 新增金融帳戶信息",
  "method": "POST",
  "path": "/v1/player/financial-account-information",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/financial-account-information",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "userUuid": {
      "type": "string",
      "title": "uuid"
    },
    "accountType": {
      "type": "integer",
      "description": "銀行類型 1:存款銀行 2:取款銀行"
    },
    "bankName": {
      "type": "string",
      "description": "銀行名稱"
    },
    "accountFullName": {
      "type": "string",
      "description": "銀行帳號全名"
    },
    "accountNumber": {
      "type": "string",
      "description": "銀行帳號號碼"
    },
    "province": {
      "type": "string",
      "description": "省份"
    },
    "city": {
      "type": "string",
      "description": "城市"
    },
    "branch": {
      "type": "string",
      "description": "分行"
    },
    "bankAddress": {
      "type": "string",
      "description": "銀行地址"
    },
    "verifyStatus": {
      "type": "integer",
      "description": "驗證狀態 0:未驗證 1:已驗證"
    },
    "status": {
      "type": "integer",
      "description": "狀態 0:關閉 1:啟用"
    },
    "isDefault": {
      "type": "integer",
      "description": "是否默認 0:否 1:是"
    },
    "isActive": {
      "type": "integer",
      "description": "是否禁用 0:否 1:是"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 查詢狀態
 * @path /v1/player/player-operation/{uuid}
 * @param uuid  
 * 
 */
export const playerOperation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢狀態",
  "method": "GET",
  "path": "/v1/player/player-operation/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/player-operation/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69a6733fe3278a5d85b609",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "description": "狀態 (0:啟用,1:鎖定,2:自設門禁)"
    },
    "isCashback": {
      "type": "boolean",
      "description": "是否可以返水"
    },
    "isPromotion": {
      "type": "boolean",
      "description": "是否可以優惠"
    },
    "isWithdrawal": {
      "type": "boolean",
      "description": "是否可以取款"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 刪除備註
 * @path /v1/player/user-remark/{id}
 * @param id  
 * 
 */
export const deletePlayerUserRemark = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 刪除備註",
  "method": "DELETE",
  "path": "/v1/player/user-remark/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-remark/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17cae5bca62a1cae71f178",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 查詢kyc附件圖片List
 * @path /v1/player/user-kyc-imagelist/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerUserKycImagelist = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢kyc附件圖片List",
  "method": "GET",
  "path": "/v1/player/user-kyc-imagelist/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc-imagelist/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f155682bca62a64d571ef0f",
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
 * @title 玩家詳情 - 基本資料 - 修改聯繫方式
 * @path /v1/player/update-user-content/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerUpdateUserContent = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 基本資料 - 修改聯繫方式",
  "method": "PATCH",
  "path": "/v1/player/update-user-content/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/update-user-content/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e2122bca62aea7072073d",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "email": {
      "type": "string",
      "description": "電子郵箱地址"
    },
    "isValidate": {
      "type": "number",
      "description": "是否驗證 0:否 1:是"
    },
    "dialingCode": {
      "type": "string",
      "description": "國家區號"
    },
    "contactNumber": {
      "type": "string",
      "description": "聯繫電話"
    },
    "wechat": {
      "type": "string",
      "description": "微信"
    },
    "qq": {
      "type": "string",
      "description": "QQ"
    },
    "skype": {
      "type": "string",
      "description": "Skype"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 博彩责任狀態變更
 * @path /v1/player/update-bet-duty/{uuid}
 * @param uuid  
 * 
 */
export const updateBetDuty = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 博彩责任狀態變更",
  "method": "PUT",
  "path": "/v1/player/update-bet-duty/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/update-bet-duty/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e2157bca62a2013720740",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "enable": {
      "type": "string",
      "description": "狀態變更 0:取消 1:啟用"
    },
    "type": {
      "type": "string"
    },
    "reason": {
      "type": "string",
      "description": "原因"
    },
    "accessControlTemporaryData": {
      "type": "object",
      "properties": {
        "enterNumberMonths": {
          "type": "number",
          "description": "请输入您希望暂时性冻结账号的月数[183,365,1095,1826]其中一個數值"
        }
      },
      "required": [
        "enterNumberMonths"
      ],
      "description": "自设门禁(暂时)"
    },
    "coolDownData": {
      "type": "object",
      "properties": {
        "coolDownTime": {
          "type": "number",
          "description": "[1,7,30,42]其中一個數值"
        }
      },
      "required": [
        "coolDownTime"
      ],
      "description": "冷却"
    },
    "depositLimitData": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "number",
          "description": "设定存款金额"
        },
        "nextDay": {
          "type": "number",
          "description": "接下來幾天"
        }
      },
      "required": [
        "amount",
        "nextDay"
      ],
      "description": "存款限额"
    },
    "bettingLimitData": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "number",
          "description": "设定投注限额"
        },
        "nextDay": {
          "type": "number",
          "description": "接下來幾天"
        }
      },
      "required": [
        "amount",
        "nextDay"
      ],
      "description": "投注限额"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 修改kyc附件
 * @path /v1/player/user-kyc/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerUserKyc = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 修改kyc附件",
  "method": "PATCH",
  "path": "/v1/player/user-kyc/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f155655bca62a305b71ef07",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "idcard": {
      "type": "string",
      "description": "身份證"
    },
    "identificationStatus": {
      "type": "number",
      "description": "身份證狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "identificationComment": {
      "type": "string",
      "description": "身份證評論"
    },
    "addressStatus": {
      "type": "number",
      "description": "地址狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "addressComment": {
      "type": "string",
      "description": "地址評論"
    },
    "incomeStatus": {
      "type": "number",
      "description": "財富狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "incomeComment": {
      "type": "string",
      "description": "財富評論"
    },
    "dwStatus": {
      "type": "number",
      "description": "存款/取款狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "dwComment": {
      "type": "string",
      "description": "存款/取款評論"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 查詢備註
 * @path /v1/player/user-remark/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerUserRemark = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢備註",
  "method": "GET",
  "path": "/v1/player/user-remark/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-remark/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17cad1bca62a267a71f172",
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
 * @title 玩家詳情 - 修改操作
 * @path /v1/player/player-operation/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerPlayerOperation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 修改操作",
  "method": "PATCH",
  "path": "/v1/player/player-operation/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/player-operation/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6316be3fe3277b7385b4e2",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "lock_status": {
      "type": "boolean",
      "description": "是否鎖定狀態"
    },
    "self_deny_status": {
      "type": "boolean",
      "description": "是否自設門禁狀態"
    },
    "isCashback": {
      "type": "boolean",
      "description": "是否可以返水"
    },
    "isPromotion": {
      "type": "boolean",
      "description": "是否可以優惠"
    },
    "isWithdrawal": {
      "type": "boolean",
      "description": "是否可以取款"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 取款条件
 * @path /v1/player/withdrawal/{id}
 * @param id ID 
 * @param page  required
 * @param rows  required
 * @param sortColumn descending ascending required
 * @param sortOrder 欄位名稱 required
 * @param transactionType 交易类型 1:存款 2:投注 required
 * 
 */
export const getPlayerWithdrawal = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 取款条件",
  "method": "GET",
  "path": "/v1/player/withdrawal/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/withdrawal/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6d4cad3fe32709ec85b76c",
      "name": "id",
      "example": "-1",
      "desc": "ID"
    }
  ],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6d4cad3fe32769d785b771",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6d4cad3fe327fe1f85b770",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6d4cad3fe3270d9385b76f",
      "name": "sortColumn",
      "example": "",
      "desc": "descending ascending"
    },
    {
      "required": "1",
      "_id": "5f6d4cad3fe3274bab85b76e",
      "name": "sortOrder",
      "example": "",
      "desc": "欄位名稱"
    },
    {
      "required": "1",
      "_id": "5f6d4cad3fe327335685b76d",
      "name": "transactionType",
      "example": "",
      "desc": "交易类型 1:存款 2:投注"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 加獎金審核通過
 * @path /v1/player/user-add-bonus-finished
 * 
 */
export const postPlayerUserAddBonusFinished = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 加獎金審核通過",
  "method": "POST",
  "path": "/v1/player/user-add-bonus-finished",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-add-bonus-finished",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "user_bonus uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 重置user密碼
 * @path /v1/player/user-reset-password/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerUserResetPassword = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 重置user密碼",
  "method": "PATCH",
  "path": "/v1/player/user-reset-password/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-reset-password/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1fe1c7bca62a3afc71f6f3",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "password": {
      "type": "string",
      "description": "密碼"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 重置user提款密碼
 * @path /v1/player/user-reset-withdrawal-password/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerUserResetWithdrawalPassword = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 重置user提款密碼",
  "method": "PATCH",
  "path": "/v1/player/user-reset-withdrawal-password/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-reset-withdrawal-password/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1fe1bbbca62a752c71f6f0",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "password": {
      "type": "string",
      "description": "密碼"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 金融帳戶信息 - 銀行列表
 * @path /v1/player/financial-account-information/{uuid}
 * @param uuid  
 * @param page  required
 * @param rows  required
 * @param accountType 1:存款銀行 2:取款銀行 required
 * @param sortColumn descending ascending required
 * @param sortOrder 欄位名稱 required
 * 
 */
export const getPlayerFinancialAccountInformation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 金融帳戶信息 - 銀行列表",
  "method": "GET",
  "path": "/v1/player/financial-account-information/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/financial-account-information/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e1ce0bca62aad817206ea",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [
    {
      "required": "1",
      "_id": "5f4e1ce0bca62a3eef7206ef",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f4e1ce0bca62a28be7206ee",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f4e1ce0bca62a48d87206ed",
      "name": "accountType",
      "example": "1",
      "desc": "1:存款銀行 2:取款銀行"
    },
    {
      "required": "0",
      "_id": "5f4e1ce0bca62a3ebe7206ec",
      "name": "sortColumn",
      "example": "",
      "desc": "descending ascending"
    },
    {
      "required": "0",
      "_id": "5f4e1ce0bca62ad4387206eb",
      "name": "sortOrder",
      "example": "",
      "desc": "欄位名稱"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 新增kyc附件
 * @path /v1/player/user-kyc
 * 
 */
export const postPlayerUserKyc = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 新增kyc附件",
  "method": "POST",
  "path": "/v1/player/user-kyc",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    },
    "idcard": {
      "type": "string",
      "description": "身份證"
    },
    "identificationStatus": {
      "type": "number",
      "description": "身份證狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "identificationComment": {
      "type": "string",
      "description": "身份證評論"
    },
    "addressStatus": {
      "type": "number",
      "description": "地址狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "addressComment": {
      "type": "string",
      "description": "地址評論"
    },
    "incomeStatus": {
      "type": "number",
      "description": "財富狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "incomeComment": {
      "type": "string",
      "description": "財富評論"
    },
    "dwStatus": {
      "type": "number",
      "description": "存款/取款狀態 0:無附件 1:附件錯誤 2:已驗證 3:未驗證"
    },
    "dwComment": {
      "type": "string",
      "description": "存款/取款評論"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 新增備註
 * @path /v1/player/user-remark
 * 
 */
export const postPlayerUserRemark = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 新增備註",
  "method": "POST",
  "path": "/v1/player/user-remark",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-remark",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    },
    "remark": {
      "type": "string",
      "description": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 修改備註
 * @path /v1/player/user-remark/{id}
 * @param id  
 * 
 */
export const patchPlayerUserRemark = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 修改備註",
  "method": "PATCH",
  "path": "/v1/player/user-remark/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-remark/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17cadebca62a073e71f175",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    },
    "remark": {
      "type": "string",
      "description": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 查詢風險評分
 * @path /v1/player/user-risk-score/{user_uuid}
 * @param user_uuid  
 * 
 */
export const getPlayerUserRiskScore = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢風險評分",
  "method": "GET",
  "path": "/v1/player/user-risk-score/{user_uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-risk-score/{user_uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6c435a3fe32702c185b75a",
      "name": "user_uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 查詢kyc附件
 * @path /v1/player/user-kyc/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerUserKyc = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢kyc附件",
  "method": "GET",
  "path": "/v1/player/user-kyc/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f15563ebca62a372b71ef02",
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
 * @title 更新玩家 KYC 評分
 * @path /v1/player/kyc-status/{uuid}
 * @param uuid 欲更新的玩家 UUID 
 * 
 */
export const putPlayerKycStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更新玩家 KYC 評分",
  "method": "PUT",
  "path": "/v1/player/kyc-status/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/kyc-status/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6966a93fe327ebc485b5cb",
      "name": "uuid",
      "desc": "欲更新的玩家 UUID"
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "string",
      "description": "欲更新的 KYC 狀態"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 遊戲信息
 * @path /v1/player/game-info/{uuid}
 * @param uuid  
 * 
 */
export const getPlayerGameInfo = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 遊戲信息",
  "method": "GET",
  "path": "/v1/player/game-info/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/game-info/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f6da03e3fe327070485b7a2",
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
 * @title 玩家詳情 - 帐号讯息
 * @path /v1/player/account-information/{uuid}
 * @param uuid  
 * 
 */
export const accountInformation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 帐号讯息",
  "method": "GET",
  "path": "/v1/player/account-information/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/account-information/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f5b0dd63fe327574f85b153",
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
 * @title 玩家詳情 - 金融帳戶信息 - 新增金融帳戶信息_copy
 * @path /v1/player/financial-account-information_1600668571357
 * 
 */
export const postPlayerFinancialAccountInformation_1600668571357 = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 金融帳戶信息 - 新增金融帳戶信息_copy",
  "method": "POST",
  "path": "/v1/player/financial-account-information_1600668571357",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/financial-account-information_1600668571357",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "userUuid": {
      "type": "string",
      "title": "uuid"
    },
    "accountType": {
      "type": "integer",
      "description": "銀行類型 1:存款銀行 2:取款銀行"
    },
    "bankName": {
      "type": "string",
      "description": "銀行名稱"
    },
    "accountFullName": {
      "type": "string",
      "description": "銀行帳號全名"
    },
    "accountNumber": {
      "type": "string",
      "description": "銀行帳號號碼"
    },
    "province": {
      "type": "string",
      "description": "省份"
    },
    "city": {
      "type": "string",
      "description": "城市"
    },
    "branch": {
      "type": "string",
      "description": "分行"
    },
    "bankAddress": {
      "type": "string",
      "description": "銀行地址"
    },
    "verifyStatus": {
      "type": "integer",
      "description": "驗證狀態 0:未驗證 1:已驗證"
    },
    "status": {
      "type": "integer",
      "description": "狀態 0:關閉 1:啟用"
    },
    "isDefault": {
      "type": "integer",
      "description": "是否默認 0:否 1:是"
    },
    "isActive": {
      "type": "integer",
      "description": "是否禁用 0:否 1:是"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 刪除取款條件
 * @path /v1/player/withdrawal
 * 
 */
export const deletePlayerWithdrawal = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 刪除取款條件",
  "method": "DELETE",
  "path": "/v1/player/withdrawal",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/withdrawal",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "reason": {
            "type": "string",
            "description": "刪除原因"
          }
        },
        "required": [
          "id",
          "reason"
        ]
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC 允许提款状态
 * @path /v1/player/kyc-risk-score/withdraw/{user_uuid}
 * @param user_uuid  
 * 
 */
export const getPlayerKycRiskScoreWithdraw = (params, options = {}) => {
  const interfaceData={
  "title": "KYC 允许提款状态",
  "method": "GET",
  "path": "/v1/player/kyc-risk-score/withdraw/{user_uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/kyc-risk-score/withdraw/{user_uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69f57a3fe327384e85b662",
      "name": "user_uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 新增kyc附件圖片
 * @path /v1/player/user-kyc-image
 * 
 */
export const postPlayerUserKycImage = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 新增kyc附件圖片",
  "method": "POST",
  "path": "/v1/player/user-kyc-image",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc-image",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "image": {
      "type": "string",
      "description": "圖片base64"
    },
    "imageType": {
      "type": "number",
      "description": "圖片類型 0:kyc-身份證 1:kyc-地址 2:kyc-財富 3:kyc-存款/取款"
    },
    "userUUID": {
      "type": "string",
      "description": "User uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 修改kyc附件圖片
 * @path /v1/player/user-kyc-image/{id}
 * @param id  
 * 
 */
export const patchPlayerUserKycImage = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 修改kyc附件圖片",
  "method": "PATCH",
  "path": "/v1/player/user-kyc-image/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc-image/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f15569abca62a433e71ef14",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "isVisible": {
      "type": "boolean",
      "description": "是否可視"
    },
    "userUUID": {
      "type": "string",
      "description": "User uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 金融帳戶信息 - 修改金融帳戶信息
 * @path /v1/player/financial-account-information/{id}
 * @param id  
 * 
 */
export const putPlayerFinancialAccountInformation = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 金融帳戶信息 - 修改金融帳戶信息",
  "method": "PUT",
  "path": "/v1/player/financial-account-information/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/financial-account-information/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e21e7bca62aadea720748",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "userUuid": {
      "type": "string"
    },
    "accountType": {
      "type": "integer",
      "description": "銀行類型 1:存款銀行 2:取款銀行"
    },
    "bankName": {
      "type": "string",
      "description": "銀行名稱"
    },
    "accountFullName": {
      "type": "string",
      "description": "銀行帳號全名"
    },
    "accountNumber": {
      "type": "string",
      "description": "銀行帳號號碼"
    },
    "province": {
      "type": "string",
      "description": "省份"
    },
    "city": {
      "type": "string",
      "description": "城市"
    },
    "branch": {
      "type": "string",
      "description": "分行"
    },
    "bankAddress": {
      "type": "string",
      "description": "銀行地址"
    },
    "verifyStatus": {
      "type": "integer",
      "description": "驗證狀態 0:未驗證 1:已驗證"
    },
    "status": {
      "type": "integer",
      "description": "狀態 0:關閉 1:啟用"
    },
    "isDefault": {
      "type": "integer",
      "description": "是否默認 0:否 1:是"
    },
    "isActive": {
      "type": "integer",
      "description": "是否禁用 0:否 1:是"
    },
    "deleted": {
      "type": "string",
      "description": "刪除時間"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 加獎金
 * @path /v1/player/user-add-bonus-request
 * 
 */
export const postPlayerUserAddBonusRequest = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 加獎金",
  "method": "POST",
  "path": "/v1/player/user-add-bonus-request",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-add-bonus-request",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "user_uuid": {
      "type": "string"
    },
    "bonus_condition": {
      "type": "number",
      "description": "獎金條件"
    },
    "deposit_condition": {
      "type": "number",
      "description": "存款條件"
    },
    "rate_condition": {
      "type": "number",
      "description": "流水倍率條件"
    },
    "release_date": {
      "type": "string",
      "description": "發放時間"
    },
    "status": {
      "type": "number",
      "description": "狀態 (1:等待 2:成功)"
    },
    "is_sub_deposit": {
      "type": "boolean",
      "description": "在取款条件中减去存款额"
    },
    "promo_uuid": {
      "type": "string",
      "description": "相關優惠活動uuid"
    },
    "transaction_uuid": {
      "type": "string",
      "description": "相關資金流水uuid"
    },
    "reason": {
      "type": "string",
      "description": "原因"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 基本資料 - 修改個人信息
 * @path /v1/player/update-user-profile/{uuid}
 * @param uuid  
 * 
 */
export const patchPlayerUpdateUserProfile = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 基本資料 - 修改個人信息",
  "method": "PATCH",
  "path": "/v1/player/update-user-profile/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/update-user-profile/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e211bbca62a0df972073a",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "firstName": {
      "type": "string",
      "description": "姓名"
    },
    "lastName": {
      "type": "string",
      "description": "姓氏"
    },
    "gender": {
      "type": "integer",
      "description": "性別 0:男 1:女"
    },
    "dateOfBirth": {
      "type": "string",
      "description": "出生年月日"
    },
    "birthPlact": {
      "type": "string",
      "description": "出生地"
    },
    "nationality": {
      "type": "string",
      "description": "國籍"
    },
    "language": {
      "type": "string",
      "description": "語言"
    },
    "postalCode": {
      "type": "number",
      "description": "郵政編碼"
    },
    "addressCountry": {
      "type": "string",
      "description": "地址 - 國家"
    },
    "addressRegion": {
      "type": "string",
      "description": "地址 - 州/省份/區域"
    },
    "addressCity": {
      "type": "string",
      "description": "地址 - 城市"
    },
    "addressArea": {
      "type": "string",
      "description": "地址 - 鄉/鎮/市/區"
    },
    "addressRoad": {
      "type": "string",
      "description": "地址 - 村/里/鄰/路/街/巷/弄/號/棟/樓"
    },
    "securityQuestion": {
      "type": "string",
      "description": "安全驗證問題"
    },
    "securityAnswer": {
      "type": "string",
      "description": "安全驗證問題答案"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 帐号讯息 - 錢包詳情
 * @path /v1/player/wallet-details/{uuid}
 * @param uuid  
 * 
 */
export const walletDetails = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 帐号讯息 - 錢包詳情",
  "method": "GET",
  "path": "/v1/player/wallet-details/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/wallet-details/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e2239bca62a263372074d",
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
 * @title 玩家詳情 - 查詢kyc附件圖片
 * @path /v1/player/user-kyc-image/{id}
 * @param id  
 * 
 */
export const getPlayerUserKycImage = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 查詢kyc附件圖片",
  "method": "GET",
  "path": "/v1/player/user-kyc-image/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc-image/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f155676bca62a39f271ef0c",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 刪除kyc附件圖片
 * @path /v1/player/user-kyc-image/{id}
 * @param id  
 * 
 */
export const deletePlayerUserKycImage = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 刪除kyc附件圖片",
  "method": "DELETE",
  "path": "/v1/player/user-kyc-image/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-kyc-image/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1556a8bca62a5e8471ef17",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "uuid": {
      "type": "string",
      "description": "uuid"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 玩家詳情 - 金融帳戶信息 - 銀行列表ById
 * @path /v1/player/financial-account-information-single/{id}
 * @param id  
 * 
 */
export const getPlayerFinancialAccountInformationSingle = (params, options = {}) => {
  const interfaceData={
  "title": "玩家詳情 - 金融帳戶信息 - 銀行列表ById",
  "method": "GET",
  "path": "/v1/player/financial-account-information-single/{id}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/financial-account-information-single/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f4e21d6bca62aba10720743",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  