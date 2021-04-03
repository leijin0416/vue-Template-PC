import axios from "axios";
import CryptoJS from './cryptoJS';
import { Message } from 'element-ui';
import { sessionData } from '@/filters/storage';
// 格式化返回数据
import { getRealJsonData } from './json';


/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭 vant.Toast('提示');
 */
const notice = (msg) => {
  Message({
    type: 'error',
    message: msg,
    duration: 3000
  });
}

axios.defaults = {
  baseURL: '',
  timeout: 3000,
  withCredentials: true
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
axios.interceptors.request.use(
  config => {
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
axios.interceptors.response.use(
  response => {
  // console.log(response);
  if (response.data.code === 401120) {
    sessionData('clean', 'StateSessionToken');
    Message.error({
      message: '您的登录信息已失效，请重新登录',
      duration: 3000
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  return response;
  
}, error => {
  // 拦截http状态码
  const status = error.response.status;
  // console.log(status);
  if (error && error.response) {
    const RESPONSE_CODE = {
      400: '请求参数错误',
      403: '拒绝访问',
      404: '请求超时',
      500: '服务器内部错误',
      501: '服务未实现',
      502: '网关错误',
      503: '服务不可用',
      504: '网关超时',
      505: 'HTTP版本不受支持',
    };
    error.message = RESPONSE_CODE[error.response.status] || '服务器开小差！！';
    Message.error({
      message: error.message,
      duration: 3000,
      onClose: () => {}
    });
  }
  return Promise.reject(error.response);
})


export default {
  //get请求
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
  //post请求
  post(url, param) {
    // console.log(url);
    // console.log(param);
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