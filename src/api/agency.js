/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 信用代理付款列表
 * @path /v1/agent/agency-payment
 * @param page  required
 * @param rows  required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * @param createdStart 時間起 required
 * @param createdEnd 時間迄 required
 * @param status 狀態(1:申請/2:已同意/3:已拒絕) required
 * @param userName 玩家用户名 required
 * 
 */
export const getAgenPamentList = (params, options = {}) => {
  const interfaceData={
  "title": "信用代理付款列表",
  "method": "GET",
  "path": "/v1/agent/agency-payment",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agency-payment",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f2bd540bca62a28e47201a2",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62a0c4f7201a1",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62aa70a7201a0",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62abd1c72019f",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62a5b3272019e",
      "name": "createdStart",
      "example": "2020-07-29T17%3A11%3A42%2B08%3A00",
      "desc": "時間起"
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62ad16172019d",
      "name": "createdEnd",
      "example": "2020-07-31T17%3A11%3A42%2B08%3A00",
      "desc": "時間迄"
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62a7a6472019c",
      "name": "status",
      "example": "2",
      "desc": "狀態(1:申請/2:已同意/3:已拒絕)"
    },
    {
      "required": "1",
      "_id": "5f2bd540bca62aa79472019b",
      "name": "userName",
      "example": "test01",
      "desc": "玩家用户名"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢指定域名
 * @path /v1/agent/domain/{uuid}
 * @param uuid 欲查詢的域名 UUID 
 * 
 */
export const getAgentDomain = (params, options = {}) => {
  const interfaceData={
  "title": "查詢指定域名",
  "method": "GET",
  "path": "/v1/agent/domain/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f86a0733fe327760a85b9a4",
      "name": "uuid",
      "desc": "欲查詢的域名 UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增信用代理付款
 * @path /v1/agent/agency-payment
 * 
 */
export const postAgentAgencyPayment = (params, options = {}) => {
  const interfaceData={
  "title": "新增信用代理付款",
  "method": "POST",
  "path": "/v1/agent/agency-payment",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agency-payment",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "agentUserUUID": {
      "type": "string",
      "title": "信用代理UUID"
    },
    "agentAccountUUID": {
      "type": "string",
      "title": "信用代理銀行UUID"
    },
    "amount": {
      "type": "string",
      "title": "金額"
    },
    "comment": {
      "type": "string",
      "title": "備註"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 代理域名列表
 * @path /v1/agent/domain
 * @param page 頁數 required
 * @param rows 每頁筆數 required
 * 
 */
export const getDomainList = (params, options = {}) => {
  const interfaceData={
  "title": "代理域名列表",
  "method": "GET",
  "path": "/v1/agent/domain",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f86a06e3fe327adbb85b9a2",
      "name": "page",
      "desc": "頁數"
    },
    {
      "required": "1",
      "_id": "5f86a06e3fe3277c8e85b9a1",
      "name": "rows",
      "example": "",
      "desc": "每頁筆數"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增信用代理
 * @path /v1/agent/agent-user
 * @param agentuuid 要查詢的代理 uuid required
 * 
 */
export const postAgentAgentUser = (params, options = {}) => {
  const interfaceData={
  "title": "新增信用代理",
  "method": "POST",
  "path": "/v1/agent/agent-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f83fcd23fe3274c3485b947",
      "name": "agentuuid",
      "desc": "要查詢的代理 uuid"
    }
  ],
  "req_body": {
    "username": {
      "type": "string",
      "description": "信用代理用戶名"
    },
    "password": {
      "type": "string",
      "description": "密碼"
    },
    "checkPassword": {
      "type": "string",
      "description": "確認密碼"
    },
    "code": {
      "type": "string",
      "description": "邀請碼"
    },
    "firstName": {
      "type": "string",
      "description": "名"
    },
    "lastName": {
      "type": "string",
      "description": "姓"
    },
    "creditLimit": {
      "type": "number",
      "description": "信用點數限制"
    },
    "availableCredit": {
      "type": "number",
      "description": "可用信用點數"
    },
    "note": {
      "type": "string",
      "description": "備註"
    },
    "playerPrefix": {
      "type": "string",
      "description": "玩家前綴"
    },
    "adminFee": {
      "type": "number",
      "description": "管理費"
    },
    "transactionFee": {
      "type": "number",
      "description": "手續費"
    },
    "bonusFee": {
      "type": "number",
      "description": "獎金費"
    },
    "cashbackFee": {
      "type": "number",
      "description": "返水費"
    },
    "depositCommission": {
      "type": "number",
      "description": "存款佣金"
    },
    "parentAgent": {
      "type": "string",
      "description": "父代理uuid（下拉選單代碼 agent_user 加上條件 isSubAgent = true 與 status = 1 ）"
    },
    "referCode": {
      "type": "string",
      "description": "直屬代理邀請碼"
    },
    "isSubAgent": {
      "type": "number",
      "description": "是否有子代理 0:否 1:是"
    },
    "isPlayers": {
      "type": "number",
      "description": "是否有玩家 0:否 1:是"
    },
    "isBetLimitTemplate": {
      "type": "number",
      "description": "是否顯示限注模板 0:否 1:是"
    },
    "isViewAgentPlayers": {
      "type": "number",
      "description": "是否可以看代理列表和玩家列表 0:否 1:是"
    },
    "isSettlement": {
      "type": "number",
      "description": "是否可以做結算 0:否 1:是"
    },
    "vipLevelSettingUUID": {
      "type": "string",
      "description": "vip等級設定uuid"
    },
    "settlementPeriod": {
      "type": "number",
      "description": "結算周期 0:每日 1:每周 2:每月"
    },
    "gameList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "supplierUUID": {
            "type": "string",
            "description": "供應商uuid"
          },
          "categoryUUID": {
            "type": "string",
            "description": "遊戲類型uuid"
          },
          "platformFee": {
            "type": "number",
            "description": "平台費"
          },
          "revShare": {
            "type": "number",
            "description": "收益分成"
          },
          "rollingCommBasis": {
            "type": "number",
            "description": "洗碼佣金計算基數 0:有效投注(不含平局) 1:總投注 2:贏的投注 3:輸的投注 4:總輸金額"
          },
          "rollingCommIncome": {
            "type": "number",
            "description": "洗碼佣金收入"
          },
          "betThreshold": {
            "type": "number",
            "description": "投注底限"
          },
          "minRollingComm": {
            "type": "number",
            "description": "保底洗碼佣金比率"
          }
        }
      },
      "description": "遊戲佣金設置"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增信用銀行
 * @path /v1/agent/agent-bank
 * 
 */
export const postAgentAgentBank = (params, options = {}) => {
  const interfaceData={
  "title": "新增信用銀行",
  "method": "POST",
  "path": "/v1/agent/agent-bank",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-bank",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "description": "銀行名稱",
      "mock": {
        "mock": "test"
      }
    },
    "branchAddress": {
      "type": "string",
      "description": "分行地址",
      "mock": {
        "mock": "testaddr"
      }
    },
    "accountName": {
      "type": "string",
      "description": "帳戶名稱",
      "mock": {
        "mock": "testname"
      }
    },
    "accountNumber": {
      "type": "string",
      "description": "帳戶帳號",
      "mock": {
        "mock": "111111111"
      }
    },
    "agentUUID": {
      "type": "string",
      "description": "欲增加銀行的對象 UUID",
      "mock": {
        "mock": "e0389d74-47c3-4ded-a708-e6daaae66bb0"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢信用銀行
 * @path /v1/agent/agent-bank
 * @param agentuuid 要查詢的代理 uuid required
 * 
 */
export const getBankMessage = (params, options = {}) => {
  const interfaceData={
  "title": "查詢信用銀行",
  "method": "GET",
  "path": "/v1/agent/agent-bank",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-bank",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f34fdc4bca62aea66720464",
      "name": "agentuuid",
      "desc": "要查詢的代理 uuid"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除域名
 * @path /v1/agent/domain/:uuid
 * @param uuid 欲移除的域名 UUID 
 * 
 */
export const deleteAgentDomainUuid = (params, options = {}) => {
  const interfaceData={
  "title": "刪除域名",
  "method": "DELETE",
  "path": "/v1/agent/domain/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f474cbbbca62a5dbc72066e",
      "name": "uuid",
      "example": "d7b590c1-6570-4ced-a655-e9f21521de1b",
      "desc": "欲移除的域名 UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 信用代理列表
 * @path /v1/agent/agent-user
 * @param page  required
 * @param rows  required
 * @param username 信用代理用戶名 required
 * @param createdStart 創建日期start required
 * @param createdEnd 創建日期end required
 * 
 */
export const getAgentUserList = (params, options = {}) => {
  const interfaceData={
  "title": "信用代理列表",
  "method": "GET",
  "path": "/v1/agent/agent-user",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-user",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f83c19f3fe3270f7785b938",
      "name": "page",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f83c19f3fe327473d85b937",
      "name": "rows",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f83c19f3fe327fd3385b936",
      "name": "username",
      "example": "",
      "desc": "信用代理用戶名"
    },
    {
      "required": "0",
      "_id": "5f83c19f3fe32737ee85b935",
      "name": "createdStart",
      "example": "",
      "desc": "創建日期start"
    },
    {
      "required": "0",
      "_id": "5f83c19f3fe327e83885b934",
      "name": "createdEnd",
      "example": "",
      "desc": "創建日期end"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢代理推廣連結
 * @path /v1/agent/agent-url/{uuid}
 * @param uuid  
 * 
 */
export const getAgentAgentUrl = (params, options = {}) => {
  const interfaceData={
  "title": "查詢代理推廣連結",
  "method": "GET",
  "path": "/v1/agent/agent-url/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-url/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f39eb91bca62a05ce72050c",
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
 * @title 新增域名
 * @path /v1/agent/domain
 * 
 */
export const postAgentDomain = (params, options = {}) => {
  const interfaceData={
  "title": "新增域名",
  "method": "POST",
  "path": "/v1/agent/domain",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "domain": {
      "type": "string",
      "description": "欲新增的域名"
    },
    "remark": {
      "type": "string",
      "description": "備註"
    },
    "isVisiable": {
      "type": "boolean",
      "description": "是否可見，預設為 false"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢代理日誌
 * @path /v1/agent/operation-log
 * @param page 頁數 required
 * @param rows 筆數 required
 * @param start 操作日誌的時間範圍起始 required
 * @param end 操作日誌的時間範圍結尾 required
 * @param operatorName 欲查詢的操作者 Username required
 * @param targetName 欲查詢的被操作者 Username required
 * 
 */
export const getAgentOperationLog = (params, options = {}) => {
  const interfaceData={
  "title": "查詢代理日誌",
  "method": "GET",
  "path": "/v1/agent/operation-log",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/operation-log",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f86c0973fe327448885b9be",
      "name": "page",
      "desc": "頁數"
    },
    {
      "required": "1",
      "_id": "5f86c0973fe3279c3785b9bd",
      "name": "rows",
      "example": "",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5f86c0973fe327945685b9bc",
      "name": "start",
      "example": "2020-05-26T10:12:29+08:00",
      "desc": "操作日誌的時間範圍起始"
    },
    {
      "required": "0",
      "_id": "5f86c0973fe327b4c085b9bb",
      "name": "end",
      "example": "2020-05-26T10:12:29+08:00",
      "desc": "操作日誌的時間範圍結尾"
    },
    {
      "required": "0",
      "_id": "5f86c0973fe327f7cf85b9ba",
      "name": "operatorName",
      "example": "",
      "desc": "欲查詢的操作者 Username"
    },
    {
      "required": "0",
      "_id": "5f86c0973fe3272e3985b9b9",
      "name": "targetName",
      "example": "",
      "desc": "欲查詢的被操作者 Username"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更改域名狀態
 * @path /v1/agent/domain/:uuid/status
 * @param uuid 欲修改域名的 UUID 
 * 
 */
export const putAgentDomainUuidStatus = (params, options = {}) => {
  const interfaceData={
  "title": "更改域名狀態",
  "method": "PUT",
  "path": "/v1/agent/domain/:uuid/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain/:uuid/status",
  "status": "done",
  "req_params": [
    {
      "_id": "5f869c313fe3279d4e85b993",
      "name": "uuid",
      "example": "7d557780-9604-4f3a-9aaa-2f4f174e7165",
      "desc": "欲修改域名的 UUID"
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "description": "使用狀態（0: 禁用、1: 啟用）",
      "mock": {
        "mock": "0"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 編輯域名
 * @path /v1/agent/domain/:uuid
 * @param uuid 欲編輯域名的 UUID 
 * 
 */
export const putAgentDomainUuid = (params, options = {}) => {
  const interfaceData={
  "title": "編輯域名",
  "method": "PUT",
  "path": "/v1/agent/domain/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/domain/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f7ec4e53fe32711ad85b91e",
      "name": "uuid",
      "example": "7d557780-9604-4f3a-9aaa-2f4f174e7165",
      "desc": "欲編輯域名的 UUID"
    }
  ],
  "req_query": [],
  "req_body": {
    "domain": {
      "type": "string",
      "description": "想變更的新域名"
    },
    "remark": {
      "type": "string",
      "description": "備註修改"
    },
    "isVisible": {
      "type": "boolean",
      "description": "是否可見"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 啟用/禁用信用代理銀行
 * @path /v1/agent/agent-bank/status
 * 
 */
export const putAgentAgentBankStatus = (params, options = {}) => {
  const interfaceData={
  "title": "啟用/禁用信用代理銀行",
  "method": "PUT",
  "path": "/v1/agent/agent-bank/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-bank/status",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "description": "狀態（0: 未啟用、 1: 啟用）",
      "mock": {
        "mock": "1"
      }
    },
    "agentUUID": {
      "type": "string",
      "description": "欲更新的代理 UUID",
      "mock": {
        "mock": "e0389d74-47c3-4ded-a708-e6daaae66bb0"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次更新信用代理狀態
 * @path /v1/agent/agent-user/status
 * 
 */
export const patchAgentAgentUserStatus = (params, options = {}) => {
  const interfaceData={
  "title": "批次更新信用代理狀態",
  "method": "PATCH",
  "path": "/v1/agent/agent-user/status",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-user/status",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuidList": {
      "type": "array",
      "items": {
        "type": "string",
        "description": "欲修改對象的 UUID"
      }
    },
    "status": {
      "type": "number",
      "description": "欲更改的狀態（ 1 ：活躍、 2 ：凍結）"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 查詢信用代理訊息
 * @path /v1/agent/agent-user/{uuid}
 * @param uuid  
 * 
 */
export const getAgentAgentUser = (params, options = {}) => {
  const interfaceData={
  "title": "查詢信用代理訊息",
  "method": "GET",
  "path": "/v1/agent/agent-user/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-user/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f9258103fe327215885bb18",
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
 * @title 登入信用代理
 * @path /v1/agent/agent-login/{uuid}
 * @param uuid  
 * 
 */
export const getAgentLogin = (params, options = {}) => {
  const interfaceData={
  "title": "登入信用代理",
  "method": "GET",
  "path": "/v1/agent/agent-login/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-login/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f1fd3b0bca62a695671f6ca",
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
 * @title 移除信用代理銀行
 * @path /v1/agent/agent-bank/:agentUUID
 * @param agentUUID 欲移除的代理 UUID 
 * 
 */
export const deleteAgentAgentBankAgentUUID = (params, options = {}) => {
  const interfaceData={
  "title": "移除信用代理銀行",
  "method": "DELETE",
  "path": "/v1/agent/agent-bank/:agentUUID",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-bank/:agentUUID",
  "status": "done",
  "req_params": [
    {
      "_id": "5f5738813fe3275b1e85b126",
      "name": "agentUUID",
      "example": "e0389d74-47c3-4ded-a708-e6daaae66bb0",
      "desc": "欲移除的代理 UUID"
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新信用代理付款
 * @path /v1/agent/agency-payment/:uuid
 * @param uuid  
 * 
 */
export const updateAgenPayment = (params, options = {}) => {
  const interfaceData={
  "title": "更新信用代理付款",
  "method": "PUT",
  "path": "/v1/agent/agency-payment/:uuid",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agency-payment/:uuid",
  "status": "done",
  "req_params": [
    {
      "_id": "5f2bd242bca62ad5bc720192",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "status": {
      "type": "number",
      "title": "狀態",
      "description": "狀態(1:申請/2:已同意/3:已拒絕)",
      "enum": [
        1,
        2,
        3
      ]
    },
    "comment": {
      "type": "string",
      "title": "原因"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 編輯信用銀行
 * @path /v1/agent/agent-bank
 * 
 */
export const putAgentAgentBank = (params, options = {}) => {
  const interfaceData={
  "title": "編輯信用銀行",
  "method": "PUT",
  "path": "/v1/agent/agent-bank",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/agent/agent-bank",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "type": "string",
      "description": "銀行名稱",
      "mock": {
        "mock": "test"
      }
    },
    "branchAddress": {
      "type": "string",
      "description": "分行地址",
      "mock": {
        "mock": "testaddr"
      }
    },
    "accountName": {
      "type": "string",
      "description": "帳戶名稱",
      "mock": {
        "mock": "testname"
      }
    },
    "accountNumber": {
      "type": "string",
      "description": "帳戶帳號",
      "mock": {
        "mock": "112222"
      }
    },
    "agentUUID": {
      "type": "string",
      "description": "欲更新的代理 UUID",
      "mock": {
        "mock": "e0389d74-47c3-4ded-a708-e6daaae66bb0"
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  