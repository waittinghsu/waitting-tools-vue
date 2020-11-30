/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得遊戲清單列表
 * @path /v1/system/game/description
 * @param page  required
 * @param rows  required
 * @param gameTypeUUID 遊戲類型 uuid required
 * @param name 遊戲名稱，可模糊查詢 required
 * @param gameCode 遊戲代碼 required
 * @param isEnabled 是否啟用（狀態   0:false 1:true required
 * @param isFlagShowInSite 是否旗標   0:false 1:true required
 * @param externalGameID 外部遊戲 ID required
 * @param attribute 其他屬性 required
 * @param gameAPIUUID 遊戲 api uuid required
 * 
 */
export const getGamesDetailList = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲清單列表",
  "method": "GET",
  "path": "/v1/system/game/description",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f69c3fe3fe327b77185b658",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f69c3fe3fe3270e3385b657",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe32762a285b656",
      "name": "gameTypeUUID",
      "example": "0a44bdb8-bea7-4e04-8dcb-c03c075271a1",
      "desc": "遊戲類型 uuid"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe327064085b655",
      "name": "name",
      "example": "球",
      "desc": "遊戲名稱，可模糊查詢"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe3276a1585b654",
      "name": "gameCode",
      "example": "test333",
      "desc": "遊戲代碼"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe3271e9685b653",
      "name": "isEnabled",
      "example": "1",
      "desc": "是否啟用（狀態   0:false 1:true"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe3271f1085b652",
      "name": "isFlagShowInSite",
      "example": "1",
      "desc": "是否旗標   0:false 1:true"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe327f16c85b651",
      "name": "externalGameID",
      "example": "sport123",
      "desc": "外部遊戲 ID"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe3276e6c85b650",
      "name": "attribute",
      "example": "attribute test",
      "desc": "其他屬性"
    },
    {
      "required": "0",
      "_id": "5f69c3fe3fe327b43785b64f",
      "name": "gameAPIUUID",
      "example": "63bd0b7e-2c00-4bbf-b07d-297ed18ae19f",
      "desc": "遊戲 api uuid"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得用戶銀行帳戶限制
 * @path /v1/system/player-center-financial-account-setting/limit-condition/get/:id
 * @param id  
 * 
 */
export const getUserBankAccountLimitID = (params, options = {}) => {
  const interfaceData={
  "title": "取得用戶銀行帳戶限制",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/limit-condition/get/:id",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/limit-condition/get/:id",
  "status": "done",
  "req_params": [
    {
      "_id": "5f28efb4bca62a663471fa74",
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
 * @title KYC列表
 * @path /v1/system/kyc-setting
 * 
 */
export const getKYCList = (params, options = {}) => {
  const interfaceData={
  "title": "KYC列表",
  "method": "GET",
  "path": "/v1/system/kyc-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲類型
 * @path /v1/system/game/type/:uuid
 * @param uuid game type uuid 
 * 
 */
export const getSystemGameTypeUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲類型",
  "method": "GET",
  "path": "/v1/system/game/type/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/type/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f33a4fbbca62aa99a720439",
      "name": "uuid",
      "desc": "game type uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增用戶銀行帳戶限制
 * @path /v1/system/player-center-financial-account-setting/limit-condition/add
 * 
 */
export const addUserBankAccountLimit = (params, options = {}) => {
  const interfaceData={
  "title": "新增用戶銀行帳戶限制",
  "method": "POST",
  "path": "/v1/system/player-center-financial-account-setting/limit-condition/add",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/limit-condition/add",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "minAmount": {
      "type": "number"
    },
    "maxAmount": {
      "type": "number"
    },
    "accountCount": {
      "type": "number"
    },
    "isDepositBank": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除白名單
 * @path /v1/system/white-list/{uuid}
 * @param uuid  
 * 
 */
export const deleteSystemWhiteList = (params, options = {}) => {
  const interfaceData={
  "title": "刪除白名單",
  "method": "DELETE",
  "path": "/v1/system/white-list/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/white-list/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17e083bca62a1e9871f1ce",
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
 * @title 取得重複帳號設置
 * @path /v1/system/duplicate-account-setting
 * 
 */
export const getSystemDuplicateAccountSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得重複帳號設置",
  "method": "GET",
  "path": "/v1/system/duplicate-account-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/duplicate-account-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新用戶銀行帳戶限制
 * @path /v1/system/player-center-financial-account-setting/limit-condition/update/:id
 * @param id  
 * 
 */
export const updateUserBankAccountLimit = (params, options = {}) => {
  const interfaceData={
  "title": "更新用戶銀行帳戶限制",
  "method": "PATCH",
  "path": "/v1/system/player-center-financial-account-setting/limit-condition/update/:id",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/limit-condition/update/:id",
  "status": "done",
  "req_params": [
    {
      "_id": "5f28f029bca62a31fd71fa85",
      "name": "id",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "minAmount": {
      "type": "number"
    },
    "maxAmount": {
      "type": "number"
    },
    "accountCount": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得e-wallet設置
 * @path /v1/system/player-center-financial-account-setting/e-wallet/get
 * 
 */
export const getE_WalletSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得e-wallet設置",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/e-wallet/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/e-wallet/get",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新e-wallet設置
 * @path /v1/system/player-center-financial-account-setting/e-wallet/update
 * 
 */
export const updateE_WalletSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新e-wallet設置",
  "method": "PATCH",
  "path": "/v1/system/player-center-financial-account-setting/e-wallet/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/e-wallet/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "isInputNumberOnly": {
      "type": "boolean"
    },
    "minLength": {
      "type": "number"
    },
    "maxLength": {
      "type": "number"
    },
    "isAllowedToEdit": {
      "type": "boolean"
    },
    "isShownPhoneNumber": {
      "type": "boolean"
    },
    "isPhoneNumberRequired": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除遊戲類型
 * @path /v1/system/game/type/:uuid
 * @param uuid 遊戲類型 uuid 
 * 
 */
export const deleteSystemGameTypeUuid = (params, options = {}) => {
  const interfaceData={
  "title": "刪除遊戲類型",
  "method": "DELETE",
  "path": "/v1/system/game/type/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/type/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1e8861bca62a399d71f5f8",
      "name": "uuid",
      "desc": "遊戲類型 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "gamePlatform": {
      "type": "string",
      "title": "遊戲平台",
      "enum": [
        "AG"
      ],
      "description": "不確定哪來，先寫入字串"
    },
    "gameTypeCode": {
      "type": "string",
      "title": "遊戲類型代碼",
      "enum": [
        "sport",
        "poker"
      ]
    },
    "gameTypeName": {
      "type": "string",
      "title": "名稱",
      "enum": [
        "體育",
        "棋牌"
      ]
    },
    "languageCode": {
      "type": "string",
      "title": "語言代碼",
      "enum": [
        "zh_cn",
        "zh_tw"
      ]
    },
    "orderID": {
      "type": "number",
      "title": "排序",
      "enum": [
        0,
        1,
        2,
        3
      ],
      "description": "desc"
    },
    "note": {
      "type": "string",
      "title": "備註"
    },
    "autoAddNewGame": {
      "type": "number",
      "title": "自動加入新遊戲",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "autoAddNewCashback": {
      "type": "number",
      "title": "自動加入返水",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "status": {
      "type": "number",
      "title": "狀態",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "flagShowInSite": {
      "type": "number",
      "title": "旗標",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增遊戲清單
 * @path /v1/system/game/description
 * 
 */
export const addGameOfList = (params, options = {}) => {
  const interfaceData={
  "title": "新增遊戲清單",
  "method": "POST",
  "path": "/v1/system/game/description",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "gameTypeUUID": {
      "type": "string",
      "title": "遊戲類型 uuid"
    },
    "gameCode": {
      "type": "string",
      "title": "遊戲代碼"
    },
    "externalGameID": {
      "type": "string",
      "title": "外部遊戲 ID"
    },
    "attribute": {
      "type": "string",
      "title": "其他參數"
    },
    "name": {
      "type": "string",
      "title": "遊戲名稱"
    },
    "englishName": {
      "type": "string",
      "title": "英文遊戲名稱"
    },
    "pcImage": {
      "type": "string",
      "title": "pc 圖片路徑"
    },
    "mobileImage": {
      "type": "string",
      "title": "mobile 圖片路徑"
    },
    "device": {
      "type": "number",
      "title": "支援裝置",
      "description": "裝置類型(採二進制計算): 1:h5 2:flash 4:mobile 8:ios 16:android 32:desktop app",
      "enum": [
        1,
        3,
        7,
        8
      ]
    },
    "isProgresslve": {
      "type": "number",
      "title": "是否累計獎池",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isAvailableOffline": {
      "type": "number",
      "title": "是否支援離線模式",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isNewGame": {
      "type": "number",
      "title": "是否新遊戲",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isNoCshBack": {
      "type": "number",
      "title": "是否無返水",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isVoldBet": {
      "type": "number",
      "title": "是否無效投注",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isEnabled": {
      "type": "number",
      "title": "是否啟用",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isFlagShowInSite": {
      "type": "number",
      "title": "是否旗標",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isLocked": {
      "type": "number",
      "title": "是否鎖定",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isHotGame": {
      "type": "number",
      "title": "是否熱門遊戲",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "orderNum": {
      "type": "number",
      "title": "排序"
    },
    "note": {
      "type": "string",
      "title": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得crypto設置
 * @path /v1/system/player-center-financial-account-setting/crypto/get
 * 
 */
export const getCryptoSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得crypto設置",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/crypto/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/crypto/get",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得玩家中心取款頁面設定
 * @path /v1/system/payment-config/player-center-withdrawal-page-setting
 * 
 */
export const getSystemPaymentConfigPlayerCenterWithdrawalPageSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得玩家中心取款頁面設定",
  "method": "GET",
  "path": "/v1/system/payment-config/player-center-withdrawal-page-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/player-center-withdrawal-page-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新銀行帳戶設置
 * @path /v1/system/player-center-financial-account-setting/bank-account/update
 * 
 */
export const updateBankAccountSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新銀行帳戶設置",
  "method": "PATCH",
  "path": "/v1/system/player-center-financial-account-setting/bank-account/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/bank-account/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "isInputNumberOnly": {
      "type": "boolean"
    },
    "minLength": {
      "type": "number"
    },
    "maxLength": {
      "type": "number"
    },
    "isAllowedToEdit": {
      "type": "boolean"
    },
    "isShownPhoneNumber": {
      "type": "boolean"
    },
    "isPhoneNumberRequired": {
      "type": "boolean"
    },
    "isShownBranchName": {
      "type": "boolean"
    },
    "isBranchNameRequired": {
      "type": "boolean"
    },
    "isShownProvinceAndCity": {
      "type": "boolean"
    },
    "isProvinceAndCity": {
      "type": "boolean"
    },
    "isShownBranchAddress": {
      "type": "boolean"
    },
    "isBranchAddressRequired": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新others設置
 * @path /v1/system/player-center-financial-account-setting/others/update
 * 
 */
export const updateOtherSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新others設置",
  "method": "PATCH",
  "path": "/v1/system/player-center-financial-account-setting/others/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/others/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "accountValidateMode": {
      "type": "number"
    },
    "isDepositBankEnabled": {
      "type": "boolean"
    },
    "depositBank": {
      "type": "object",
      "properties": {
        "isRequiredAccountBeforeDeposit": {
          "type": "boolean"
        },
        "isLimitMaxAccountCount": {
          "type": "boolean"
        },
        "limitedMaxAccountCount": {
          "type": "number"
        },
        "limitedMaxAccountCountCheckType": {
          "type": "number"
        },
        "canUseInDepositAndWithdrawal": {
          "type": "boolean"
        },
        "isSetNewRegisteredAccountToUnverified": {
          "type": "boolean"
        }
      },
      "required": [
        "isRequiredAccountBeforeDeposit",
        "isLimitMaxAccountCount",
        "limitedMaxAccountCount",
        "limitedMaxAccountCountCheckType",
        "canUseInDepositAndWithdrawal",
        "isSetNewRegisteredAccountToUnverified"
      ]
    },
    "isRequiredAccountBeforeDeposit": {
      "type": "boolean"
    },
    "isLimitMaxAccountCount": {
      "type": "boolean"
    },
    "limitedMaxAccountCount": {
      "type": "number"
    },
    "limitedMaxAccountCountCheckType": {
      "type": "number"
    },
    "isEachFinancialInstitutionCanHaveOnlyOne": {
      "type": "boolean"
    },
    "isAllowedDelete": {
      "type": "boolean"
    },
    "isSetNewRegisteredAccountToUnverified": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲類型列表
 * @path /v1/system/game/type
 * @param page  required
 * @param rows  required
 * @param gameAPIUUID 遊戲提供商。game api uuid，對應畫面的遊戲提供商 required
 * @param gameTypeName 遊戲類型名稱。支援模糊查詢 required
 * 
 */
export const getSystemGameType = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲類型列表",
  "method": "GET",
  "path": "/v1/system/game/type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/type",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6af60b3fe327349985b6ea",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6af60b3fe327434885b6e9",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6af60b3fe327875185b6e8",
      "name": "gameAPIUUID",
      "example": "63bd0b7e-2c00-4bbf-b07d-297ed18ae19f",
      "desc": "遊戲提供商。game api uuid，對應畫面的遊戲提供商"
    },
    {
      "required": "0",
      "_id": "5f6af60b3fe327f65b85b6e7",
      "name": "gameTypeName",
      "example": "棋牌",
      "desc": "遊戲類型名稱。支援模糊查詢"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲錢包設置
 * @path /v1/system/game/supplier-wallet
 * @param page  required
 * @param rows  required
 * 
 */
export const getSystemGameSupplierWallet = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲錢包設置",
  "method": "GET",
  "path": "/v1/system/game/supplier-wallet",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/supplier-wallet",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f3cf57ebca62ad05f7205ac",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f3cf57ebca62a99117205ab",
      "name": "rows",
      "example": "10",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得銀行帳戶設置
 * @path /v1/system/player-center-financial-account-setting/bank-account/get
 * 
 */
export const getBankAccountSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得銀行帳戶設置",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/bank-account/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/bank-account/get",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新系統功能
 * @path /v1/system/system-feature
 * 
 */
export const patchSystemSystemFeature = (params, options = {}) => {
  const interfaceData={
  "title": "更新系統功能",
  "method": "PATCH",
  "path": "/v1/system/system-feature",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-feature",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "systemFeatures": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "description": "uuid"
          },
          "isEnable": {
            "type": "boolean",
            "description": "是否啟用"
          }
        },
        "required": [
          "uuid",
          "isEnable"
        ]
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查看用戶
 * @path /v1/system/system-user-list
 * @param page  required
 * @param rows  required
 * @param username  required
 * @param lastLogTimeStart 跟LastLogTimeEnd成對 required
 * @param lastLogTimeEnd  required
 * @param roleName user名字 required
 * @param userName  required
 * @param creatorSystemUserUserName 初始創建人 required
 * @param states  required
 * @param name  required
 * @param department  required
 * @param position  required
 * 
 */
export const getSystemSystemUserList = (params, options = {}) => {
  const interfaceData={
  "title": "查看用戶",
  "method": "GET",
  "path": "/v1/system/system-user-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f28f085bca62a1bfa71fa93",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f28f085bca62a37bb71fa92",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a014371fa91",
      "name": "username",
      "example": "admin",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a6d8e71fa90",
      "name": "lastLogTimeStart",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": "跟LastLogTimeEnd成對"
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a382e71fa8f",
      "name": "lastLogTimeEnd",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a00ff71fa8e",
      "name": "roleName",
      "example": "abc123",
      "desc": "user名字"
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a07a171fa8d",
      "name": "userName",
      "example": "abc123",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62aafe671fa8c",
      "name": "creatorSystemUserUserName",
      "example": "abc123",
      "desc": "初始創建人"
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a9aef71fa8b",
      "name": "states",
      "example": "1 or 0",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a2a9471fa8a",
      "name": "name",
      "example": "abc123",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a559b71fa89",
      "name": "department",
      "example": "後端",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f28f085bca62a76b671fa88",
      "name": "position",
      "example": "經理",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 系統排程設定
 * @path /v1/system/system-setting/type/2
 * 
 */
export const getSystemScheduleSetting = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 系統排程設定",
  "method": "GET",
  "path": "/v1/system/system-setting/type/2",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/2",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得IP規則列表
 * @path /v1/system/ip-rule
 * @param page  required
 * @param rows  required
 * @param ip IP 地址 required
 * @param remark 备注 required
 * 
 */
export const getIpList = (params, options = {}) => {
  const interfaceData={
  "title": "取得IP規則列表",
  "method": "GET",
  "path": "/v1/system/ip-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-rule",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f8d3f693fe3274ae085ba3c",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f8d3f693fe327205a85ba3b",
      "name": "rows",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f8d3f693fe327819585ba3a",
      "name": "ip",
      "example": "",
      "desc": "IP 地址"
    },
    {
      "required": "0",
      "_id": "5f8d3f693fe327d34d85ba39",
      "name": "remark",
      "example": "",
      "desc": "备注"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 管理後台設定
 * @path /v1/system/system-setting/type/1
 * 
 */
export const getSystemAdminSetting = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 管理後台設定",
  "method": "GET",
  "path": "/v1/system/system-setting/type/1",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/1",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新用戶詳情
 * @path /v1/system/system-user/:uuid
 * @param uuid  
 * 
 */
export const putSystemSystemUserUuid = (params, options = {}) => {
  const interfaceData={
  "title": "更新用戶詳情",
  "method": "PUT",
  "path": "/v1/system/system-user/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7beaed3fe327648c85b839",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "title": "姓名"
    },
    "department": {
      "type": "string",
      "title": "部门"
    },
    "position": {
      "type": "string",
      "title": "职位"
    },
    "roleUUID": {
      "type": "string",
      "title": "隶属管理角色"
    },
    "notes": {
      "type": "string",
      "title": "备注"
    },
    "email": {
      "type": "string",
      "title": "Email"
    },
    "dailyMaximumApprovalForWithdrawal": {
      "type": "string",
      "title": "每日可批准的取款额度"
    },
    "singleMaximumApprovalForWithdrawal": {
      "type": "string",
      "title": "单次最大取款审批额度"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新IP規則
 * @path /v1/system/ip-rule
 * 
 */
export const updateIpRules = (params, options = {}) => {
  const interfaceData={
  "title": "更新IP規則",
  "method": "PATCH",
  "path": "/v1/system/ip-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-rule",
  "status": "done",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲API歷程列表
 * @path /v1/system/game/api-log
 * @param action 操作 1:新增憑證 2:更新憑證 3:刪除憑證 4:封鎖 5:解除封鎖 6:維護 7:解除維護 8:暫停同步 9:恢復同步 required
 * @param updateBy  required
 * @param gamePlatformID  required
 * @param updatedStart  required
 * @param updatedEnd  required
 * 
 */
export const getGameApiHistoryList = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲API歷程列表",
  "method": "GET",
  "path": "/v1/system/game/api-log",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/api-log",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "5f680d393fe327497d85b56f",
      "name": "action",
      "example": "",
      "desc": "操作 1:新增憑證 2:更新憑證 3:刪除憑證 4:封鎖 5:解除封鎖 6:維護 7:解除維護 8:暫停同步 9:恢復同步"
    },
    {
      "required": "0",
      "_id": "5f680d393fe32719aa85b56e",
      "name": "updateBy",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f680d393fe3271a7185b56d",
      "name": "gamePlatformID",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f680d393fe3279e5285b56c",
      "name": "updatedStart",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f680d393fe327663385b56b",
      "name": "updatedEnd",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新普通存款流水倍數
 * @path /v1/system/payment-config/withdrawal-setting
 * 
 */
export const patchSystemPaymentConfigWithdrawalSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新普通存款流水倍數",
  "method": "PATCH",
  "path": "/v1/system/payment-config/withdrawal-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/withdrawal-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "value": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 用户日志列表
 * @path /v1/system/system-user-oper-log-list
 * @param page  required
 * @param rows  required
 * @param data 不加這個選項就是全選 0=欄位為空 1=欄位非空 required
 * @param lastLogTimeStart 跟LastLogTimeEnd成對 required
 * @param lastLogTimeEnd  required
 * @param roleName user名字 required
 * 
 */
export const getUserReportLogList = (params, options = {}) => {
  const interfaceData={
  "title": "用户日志列表",
  "method": "GET",
  "path": "/v1/system/system-user-oper-log-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user-oper-log-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17a2dcbca62ad83471f0a5",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17a2dcbca62aac3671f0a4",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f17a2dcbca62a9a6c71f0a3",
      "name": "data",
      "example": "0 or 1",
      "desc": "不加這個選項就是全選 0=欄位為空 1=欄位非空"
    },
    {
      "required": "0",
      "_id": "5f17a2dcbca62a4a1f71f0a2",
      "name": "lastLogTimeStart",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": "跟LastLogTimeEnd成對"
    },
    {
      "required": "0",
      "_id": "5f17a2dcbca62a6ae471f0a1",
      "name": "lastLogTimeEnd",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f17a2dcbca62a13e571f0a0",
      "name": "roleName",
      "example": "abc123",
      "desc": "user名字"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新多筆遊戲錢包設置
 * @path /v1/system/game/supplier-wallet/
 * 
 */
export const putSystemGameSupplierWallet = (params, options = {}) => {
  const interfaceData={
  "title": "更新多筆遊戲錢包設置",
  "method": "PUT",
  "path": "/v1/system/game/supplier-wallet/",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/supplier-wallet/",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "title": "wallet setting uuid"
          },
          "display": {
            "type": "number",
            "title": "是否顯示",
            "description": "0:false 1:true",
            "enum": [
              0,
              1
            ]
          }
        },
        "required": [
          "uuid",
          "display"
        ]
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得派卡級別列表
 * @path /v1/system/dispatch-level
 * @param page  required
 * @param rows  required
 * 
 */
export const getSystemDispatchLevel = (params, options = {}) => {
  const interfaceData={
  "title": "取得派卡級別列表",
  "method": "GET",
  "path": "/v1/system/dispatch-level",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/dispatch-level",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f31fd07bca62a383b720397",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f31fd07bca62a805e720396",
      "name": "rows",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新遊戲類型
 * @path /v1/system/game/type/:uuid
 * @param uuid 遊戲類型 uuid 
 * 
 */
export const putSystemGameTypeUuid = (params, options = {}) => {
  const interfaceData={
  "title": "更新遊戲類型",
  "method": "PUT",
  "path": "/v1/system/game/type/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/type/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f33a1a2bca62a3f40720435",
      "name": "uuid",
      "example": "b594b649-1523-4a91-a421-18255c8ffd68",
      "desc": "遊戲類型 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "gameAPIUUID": {
      "type": "string",
      "title": "game api uuid",
      "description": "遊戲平台"
    },
    "gameTypeCode": {
      "type": "string",
      "title": "類型代碼"
    },
    "gameTypeName": {
      "type": "string",
      "title": "類型名稱"
    },
    "languageCode": {
      "type": "string",
      "title": "語言代碼"
    },
    "isEnabled": {
      "type": "number",
      "title": "是否啟用（狀態",
      "description": "0:false 1:true"
    },
    "isFlagShowInSite": {
      "type": "number",
      "description": "0:false 1:true",
      "title": "是否旗標"
    },
    "isAutoAddNewGame": {
      "type": "number",
      "description": "0:false 1:true",
      "title": "是否自動添加新遊戲"
    },
    "isAutoAddNewCashback": {
      "type": "number",
      "description": "0:false 1:true",
      "title": "是否自動加入反水"
    },
    "orderNum": {
      "type": "number",
      "title": "排序",
      "description": "DESC"
    },
    "note": {
      "type": "string",
      "title": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除遊戲清單
 * @path /v1/system/game/description/:uuid
 * @param uuid game uuid 
 * 
 */
export const deleteSystemGameDescriptionUuid = (params, options = {}) => {
  const interfaceData={
  "title": "刪除遊戲清單",
  "method": "DELETE",
  "path": "/v1/system/game/description/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f350837bca62a78ce720476",
      "name": "uuid",
      "desc": "game uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新玩家中心取款頁面設定
 * @path /v1/system/payment-config/player-center-withdrawal-page-setting
 * 
 */
export const patchSystemPaymentConfigPlayerCenterWithdrawalPageSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新玩家中心取款頁面設定",
  "method": "PATCH",
  "path": "/v1/system/payment-config/player-center-withdrawal-page-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/player-center-withdrawal-page-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "isShowMaxWithdrawalAmountPerTransaction": {
      "type": "boolean"
    },
    "isShowDailyMaxWithdrawalAmount": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC列表_新增评级
 * @path /v1/system/kyc-setting
 * 
 */
export const updateKYCNewCode = (params, options = {}) => {
  const interfaceData={
  "title": "KYC列表_新增评级",
  "method": "POST",
  "path": "/v1/system/kyc-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "rateCode": {
      "type": "string",
      "title": "評分代碼",
      "description": "評分代碼"
    },
    "kycLevel": {
      "type": "string",
      "title": "KYC等級",
      "description": "KYC等級"
    },
    "description": {
      "type": "string",
      "title": "描述(英文)",
      "description": "描述(英文)"
    },
    "descriptionChinese": {
      "type": "string",
      "title": "描述(中文)",
      "description": "描述(中文)"
    },
    "descriptionIndonesian": {
      "type": "string",
      "title": "描述(印尼文)",
      "description": "描述(印尼文)"
    },
    "descriptionVietnamese": {
      "type": "string",
      "title": "描述(越南文)",
      "description": "描述(越南文)"
    },
    "targetFunction": {
      "type": "number",
      "exclusiveMinimum": true,
      "exclusiveMaximum": true,
      "minimum": 1,
      "maximum": 6,
      "title": "目標功能(代碼)",
      "description": "目標功能(代碼)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增遊戲API
 * @path /v1/system/game/api
 * 
 */
export const addGameApi = (params, options = {}) => {
  const interfaceData={
  "title": "新增遊戲API",
  "method": "POST",
  "path": "/v1/system/game/api",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/api",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "gamePlatformID": {
      "type": "number",
      "mock": {
        "mock": "@id"
      },
      "title": "遊戲平台編號"
    },
    "isLiveMode": {
      "type": "number",
      "description": "0:false 1:true",
      "title": "是否真實模式",
      "enum": [
        0,
        1
      ]
    },
    "isSingleWallet": {
      "type": "number",
      "title": "是否單錢包",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isEnabled": {
      "type": "number",
      "description": "0:false 1:true",
      "enum": [
        1,
        9
      ],
      "title": "是否啟用"
    },
    "systemCode": {
      "type": "string",
      "title": "系統編碼"
    },
    "systemName": {
      "type": "string",
      "title": "系統名稱"
    },
    "systemType": {
      "type": "number",
      "title": "系統類型",
      "description": "1:遊戲API 2:支付API",
      "enum": [
        1,
        2
      ]
    },
    "isMaintenance": {
      "type": "number",
      "title": "是否維護",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isPauseSync": {
      "type": "number",
      "title": "是否暫停維護",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "lastSyncDatetime": {
      "type": "string",
      "title": "最後同步時間",
      "enum": [
        "2020-07-23T17:56:04+08:00"
      ]
    },
    "lastSyncID": {
      "type": "string",
      "title": "最後同步ＩＤ"
    },
    "lastSyncDetails": {
      "type": "string",
      "title": "最後同步細節"
    },
    "liveURL": {
      "type": "string",
      "title": "真實地址"
    },
    "secondURL": {
      "type": "string",
      "title": "第二地址"
    },
    "sandboxURL": {
      "type": "string",
      "title": "模擬地址"
    },
    "extraInfo": {
      "type": "string",
      "title": "其他參數"
    },
    "sandboxInfo": {
      "type": "string",
      "title": "模擬其他參數"
    },
    "liveKey": {
      "type": "string",
      "title": "真實 Key"
    },
    "liveSecret": {
      "type": "string",
      "title": "真實 secret"
    },
    "sandboxKey": {
      "type": "string",
      "title": "模擬 key"
    },
    "sandboxSecret": {
      "type": "string",
      "title": "模擬 secret"
    },
    "liveAccount": {
      "type": "string",
      "title": "真實帳戶"
    },
    "sandboxAccount": {
      "type": "string",
      "title": "模擬帳戶"
    },
    "category": {
      "type": "string",
      "title": "分類"
    },
    "className": {
      "type": "string",
      "title": "類別名稱"
    },
    "localPath": {
      "type": "string",
      "title": "本地路徑"
    },
    "manager": {
      "type": "string",
      "title": "管理類"
    },
    "gamePlatformRate": {
      "type": "number",
      "title": "平台比例",
      "enum": [
        96
      ]
    },
    "note": {
      "type": "string",
      "title": "備註"
    },
    "amountType": {
      "type": "number",
      "title": "金額類型",
      "description": "1: 整數 2:小數一位 3:小數兩位"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 玩家中心設定
 * @path /v1/system/system-setting/type/3
 * 
 */
export const getSystemSystemSettingType3 = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 玩家中心設定",
  "method": "GET",
  "path": "/v1/system/system-setting/type/3",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/3",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得白名單
 * @path /v1/system/white-list
 * 
 */
export const getSystemWhiteList = (params, options = {}) => {
  const interfaceData={
  "title": "取得白名單",
  "method": "GET",
  "path": "/v1/system/white-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/white-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得CountryRules列表
 * @path /v1/system/country-rule
 * @param page  required
 * @param rows  required
 * 
 */
export const getCountryRulesList = (params, options = {}) => {
  const interfaceData={
  "title": "取得CountryRules列表",
  "method": "GET",
  "path": "/v1/system/country-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/country-rule",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2bce4dbca62a7a64720161",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2bce4dbca62a7272720160",
      "name": "rows",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除IP規則
 * @path /v1/system/ip-rule
 * 
 */
export const deleteIpRules = (params, options = {}) => {
  const interfaceData={
  "title": "刪除IP規則",
  "method": "DELETE",
  "path": "/v1/system/ip-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-rule",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuids": {
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
 * @title 更新重複帳號設置
 * @path /v1/system/duplicate-account-setting
 * 
 */
export const putSystemDuplicateAccountSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新重複帳號設置",
  "method": "PUT",
  "path": "/v1/system/duplicate-account-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/duplicate-account-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "passwordScore": {
      "type": "number"
    },
    "regIPScore": {
      "type": "number"
    },
    "operationIPScore": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得派卡系統列表
 * @path /v1/system/dispatch-account-system
 * @param page  required
 * @param rows  required
 * 
 */
export const getSystemDispatchAccountSystem = (params, options = {}) => {
  const interfaceData={
  "title": "取得派卡系統列表",
  "method": "GET",
  "path": "/v1/system/dispatch-account-system",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/dispatch-account-system",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2cf7ccbca62ae865720202",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2cf7ccbca62a11bc720201",
      "name": "rows",
      "example": "",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增CountryRule
 * @path /v1/system/country-rule
 * 
 */
export const addCountryRules = (params, options = {}) => {
  const interfaceData={
  "title": "新增CountryRule",
  "method": "POST",
  "path": "/v1/system/country-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/country-rule",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "country_name": {
      "type": "string"
    },
    "country_code": {
      "type": "string"
    },
    "remark": {
      "type": "string"
    },
    "status": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新取款流程
 * @path /v1/system/payment-config/withdrawal-workflow
 * 
 */
export const patchSystemPaymentConfigWithdrawalWorkflow = (params, options = {}) => {
  const interfaceData={
  "title": "更新取款流程",
  "method": "PATCH",
  "path": "/v1/system/payment-config/withdrawal-workflow",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/withdrawal-workflow",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "stageList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "isEnabled": {
            "type": "boolean"
          },
          "stageName": {
            "type": "string"
          }
        },
        "required": [
          "isEnabled",
          "stageName"
        ]
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增貨幣設置
 * @path /v1/system/currency
 * 
 */
export const postSystemCreateCurrency = (params, options = {}) => {
  const interfaceData={
  "title": "新增貨幣設置",
  "method": "POST",
  "path": "/v1/system/currency",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/currency",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "currencyName": {
      "type": "string",
      "description": "貨幣名稱"
    },
    "currencyCode": {
      "type": "string",
      "description": "貨幣代碼"
    },
    "currencySymbol": {
      "type": "string",
      "description": "貨幣符號"
    },
    "currencyShortName": {
      "type": "string",
      "description": "貨幣簡稱"
    },
    "showDigit": {
      "type": "integer",
      "description": "顯示小數點後位數",
      "minimum": 0,
      "maximum": 4
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 切換前台IP限制模式
 * @path /v1/system/website-ip-limit-mode/switch
 * 
 */
export const updateWebIpMode = (params, options = {}) => {
  const interfaceData={
  "title": "切換前台IP限制模式",
  "method": "POST",
  "path": "/v1/system/website-ip-limit-mode/switch",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/website-ip-limit-mode/switch",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新系統設置列表
 * @path /v1/system/system-setting/type/:type
 * @param type 類別(1:管理後台設定/2:系統排程設定/3:玩家中心設定/4:出納中心設定/5:註冊設置 - 註冊/6:註冊設置 - 用戶資料/7:註冊設置 - 登入) 
 * 
 */
export const putSystemSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新系統設置列表",
  "method": "PUT",
  "path": "/v1/system/system-setting/type/:type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/:type",
  "status": "done",
  "req_params": [
    {
      "_id": "5f34ee8bbca62a76a4720440",
      "name": "type",
      "example": "1",
      "desc": "類別(1:管理後台設定/2:系統排程設定/3:玩家中心設定/4:出納中心設定/5:註冊設置 - 註冊/6:註冊設置 - 用戶資料/7:註冊設置 - 登入)"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得前台IP限制模式
 * @path /v1/system/website-ip-limit-mode
 * 
 */
export const getWebIPMode = (params, options = {}) => {
  const interfaceData={
  "title": "取得前台IP限制模式",
  "method": "GET",
  "path": "/v1/system/website-ip-limit-mode",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/website-ip-limit-mode",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 變更貨幣設置狀態
 * @path /v1/system/currency/{uuid}/status
 * @param uuid  
 * 
 */
export const patchSystemUpdateCurrencyStatus = (params, options = {}) => {
  const interfaceData={
  "title": "變更貨幣設置狀態",
  "method": "PATCH",
  "path": "/v1/system/currency/{uuid}/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/currency/{uuid}/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f0fb04abca62a1a6571eb51",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "integer",
      "description": "狀態(1:啟用2:停用)",
      "minimum": 1,
      "maximum": 2
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC列表_编辑评级
 * @path /v1/system/kyc-setting/{kycSettingCode}
 * @param kycSettingCode  
 * 
 */
export const updateKYCEditCode = (params, options = {}) => {
  const interfaceData={
  "title": "KYC列表_编辑评级",
  "method": "PUT",
  "path": "/v1/system/kyc-setting/{kycSettingCode}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting/{kycSettingCode}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17ade7bca62a736e71f13e",
      "name": "kycSettingCode",
      "example": "KYC設定代碼",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "rateCode": {
      "type": "string",
      "title": "評分代碼",
      "description": "評分代碼"
    },
    "kycLevel": {
      "type": "string",
      "title": "KYC等級",
      "description": "KYC等級"
    },
    "description": {
      "type": "string",
      "title": "描述(英文)",
      "description": "描述(英文)"
    },
    "targetFunction": {
      "type": "string",
      "title": "目標功能(代碼)",
      "description": "目標功能(代碼)"
    },
    "descriptionIndonesian": {
      "type": "string",
      "title": "描述(印尼文)",
      "description": "描述(印尼文)"
    },
    "descriptionVietnamese": {
      "type": "string",
      "title": "描述(越南文)",
      "description": "描述(越南文)"
    },
    "descriptionChinese": {
      "type": "number",
      "minimum": 1,
      "maximum": 6,
      "exclusiveMaximum": true,
      "exclusiveMinimum": true,
      "title": "描述(中文)",
      "description": "描述(中文)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新遊戲清單
 * @path /v1/system/game/description/:uuid
 * @param uuid game uuid 
 * 
 */
export const updateGameOfList = (params, options = {}) => {
  const interfaceData={
  "title": "更新遊戲清單",
  "method": "PUT",
  "path": "/v1/system/game/description/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69ac793fe32767ed85b619",
      "name": "uuid",
      "desc": "game uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "gameTypeUUID": {
      "type": "string",
      "title": "遊戲類型 uuid"
    },
    "gameCode": {
      "type": "string",
      "title": "遊戲代碼"
    },
    "externalGameID": {
      "type": "string",
      "title": "外部遊戲 ID"
    },
    "attribute": {
      "type": "string",
      "title": "其他參數"
    },
    "name": {
      "type": "string",
      "title": "遊戲名稱"
    },
    "englishName": {
      "type": "string",
      "title": "英文遊戲名稱"
    },
    "pcImage": {
      "type": "string",
      "title": "pc 圖片路徑"
    },
    "mobileImage": {
      "type": "string",
      "title": "mobile 圖片路徑"
    },
    "device": {
      "type": "number",
      "title": "支援裝置",
      "description": "裝置類型(採二進制計算): 1:h5 2:flash 4:mobile 8:ios 16:android 32:desktop app",
      "enum": [
        3,
        7,
        8
      ]
    },
    "isProgresslve": {
      "type": "number",
      "title": "是否累計獎池",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isAvailableOffline": {
      "type": "number",
      "title": "是否支援離線模式",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isNewGame": {
      "type": "number",
      "title": "是否新遊戲",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isNoCshBack": {
      "type": "number",
      "title": "是否無返水",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isVoldBet": {
      "type": "number",
      "title": "是否無效投注",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isEnabled": {
      "type": "number",
      "title": "是否啟用",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isFlagShowInSite": {
      "type": "number",
      "title": "是否旗標",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isLocked": {
      "type": "number",
      "title": "是否鎖定",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isHotGame": {
      "type": "number",
      "title": "是否熱門遊戲",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "orderNum": {
      "type": "number",
      "title": "排序"
    },
    "note": {
      "type": "string",
      "title": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得最低取款限額
 * @path /v1/system/payment-config/minimum-withdrawal-setting
 * 
 */
export const getSystemPaymentConfigMinimumWithdrawalSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得最低取款限額",
  "method": "GET",
  "path": "/v1/system/payment-config/minimum-withdrawal-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/minimum-withdrawal-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新crypto設置
 * @path /v1/system/player-center-financial-account-setting/crypto/update
 * 
 */
export const updateCryptoSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新crypto設置",
  "method": "PATCH",
  "path": "/v1/system/player-center-financial-account-setting/crypto/update",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/crypto/update",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "isInputNumberOnly": {
      "type": "boolean"
    },
    "minLength": {
      "type": "number"
    },
    "maxLength": {
      "type": "number"
    },
    "isAllowedToEdit": {
      "type": "boolean"
    },
    "isShownFullName": {
      "type": "boolean"
    },
    "isFullNameRequired": {
      "type": "boolean"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 登入
 * @path /v1/login
 * 
 */
export const login = (params, options = {}) => {
  const interfaceData={
  "title": "登入",
  "method": "POST",
  "path": "/v1/login",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/login",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "username": {
      "type": "string",
      "description": "帳號",
      "enum": [
        "yapiuser"
      ],
      "mock": {
        "mock": "yapiuser"
      }
    },
    "password": {
      "type": "string",
      "description": "密碼",
      "mock": {
        "mock": "111111"
      }
    },
    "authCode": {
      "type": "string",
      "description": "google 驗證碼 (尚未實作)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得others設置
 * @path /v1/system/player-center-financial-account-setting/others/get
 * 
 */
export const getOtherSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得others設置",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/others/get",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/others/get",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 風險評分設定 - 取得
 * @path /v1/system/risk-score-setting/type/:type
 * @param type 風險評分類型 
 * 
 */
export const getSystemRiskScoreSettingTypeType = (params, options = {}) => {
  const interfaceData={
  "title": "風險評分設定 - 取得",
  "method": "GET",
  "path": "/v1/system/risk-score-setting/type/:type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/risk-score-setting/type/:type",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1680b7bca62af0ba71ef99",
      "name": "type",
      "example": "R1",
      "desc": "風險評分類型"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 風險評分設定 - 更新
 * @path /v1/system/risk-score-setting/type/:type
 * @param type  
 * 
 */
export const postSystemRiskScoreSettingTypeType = (params, options = {}) => {
  const interfaceData={
  "title": "風險評分設定 - 更新",
  "method": "POST",
  "path": "/v1/system/risk-score-setting/type/:type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/risk-score-setting/type/:type",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1690b6bca62a2ac071f004",
      "name": "type",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC列表_删除评级
 * @path /v1/system/kyc-setting/{kycSettingCode}
 * @param kycSettingCode KYC設定代碼 
 * 
 */
export const deleteKYCCode = (params, options = {}) => {
  const interfaceData={
  "title": "KYC列表_删除评级",
  "method": "DELETE",
  "path": "/v1/system/kyc-setting/{kycSettingCode}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting/{kycSettingCode}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17af4abca62a837271f141",
      "name": "kycSettingCode",
      "example": "KYC設定代碼",
      "desc": "KYC設定代碼"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新遊戲 API
 * @path /v1/system/game/api/:uuid
 * @param uuid api uuid 
 * 
 */
export const updateGameApiStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更新遊戲 API",
  "method": "PUT",
  "path": "/v1/system/game/api/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/api/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f62d1f13fe327346d85b421",
      "name": "uuid",
      "example": "ac9c5614-0040-4566-a5d6-140df36e73a4",
      "desc": "api uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "gamePlatformID": {
      "type": "number",
      "mock": {
        "mock": "@id"
      },
      "title": "遊戲平台編號"
    },
    "isLiveMode": {
      "type": "number",
      "description": "0:false 1:true",
      "title": "是否真實模式"
    },
    "isSingleWallet": {
      "type": "number",
      "title": "是否單錢包",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isEnabled": {
      "type": "number",
      "description": "0:false 1:true",
      "enum": [
        1,
        9
      ],
      "title": "是否啟用"
    },
    "systemCode": {
      "type": "string",
      "title": "系統編碼"
    },
    "systemName": {
      "type": "string",
      "title": "系統名稱"
    },
    "systemType": {
      "type": "number",
      "title": "系統類型",
      "description": "1:遊戲API 2:支付API",
      "enum": [
        1,
        2
      ]
    },
    "isMaintenance": {
      "type": "number",
      "title": "是否維護",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isPauseSync": {
      "type": "number",
      "title": "是否暫停維護",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "lastSyncDatetime": {
      "type": "string",
      "title": "最後同步時間",
      "enum": [
        "2020-07-23T17:56:04+08:00"
      ]
    },
    "lastSyncID": {
      "type": "string",
      "title": "最後同步ＩＤ"
    },
    "lastSyncDetails": {
      "type": "string",
      "title": "最後同步細節"
    },
    "liveURL": {
      "type": "string",
      "title": "真實地址"
    },
    "secondURL": {
      "type": "string",
      "title": "第二地址"
    },
    "sandboxURL": {
      "type": "string",
      "title": "模擬地址"
    },
    "extraInfo": {
      "type": "string",
      "title": "其他參數"
    },
    "sandboxInfo": {
      "type": "string",
      "title": "模擬其他參數"
    },
    "liveKey": {
      "type": "string",
      "title": "真實 Key"
    },
    "liveSecret": {
      "type": "string",
      "title": "真實 secret"
    },
    "sandboxKey": {
      "type": "string",
      "title": "模擬 key"
    },
    "sandboxSecret": {
      "type": "string",
      "title": "模擬 secret"
    },
    "liveAccount": {
      "type": "string",
      "title": "真實帳戶"
    },
    "sandboxAccount": {
      "type": "string",
      "title": "模擬帳戶"
    },
    "category": {
      "type": "string",
      "title": "分類"
    },
    "className": {
      "type": "string",
      "title": "類別名稱"
    },
    "localPath": {
      "type": "string",
      "title": "本地路徑"
    },
    "manager": {
      "type": "string",
      "title": "管理類"
    },
    "gamePlatformRate": {
      "type": "number",
      "title": "平台比例",
      "enum": [
        96
      ]
    },
    "note": {
      "type": "string",
      "title": "備註"
    },
    "amountType": {
      "type": "number",
      "title": "金額類型",
      "description": "1: 整數 2:小數一位 3:小數兩位"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增遊戲類型
 * @path /v1/system/game/type
 * 
 */
export const postSystemGameType = (params, options = {}) => {
  const interfaceData={
  "title": "新增遊戲類型",
  "method": "POST",
  "path": "/v1/system/game/type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/type",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "gameAPIUUID": {
      "type": "string",
      "title": "uuid",
      "description": "屬於哪個遊戲平台"
    },
    "gameTypeCode": {
      "type": "string",
      "title": "類型代碼"
    },
    "gameTypeName": {
      "type": "string",
      "title": "類型名稱"
    },
    "languageCode": {
      "type": "string",
      "title": "語言代碼"
    },
    "isEnabled": {
      "type": "number",
      "title": "是否啟用（狀態",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    },
    "isFlagShowInSite": {
      "type": "number",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ],
      "title": "是否旗標"
    },
    "isAutoAddNewGame": {
      "type": "number",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ],
      "title": "是否自動添加新遊戲"
    },
    "isAutoAddNewCashback": {
      "type": "number",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ],
      "title": "是否自動加入反水"
    },
    "orderNum": {
      "type": "number",
      "title": "排序",
      "description": "DESC"
    },
    "note": {
      "type": "string",
      "title": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除用戶銀行帳戶限制
 * @path /v1/system/player-center-financial-account-setting/limit-condition/delete/:id
 * @param id  
 * 
 */
export const deleteUserBankAccountLimit = (params, options = {}) => {
  const interfaceData={
  "title": "刪除用戶銀行帳戶限制",
  "method": "DELETE",
  "path": "/v1/system/player-center-financial-account-setting/limit-condition/delete/:id",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/limit-condition/delete/:id",
  "status": "done",
  "req_params": [
    {
      "_id": "5f28efcdbca62ab33171fa78",
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
 * @title 切換ip限制模式
 * @path /v1/system/ip-limit-mode/switch
 * 
 */
export const switchIpMode = (params, options = {}) => {
  const interfaceData={
  "title": "切換ip限制模式",
  "method": "POST",
  "path": "/v1/system/ip-limit-mode/switch",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-limit-mode/switch",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除用戶
 * @path /v1/system/system-user
 * 
 */
export const deleteSystemSystemUser = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除用戶",
  "method": "DELETE",
  "path": "/v1/system/system-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUID列表"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 註冊設置 - 用戶資料
 * @path /v1/system/system-setting/type/6
 * 
 */
export const getSystemSystemSettingType6 = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 註冊設置 - 用戶資料",
  "method": "GET",
  "path": "/v1/system/system-setting/type/6",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/6",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次修改用戶狀態
 * @path /v1/system/system-user
 * 
 */
export const patchSystemSystemUser = (params, options = {}) => {
  const interfaceData={
  "title": "批次修改用戶狀態",
  "method": "PATCH",
  "path": "/v1/system/system-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "UUID列表"
    },
    "status": {
      "type": "number",
      "description": "狀態 (0:啟用,1:鎖定)",
      "title": "狀態"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得ip限制模式
 * @path /v1/system/ip-limit-mode
 * 
 */
export const getIpLimitMode = (params, options = {}) => {
  const interfaceData={
  "title": "取得ip限制模式",
  "method": "GET",
  "path": "/v1/system/ip-limit-mode",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-limit-mode",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除IPRules
 * @path /v1/system/block-allow-ip/{uuid}
 * @param uuid  
 * 
 */
export const deleteWebIPRules = (params, options = {}) => {
  const interfaceData={
  "title": "刪除IPRules",
  "method": "DELETE",
  "path": "/v1/system/block-allow-ip/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/block-allow-ip/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f335f88bca62a274a720401",
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
 * @title 更新最低取款限額
 * @path /v1/system/payment-config/minimum-withdrawal-setting
 * 
 */
export const patchSystemPaymentConfigMinimumWithdrawalSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新最低取款限額",
  "method": "PATCH",
  "path": "/v1/system/payment-config/minimum-withdrawal-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/minimum-withdrawal-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "value": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得用戶詳情
 * @path /v1/system/system-user/:uuid
 * @param uuid  
 * 
 */
export const getSystemSystemUserUuid = (params, options = {}) => {
  const interfaceData={
  "title": "取得用戶詳情",
  "method": "GET",
  "path": "/v1/system/system-user/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7bdc5c3fe32754c085b818",
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
 * @title 更新IPRules
 * @path /v1/system/block-allow-ip/{uuid}
 * @param uuid  
 * 
 */
export const patchSystemBlockAllowIp = (params, options = {}) => {
  const interfaceData={
  "title": "更新IPRules",
  "method": "PATCH",
  "path": "/v1/system/block-allow-ip/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/block-allow-ip/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f3347b2bca62af63f7203cd",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "ip": {
      "type": "string"
    },
    "block_allow_type": {
      "type": "number"
    },
    "status": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲API
 * @path /v1/system/game/api/:uuid
 * @param uuid  
 * 
 */
export const getGameApiRowData = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲API",
  "method": "GET",
  "path": "/v1/system/game/api/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/api/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f62d1b23fe327dd4d85b41d",
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
 * @title 取得KYC資料
 * @path /v1/system/kyc-setting/:kycSettingCode
 * @param kycSettingCode KYC設定代碼 
 * 
 */
export const getSystemKycSettingKycSettingCode = (params, options = {}) => {
  const interfaceData={
  "title": "取得KYC資料",
  "method": "GET",
  "path": "/v1/system/kyc-setting/:kycSettingCode",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting/:kycSettingCode",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17add4bca62a268371f13b",
      "name": "kycSettingCode",
      "desc": "KYC設定代碼"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除貨幣設置
 * @path /v1/system/currency/{uuid}
 * @param uuid 貨幣設定UUID 
 * 
 */
export const deleteSystemDeleteCurrency = (params, options = {}) => {
  const interfaceData={
  "title": "刪除貨幣設置",
  "method": "DELETE",
  "path": "/v1/system/currency/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/currency/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f0fb055bca62a66f071eb54",
      "name": "uuid",
      "example": "68776fe5-c000-11ea-8525-42010a1ff102",
      "desc": "貨幣設定UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增IPRules
 * @path /v1/system/block-allow-ip
 * 
 */
export const addWebIpRules = (params, options = {}) => {
  const interfaceData={
  "title": "新增IPRules",
  "method": "POST",
  "path": "/v1/system/block-allow-ip",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/block-allow-ip",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ip": {
      "type": "string"
    },
    "block_allow_type": {
      "type": "number",
      "description": "1黑名單類型 2白名單類形"
    },
    "status": {
      "type": "number",
      "description": "狀態(0:啟用1:停用)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得普通存款流水倍數
 * @path /v1/system/payment-config/withdrawal-setting
 * 
 */
export const getSystemPaymentConfigWithdrawalSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得普通存款流水倍數",
  "method": "GET",
  "path": "/v1/system/payment-config/withdrawal-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/withdrawal-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 出納中心設定
 * @path /v1/system/system-setting/type/4
 * 
 */
export const getSystemSystemSettingType4 = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 出納中心設定",
  "method": "GET",
  "path": "/v1/system/system-setting/type/4",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/4",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 註冊設置 - 註冊
 * @path /v1/system/system-setting/type/5
 * 
 */
export const getSystemSystemSettingType5 = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 註冊設置 - 註冊",
  "method": "GET",
  "path": "/v1/system/system-setting/type/5",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/5",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增用戶
 * @path /v1/system/system-user
 * 
 */
export const addViewUser = (params, options = {}) => {
  const interfaceData={
  "title": "新增用戶",
  "method": "POST",
  "path": "/v1/system/system-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "roleUUID": {
      "type": "string",
      "description": "權限角色 uuid",
      "mock": {
        "mock": "38b148d8-b13e-11ea-8525-42010a1ff102"
      }
    },
    "username": {
      "type": "string",
      "description": "用户名"
    },
    "password": {
      "type": "string",
      "description": "密碼"
    },
    "confirmPassword": {
      "type": "string",
      "description": "再次输入新密碼"
    },
    "name": {
      "type": "string",
      "description": "姓名"
    },
    "notes": {
      "type": "string",
      "description": "備註"
    },
    "department": {
      "type": "string",
      "description": "部門"
    },
    "position": {
      "type": "string",
      "description": "職位"
    },
    "dailyMaximumApprovalForWithdrawal": {
      "type": "number",
      "description": "每日可批准的取款額度"
    },
    "singleMaximumApprovalForWithdrawal": {
      "type": "number",
      "description": "單次可批准的取款額度"
    },
    "email": {
      "type": "string",
      "description": "電子郵件"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增IP規則
 * @path /v1/system/ip-rule
 * 
 */
export const addIpRule = (params, options = {}) => {
  const interfaceData={
  "title": "新增IP規則",
  "method": "POST",
  "path": "/v1/system/ip-rule",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/ip-rule",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ip": {
      "type": "string"
    },
    "remark": {
      "type": "string"
    },
    "status": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲清單
 * @path /v1/system/game/description/:uuid
 * @param uuid game uuid 
 * 
 */
export const getGameOfRowData = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲清單",
  "method": "GET",
  "path": "/v1/system/game/description/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f69aca43fe327b97185b61c",
      "name": "uuid",
      "desc": "game uuid"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 用戶資訊
 * @path /v1/info
 * 
 */
export const getInfo = (params, options = {}) => {
  const interfaceData={
  "title": "用戶資訊",
  "method": "GET",
  "path": "/v1/info",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/info",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得IPRules
 * @path /v1/system/block-allow-ip
 * @param page  required
 * @param rows  required
 * @param block_allow_type 1黑名單類型 2白名單類形 required
 * 
 */
export const getIPRulesList = (params, options = {}) => {
  const interfaceData={
  "title": "取得IPRules",
  "method": "GET",
  "path": "/v1/system/block-allow-ip",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/block-allow-ip",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f335e4fbca62a78897203f9",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f335e4fbca62a48337203f8",
      "name": "rows",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f335e4fbca62adb967203f7",
      "name": "block_allow_type",
      "example": "",
      "desc": "1黑名單類型 2白名單類形"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 系統設置列表 - 註冊設置 - 登入
 * @path /v1/system/system-setting/type/7
 * 
 */
export const getSystemSystemSettingType7 = (params, options = {}) => {
  const interfaceData={
  "title": "系統設置列表 - 註冊設置 - 登入",
  "method": "GET",
  "path": "/v1/system/system-setting/type/7",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-setting/type/7",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title KYC风险评分_图表管理_编辑
 * @path /v1/system/kyc-setting/{kycSettingCode}/kyc-risk-score/{riskScoreSettingCode}
 * @param kycSettingCode KYC設定代碼 
 * @param riskScoreSettingCode 風險評分設定代碼 
 * 
 */
export const updateRiskStatus = (params, options = {}) => {
  const interfaceData={
  "title": "KYC风险评分_图表管理_编辑",
  "method": "PATCH",
  "path": "/v1/system/kyc-setting/{kycSettingCode}/kyc-risk-score/{riskScoreSettingCode}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/kyc-setting/{kycSettingCode}/kyc-risk-score/{riskScoreSettingCode}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17d564bca62a34ea71f196",
      "name": "kycSettingCode",
      "desc": "KYC設定代碼"
    },
    {
      "_id": "5f17d564bca62a80c871f195",
      "name": "riskScoreSettingCode",
      "desc": "風險評分設定代碼"
    }
  ],
  "req_query": [],
  "req_body": {
    "isAllowWithdrawal": {
      "type": "boolean",
      "title": "是否允許提款",
      "description": "是否允許提款"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批量更新熱門遊戲
 * @path /v1/system/game/description/batch-update/csv/upload
 * 
 */
export const postSystemGameDescriptionBatchUpdateCsvUpload = (params, options = {}) => {
  const interfaceData={
  "title": "批量更新熱門遊戲",
  "method": "POST",
  "path": "/v1/system/game/description/batch-update/csv/upload",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/description/batch-update/csv/upload",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 貨幣設置列表
 * @path /v1/system/currency
 * @param page  required
 * @param rows  required
 * @param sortColumn  required
 * @param sortOrder  required
 * 
 */
export const getSystemCurrency = (params, options = {}) => {
  const interfaceData={
  "title": "貨幣設置列表",
  "method": "GET",
  "path": "/v1/system/currency",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/currency",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f1a9fb0bca62a15a771f48f",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f1a9fb0bca62acacb71f48e",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f1a9fb0bca62a328e71f48d",
      "name": "sortColumn",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f1a9fb0bca62a44ea71f48c",
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
 * @title 重置密碼
 * @path /v1/system/system-user/:uuid/reset-password
 * @param uuid  
 * 
 */
export const patchSystemSystemUserUuidResetPassword = (params, options = {}) => {
  const interfaceData={
  "title": "重置密碼",
  "method": "PATCH",
  "path": "/v1/system/system-user/:uuid/reset-password",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user/:uuid/reset-password",
  "status": "done",
  "req_params": [
    {
      "_id": "5f86ad3e3fe32764e685b9af",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "password": {
      "type": "string",
      "title": "新密碼"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新CountryRule
 * @path /v1/system/country-rule/{uuid}
 * @param uuid  
 * 
 */
export const updateCountryRules = (params, options = {}) => {
  const interfaceData={
  "title": "更新CountryRule",
  "method": "PATCH",
  "path": "/v1/system/country-rule/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/country-rule/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2bce62bca62a143f720165",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "country_name": {
      "type": "string"
    },
    "country_code": {
      "type": "string"
    },
    "remark": {
      "type": "string"
    },
    "status": {
      "type": "number"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 登出
 * @path /v1/logout
 * 
 */
export const logout = (params, options = {}) => {
  const interfaceData={
  "title": "登出",
  "method": "GET",
  "path": "/v1/logout",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/logout",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得取款流程
 * @path /v1/system/payment-config/withdrawal-workflow
 * 
 */
export const getSystemPaymentConfigWithdrawalWorkflow = (params, options = {}) => {
  const interfaceData={
  "title": "取得取款流程",
  "method": "GET",
  "path": "/v1/system/payment-config/withdrawal-workflow",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/payment-config/withdrawal-workflow",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得遊戲API列表
 * @path /v1/system/game/api
 * @param page  required
 * @param rows  required
 * @param isEnabled bool 0:false 1:true required
 * @param isMaintenance bool 0:false 1:true required
 * @param isPauseSync bool 0:false 1:true required
 * @param uuid[] 遊戲API UUID required
 * @param uuid[] 遊戲API UUID required
 * @param uuid[] 遊戲API UUID required
 * 
 */
export const getSystemGameApi = (params, options = {}) => {
  const interfaceData={
  "title": "取得遊戲API列表",
  "method": "GET",
  "path": "/v1/system/game/api",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/api",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6473203fe3276b5e85b524",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6473203fe327338685b523",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6473203fe3274b6785b522",
      "name": "isEnabled",
      "example": "0",
      "desc": "bool 0:false 1:true"
    },
    {
      "required": "0",
      "_id": "5f6473203fe3272a1b85b521",
      "name": "isMaintenance",
      "example": "0",
      "desc": "bool 0:false 1:true"
    },
    {
      "required": "0",
      "_id": "5f6473203fe327584f85b520",
      "name": "isPauseSync",
      "example": "1",
      "desc": "bool 0:false 1:true"
    },
    {
      "required": "0",
      "_id": "5f6473203fe3272c7285b51f",
      "name": "uuid[]",
      "example": "1",
      "desc": "遊戲API UUID"
    },
    {
      "required": "0",
      "_id": "5f6473203fe32714cd85b51e",
      "name": "uuid[]",
      "example": "2",
      "desc": "遊戲API UUID"
    },
    {
      "required": "0",
      "_id": "5f6473203fe3277d1f85b51d",
      "name": "uuid[]",
      "example": "3",
      "desc": "遊戲API UUID"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得用戶銀行帳戶限制列表
 * @path /v1/system/player-center-financial-account-setting/limit-condition/list
 * @param isDepositBank 是否用於存款銀行 required
 * 
 */
export const getUserBankAccountLimitList = (params, options = {}) => {
  const interfaceData={
  "title": "取得用戶銀行帳戶限制列表",
  "method": "GET",
  "path": "/v1/system/player-center-financial-account-setting/limit-condition/list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/player-center-financial-account-setting/limit-condition/list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f28efa8bca62a148371fa72",
      "name": "isDepositBank",
      "example": "true",
      "desc": "是否用於存款銀行"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得用戶列表(新)
 * @path /v1/system/system-user
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param lastLoginTimeStart 最後登入時間起 required
 * @param lastLoginTimeEnd 最後登入時間迄 required
 * @param username 用戶名 required
 * @param roleUUID 角色UUID(下拉選單代碼:role) required
 * @param creator 建立者UUID(下拉選單代碼:system_user) required
 * @param status 狀態(下拉選單代碼:system_user_status) required
 * @param name 姓名 required
 * @param department 部門 required
 * @param position 職位 required
 * 
 */
export const getSystemSystemUser = (params, options = {}) => {
  const interfaceData={
  "title": "取得用戶列表(新)",
  "method": "GET",
  "path": "/v1/system/system-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f7d31ec3fe3277a3785b8a8",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f7d31ec3fe3277c2a85b8a7",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe327ec0385b8a6",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe32787d985b8a5",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe327216685b8a4",
      "name": "lastLoginTimeStart",
      "example": "2020-07-13T14%3A11%3A38%2B08%3A00",
      "desc": "最後登入時間起"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe32725e885b8a3",
      "name": "lastLoginTimeEnd",
      "example": "2020-07-15T14%3A11%3A38%2B08%3A00",
      "desc": "最後登入時間迄"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe327f82f85b8a2",
      "name": "username",
      "example": "test001",
      "desc": "用戶名"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe32747ac85b8a1",
      "name": "roleUUID",
      "example": "38b148d8-b13e-11ea-8525-42010a1ff102",
      "desc": "角色UUID(下拉選單代碼:role)"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe32757fc85b8a0",
      "name": "creator",
      "example": "6cdd5b83-2224-4e5d-bbd6-f0132fa77269",
      "desc": "建立者UUID(下拉選單代碼:system_user)"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe327931485b89f",
      "name": "status",
      "example": "0",
      "desc": "狀態(下拉選單代碼:system_user_status)"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe3273afd85b89e",
      "name": "name",
      "example": "george admin專用",
      "desc": "姓名"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe32770d585b89d",
      "name": "department",
      "example": "1",
      "desc": "部門"
    },
    {
      "required": "0",
      "_id": "5f7d31ec3fe327f91a85b89c",
      "name": "position",
      "example": "測試",
      "desc": "職位"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新遊戲錢包設置
 * @path /v1/system/game/supplier-wallet/:uuid
 * @param uuid 錢包設置 uuid 
 * 
 */
export const putSystemGameSupplierWalletUuid = (params, options = {}) => {
  const interfaceData={
  "title": "更新遊戲錢包設置",
  "method": "PUT",
  "path": "/v1/system/game/supplier-wallet/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/game/supplier-wallet/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1fe1e2bca62a6eaa71f6f7",
      "name": "uuid",
      "example": "/v1/system/game/supplier-wallet",
      "desc": "錢包設置 uuid"
    }
  ],
  "req_query": [],
  "req_body": {
    "display": {
      "type": "number",
      "title": "是否顯示",
      "description": "0:false 1:true",
      "enum": [
        0,
        1
      ]
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增白名單
 * @path /v1/system/white-list
 * 
 */
export const postSystemWhiteList = (params, options = {}) => {
  const interfaceData={
  "title": "新增白名單",
  "method": "POST",
  "path": "/v1/system/white-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/white-list",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "userName": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除CountryRule
 * @path /v1/system/country-rule/{uuid}
 * @param uuid  
 * 
 */
export const deleteCountryRules = (params, options = {}) => {
  const interfaceData={
  "title": "刪除CountryRule",
  "method": "DELETE",
  "path": "/v1/system/country-rule/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/country-rule/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2bce6abca62a6730720168",
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
 * @title 取得系統功能列表
 * @path /v1/system/system-feature/type/:type
 * @param type 系統功能類型 
 * 
 */
export const getSystemSystemFeatureTypeType = (params, options = {}) => {
  const interfaceData={
  "title": "取得系統功能列表",
  "method": "GET",
  "path": "/v1/system/system-feature/type/:type",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/system-feature/type/:type",
  "status": "done",
  "req_params": [
    {
      "_id": "5f19676dbca62aae4f71f377",
      "name": "type",
      "desc": "系統功能類型"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改貨幣設置
 * @path /v1/system/currency/{uuid}
 * @param uuid 貨幣設定UUID 
 * 
 */
export const putSystemUpdateCurrency = (params, options = {}) => {
  const interfaceData={
  "title": "修改貨幣設置",
  "method": "PUT",
  "path": "/v1/system/currency/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/system/currency/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f0fafe6bca62afcea71eb31",
      "name": "uuid",
      "example": "68776fe5-c000-11ea-8525-42010a1ff102",
      "desc": "貨幣設定UUID"
    }
  ],
  "req_query": [],
  "req_body": {
    "currencyName": {
      "type": "string",
      "description": "貨幣名稱",
      "enum": [
        "柏德",
        "佰德",
        "威能",
        "光寧"
      ]
    },
    "currencyCode": {
      "type": "string",
      "description": "貨幣代碼",
      "enum": [
        "GTA",
        "PPT",
        "CGT",
        "OGC",
        "NTR"
      ]
    },
    "currencySymbol": {
      "type": "string",
      "description": "貨幣符號",
      "enum": [
        "&",
        "#",
        "%",
        "!@",
        "$&"
      ]
    },
    "currencyShortName": {
      "type": "string",
      "description": "貨幣簡稱",
      "enum": [
        "簡單",
        "簡稱",
        "檢查",
        "檢疫"
      ]
    },
    "showDigit": {
      "type": "integer",
      "minimum": 0,
      "maximum": 4,
      "description": "顯示小數點後位數"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  