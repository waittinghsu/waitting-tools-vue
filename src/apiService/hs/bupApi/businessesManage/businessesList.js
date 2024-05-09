/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 获取 - 业务列表
 * @path /v1/upgrade/businesses
 * @param params.app  required
 * @param params.upgrade_type  required
 * @param params.server  required
 * @param params.refresh_cdn  required
 * @param params.deploy_script  required
 * @param params.restart  required
 * @param params.product  required
 * @param params.module  required
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getUpgradeBusinesses = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 业务列表",
  "method": "GET",
  "path": "/v1/upgrade/businesses",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses",
  "status": "done",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "663487f3d944af664a6eae08",
      "name": "app",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944af0e2a6eae07",
      "name": "upgrade_type",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944aff10d6eae06",
      "name": "server",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944afed9c6eae05",
      "name": "refresh_cdn",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944afa1346eae04",
      "name": "deploy_script",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944af14a46eae03",
      "name": "restart",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944af0faf6eae02",
      "name": "product",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944af2ebc6eae01",
      "name": "module",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "663487f3d944af730d6eae00",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "663487f3d944af1f4c6eadff",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "663487f3d944af898c6eadfe",
      "name": "page",
      "example": "1",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "663487f3d944afff226eadfd",
      "name": "page_size",
      "example": "10",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 业务
 * @path /v1/upgrade/businesses
 * 
 */
export const postUpgradeBusinesses = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 业务",
  "method": "POST",
  "path": "/v1/upgrade/businesses",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "deleted_at": {
      "title": "Deleted at",
      "type": "string",
      "format": "date-time",
      "readOnly": true,
      "x-nullable": true
    },
    "deleted_by_cascade": {
      "title": "Deleted by cascade",
      "type": "boolean",
      "readOnly": true
    },
    "identifier": {
      "title": "Identifier",
      "type": "string",
      "format": "uuid",
      "readOnly": true
    },
    "created_at": {
      "title": "Created at",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated_at": {
      "title": "Updated at",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "creator": {
      "title": "Creator",
      "type": "string",
      "maxLength": 255,
      "minLength": 1,
      "x-nullable": true
    },
    "updater": {
      "title": "Updater",
      "type": "string",
      "maxLength": 255,
      "minLength": 1,
      "x-nullable": true
    },
    "upgrade_type": {
      "title": "Upgrade type",
      "type": "string",
      "enum": [
        "vm",
        "container"
      ],
      "x-nullable": true
    },
    "server": {
      "title": "Server",
      "type": "string",
      "enum": [
        "sa_npt",
        "sa_wpt"
      ],
      "x-nullable": true
    },
    "refresh_cdn": {
      "title": "Refresh cdn",
      "type": "string",
      "enum": [
        "push_cdn",
        "push_cdn_old"
      ],
      "x-nullable": true
    },
    "deploy_script": {
      "title": "Deploy script",
      "type": "string",
      "enum": [
        "deploy",
        "bbs_deploy",
        "e04_bbs_deploy",
        "a05_bbs_deploy"
      ],
      "x-nullable": true
    },
    "service_type": {
      "title": "Service type",
      "type": "string",
      "maxLength": 255,
      "minLength": 1,
      "x-nullable": true
    },
    "restart_command": {
      "title": "Restart command",
      "type": "string",
      "maxLength": 255,
      "minLength": 1,
      "x-nullable": true
    },
    "health_check_command": {
      "title": "Health check command",
      "type": "string",
      "maxLength": 255,
      "minLength": 1,
      "x-nullable": true
    },
    "comment": {
      "title": "Comment",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "app": {
      "title": "App",
      "type": "integer"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 业务选项
 * @path /v1/upgrade/businesses/choices
 * 
 */
export const getUpgradeBusinessesChoices = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 业务选项",
  "method": "GET",
  "path": "/v1/upgrade/businesses/choices",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/choices",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 业务 By ID
 * @path /v1/upgrade/businesses/{id}
 * @param params.id A unique integer value identifying this business. 
 * 
 */
export const getUpgradeBusinessesById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 业务 By ID",
  "method": "GET",
  "path": "/v1/upgrade/businesses/{id}",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "65b37ba1d023fa86db4aa1a2",
      "name": "id",
      "desc": "A unique integer value identifying this business."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 业务
 * @path /v1/upgrade/businesses/{id}
 * @param params.id A unique integer value identifying this business. 
 * 
 */
export const putUpgradeBusinessesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 业务",
  "method": "PUT",
  "path": "/v1/upgrade/businesses/{id}",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "65b37ba1d023fa631a4aa1a4",
      "name": "id",
      "desc": "A unique integer value identifying this business."
    }
  ],
  "req_query": [],
  "req_body": {
    "upgrade_type": {
      "title": "升级类型",
      "type": "string",
      "enum": [
        "vm",
        "container"
      ]
    },
    "server": {
      "title": "发布机",
      "type": "string",
      "enum": [
        "sa_nbt",
        "sa_wbt"
      ]
    },
    "refresh_cdn": {
      "title": "CDN 刷新",
      "type": "string",
      "enum": [
        "push_cdn",
        "push_cdn_old",
        ""
      ]
    },
    "deploy_script": {
      "title": "下发服务器",
      "type": "string",
      "enum": [
        "deploy",
        "bbs_deploy",
        "e04_bbs_deploy",
        "a05_bbs_deploy",
        "a02_bbs_deploy",
        "synchronize"
      ]
    },
    "service_type": {
      "title": "服务类型",
      "type": "string",
      "maxLength": 255
    },
    "restart_command": {
      "title": "重启命令",
      "type": "string",
      "maxLength": 255
    },
    "health_check_command": {
      "title": "健康接口检查",
      "type": "string",
      "maxLength": 255
    },
    "comment": {
      "title": "备注",
      "type": "string"
    },
    "restart": {
      "title": "是否重启",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "mode": {
      "title": "單開/多開",
      "type": "integer",
      "enum": [
        0,
        1,
        2
      ]
    },
    "delay_min": {
      "title": "容器化等待時間(分鐘)",
      "type": "integer",
      "maximum": 65535,
      "minimum": 0
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 业务 [PATCH]
 * @path /v1/upgrade/businesses/{id}
 * @param params.id A unique integer value identifying this business. 
 * 
 */
export const patchUpgradeBusinessesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 业务 [PATCH]",
  "method": "PATCH",
  "path": "/v1/upgrade/businesses/{id}",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "65b37ba1d023fadb924aa1a6",
      "name": "id",
      "desc": "A unique integer value identifying this business."
    }
  ],
  "req_query": [],
  "req_body": {
    "upgrade_type": {
      "title": "升级类型",
      "type": "string",
      "enum": [
        "vm",
        "container"
      ]
    },
    "server": {
      "title": "发布机",
      "type": "string",
      "enum": [
        "sa_nbt",
        "sa_wbt"
      ]
    },
    "refresh_cdn": {
      "title": "CDN 刷新",
      "type": "string",
      "enum": [
        "push_cdn",
        "push_cdn_old",
        ""
      ]
    },
    "deploy_script": {
      "title": "下发服务器",
      "type": "string",
      "enum": [
        "deploy",
        "bbs_deploy",
        "e04_bbs_deploy",
        "a05_bbs_deploy",
        "a02_bbs_deploy",
        "synchronize"
      ]
    },
    "service_type": {
      "title": "服务类型",
      "type": "string",
      "maxLength": 255
    },
    "restart_command": {
      "title": "重启命令",
      "type": "string",
      "maxLength": 255
    },
    "health_check_command": {
      "title": "健康接口检查",
      "type": "string",
      "maxLength": 255
    },
    "comment": {
      "title": "备注",
      "type": "string"
    },
    "restart": {
      "title": "是否重启",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "mode": {
      "title": "單開/多開",
      "type": "integer",
      "enum": [
        0,
        1,
        2
      ]
    },
    "delay_min": {
      "title": "容器化等待時間(分鐘)",
      "type": "integer",
      "maximum": 65535,
      "minimum": 0
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 业务
 * @path /v1/upgrade/businesses/{id}
 * @param params.id A unique integer value identifying this business. 
 * 
 */
export const deleteUpgradeBusinessesById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 业务",
  "method": "DELETE",
  "path": "/v1/upgrade/businesses/{id}",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/{id}",
  "status": "done",
  "req_params": [
    {
      "_id": "636dc6a7d023fa3d17467b2e",
      "name": "id",
      "desc": "A unique integer value identifying this business."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 业务（批量）
 * @path /v1/upgrade/businesses/batch
 * 
 */
export const patchUpgradeBusinessesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 业务（批量）",
  "method": "PATCH",
  "path": "/v1/upgrade/businesses/batch",
  "mock_path": "http://yapi.bagunai.com/mock/161/api/v1/upgrade/businesses/batch",
  "status": "done",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ids": {
      "description": "IDs",
      "type": "array",
      "items": {
        "description": "IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "params": {
      "description": "參數",
      "type": "object",
      "properties": {
        "upgrade_type": {
          "title": "升级类型",
          "type": "string",
          "enum": [
            "vm",
            "container"
          ]
        },
        "server": {
          "title": "发布机",
          "type": "string",
          "enum": [
            "sa_nbt",
            "sa_wbt"
          ]
        },
        "refresh_cdn": {
          "title": "CDN 刷新",
          "type": "string",
          "enum": [
            "push_cdn",
            "push_cdn_old",
            ""
          ]
        },
        "deploy_script": {
          "title": "下发服务器",
          "type": "string",
          "enum": [
            "deploy",
            "bbs_deploy",
            "e04_bbs_deploy",
            "a05_bbs_deploy",
            "a02_bbs_deploy",
            "synchronize"
          ]
        },
        "service_type": {
          "title": "服务类型",
          "type": "string",
          "maxLength": 255
        },
        "restart": {
          "title": "是否重启",
          "type": "integer",
          "enum": [
            0,
            1
          ]
        },
        "restart_command": {
          "title": "重启命令",
          "type": "string",
          "maxLength": 255
        },
        "health_check_command": {
          "title": "健康接口检查",
          "type": "string",
          "maxLength": 255
        },
        "comment": {
          "title": "备注",
          "type": "string"
        },
        "mode": {
          "title": "單開/多開",
          "type": "integer",
          "enum": [
            0,
            1,
            2
          ]
        },
        "delay_min": {
          "title": "容器化等待時間(分鐘)",
          "type": "integer",
          "maximum": 65535,
          "minimum": 0
        }
      },
      "$$ref": "#/definitions/_BusinessBatchUpdateParams"
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
