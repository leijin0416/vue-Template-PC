import axios from "axios";
import CryptoJS from './cryptoJS';
import { removeStore, getStore } from '@/common/localUtil';
import { Notice } from 'iview';
// 格式化返回数据
import { getRealJsonData } from './json';

axios.defaults = {
    baseURL: '',
    timeout: 5000,
    withCredentials: true
}

/**
 *  2、再在 request 拦截器实现, 传给后台的
 *     Encrypt加密
 *     config.data.hash = md5((new Date()).valueOf() + config.data.func);
 */
axios.interceptors.request.use( config => {
    const token = getStore('hasSessionToken');

    token && (config.headers.token = token);
    config.data = {
        data: CryptoJS.Encrypt(JSON.stringify(config.data))
    }

    return config;
}, error => {

    return Promise.reject(error);
})

/**
 *  1、先在 response 拦截器实现, 拿后台返回的
 *     Decrypt解密
 *     getRealJsonData -去掉双引号，转化json格式
 */
axios.interceptors.response.use( response => {
    response.data = getRealJsonData(CryptoJS.Decrypt(response.data.data));
    // console.log(response.data.code);
    if (response.data.code === 600) {
        removeStore('hasSessionToken');
        removeStore('navbarName');

        Notice.error({
            title: '系统提示',
            desc: '登录失效，请退出后重新登录',
            duration: 5
        });
    }
    
    return response;
}, error => {
    // 拦截http状态码
    const status = error.response.status;
    // console.log(status);
    if (error && error.response) {
        switch (status) {
            case 200:
                Toast({
                    duration: 3000,
                    message: '请求出错'
                });
                break;
            case 400:
                Toast({
                    duration: 3000,
                    message: '请求出错'
                });
                break;
            case 401:
                Toast({
                    duration: 3000,
                    message: '授权失败，请重新登录'
                });
                setTimeout(() => {
                    removeStore('hasSessionToken');
                    window.location.reload();
                }, 1000)
                break;
            case 403:
                Toast({
                    duration: 3000,
                    message: '拒绝访问'
                });
                break;
            case 404:
                Toast({
                    duration: 3000,
                    message: '请求错误，未找到该资源'
                });
                break;
            case 500:
                Toast({
                    duration: 3000,
                    message: '服务端错误'
                });
                break;
        }
        return status >= 200 && status < 300;
    } else {
        Toast({
            duration: 3000,
            message: '小主网络开小差啦，稍后再试'
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