/* eslint-disable */
import httpRequest from '@/http-request';
/**
 * @title 標籤管理列表
 * @path /v1/demo/tags
 * @param page 頁碼 required
 * @param rows 筆數 required
 * @param sortColumn 要排序的column required
 * @param sortOrder 降序: "descending", 升序: "ascending" , 無排序: null required
 * 
 */
export const getDemoTags = (params, options = {}) => {
  const interfaceData={
  "title": "標籤管理列表",
  "method": "GET",
  "path": "/v1/demo/tags",
  "mock_path": "https://wyapi.hw.codes/mock/73/v1/demo/tags",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "1",
      "_id": "5efafe24680d175382e75fec",
      "name": "page",
      "example": "1",
      "desc": "頁碼"
    },
    {
      "required": "1",
      "_id": "5efafe24680d17a002e75feb",
      "name": "rows",
      "example": "10",
      "desc": "筆數"
    },
    {
      "required": "0",
      "_id": "5efafe24680d1737d9e75fea",
      "name": "sortColumn",
      "example": "",
      "desc": "要排序的column"
    },
    {
      "required": "0",
      "_id": "5efafe24680d1770a8e75fe9",
      "name": "sortOrder",
      "example": "",
      "desc": "降序: \"descending\", 升序: \"ascending\" , 無排序: null"
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  