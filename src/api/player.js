/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 玩家列表
 * @path /v1/player/player-list
 * @param page  required
 * @param rows  required
 * @param vipUUID  required
 * @param lastLogTimeStart  required
 * @param lastLogTimeEnd  required
 * @param regTimeStart  required
 * @param regTimeEnd  required
 * @param withOutTag  required
 * @param username  required
 * @param referUserId  required
 * @param agentId  required
 * @param agentIdType 0:直屬 1:下級代理線 required
 * @param registerWay 註冊方式 required
 * @param registerUrl 註冊網址 required
 * @param registerIP 註冊ip required
 * @param lastLoginIP 最後登入ip required
 * @param accountState 帳號狀態 0:fales 1:true required
 * @param referCode 推薦碼 required
 * @param firstName 姓 required
 * @param lastName 名 required
 * @param phone 聯絡電話 required
 * @param phoneVerifiStatus 聯絡電話驗證狀態 required
 * @param mail 連絡信箱 required
 * @param mailVerifiStatus 連絡信箱驗證狀態 required
 * @param imAccount IM帳號 required
 * @param country 國家 required
 * @param city 城市 required
 * @param idNumber 證件號碼 required
 * @param birthdayQueryType 0:出生日(不含年) 1:含年 跟birthday成對 required
 * @param birthdayStart 出生日開始 跟birthdayQueryType成對 required
 * @param birthdayEnd 出生日結束 跟birthdayQueryType成對 required
 * @param bankAccount 银行帐号 required
 * @param isHasDepositRecord 是否有存款記錄 required
 * @param totalBalanceType 0:總餘額小於 1:總餘額大於 跟totalBalance成對 required
 * @param totalBalance 跟totalBalanceType成對 required
 * @param userNameMode 0:精準 1:模糊 required
 * 
 */
export const getPlayerList = (params, options = {}) => {
  const interfaceData={
  "title": "玩家列表",
  "method": "GET",
  "path": "/v1/player/player-list",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/player/player-list",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5f6d94ff3fe327786c85b79c",
      "name": "page",
      "example": "1",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "5f6d94ff3fe327b62f85b79b",
      "name": "rows",
      "example": "10",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3279e9785b79a",
      "name": "vipUUID",
      "example": "d4dcffaf-1dbd-4822-a7c0-1593c007741c",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3276fbb85b799",
      "name": "lastLogTimeStart",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327165685b798",
      "name": "lastLogTimeEnd",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3279da485b797",
      "name": "regTimeStart",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327592885b796",
      "name": "regTimeEnd",
      "example": "2020-07-01T00:05:24+08:00",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32752ed85b795",
      "name": "withOutTag",
      "example": "7cb424eb-cbe6-4387-b51c-194d9006cb35",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3276e2485b794",
      "name": "username",
      "example": "abc1",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32721aa85b793",
      "name": "referUserId",
      "example": "7cb424eb-cbe6-4387-b51c-194d9006cb35",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32722b585b792",
      "name": "agentId",
      "example": "7cb424eb-cbe6-4387-b51c-194d9006cb35",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327ba8585b791",
      "name": "agentIdType",
      "example": "",
      "desc": "0:直屬 1:下級代理線"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32731d985b790",
      "name": "registerWay",
      "example": "1",
      "desc": "註冊方式"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32762c385b78f",
      "name": "registerUrl",
      "example": "http://google.com",
      "desc": "註冊網址"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327c24a85b78e",
      "name": "registerIP",
      "example": "127.0.0.1",
      "desc": "註冊ip"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32779aa85b78d",
      "name": "lastLoginIP",
      "example": "127.0.0.1",
      "desc": "最後登入ip"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32738d585b78c",
      "name": "accountState",
      "example": "1",
      "desc": "帳號狀態 0:fales 1:true"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327718685b78b",
      "name": "referCode",
      "example": "ASDFF",
      "desc": "推薦碼"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327613e85b78a",
      "name": "firstName",
      "example": "hsiao",
      "desc": "姓"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3272f1d85b789",
      "name": "lastName",
      "example": "lex",
      "desc": "名"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3272c8185b788",
      "name": "phone",
      "example": "0233333333",
      "desc": "聯絡電話"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3275a2185b787",
      "name": "phoneVerifiStatus",
      "example": "1",
      "desc": "聯絡電話驗證狀態"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327712a85b786",
      "name": "mail",
      "example": "lex.hsiao@how.com.tw",
      "desc": "連絡信箱"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe32709df85b785",
      "name": "mailVerifiStatus",
      "example": "1",
      "desc": "連絡信箱驗證狀態"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327248c85b784",
      "name": "imAccount",
      "example": "",
      "desc": "IM帳號"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3276b6585b783",
      "name": "country",
      "example": "",
      "desc": "國家"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3271e0585b782",
      "name": "city",
      "example": "",
      "desc": "城市"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327a6d285b781",
      "name": "idNumber",
      "example": "",
      "desc": "證件號碼"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327873785b780",
      "name": "birthdayQueryType",
      "example": "06-01",
      "desc": "0:出生日(不含年) 1:含年 跟birthday成對"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327546785b77f",
      "name": "birthdayStart",
      "example": "2010-06-01",
      "desc": "出生日開始 跟birthdayQueryType成對"
    },
    {
      "required": "1",
      "_id": "5f6d94ff3fe327637b85b77e",
      "name": "birthdayEnd",
      "example": "2010-06-03",
      "desc": "出生日結束 跟birthdayQueryType成對"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327947385b77d",
      "name": "bankAccount",
      "example": "",
      "desc": "银行帐号"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe3271f5b85b77c",
      "name": "isHasDepositRecord",
      "example": "1",
      "desc": "是否有存款記錄"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327b4f185b77b",
      "name": "totalBalanceType",
      "example": "0",
      "desc": "0:總餘額小於 1:總餘額大於 跟totalBalance成對"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327622c85b77a",
      "name": "totalBalance",
      "example": "2000",
      "desc": "跟totalBalanceType成對"
    },
    {
      "required": "0",
      "_id": "5f6d94ff3fe327145985b779",
      "name": "userNameMode",
      "example": "",
      "desc": "0:精準 1:模糊"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  