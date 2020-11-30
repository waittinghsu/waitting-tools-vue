/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 取得輪播圖列表
 * @path /v1/cms/spotlight
 * @param page  required
 * @param rows  required
 * @param desc 根據order排序 required
 * @param position 輪播圖展示位置(1:首頁 2:玩家中心)後端採用AND位元運算，此欄位為選擇位置已選擇位置數字加總 required
 * @param device 輪播圖展示裝置(1:PC 2:mobile)後端採用AND位元運算，此欄位為選擇位置已選擇裝置數字加總 required
 * @param online_start 展示起始時間 required
 * @param online_end 展示結束時間 required
 * @param status 狀態(1:啟用2:停用) required
 * @param title title模糊搜尋 required
 * 
 */
export const getSpotlightList = (params, options = {}) => {
  const interfaceData={
  "title": "取得輪播圖列表",
  "method": "GET",
  "path": "/v1/cms/spotlight",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/spotlight",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f89588b3fe327866685ba1c",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f89588b3fe327b36685ba1b",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f89588b3fe3273bcf85ba1a",
      "name": "desc",
      "example": "",
      "desc": "根據order排序"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe327c26885ba19",
      "name": "position",
      "example": "",
      "desc": "輪播圖展示位置(1:首頁 2:玩家中心)後端採用AND位元運算，此欄位為選擇位置已選擇位置數字加總"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe327ea4d85ba18",
      "name": "device",
      "example": "",
      "desc": "輪播圖展示裝置(1:PC 2:mobile)後端採用AND位元運算，此欄位為選擇位置已選擇裝置數字加總"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe32757b185ba17",
      "name": "online_start",
      "example": "",
      "desc": "展示起始時間"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe32747d385ba16",
      "name": "online_end",
      "example": "",
      "desc": "展示結束時間"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe327520985ba15",
      "name": "status",
      "example": "",
      "desc": "狀態(1:啟用2:停用)"
    },
    {
      "required": "0",
      "_id": "5f89588b3fe327f35685ba14",
      "name": "title",
      "example": "",
      "desc": "title模糊搜尋"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 刪除輪播圖
 * @path /v1/cms/spotlight
 * 
 */
export const deleteSpotlight = (params, options = {}) => {
  const interfaceData={
  "title": "刪除輪播圖",
  "method": "DELETE",
  "path": "/v1/cms/spotlight",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/spotlight",
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
 * @title 新增輪播圖
 * @path /v1/cms/spotlight
 * 
 */
export const addSpotlight = (params, options = {}) => {
  const interfaceData={
  "title": "新增輪播圖",
  "method": "POST",
  "path": "/v1/cms/spotlight",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/spotlight",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "title": {
      "type": "string",
      "mock": {
        "mock": "omega"
      }
    },
    "picture": {
      "type": "string",
      "mock": {
        "mock": "https://eurdebug2.kgdemo.dev/api/public/e2a1ddea-b20c-4435-b5e8-706ba26be728.png"
      }
    },
    "link": {
      "type": "string",
      "mock": {
        "mock": "/#"
      }
    },
    "order": {
      "type": "number",
      "mock": {
        "mock": "1"
      }
    },
    "position": {
      "type": "number",
      "description": "輪播圖展示位置(1:首頁 2:玩家中心)後端採用AND位元運算，此欄位為選擇位置已選擇位置數字加總"
    },
    "device": {
      "type": "number",
      "description": "輪播圖展示裝置(1:PC 2:mobile)後端採用AND位元運算，此欄位為選擇位置已選擇裝置數字加總"
    },
    "online_start": {
      "type": "string",
      "mock": {
        "mock": "2020-10-10T23:59:59+08:00"
      }
    },
    "online_end": {
      "type": "string",
      "mock": {
        "mock": "2020-10-11T23:59:59+08:00"
      }
    },
    "status": {
      "type": "number",
      "mock": {
        "mock": "1"
      }
    },
    "link_target": {
      "type": "number",
      "description": "輪播圖連結目標(1:當前視窗 2:開新視窗)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新輪播圖
 * @path /v1/cms/spotlight/{uuid}
 * @param uuid  
 * 
 */
export const patchCmsSpotlight = (params, options = {}) => {
  const interfaceData={
  "title": "更新輪播圖",
  "method": "PATCH",
  "path": "/v1/cms/spotlight/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/spotlight/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f8948483fe3274f2a85b9ed",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "title": {
      "type": "string"
    },
    "picture": {
      "type": "string"
    },
    "link": {
      "type": "string"
    },
    "order": {
      "type": "number"
    },
    "position": {
      "type": "number"
    },
    "device": {
      "type": "number"
    },
    "online_start": {
      "type": "string"
    },
    "online_end": {
      "type": "string"
    },
    "status": {
      "type": "number"
    },
    "link_target": {
      "type": "string",
      "description": "輪播圖連結目標(1:當前視窗 2:開新視窗)"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 批次刪除公告類別
 * @path /v1/cms/announcement-setting
 * 
 */
export const deleteCmsAnnouncementSetting = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除公告類別",
  "method": "DELETE",
  "path": "/v1/cms/announcement-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement-setting",
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
 * @title 新增公告
 * @path /v1/cms/announcement
 * 
 */
export const postCmsAnnouncement = (params, options = {}) => {
  const interfaceData={
  "title": "新增公告",
  "method": "POST",
  "path": "/v1/cms/announcement",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "announcementGroupUUID": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "content": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "startTime": {
      "type": "string"
    },
    "endTime": {
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
 * @title 更新公告
 * @path /v1/cms/announcement/{uuid}
 * @param uuid  
 * 
 */
export const patchCmsAnnouncement = (params, options = {}) => {
  const interfaceData={
  "title": "更新公告",
  "method": "PATCH",
  "path": "/v1/cms/announcement/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f8968c93fe3271a7d85ba31",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "announcementGroupUUID": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "content": {
      "type": "string"
    },
    "type": {
      "type": "number"
    },
    "startTime": {
      "type": "string"
    },
    "endTime": {
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
 * @title 批次刪除公告
 * @path /v1/cms/announcement
 * 
 */
export const deleteCmsAnnouncement = (params, options = {}) => {
  const interfaceData={
  "title": "批次刪除公告",
  "method": "DELETE",
  "path": "/v1/cms/announcement",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "uuids": {
      "type": "array",
      "items": {
        "type": "string",
        "mock": {
          "mock": "ae201cda-c219-4d03-b4cc-b0362ee5da5d"
        }
      }
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 新增公告類別
 * @path /v1/cms/announcement-setting
 * 
 */
export const postCmsAnnouncementSetting = (params, options = {}) => {
  const interfaceData={
  "title": "新增公告類別",
  "method": "POST",
  "path": "/v1/cms/announcement-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement-setting",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "groupName": {
      "type": "string"
    },
    "groupLang": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 更新公告類別
 * @path /v1/cms/announcement-setting/{uuid}
 * @param uuid  
 * 
 */
export const patchCmsAnnouncementSetting = (params, options = {}) => {
  const interfaceData={
  "title": "更新公告類別",
  "method": "PATCH",
  "path": "/v1/cms/announcement-setting/{uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement-setting/{uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f8968b53fe3279b9b85ba2c",
      "name": "uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "groupName": {
      "type": "string"
    },
    "groupLang": {
      "type": "string"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得公告類別
 * @path /v1/cms/announcement-setting
 * @param page  required
 * @param row  required
 * 
 */
export const getCmsAnnouncementSetting = (params, options = {}) => {
  const interfaceData={
  "title": "取得公告類別",
  "method": "GET",
  "path": "/v1/cms/announcement-setting",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement-setting",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f8958783fe3270f4685ba12",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f8958783fe327715685ba11",
      "name": "row",
      "example": "10",
      "desc": ""
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 取得公告列表
 * @path /v1/cms/announcement
 * @param page  required
 * @param row  required
 * @param announcementGroupUUID 新聞/公告類別UUID required
 * 
 */
export const getCmsAnnouncement = (params, options = {}) => {
  const interfaceData={
  "title": "取得公告列表",
  "method": "GET",
  "path": "/v1/cms/announcement",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/cms/announcement",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f8ea67d3fe3278b2485ba70",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f8ea67d3fe327b76585ba6f",
      "name": "row",
      "example": "10",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f8ea67d3fe3272a8e85ba6e",
      "name": "announcementGroupUUID",
      "example": "c2a0aab1-0373-4dd9-a48a-8659207b503d",
      "desc": "新聞/公告類別UUID"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  