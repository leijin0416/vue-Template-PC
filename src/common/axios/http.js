import axios from "axios";
import store from '../../store';
import CryptoJS from './cryptoJS';
import { getRealJsonData } from './json';// 格式化返回数据
import { sessionData } from '@/filters/storage';

axios.defaults = {
  baseURL: '',
  timeout: 6000,
  // 是否跨站点访问控制请求
  withCredentials: true,
}

/**
 *  2、再在 request 拦截器实现, 传给后台的
 *  Encrypt加密
 *  config.data.hash = md5((new Date()).valueOf() + config.data.func);
 * 
 *  config.data = {
      data: CryptoJS.Encrypt(JSON.stringify(config.data))
    }
 */
axios.interceptors.request.use( config => {
  const token = sessionData('get', 'StateSessionToken');

  token && (config.headers.Authorization = token);
  config.headers.AuthType = 'WEB';
  
  return config;

}, error => {

  return Promise.reject(error);
})

/**
 *  1、先在 response 拦截器实现, 拿后台返回的
 *     Decrypt解密
 *     getRealJsonData -去掉双引号，转化json格式
 * 
 *  response.data = getRealJsonData(CryptoJS.Decrypt(response.data.data));
 */
axios.interceptors.response.use( response => {
  // console.log(response);
  if (response.data.code === 401120) {
    store.dispatch('changeErrorMessage', '您的登录信息已失效，请重新登录');
    sessionData('clean', 'StateSessionToken');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  return response;
  
}, error => {
  // 拦截http状态码
  if (error && error.response) {
    const RESPONSE_CODE = {
      400: '错误请求',
      401: '未授权，请重新登录',
      403: '拒绝访问',
      404: '请求错误,未找到该资源',
      408: '请求超时',
      500: '服务器端出错',
      501: '服务未实现',
      502: '网关错误',
      503: '服务不可用',
      504: '网关超时',
      505: 'HTTP版本不受支持',
    };
    error.message = RESPONSE_CODE[error.response.status] || '服务器开小差！！';
    // 处理 axios 报错
    store.dispatch('changeErrorMessage', error.message);

  } else {
    console.log('连接到服务器失败')
  }
  return Promise.reject(error.response);
})


export default {
  /**
   * get
   * @param [url] 地址
   * @param [param] 数据
   * @returns Promise
   */
  get(url, param) {
    return new Promise( (resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      })
      .then( res => {
        resolve(res)
      })
      .catch( res => {
        reject(res)
      })
    })
  },
  post(url, param) {
    return new Promise( (resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      })
      .then( res => {
        resolve(res);
      })
      .catch( res => {
        reject(res)
      })
    })
  }
}