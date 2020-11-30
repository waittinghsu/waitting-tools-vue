import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import router from '@/router';
import { getToken } from '@/utils/auth';
import baseURL from '@/utils/base-url';

const httpRequest = (interfaceData, params, options) => {
  let url = interfaceData.status === 'done' ? interfaceData.path : interfaceData.mock_path;
  const method = interfaceData.method;

  let isRestful = false;
  if (url.indexOf(':') > 0) {
    isRestful = true;
  } else if (url.indexOf('{') > 0 && url.indexOf('}') > 0) {
    isRestful = true;
  }

  if (isRestful) {
    interfaceData.req_params.forEach(item => {
      const val = params[item.name];
      if (!val) {
        throw new Error(`路径参数 ${item.name} 不能为空`);
      }
      url = url.replace(`:${item.name}`, val);
      url = url.replace(`{${item.name}}`, val);
      delete params[item.name];
    });
  }

  // create an axios instance
  const request = axios.create({
    baseURL: baseURL.API || '/api', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 120000, // request timeout
  });
  // console.log('omega', baseURL.API);
  // request interceptor
  request.interceptors.request.use(
    config => {
      // do something before request is sent

      if (getToken()) {
        // 將每個request都帶上token
        config.headers.Authorization = `token ${getToken()}`;
      }
      return config;
    },
    error => {
      // do something with request error
      if (process.env.NODE_ENV === 'development') {
        console.log('request error', error.response ? error.response.data.message : error.message); // for debug
      }
      Message.error(error.response ? error.response.data.message : error.message);
      return Promise.reject(error);
    },
  );

  // response interceptor
  request.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data;
      // 如果不為 0 則錯誤
      if (res.code !== 0) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000,
        });

        return Promise.reject(new Error(res.message || 'Error'));
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log('response success:', response.request.responseURL, res.data);
        }
        return res;
      }
    },
    error => {
      if (error.response.status === 401) {
        Message({
          message: '请重新登入',
          type: 'error',
          duration: 5 * 1000,
        });
        store.dispatch('user/resetToken').then(() => {
          router.push('/login');
        });
      }
      console.log('options', options);
      if (process.env.NODE_ENV === 'development') {
        console.log('response error:', error.response ? error.response.data.message : error.message);
        console.log(`response error::`, error); // for debug
      }
      // todo 注意這個參數為提供 api街口不自行顯示錯誤訊息提示 stopMessage: true 則不顯示 api自行實作catch訊息
      if (!options.stopMessage) {
        Message.error(error.response ? error.response.data.message : error.message);
      }

      return Promise.reject(error);
    },
  );

  return request(
    {
      url,
      method,
      params: method === 'GET' ? params : '',
      data: method === 'GET' ? '' : params,
    },
    options,
  );
};

export default httpRequest;
