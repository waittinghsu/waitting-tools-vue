/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 新增玩家標籤
 * @path /v1/player/user-tag/{user_uuid}
 * @param user_uuid  
 * 
 */
export const postPlayerUserTag = (params, options = {}) => {
  const interfaceData={
  "title": "新增玩家標籤",
  "method": "POST",
  "path": "/v1/player/user-tag/{user_uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-tag/{user_uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17d039bca62a43b171f18b",
      "name": "user_uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "tag_uuids": {
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
 * @title 刪除玩家標籤
 * @path /v1/player/user-tag/{user_uuid}
 * @param user_uuid  
 * 
 */
export const deletePlayerUserTag = (params, options = {}) => {
  const interfaceData={
  "title": "刪除玩家標籤",
  "method": "DELETE",
  "path": "/v1/player/user-tag/{user_uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-tag/{user_uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17d02ebca62a42f371f188",
      "name": "user_uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "tag_uuids": {
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
 * @title 更新玩家標籤
 * @path /v1/player/user-tag/{user_uuid}
 * @param user_uuid  
 * 
 */
export const putPlayerUserTag = (params, options = {}) => {
  const interfaceData={
  "title": "更新玩家標籤",
  "method": "PUT",
  "path": "/v1/player/user-tag/{user_uuid}",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/user-tag/{user_uuid}",
  "status": "done",
  "req_params": [
    {
      "_id": "5f17d022bca62a5fe771f185",
      "name": "user_uuid",
      "desc": ""
    }
  ],
  "req_query": [],
  "req_body": {
    "tag_uuids": {
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
 * @title 帶有標籤的玩家列表
 * @path /v1/player/tagged-player-list
 * @param page  required
 * @param rows  required
 * @param username 用戶名 required
 * @param tag tag uuid required
 * @param tagstart 標籤起始時間 required
 * @param tagend 標籤結束時間 required
 * @param loginstart 登入起始時間 required
 * @param loginend 登入結束時間 required
 * 
 */
export const getTaggedPlayers = (params, options = {}) => {
  const interfaceData={
  "title": "帶有標籤的玩家列表",
  "method": "GET",
  "path": "/v1/player/tagged-player-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/tagged-player-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f17d012bca62a6a1471f182",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f17d012bca62a73d571f181",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f17d012bca62a00c971f180",
      "name": "username",
      "example": "",
      "desc": "用戶名"
    },
    {
      "required": "0",
      "_id": "5f17d012bca62aa4e571f17f",
      "name": "tag",
      "example": "",
      "desc": "tag uuid"
    },
    {
      "required": "0",
      "_id": "5f17d012bca62a48dc71f17e",
      "name": "tagstart",
      "example": "",
      "desc": "標籤起始時間"
    },
    {
      "required": "0",
      "_id": "5f17d012bca62aff7b71f17d",
      "name": "tagend",
      "example": "",
      "desc": "標籤結束時間"
    },
    {
      "required": "0",
      "_id": "5f17d012bca62a027571f17c",
      "name": "loginstart",
      "example": "",
      "desc": "登入起始時間"
    },
    {
      "required": "0",
      "_id": "5f17d012bca62a749071f17b",
      "name": "loginend",
      "example": "",
      "desc": "登入結束時間"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  